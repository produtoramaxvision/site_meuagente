## Plano de Implantação – Ajuste de Auth Integrado à Tabela `clientes` (Supabase)

> Objetivo: **manter o fluxo atual de autenticação no Supabase Auth**, mas garantir que, se já existir um registro prévio na tabela `public.clientes` com o mesmo `phone`, o novo usuário criado no Supabase Auth seja automaticamente **vinculado** àquela linha de `clientes` no momento do primeiro cadastro.

Este documento é um **plano operacional detalhado** para ser seguido por um agente/IA (como o Cursor) e por desenvolvedores humanos.  
Ele descreve **o que já existe**, **o que será alterado** e **como testar**, evitando regressões.

---

## 1. Contexto Atual da Arquitetura de Auth

### 1.1. Projeto Supabase

- Há um projeto Supabase compartilhado entre:
  - O **app principal** (`https://app.meuagente.api.br`) – onde acontece o login/cadastro de usuários.
  - O **site** (`site-meuagente`) – este repositório, que usa apenas `supabase.auth.getSession()` e `supabase.functions.invoke` para fluxo de checkout.
- O projeto Supabase possui:
  - **Auth**:
    - Tabela interna: `auth.users` (gerenciada pelo Supabase Auth).
  - **Schema `public`** com tabelas principais relacionadas ao usuário:
    - `clientes` (perfil principal, chave por `phone`, FK opcional para `auth.users.id` via `auth_user_id`).
    - `subscriptions`, `plans`, `billing_events`, `plan_access_logs`, `tasks`, `events`, etc., todos pendurados em `clientes.phone` e/ou `auth.users.id`.

### 1.2. Tabela `public.clientes`

Pontos relevantes:

- Chave primária: `phone` (tipo `varchar`).
- Coluna de vínculo com Supabase Auth: `auth_user_id` (`uuid`, `nullable`, FK para `auth.users.id`).
- Outras colunas importantes:
  - `name`, `email`, `cpf`
  - `subscription_active`, `plan_id`, `billing_provider`, `external_subscription_id`, `stripe_customer_id`
  - `created_at`, `updated_at`, etc.
- Várias tabelas possuem FKs para `clientes.phone` (`tasks`, `calendars`, `events`, `financeiro_registros`, `notifications`, etc.).

### 1.3. Funções (RPC) já existentes relacionadas a Auth

Pelo `types` gerado e lista de funções Supabase, existem funções importantes:

- **Ligação/migração entre Auth e `clientes`**:
  - `upsert_cliente_from_auth(p_auth_user_id, p_cpf, p_email, p_name, p_phone)`
  - `link_client_to_auth_user(auth_user_uuid, client_phone)`
  - `sync_cliente_auth_user_id(...)`
  - `sync_cliente_email_from_auth(user_id)`
  - `migrate_users_to_supabase_auth()`
  - `prepare_user_migration_data()`
  - `phone_to_email(phone_number)`, `email_to_phone(email_address)`

- **Derivação de telefone a partir do usuário autenticado**:
  - `get_authenticated_user_phone()`
  - `get_user_phone_optimized()`

- **Controle de acesso e billing**:
  - `user_has_advanced_features(user_phone)`
  - `user_has_support_access(user_phone)`
  - `user_has_whatsapp_access(user_phone)`
  - `check_permission_with_log(p_permission_type, p_resource, p_user_phone)`
  - `log_plan_access_attempt(...)`, etc.

Essas funções mostram que:

- **Fonte de verdade de identidade**: `auth.users`.
- **Fonte de verdade de perfil/CRM**: `public.clientes`, ligada a `auth.users` via `auth_user_id` e/ou `email`/`phone`.

### 1.4. Fluxo atual de cadastro/login (alto nível)

No **app principal** (não neste repo, mas importante para o plano):

1. Usuário tenta acessar o app.
2. Se não estiver autenticado, é levado para uma tela de auth (ex.: `/auth/login`).
3. Para criar conta, o app usa:
   - `supabase.auth.signUp({ email, password, ... })`.
4. Supabase Auth:
   - Cria um registro em `auth.users`.
   - Envia email de confirmação (se configurado).
5. Em algum ponto (webhook/trigger/rotina), as funções do banco (`upsert_cliente_from_auth` etc.) fazem o vínculo com `clientes`.

No **site** (repo atual):

