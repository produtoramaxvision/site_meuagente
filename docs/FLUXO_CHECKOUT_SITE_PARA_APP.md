## Fluxo completo de checkout entre **site** e **app** (Stripe + Supabase)

Este documento descreve, de forma didática e detalhada, a jornada do usuário e o que o **app principal** precisa implementar para que o **checkout iniciado no site** funcione 100% integrado com **Stripe** e **Supabase** – sem contas órfãs, sem planos inconsistentes e sem bugs.

No final há um **prompt pronto** para você copiar e colar no Cursor **dentro do repositório do app**, para que o próprio Cursor implemente tudo o que falta no app.

---

## 1. Jornada do usuário (caso principal: vindo de anúncio, sem cadastro)

### 1.1. Situação inicial

- **Usuário ainda não tem conta** no Meu Agente.
- Ele chega ao **site** (este repositório `site-meuagente`) a partir de:
  - um **anúncio** (Google Ads, Instagram, etc.),
  - ou um link direto de campanha.
- Ele navega até a página de **planos**:
  - seção `PricingSection` na home,
  - ou página `Planos` (`/planos`).

### 1.2. Clique no plano (no site)

1. O usuário clica em um botão de plano pago, por exemplo **Básico** ou **Business**.
2. No site, os componentes de preço usam um hook (ex.: `useSubscription`) que:
   - identifica o **ID interno do plano**:
     - `basic`
     - `business`
     - `premium`
   - tenta obter a sessão atual do Supabase no **site**:
     - `supabase.auth.getSession()`
3. Como este usuário ainda **não está autenticado** no Supabase (no contexto do site):
   - `session` será `null`.
   - então o site **não tenta** chamar a Edge Function `create-checkout-session` diretamente.
4. Em vez disso, o site faz um **redirecionamento de intenção** para o **app principal**:
   - URL semelhante a:
     - `https://app.meuagente.api.br/auth?redirect=checkout&plan=basic`
   - onde:
     - `redirect=checkout` indica que, após autenticar, o próximo passo deve ser iniciar o checkout no Stripe.
     - `plan=basic` indica qual plano o usuário escolheu.

### 1.3. Chegada no app (rota de autenticação)

Agora o usuário está no **app** (outro repositório, não este):

1. O app renderiza a tela de **login/cadastro** (ex.: rota `/auth` ou `/auth/login`).
2. É responsabilidade do **app**:
   - **Ler os parâmetros de query**:
     - `redirect`
     - `plan`
   - **Persistir temporariamente** esses parâmetros durante o fluxo de autenticação:
     - por exemplo em `sessionStorage`, em um contexto global, ou no estado de rota.

### 1.4. Cadastro / login no app

1. O usuário faz **login** ou **cria conta** normalmente via Supabase Auth.
2. Após o sucesso da autenticação (evento de `SIGNED_IN` do Supabase ou retorno bem-sucedido de `signIn`/`signUp`), o app deve:
   - recuperar os parâmetros persistidos (`redirect` e `plan`),
   - verificar se:
     - `redirect === "checkout"` e
     - `plan` ∈ `{ "basic", "business", "premium" }`.

3. Antes de chamar o checkout, o app deve **garantir que o usuário tenha um telefone (WhatsApp) registrado**, porque:
   - a Edge Function `create-checkout-session` precisa associar o pagamento a um registro na tabela `clientes`;
   - o código da função faz lookup por:
     - `auth_user_id` na tabela `clientes`,
     - fallback por `email`,
     - fallback por `user.user_metadata.phone` (criando cliente JIT);
   - se **não encontrar `cliente.phone`**, ela dispara erro:
     - `Cliente não encontrado. Entre em contato com o suporte.`

4. Portanto, o app deve:
   - **se o usuário não tiver `phone` cadastrado** (por exemplo, metadado `user.user_metadata.phone` ou campo equivalente na UI):
     - redirecionar o usuário para uma **tela de cadastro de telefone** / onboarding,
     - após capturar o telefone, atualizar o `user_metadata` e/ou a tabela `clientes`,
     - **só então** iniciar o fluxo de checkout.

### 1.5. Início do checkout (no app)

Com o usuário já autenticado **e** com telefone vinculado:

