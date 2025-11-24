# 💳 Guia de Implementação: Stripe Checkout no Site (Meu Agente)

Este guia detalha como integrar o sistema de **pagamento e planos** já existente no backend do "Meu Agente" (Supabase) diretamente no **site da aplicação** (landing page ou SPA externa).

O objetivo é permitir que usuários escolham um plano no site e iniciem o fluxo de assinatura, aproveitando a infraestrutura robusta já criada.

---

## 🏗️ Arquitetura de Integração

O site (Frontend) se comunicará com o backend existente (Supabase) para iniciar sessões de pagamento.

**Fluxo Recomendado:**
1. **Site**: Usuário clica em "Assinar Plano".
2. **Auth**: Se não logado -> Redireciona para Login/Cadastro.
3. **Auth**: Se logado -> Chama Edge Function `create-checkout-session`.
4. **Stripe**: Usuário paga no checkout seguro.
5. **Retorno**: Usuário volta para o App com status atualizado em tempo real.

---

## 🚀 Passo 1: Configuração do Ambiente (Site)

No projeto do seu site (React, Next.js, Vue, etc.), você precisará das bibliotecas do Supabase e Stripe.

### 1. Instalação
```bash
npm install @supabase/supabase-js @stripe/stripe-js
```

### 2. Variáveis de Ambiente (.env)
Você precisa conectar o site ao **mesmo projeto Supabase** do app.

```env
NEXT_PUBLIC_SUPABASE_URL=https://<seu-projeto>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<sua-anon-key>
```

---

## 🛠️ Passo 2: Integração com Supabase (Client)

Crie uma instância do cliente Supabase para interagir com as Edge Functions.

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

---

## 💳 Passo 3: Implementação do Checkout

Aqui está o código completo para criar o botão de assinatura que chama o backend existente.

### Componente de Preço (Exemplo React)

```tsx
// components/PricingCard.tsx
import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { loadStripe } from '@stripe/stripe-js';

// Chave pública do Stripe (pode ficar no front)
const stripePromise = loadStripe('pk_test_...'); 

export function PricingCard({ planId, price, features }) {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      // 1. Verificar autenticação
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        // Redirecionar para login se não estiver autenticado
        // Passando o plano desejado na URL para redirecionar de volta depois
        window.location.href = `https://app.meuagente.com/auth/login?redirect=checkout&plan=${planId}`;
        return;
      }

      // 2. Chamar Edge Function existente (backend)
      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          plan_id: planId, // 'basic', 'business', 'premium'
          success_url: `${window.location.origin}/sucesso`, // Página de agradecimento no site
          cancel_url: `${window.location.origin}/precos`,   // Volta para preços se cancelar
        },
        headers: {
          Authorization: `Bearer ${session.access_token}` // Token JWT obrigatório
        }
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      // 3. Redirecionar para o Stripe Checkout
      if (data?.url) {
        window.location.href = data.url;
      }
      
    } catch (error) {
      console.error('Erro ao iniciar checkout:', error);
      alert('Erro ao iniciar pagamento. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h3>{planId.toUpperCase()}</h3>
      <p className="price">{price}</p>
      <button onClick={handleSubscribe} disabled={loading}>
        {loading ? 'Processando...' : 'Assinar Agora'}
      </button>
    </div>
  );
}
```

---

## ⚡ Passo 4: Entendendo o Backend (Edge Functions)

Você **não precisa criar nada novo no backend**, apenas usar o que já existe. Aqui está como a mágica acontece:

### A Função `create-checkout-session`
**Onde vive:** Supabase Edge Functions.
**O que faz:**
1. Recebe o `plan_id` e o token do usuário.
2. Verifica se o usuário existe na tabela `clientes`.
3. Se não existir (primeiro acesso), cria um registro "JIT" (Just-in-Time) com plano `free`.
4. Gera uma sessão de checkout no Stripe vinculada a esse usuário.

**Importante:**
Esta função **exige autenticação**. Por isso, o fluxo do site deve garantir que o usuário faça login/cadastro antes de chamar a função.

---

## 🔄 Passo 5: Webhooks e Sincronização

Quando o usuário paga no Stripe, o backend processa tudo automaticamente.

1. **Stripe** cobra o cartão.
2. **Stripe** envia webhook `checkout.session.completed` para o Supabase.
3. **Edge Function** `stripe-webhook` recebe o evento.
4. **Atualização**: O webhook atualiza a tabela `clientes` com:
   - `plan_id`: 'business' (exemplo)
   - `stripe_customer_id`: 'cus_123...'
5. **Trigger de Banco**: Uma trigger automática no Postgres detecta o plano pago e força `subscription_active = true`.
6. **Realtime**: Se o usuário estiver com o app aberto, ele atualiza instantaneamente sem refresh.

---

## 📝 Checklist de Implantação no Site

1. [ ] Instalar `@supabase/supabase-js` no projeto do site.
2. [ ] Copiar as chaves `URL` e `ANON_KEY` do projeto Supabase.
3. [ ] Criar a página de preços com os botões chamando `handleSubscribe`.
4. [ ] Garantir que a URL de Login (`app.meuagente.com/auth/login`) saiba lidar com redirecionamento pós-login (ex: `?redirect=checkout&plan=basic`).
   - *Dica*: No App, ao logar, se tiver esses params, você pode disparar o checkout automaticamente.

---

## 🐞 Troubleshooting Comum

| Problema | Causa Provável | Solução |
|----------|----------------|---------|
| **Erro 401 / "Invalid user token"** | Usuário não logado no site. | Redirecione para login antes de chamar a função. |
| **"Invalid plan_id"** | Enviando ID errado. | Use apenas: 'basic', 'business', 'premium'. |
| **CORS Error** | Chamada de domínio não permitido. | A Edge Function já está configurada com CORS `*`, verifique se os headers `Authorization` estão corretos. |

---

**Recurso Valioso:**
A lógica de consistência de dados (`is_active` vs `subscription_active`) é garantida pelo banco de dados. O site **não precisa se preocupar** em setar status de ativo/inativo, apenas em enviar o usuário para o pagamento.