- Só há verificação de sessão (`supabase.auth.getSession()`) e chamadas a Edge Functions.  
  Não há criação/alteração de usuários aqui, então **nenhuma alteração de código de auth será feita neste repositório**.

---

## 2. Objetivo Preciso do Ajuste

### 2.1. Situação desejada

Queremos adicionar **apenas um ajuste comportamental**:

- Se já existir um registro na tabela `public.clientes` com um determinado `phone`, e esse registro **não tem ainda** `auth_user_id` (ou seja, foi um pré-cadastro apenas com telefone):
  - Quando o usuário fizer **o primeiro cadastro** no Supabase Auth (sign up), esse novo usuário Auth deve ser **vinculado** àquela linha existente de `clientes`.

Fluxo descrito pelo produto:

1. **Pré-cadastro**: existe uma linha em `clientes` somente com `phone`.
2. **Primeiro acesso ao app**:
   - Usuário é obrigado a informar o `phone`.
   - App checa no Supabase:
     - Se já existe cliente com aquele `phone`.
     - Se já existe usuário auth vinculado.
   - Se **não existir** usuário em Auth, ele é levado a `/auth/login` (tela que também permite “criar conta”).
3. **Criação de conta na tela `/auth/login`**:
   - Usuário informa dados que faltam (email, senha, nome, etc.) e clica em **Criar conta**.
   - Se ainda não existir usuário no Supabase Auth para aquele email/phone:
     - Supabase Auth cria o usuário.
     - Envia email de confirmação.
   - **NOVO AJUSTE**: imediatamente após o `signUp`, o app invoca uma RPC para:
     - Vincular o usuário Auth à linha de `clientes` já existente com aquele `phone` (ou criar uma nova se não houver).
4. **Confirmação de email**:
   - Usuário clica no link de confirmação.
   - É redirecionado para tela de login.
   - Consegue logar normalmente.
   - A partir deste ponto, `auth.users.id` e `clientes.phone` estão coerentes e vinculados.

### 2.2. Restrições e princípios

- **Não alterar o fluxo atual de login/cadastro básico**:
  - Continuar usando `supabase.auth.signUp` / `signInWithPassword`.
  - Manter a exigência de confirmação de email.
  - Não alterar o comportamento padrão de envio de email de confirmação.
- **Não criar triggers SQL complexas de criação de user em Auth a partir de `clientes`**:
  - A criação de usuário Auth **permanece** via API do Supabase/Auth client.
  - A lógica de “linkar com `clientes`” será feita **no backend/app** usando RPCs já existentes (`upsert_cliente_from_auth` e/ou `link_client_to_auth_user`).
- **Compatibilidade retroativa**:
  - Usuários já existentes no Auth e em `clientes` continuam funcionando.
  - Pré-cadastros com apenas `phone` passam a ser aproveitados no momento do sign up.

---

## 3. Escopo das Alterações

### 3.1. Onde as alterações serão feitas

Este plano é para ser seguido no **repositório do app principal** (`https://app.meuagente.api.br`), não no site.

Pontos a alterar no **app**:

- Fluxo de **primeiro acesso** (onde o usuário informa o `phone` antes de logar/cadastrar).
- Handler de **criação de conta** (botão “Criar conta” na tela `/auth/login` ou equivalente).
- (Opcional, mas recomendado) RPC utilizada para checar se o `phone` já existe e se já possui `auth_user_id`.

### 3.2. O que NÃO será alterado

- Este repo do **site** (`site-meuagente`) **não receberá mudanças de código de auth** – apenas documentação (este plano).
- Não vamos:
  - Alterar triggers ou policies diretamente neste momento.
  - Criar usuários em `auth.users` a partir de inserções em `clientes` via trigger.

---

## 4. Pré-requisitos Técnicos e Verificações Iniciais

### 4.1. Confirmar existência de funções RPC no Supabase

No projeto Supabase, garantir que existem (e anotar assinaturas exatas):

- `upsert_cliente_from_auth(p_auth_user_id uuid, p_cpf text, p_email text, p_name text, p_phone text)`
- (Opcional) `check_phone_registration(phone_input text)` – se existir, pode ser usada no pré-login para decidir para onde mandar o usuário.

Se não estiverem claros:

