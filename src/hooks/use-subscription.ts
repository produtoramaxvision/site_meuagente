import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

// URL base do app principal para redirecionamento
const APP_URL = 'https://app.meuagente.api.br';

export const useSubscription = () => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (planId: string) => {
    setLoading(true);
    try {
      // 1. Verificar se o usuário está logado no site
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        // Usuário não logado no site: redireciona para o APP na raiz,
        // passando intenção de checkout e o plano escolhido.
        // O APP já foi configurado para ler ?redirect=checkout&plan=...
        window.location.href = `${APP_URL}/?redirect=checkout&plan=${planId}`;
        return;
      }

      // 2. Se estiver logado (cenário onde o site compartilha auth ou usuário logou aqui),
      // invocar a Edge Function para criar a sessão de checkout diretamente.
      const { data, error } = await supabase.functions.invoke('create-checkout-session', {
        body: {
          plan_id: planId,
          success_url: `${window.location.origin}/sucesso?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/planos`,
        },
      });

      if (error) throw error;
      if (data?.error) throw new Error(data.error);

      // 3. Redirecionar para o Stripe
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error('URL de checkout não retornada');
      }
    } catch (error: any) {
      console.error('Erro ao iniciar checkout:', error);
      toast.error('Erro ao iniciar assinatura', {
        description: error.message || 'Tente novamente mais tarde.',
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubscribe,
    loading,
  };
};