1. O app chama a Edge Function **`create-checkout-session`** usando o cliente Supabase **do app**:
   - `supabase.functions.invoke("create-checkout-session", { body: { ... } })`
2. O corpo da requisição deve conter:
   - `plan_id`: um dos `"basic" | "business" | "premium"`;
   - `success_url`: URL no **app** para onde o Stripe vai redirecionar após pagamento bem-sucedido;
   - `cancel_url`: URL no **app** para onde o Stripe vai redirecionar se o usuário cancelar;
   - `locale` opcional (por exemplo `"pt-BR"`).
3. A função `create-checkout-session` (já existente e funcionando) faz:
   - validação do token JWT (via header `Authorization: Bearer <access_token>` e `verify_jwt: true`);
   - lookup ou criação JIT do registro em `clientes`:
     - tenta por `auth_user_id`,
     - depois por `email`,
     - depois por `phone` em `user.user_metadata.phone`,
     - cria registro com `plan_id = 'free'` se necessário;
   - utiliza o mapa interno `PRICE_IDS` para traduzir:
     - `basic` → `price_1SWpI2DUMJkQwpuNYUAcU5ay`,
     - `business` → `price_1SWpI3DUMJkQwpuNbd9GWlWK`,
     - `premium` → `price_1SWpI4DUMJkQwpuN9NfkqZzL`;
   - cria uma sessão de checkout no Stripe em modo `subscription`:
     - `mode: "subscription"`,
     - `line_items: [{ price: PRICE_IDS[plan_id], quantity: 1 }]`,
     - `client_reference_id: user.id`,
     - `metadata` com:
       - `user_id`,
       - `plan_id`,
       - `supabase_phone`.
4. A função retorna um JSON:
   - `{ url: session.url }`
5. O app redireciona o usuário para `data.url`:
   - o usuário vê a página de pagamento do **Stripe Checkout**.

### 1.6. Pagamento no Stripe e sincronização (webhook)

1. O usuário insere os dados de cartão / pagamento no Stripe.
2. O Stripe confirma o pagamento da assinatura (Subscription).
3. O Stripe chama a Edge Function **`stripe-webhook`**, que:
   - valida a assinatura:
     - usa `STRIPE_WEBHOOK_SECRET` + cabeçalho `Stripe-Signature`;
   - registra o evento bruto em `billing_events`;
   - trata diversos eventos-chave:
     - `checkout.session.completed`:
       - lê `session.metadata.supabase_phone` e `session.metadata.plan_id`,
       - atualiza a tabela `clientes`:
         - `plan_id`,
         - `billing_provider = "stripe"`,
         - `stripe_customer_id`,
         - `external_subscription_id`;
     - `invoice.payment_succeeded`, `customer.subscription.updated`, etc.:
       - mapeia `price_id` → `plan_id` via `PRICE_TO_PLAN`,
       - garante consistência do plano ativo do cliente;
     - `customer.subscription.deleted` / `customer.deleted`:
       - devolve o cliente para o plano `free`.
4. Triggers no Postgres (por exemplo, lógica de `subscription_active`) garantem:
   - consistência entre `plan_id`, `subscription_active`, `is_active`.
5. Enquanto isso, o usuário é redirecionado pelo Stripe para a `success_url` configurada:
   - idealmente uma tela de **boas-vindas** ou **dashboard** no app, já com o plano atualizado.

---

## 2. Resumo do que falta fazer no app

O backend (Supabase + Edge Functions + Stripe) **já está implantado e funcionando**.  
O site **já está preparado** para redirecionar o usuário para o app com:

- `redirect=checkout`
- `plan=<basic|business|premium>`

O que falta é o **app**:

1. **Ler e persistir** os parâmetros `redirect` e `plan` na rota de autenticação.
2. Após login/cadastro bem-sucedido:
   - **detectar intenção de checkout** (`redirect=checkout`),
   - **validar o plano** (`plan` ∈ `{ basic, business, premium }`),
   - **garantir que o usuário tenha telefone (`phone`) configurado**:
     - se não tiver, levar para fluxo de onboarding para coletar o WhatsApp.
3. Com tudo pronto, **chamar a Edge Function `create-checkout-session` a partir do app**:
   - usando o cliente Supabase do app;
   - passando `plan_id`, `success_url`, `cancel_url` e `locale`;
   - redirecionando o usuário para `data.url` (Stripe Checkout).