1. Abrir o painel Supabase → seção **SQL** → **Functions** e validar.
2. Se necessário, exportar definicões SQL para referência no desenvolvimento (não alterar por enquanto).

### 4.2. Confirmar versão e uso de `@supabase/supabase-js`

No repo do app principal:

1. Verificar `package.json`:
   - Dependência `@supabase/supabase-js` versão 2.x.
2. Confirmar que o client é criado de forma semelhante ao site:
   - `createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { persistSession: true, autoRefreshToken: true, storage: localStorage } })`.

### 4.3. Confirmar roteamento para `/auth/login`

No app principal:

- Identificar o componente/página responsável por:
  - `https://app.meuagente.api.br/auth/login` (página de login/cadastro).
  - É provável que seja algo como `pages/auth/login.tsx`, `app/auth/login/page.tsx`, etc., dependendo se usa Next.js (Pages ou App Router) ou outra stack.

---

## 5. Desenho do Novo Fluxo de Auth (Lado App)

### 5.1. Estado desejado (diagrama verbal)

1. **Usuário tem apenas `phone` cadastrado em `clientes`**:
   - Linha: `clientes(phone = "5511999999999", auth_user_id = NULL, ...)`.
2. **Usuário acessa o app pela primeira vez**:
   - App exibe tela onde o `phone` é obrigatório.
   - App normaliza o telefone (prefixos, DDI/DDD, etc.) para bater exatamente com o formato usado na tabela `clientes`.
   - App chama um endpoint/RPC (`check_phone_registration` ou similar) para saber:
     - `phone_exists`: se há cliente com aquele `phone`.
     - `has_auth_id`: se já há `auth_user_id` vinculado.
3. **Decisão**:
   - Se `phone_exists == true && has_auth_id == true`:
     - Usuário já tem Auth; direciona para fluxo de **login** normal (email+senha).
   - Se `phone_exists == true && has_auth_id == false`:
     - Usuário tem cliente “pré-cadastrado” apenas com `phone`.
     - Direcionar para `/auth/login` em **modo de criação de conta** com `phone` pré-preenchido.
   - Se `phone_exists == false`:
     - Direcionar para `/auth/login` em modo de criação de conta **sem pré-cadastro**, mas ainda assim, ao final, `upsert_cliente_from_auth` criará o cliente.
4. **Na tela `/auth/login`, ao clicar em “Criar conta”**:
   - App faz:
     1. `supabase.auth.signUp({ email, password, options: { data: { phone, name? } } })`.
     2. Se sucesso e `data.user` existe:
        - Chama `supabase.rpc('upsert_cliente_from_auth', { p_auth_user_id: data.user.id, p_cpf, p_email: email, p_name: name, p_phone: phone })`.
        - Essa função:
          - Se já existir cliente com `phone`, atualiza a linha, setando `auth_user_id`, `email`, `name`, etc.
          - Se não existir, cria um novo cliente com esses dados.
5. **Email de confirmação + login subsequente**:
   - Nada muda: fluxo padrão do Supabase.
   - Ao logar, qualquer lógica que dependa de `get_authenticated_user_phone()` ou consultas em `clientes` já encontrará o vínculo correto.

---

## 6. Passos Detalhados de Implementação no App

> Abaixo, os passos são genéricos o suficiente para qualquer stack moderna (Next.js, React SPA, etc.).  
> Onde for possível, use **nomes de arquivos/componentes já existentes** no seu app ao implementar.

### 6.1. Passo 1 – Garantir tela de pré-login com `phone` obrigatório

1. **Identificar** a tela/componente onde o usuário informa o `phone` antes de autenticar.
   - Se não existir, criar uma rota, por exemplo:
     - `/auth/phone-check` ou `/onboarding/phone`.
2. Requisitos de UI/UX dessa tela:
   - Campo de telefone:
     - `required`.
     - Máscara/normalização para o formato padrão já usado na tabela `clientes` (definir convenção, ex.: `5511999999999` sem caracteres especiais).
   - Botão **“Continuar”** ou similar.
3. **Lógica ao clicar em “Continuar”**:
   - Normalizar o telefone (`normalizedPhone`).
   - Chamar uma função assíncrona, ex.: `checkPhoneAndRoute(normalizedPhone)`.

### 6.2. Passo 2 – Função de checagem de `phone` no backend

#### 6.2.1. Usando RPC existente (`check_phone_registration`)

