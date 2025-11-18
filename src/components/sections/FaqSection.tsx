import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "Como funciona o Meu Agente?",
      answer: "O Meu Agente disponibiliza uma equipe de Agentes de IA que operam diretamente no WhatsApp. Você conversa naturalmente, envia comandos por mensagem e os agentes executam tarefas como lançamentos financeiros, pesquisas web, qualificação de leads, agendamentos e muito mais. É como ter assistentes especializados 24/7 no seu bolso."
    },
    {
      question: "Preciso ter conhecimento técnico para usar?",
      answer: "Não! O Meu Agente foi projetado para ser intuitivo. Você conversa com os agentes usando linguagem natural, sem comandos complexos ou programação. Se você sabe usar WhatsApp, já sabe usar o Meu Agente."
    },
    {
      question: "Posso usar sem número próprio?",
      answer: "Sim. No plano Free e Básico, você opera manualmente via app. Nos planos Business e Premium, oferecemos número WhatsApp dedicado com infraestrutura completa e implantação inclusa."
    },
    {
      question: "O que muda entre os planos?",
      answer: "O plano Free é manual e exploratório. O Básico adiciona automação via WhatsApp e exportações. Business inclui número dedicado, implantação, suporte 24/7 e sub-agentes especializados (SDR, Marketing, Dev, Vídeo). Premium adiciona agentes exclusivos (Confirmação, Resumo, Remarketing, Follow-up) e backups off-site."
    },
    {
      question: "Como funcionam as mensagens proativas?",
      answer: "As mensagens proativas seguem estritamente as políticas do WhatsApp Business. Enviamos apenas notificações relevantes (alertas financeiros, confirmações de agenda, resumos solicitados) dentro de janelas de 24h após interação ativa do usuário. Você pode cancelar a qualquer momento com \"SAIR\" ou \"pare\"."
    },
    {
      question: "Há taxa de manutenção?",
      answer: "Sim, nos planos Business e Premium há uma taxa de manutenção de R$ 149/h para ajustes, customizações e suporte técnico avançado além do escopo padrão."
    },
    {
      question: "Vocês fazem scraping de sites que proíbem?",
      answer: "Não. O Agente de Scrape/Extract respeita robots.txt, Terms of Service e só opera em fontes permitidas ou via APIs oficiais. Priorizamos conformidade legal e ética."
    },
    {
      question: "Como exporto meus dados?",
      answer: "Nos planos pagos, você pode exportar relatórios em CSV, PDF ou JSON diretamente via comando no WhatsApp ou pelo app web. No plano Free, não há exportação disponível."
    },
    {
      question: "Como alterar minha senha?",
      answer: "Acesse Configurações > Segurança > Alterar Senha no app web. Digite a senha atual, a nova senha (mínimo 8 caracteres) e confirme. Para redefinição sem acesso, use a opção \"Esqueci minha senha\" na tela de login."
    },
    {
      question: "Qual o prazo para suporte responder?",
      answer: "Planos Business e Premium têm suporte prioritário 24/7 com SLA de até 2h em dias úteis e 4h em fins de semana. Planos Free e Básico têm suporte via FAQ e tickets com resposta em até 48h úteis."
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-text-muted">
            Tudo o que você precisa saber sobre o Meu Agente
          </p>
        </div>

        {/* FAQ accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-xl px-6 bg-background/80 backdrop-blur-sm hover:border-brand-900/30 transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-text hover:text-brand-900 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-text-muted leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA to full FAQ page */}
        <div className="mt-12 text-center">
          <p className="text-text-muted mb-4">
            Não encontrou sua dúvida?
          </p>
          <a
            href="/faq"
            className="text-brand-900 font-semibold hover:underline transition-all"
          >
            Ver todas as perguntas →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