4. Opcionalmente:
   - criar uma rota no app para o usuário mudar de plano ou acessar o Portal do Cliente Stripe (`create-portal-session`), reaproveitando a mesma arquitetura.

Para isso, precisamos de um prompt bem específico para o Cursor no repositório do app.

---

## 3. Prompt pronto para usar no repositório do **app**

> **Como usar:**  
> Abra o projeto do **app** (não o site) no Cursor, crie uma nova conversa e cole **exatamente** o texto abaixo como uma única mensagem.

```text
Quero que você atue como um assistente de código sênior no repositório do MEU APP (não é o site de marketing).

========================
CONTEXTUALIZAÇÃO GERAL
========================

Você está trabalhando em um app SaaS chamado "Meu Agente", que usa:
- Supabase (banco Postgres, Auth, Edge Functions);
- Stripe (Checkout, assinaturas);
- Tabelas principais de billing: clientes, plans, billing_events, subscriptions;
- Edge Functions principais já implantadas e ativas:
  - create-checkout-session (verify_jwt: true)
  - stripe-webhook (verify_jwt: false)
  - create-portal-session (para portal do cliente, se necessário).

O backend de billing já está funcionando. O que falta é o app consumir corretamente esse backend quando o usuário chega a partir do SITE.

Há um outro repositório, o "site-meuagente" (landing/marketing), que:
- mostra os planos (Free, Básico, Business, Premium);
- quando o usuário clica em um plano pago, redireciona para o APP com:
  - redirect=checkout
  - plan=<basic|business|premium>
- o objetivo é que, após o usuário se autenticar no APP, o fluxo de checkout no Stripe seja iniciado automaticamente, usando a Edge Function create-checkout-session.

========================
DETALHES TÉCNICOS DO BACKEND (IMPORTANTE)
========================

1) Tabela "plans" (já criada no Supabase)
   - id: 'basic' | 'business' | 'premium'
   - stripe_price_id: mapeado para preços reais do Stripe
     - basic    -> price_1SWpI2DUMJkQwpuNYUAcU5ay
     - business -> price_1SWpI3DUMJkQwpuNbd9GWlWK
     - premium  -> price_1SWpI4DUMJkQwpuN9NfkqZzL
   - name, price_amount, currency, features, active...

2) Tabela "clientes"
   - phone (PK) – telefone/WhatsApp do cliente;
   - auth_user_id – FK para auth.users.id;
   - email;
   - plan_id: 'free' | 'basic' | 'business' | 'premium';
   - billing_provider;
   - external_subscription_id;
   - stripe_customer_id;
   - subscription_active, is_active, etc.

3) Edge Function create-checkout-session (já pronta, NÃO MODIFICAR)
   - Entrada esperada (via JSON body):
     - plan_id: 'basic' | 'business' | 'premium';
     - success_url: URL de sucesso (no APP);
     - cancel_url: URL de cancelamento (no APP);
     - locale opcional (ex.: 'pt-BR').
   - Autenticação:
     - Requer header Authorization: "Bearer <access_token>".
     - verify_jwt = true.
   - Lógica resumida:
     - Lê o usuário autenticado via Supabase Admin (getUser(token));
     - Tenta encontrar um registro em "clientes" por:
       1. auth_user_id;
       2. email;
       3. phone em user.user_metadata.phone;
     - Se não encontrar cliente e houver phone em metadata:
       - cria cliente JIT (plano 'free', subscription_active = false);
     - Se, ao final, não houver cliente.phone:
       - retorna erro "Cliente não encontrado. Entre em contato com o suporte.";
     - Usa um mapa PRICE_IDS interno:
       - basic    -> price_1SWpI2DUMJkQwpuNYUAcU5ay
       - business -> price_1SWpI3DUMJkQwpuNbd9GWlWK
       - premium  -> price_1SWpI4DUMJkQwpuN9NfkqZzL
     - Cria sessão de checkout em modo subscription:
       - mode: "subscription";
       - line_items: [ { price: PRICE_IDS[plan_id], quantity: 1 } ];
       - success_url, cancel_url, locale;
       - client_reference_id = user.id;
       - metadata: user_id, plan_id, supabase_phone.
     - Retorna: { url: <url_do_stripe_checkout> } ou { error: ... }.

4) Edge Function stripe-webhook (já pronta, NÃO MODIFICAR)
   - Valida assinatura com STRIPE_WEBHOOK_SECRET.
   - Registra eventos em "billing_events".
   - Atualiza "clientes" em eventos como:
     - checkout.session.completed;
     - invoice.payment_succeeded;
     - customer.subscription.updated / created;
     - customer.subscription.deleted;
     - customer.deleted.
   - Garante, junto com triggers no banco, a consistência do plano e flags de assinatura.

========================
OBJETIVO NESTE REPOSITÓRIO (APP)
========================

Implementar, no APP, a jornada completa para que:

1) Usuário que chega do SITE (sem cadastro, vindo de anúncios) siga o fluxo:
   - SITE: clique em plano -> redireciona para APP com:
     - redirect=checkout;
     - plan=<basic|business|premium>.
   - APP: exibe tela de login/cadastro.
   - Após login/cadastro bem-sucedido:
     - identificar que redirect=checkout;
     - validar o plano (plan ∈ { basic, business, premium });
     - garantir que o usuário tenha telefone (WhatsApp) cadastrado;
     - chamar create-checkout-session;
     - redirecionar para a URL do Stripe Checkout;
     - após pagamento, o webhook já atualiza plano e status automaticamente.

2) Garantir que:
   - não haja assinaturas "órfãs" (pagamento feito, mas sem vínculo com cliente);
   - qualquer erro seja tratado com mensagens amigáveis;
   - a experiência seja consistente com uma aplicação SaaS moderna.

========================
TAREFAS ESPECÍFICAS QUE VOCÊ DEVE IMPLEMENTAR
========================

Quero que você:

1) MAPEIE O FLUXO DE AUTENTICAÇÃO ATUAL DO APP
   - Encontre:
     - onde está configurado o cliente do Supabase no APP;
     - quais componentes/páginas são responsáveis por:
       - login;
       - cadastro;
       - fluxo pós-login;
     - se já existe algum mecanismo de "post-auth redirect".
   - Documente rapidamente (em resposta) quais arquivos/controladores você encontrou, com caminhos, por exemplo:
     - src/lib/supabaseClient.ts
     - src/pages/auth/login.tsx
     - src/components/auth/AuthForm.tsx
   - NÃO faça mudanças ainda; apenas mapeie e descreva.

2) IMPLEMENTE UM MECANISMO DE "INTENÇÃO DE CHECKOUT" VINDO DA QUERY STRING
   - Na rota de autenticação (por exemplo /auth ou /auth/login), implemente lógica para:
     - ler os parâmetros da URL:
       - redirect
       - plan
     - se existirem:
       - persistí-los temporariamente (ex.: em context, Zustand, Redux, sessionStorage ou similar).
   - Regras:
     - considere apenas redirect=checkout;
     - normalize plan para minúsculo;
     - aceite apenas 'basic', 'business', 'premium';
     - se for outro valor, ignore com segurança (não deve quebrar o login).

3) IMPLEMENTE UM HOOK OU MÓDULO "useStripeCheckout" NO APP
   - Crie um hook reutilizável, por exemplo:
     - useStripeCheckout
   - Responsabilidades desse hook:
     - receber um planId: 'basic' | 'business' | 'premium';
     - opcionalmente receber overrides de success_url e cancel_url;
     - internamente:
       - obter a sessão atual do Supabase (access_token);
       - chamar supabase.functions.invoke("create-checkout-session", { body: { ... } });
       - lidar com erros:
         - planos inválidos;
         - usuário sem cliente / sem phone (mensagens de erro);
         - problemas de rede.
       - em caso de sucesso:
         - se data.url existir, redirecionar window.location.href ou usar router.push(data.url).
   - Leia cuidadosamente a interface real de create-checkout-session (já fornecida acima) e siga-a à risca.
   - Defina success_url e cancel_url como rotas do APP, por exemplo:
     - success_url: `${window.location.origin}/onboarding/sucesso?plan=${planId}`;
     - cancel_url: `${window.location.origin}/billing/cancelado?plan=${planId}`;
     - (pode ajustar nomes das rotas conforme a arquitetura real do app).

4) CONECTE O FLUXO DE AUTENTICAÇÃO COM O "useStripeCheckout"
   - Após login/cadastro bem-sucedido:
     - em algum ponto central (ex.: um efeito após SIGNED_IN, ou callback onSuccess do formulário):
       - recupere a intenção guardada (redirect, plan);
       - se redirect === "checkout" e plan válido:
         - antes de chamar useStripeCheckout:
           - verifique se o usuário possui telefone (WhatsApp) cadastrado.
             - isso pode estar em:
               - user.user_metadata.phone (via supabase.auth.getUser());
               - ou em alguma store / profile carregado do backend.
           - se NÃO tiver telefone:
             - redirecione para uma tela de "complete seu cadastro" focada em capturar o número do WhatsApp;
             - após a conclusão desse passo, volte a disparar o fluxo de checkout.
           - se tiver telefone:
             - chame useStripeCheckout(plan).
   - Cuide para que:
     - esse fluxo não entre em loop infinito;
     - a intenção de checkout seja "consumida" após uso (por exemplo, limpar do storage/context).

5) (OPCIONAL, MAS DESEJÁVEL) CRIAR UMA ROTA INTERNA DE UPGRADE/MUDANÇA DE PLANO
   - Se o app já tiver telas de "Planos" internas:
     - reutilize o mesmo hook useStripeCheckout para botões de upgrade;
   - Caso ainda não exista:
     - crie uma página simples onde o usuário logado possa:
       - ver o plano atual (derivado de clientes.plan_id);
       - clicar para mudar para basic/business/premium.
   - Nesses cenários, o fluxo é semelhante:
     - usuário já está logado;
     - clique em "Upgrade para Business" chama diretamente useStripeCheckout("business").

6) TRATAMENTO DE ERROS E UX
   - Implemente mensagens amigáveis para erros como:
     - "Cliente não encontrado. Entre em contato com o suporte."
     - problemas de rede;
     - respostas de erro do Stripe/Edge Function.
   - Utilize o sistema de toasts/notificações do app (por exemplo, shadcn/ui + sonner) para feedback.

7) TESTES E CHECKLIST
   - Descreva e, se possível, automatize ou ao menos valide manualmente os cenários:
     1. Usuário novo vindo do site (anúncio) -> escolhe plano Basic -> é redirecionado para APP -> cria conta -> se necessário, cadastra telefone -> é direcionado ao Stripe Checkout.
     2. Usuário existente sem telefone cadastrado -> tenta assinar -> é orientado a informar o WhatsApp antes.
     3. Usuário existente com telefone cadastrado -> clique num plano interno do APP -> vai direto para o Stripe Checkout.
     4. Pagamento aprovado -> webhook atualiza cliente -> plano refletido corretamente nas telas de "Minha Conta"/"Plano atual".
   - Liste, ao final, as URLs exatas e arquivos modificados.

========================
ESTILO E CUIDADOS
========================

- Siga a arquitetura e padrões já existentes no app (padrões de pastas, hooks, contextos).
- Não duplique clientes Supabase; reutilize o cliente central.
- Evite lógica de negócio duplicada; se já existir algo próximo, refatore para reaproveitar.
- Comente partes cruciais do código para que eu (humano) consiga entender depois.
- Antes de finalizar, rode os linters e formatação que o projeto já usa (por exemplo: eslint, prettier).

Quando terminar, me traga um resumo:
- dos arquivos criados/alterados,
- da jornada do usuário final,
- e de qualquer limitação ou ponto de atenção.
```

---

## 4. Referências úteis

- Documentação oficial de assinaturas da Stripe (modelo que estamos seguindo com Checkout + Webhooks):  
  [Stripe Subscriptions – Overview](https://docs.stripe.com/subscriptions)

- Guia já existente neste repositório (site) que descreve a arquitetura geral usada aqui:  
  `docs/GUIA_IMPLANTACAO_STRIPE_SITE.md`

Este documento que você está lendo agora serve como ponte entre o **site** e o **app**:  
o site já sabe **para onde redirecionar** e o backend já sabe **como processar o pagamento**;  
o prompt acima garante que o **app** implemente a cola que faltava.