1. No app, criar um helper (por ex. `lib/auth.ts` ou `services/auth.ts`):

   - Função `checkPhoneRegistration(phone: string)` que chama:
     - `supabase.rpc('check_phone_registration', { phone_input: phone })`.
   - Esperado (baseado na assinatura vista nos types):
     - Retorno: array de objetos com pelo menos:
       - `phone_exists: boolean`
       - `has_auth_id: boolean`
       - `email: string`
       - `name: string`
   - Tratar casos:
     - Array vazio (nenhuma linha) → `phone_exists = false`.
     - Mais de uma linha (não deve acontecer se `phone` é PK, mas validar defensivamente).

2. Lógica de roteamento com base nessa função:

   - Se `phone_exists && has_auth_id`:
     - Guardar `phone` em algum estado/Context/Query param (se necessário).
     - Redirecionar para a tela de login normal (por ex. `/auth/login?mode=signin&phone=<phone>`).
   - Se `phone_exists && !has_auth_id`:
     - Redirecionar para `/auth/login?mode=signup&phone=<phone>`.
   - Se `!phone_exists`:
     - Redirecionar para `/auth/login?mode=signup&phone=<phone>`.

#### 6.2.2. Caso RPC não exista – alternativa simples

Se **não existir** `check_phone_registration`:

1. Criar **endpoint/app server** (ou nova RPC) que faça:
   - `select phone, auth_user_id, email, name from public.clientes where phone = $1`.
   - `phone_exists = (row != null)`.
   - `has_auth_id = (row.auth_user_id != null)`.
2. Expor isso via:
   - API interna do app (ex.: `/api/internal/check-phone`), ou
   - RPC Supabase (`check_phone_registration`) criada via SQL (recomendado).

---

### 6.3. Passo 3 – Ajuste na tela `/auth/login` (login + cadastro)

### 6.3.1. Comportamento esperado da tela

A tela `/auth/login` deve suportar pelo menos dois “modos”:

- **Modo `signin`**:
  - Usuário já tem Auth (`has_auth_id = true`).
  - Mostra formulário de **login** (email/senha, ou o fluxo que você já usa).
- **Modo `signup`**:
  - Usuário ainda não tem Auth (`has_auth_id = false`) ou `phone` não existia em `clientes`.
  - Mostra formulário de **criação de conta**:
    - Campos mínimos:
      - `phone` (preenchido e readonly, se veio pela query `?phone=`).
      - `name`.
      - `email`.
      - `password`.
      - (Opcional) `cpf`.

### 6.3.2. Leitura de `mode` e `phone` via query string

1. No componente de `/auth/login`, ler a URL:
   - `mode` = `signin` | `signup` (com default, ex.: `signin`).
   - `phone` = `string` (validar).
2. Se `mode === 'signup'` e `phone` existe:
   - Preencher campo de telefone com `phone`.
   - Idealmente, deixar `readOnly` (para não divergir do que foi checado na etapa anterior).

---

### 6.4. Passo 4 – Implementar o handler de “Criar conta” com vínculo a `clientes`

> Este é o **ponto crítico** do novo sistema: após `supabase.auth.signUp`, chamar `upsert_cliente_from_auth` para vincular (ou criar) o cliente com base no `phone`.

#### 6.4.1. Fluxo lógico do handler

Pseudocódigo (em TypeScript/React):

1. Inputs do form (`mode === 'signup'`):
   - `phone` (string, normalizado).
   - `name` (string).
   - `email` (string).
   - `password` (string).
   - `cpf` (string opcional).
2. Ao clicar em “Criar conta”:
   1. Validar os campos localmente (email, força mínima da senha, formato do telefone).
   2. Chamar `supabase.auth.signUp({ email, password, options: { data: { phone, name } } })`.
   3. Lidar com possíveis erros:
      - Email já existente.
      - Regras de senha.
   4. Se `error` for nulo e `data.user` existir:
      - Capturar `const authUserId = data.user.id`.
      - Chamar RPC `upsert_cliente_from_auth`:
        - `await supabase.rpc('upsert_cliente_from_auth', { p_auth_user_id: authUserId, p_cpf: cpf ?? '', p_email: email, p_name: name, p_phone: phone })`.
      - Se houver erro na RPC:
        - Logar erro (console + ferramenta de observabilidade, se houver).
        - Exibir toast/alerta amigável, mas **não reverter** a criação de usuário Auth (já existe).
   5. Exibir mensagem ao usuário:
      - Algo como: “Conta criada! Verifique seu email para confirmar o cadastro.”
      - Opcionalmente, redirecionar para uma página “Verifique seu email”.

#### 6.4.2. Garantias esperadas de `upsert_cliente_from_auth`

Ao implementar, assumir que a função no banco faz:

- Se já existe linha em `clientes` com `phone = p_phone`:
  - Atualiza:
    - `auth_user_id = p_auth_user_id`.
    - `email = p_email` (se vazio antes).
    - `name = p_name` (se vazio antes).
    - `cpf = p_cpf` (se informado).
- Se não existe linha com esse `phone`:
  - Insere:
    - `phone = p_phone`
    - `auth_user_id = p_auth_user_id`
    - `email = p_email`
    - `name = p_name`
    - `cpf = p_cpf`
    - Demais campos com defaults.

> Importante: caso a função hoje não faça exatamente isso, **ajustar a função no banco primeiro**, mantendo idempotência e tratamento de conflitos.

---

### 6.5. Passo 5 – Não alterar o fluxo de email de confirmação

Nenhuma alteração é necessária aqui:

- O Supabase Auth continuará enviando o email de confirmação após `signUp`.
- Quando o usuário clicar no link:
  - A conta em `auth.users` será marcada como confirmada/ativa.
  - O fluxo de login subsequente não muda (a não ser pelo fato de agora existir um vínculo limpo com `clientes`).

---

### 6.6. Passo 6 – Login subsequente e uso de `clientes`

Para efeitos de verificação:

1. Após o usuário confirmar o email e fazer login:
   - `supabase.auth.getSession()` deve retornar um `session.user.id`.
2. Qualquer função que derive telefone do usuário:
   - `get_authenticated_user_phone()` ou `get_user_phone_optimized()` deve retornar o `phone` correto, vinculado ao registro em `clientes`.
3. Consultas/triggers/policies que dependam de `clientes.phone` continuarão funcionando normalmente, pois:
   - `clientes.auth_user_id` está preenchido e coerente com `auth.users.id`.

---

## 7. Cenários de Teste Detalhados

### 7.1. Cenário A – Usuário novo, sem pré-cadastro em `clientes`

1. **Preparação**:
   - Escolher um `phone` que não exista em `clientes`.
   - Escolher um `email` novo (não usado no Auth).
2. **Passos**:
   - Acessar o app.
   - Na tela de pré-login, informar o `phone`.
   - Sistema detecta `phone_exists = false` e redireciona para `/auth/login?mode=signup&phone=<phone>`.
   - Na tela de signup:
     - Informar `name`, `email`, `password`, (opcional `cpf`).
     - Clicar em “Criar conta”.
   - Verificar no log de rede:
     - Chamada a `supabase.auth.signUp`.
     - Em seguida, chamada a `rpc('upsert_cliente_from_auth', ...)`.
   - Verificar no painel Supabase:
     - Novo registro em `auth.users` com `email`.
     - Nova linha em `clientes` com:
       - `phone` igual ao informado.
       - `auth_user_id` igual ao `auth.users.id`.
3. **Confirmação de email**:
   - Clicar no link de confirmação recebido.
   - Fazer login.
   - Verificar se o app consegue ler dados vinculados a `clientes` (se houver UX para isso).

### 7.2. Cenário B – Usuário com pré-cadastro em `clientes` (apenas `phone`)

1. **Preparação**:
   - Criar manualmente (ou via ferramenta interna) uma linha em `clientes`:
     - `phone = "5511999999999"`
     - `auth_user_id = NULL`
     - `name`, `email`, `cpf` nulos ou placeholders.
2. **Passos**:
   - Acessar o app.
   - Na tela de pré-login, informar `5511999999999`.
   - Backend retorna:
     - `phone_exists = true`
     - `has_auth_id = false`
   - App redireciona para `/auth/login?mode=signup&phone=5511999999999`.
   - Na tela de signup:
     - `phone` readonly = `5511999999999`.
     - Informar `name`, `email`, `password`, (opcional `cpf`).
     - Clicar em “Criar conta”.
   - Conferir:
     - `auth.users` tem novo registro com o `email`.
     - `clientes` **não ganhou nova linha** (permanece a mesma chave `phone`), mas:
       - `auth_user_id` agora está preenchido com o id do novo usuário Auth.
       - `email`, `name`, `cpf` foram atualizados com os valores do formulário.

### 7.3. Cenário C – Usuário já existente em Auth e em `clientes`

1. **Preparação**:
   - Escolher um usuário já 100% funcional (tem linha em `auth.users` e `clientes` com `auth_user_id` preenchido).
2. **Passos**:
   - Acessar o app.
   - Na tela de pré-login, informar o `phone` desse usuário.
   - Backend retorna:
     - `phone_exists = true`
     - `has_auth_id = true`
   - App redireciona para `/auth/login?mode=signin&phone=<phone>` (ou apenas `/auth/login`).
   - Fazer login normalmente.
3. **Validação**:
   - Garantir que:
     - Nenhuma chamada extra a `upsert_cliente_from_auth` é feita nesse fluxo (a não ser que preexistente).
     - Nenhum dado em `clientes` seja sobrescrito indevidamente.

### 7.4. Cenário D – Erro na chamada de `upsert_cliente_from_auth`

1. **Preparação**:
   - Simular falha na RPC (ex.: alterar temporariamente a função no banco para lançar erro, apenas em ambiente de homologação).
2. **Passos**:
   - Repetir fluxo de criação de conta (cenário A ou B).
3. **Validação**:
   - Confirmar que:
     - Usuário ainda é criado em `auth.users`.
     - O app exibe mensagem de erro amigável ao usuário (ex.: “Houve um problema ao vincular seu perfil, mas sua conta foi criada. Tente entrar novamente em alguns instantes.”).
     - O erro é logado para posterior investigação (console, logger).

---

## 8. Considerações de Segurança e Boas Práticas

- **Nunca expor `service_role` key no frontend**:
  - Todo o fluxo descrito usa apenas o client anônimo (`anon key`) do Supabase, com RLS aplicado e funções RPC seguras.
- **Políticas de RLS**:
  - Garantir que as policies em `clientes` e nas RPCs (`upsert_cliente_from_auth`, `check_phone_registration`) estejam adequadas para permitir esse fluxo para usuários não-autenticados no momento do cadastro.
  - Se `upsert_cliente_from_auth` exigir contexto autenticado, certifique-se de que o sign up cria sessão antes da chamada (fluxo padrão do Supabase v2).
- **Validação de telefone**:
  - Padronizar a forma como o telefone é armazenado em `clientes` e como o app envia para RPCs, para evitar problemas de matching (`"11999999999"` vs `"5511999999999"`).

---

## 9. Plano de Implantação em Etapas

1. **Revisar/ajustar função `upsert_cliente_from_auth`** no banco:
   - Garantir comportamento idempotente e regras de update conforme seção 6.4.2.
2. **Implementar/ajustar RPC `check_phone_registration`** (ou endpoint equivalente).
3. **Implementar tela de pré-login com `phone` obrigatório**:
   - Adicionar lógica de chamada à RPC e roteamento para `/auth/login`.
4. **Ajustar tela `/auth/login`**:
   - Suportar `mode=signin|signup` e leitura de `phone` via query string.
   - No modo `signup`, exibir formulário de criação de conta com `phone` (readonly se veio da query).
5. **Implementar handler de “Criar conta”**:
   - `supabase.auth.signUp(...)` seguido de `supabase.rpc('upsert_cliente_from_auth', ...)`.
6. **Testar cenários A, B, C, D** descritos na seção 7, em ambiente de staging/homologação.
7. **Monitorar logs de Supabase Auth e de RPCs** após deploy em produção, com foco nas primeiras horas/dias.

---

## 10. Observações Finais

- O ajuste proposto **não altera o core** do sistema de auth, apenas estende o fluxo de onboarding para aproveitar pré-cadastros existentes na tabela `clientes`.
- Toda a lógica crítica de vínculo (`auth.users.id` ↔ `clientes.phone`) é centralizada em uma única função de banco (`upsert_cliente_from_auth`), o que facilita manutenção e auditoria.
- Este plano foi escrito para que uma IA (como o Cursor) consiga:
  - Ler o contexto.
  - Localizar as partes relevantes no repo do app.
  - Aplicar as alterações com segurança, desde que siga as seções 6 e 7 à risca.


