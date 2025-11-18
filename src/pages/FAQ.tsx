import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail } from "lucide-react";

const FAQ = () => {
  const faqCategories = {
    geral: [
      {
        question: "Como funciona o Meu Agente?",
        answer: "O Meu Agente disponibiliza uma equipe de Agentes de IA que operam diretamente no WhatsApp. Você conversa naturalmente, envia comandos por mensagem e os agentes executam tarefas como lançamentos financeiros, pesquisas web, qualificação de leads, agendamentos e muito mais."
      },
      {
        question: "Preciso ter conhecimento técnico?",
        answer: "Não! O Meu Agente foi projetado para ser intuitivo. Você conversa com os agentes usando linguagem natural, sem comandos complexos ou programação. Se você sabe usar WhatsApp, já sabe usar o Meu Agente."
      },
      {
        question: "Posso usar sem número próprio?",
        answer: "Sim. No plano Free e Básico, você opera manualmente via app. Nos planos Business e Premium, oferecemos número WhatsApp dedicado com infraestrutura completa e implantação inclusa."
      },
    ],
    planos: [
      {
        question: "Quais são as diferenças entre os planos?",
        answer: "Free: exploratório, manual, sem exportação. Básico: automação via WhatsApp, exportações CSV/PDF, lançamentos manuais. Business: número dedicado, implantação, suporte 24/7, sub-agentes (SDR, Marketing, Dev, Vídeo). Premium: tudo do Business + agentes exclusivos, backups off-site, pesquisa avançada."
      },
      {
        question: "Como funciona a cobrança?",
        answer: "Todos os planos são cobrados mensalmente. Planos Business e Premium têm taxa de manutenção de R$ 149/h para suporte técnico avançado e customizações além do escopo padrão."
      },
      {
        question: "Posso cancelar a qualquer momento?",
        answer: "Sim! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento via configurações do app ou entrando em contato com o suporte."
      },
    ],
    uso: [
      {
        question: "Como funcionam as mensagens proativas?",
        answer: "As mensagens proativas seguem estritamente as políticas do WhatsApp Business. Enviamos apenas notificações relevantes (alertas financeiros, confirmações de agenda, resumos solicitados) dentro de janelas de 24h após interação ativa. Você pode cancelar com \"SAIR\" ou \"pare\"."
      },
      {
        question: "Quantas mensagens posso enviar?",
        answer: "Não há limite rígido de mensagens nos planos pagos, mas seguimos as boas práticas do WhatsApp para evitar bloqueios. Nos planos Free e Básico, operações são mais limitadas."
      },
      {
        question: "Os agentes funcionam 24/7?",
        answer: "Sim! Nos planos Business e Premium, os agentes operam 24 horas por dia, 7 dias por semana, respondendo instantaneamente às suas solicitações."
      },
    ],
    segurança: [
      {
        question: "Meus dados estão seguros?",
        answer: "Sim! Implementamos criptografia de ponta a ponta, conformidade LGPD completa, backups regulares (diários off-site no Premium) e políticas rigorosas de segurança. Seus dados nunca são compartilhados com terceiros."
      },
      {
        question: "Vocês são LGPD compliant?",
        answer: "Sim, 100%. Temos canal do DPO disponível, garantimos todos os direitos do titular (acesso, correção, exclusão, portabilidade) e seguimos todas as diretrizes da Lei Geral de Proteção de Dados."
      },
      {
        question: "Como cancelo notificações?",
        answer: "Envie a palavra \"SAIR\" ou \"pare\" a qualquer momento para cancelar notificações automáticas. Você mantém controle total sobre quais alertas deseja receber."
      },
    ],
    técnico: [
      {
        question: "Como exporto meus dados?",
        answer: "Nos planos pagos, você pode exportar relatórios em CSV, PDF ou JSON diretamente via comando no WhatsApp ou pelo app web. No plano Free, não há exportação disponível."
      },
      {
        question: "Vocês fazem scraping de sites proibidos?",
        answer: "Não. O Agente de Scrape/Extract respeita robots.txt, Terms of Service e só opera em fontes permitidas ou via APIs oficiais. Priorizamos conformidade legal e ética."
      },
      {
        question: "Como alterar minha senha?",
        answer: "Acesse Configurações > Segurança > Alterar Senha no app web. Digite a senha atual, a nova senha (mínimo 8 caracteres) e confirme. Para redefinição sem acesso, use \"Esqueci minha senha\" na tela de login."
      },
      {
        question: "Quais integrações estão disponíveis?",
        answer: "Integrações com Google Workspace (Calendar, Drive, Tasks, Gmail) estão disponíveis nos planos Business/Premium mediante implantação opcional com custo adicional."
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-surface via-background to-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gradient mb-6">
            Perguntas Frequentes
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Encontre respostas rápidas para as dúvidas mais comuns sobre o Meu Agente
          </p>
        </div>
      </section>

      {/* FAQ content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="geral" className="w-full">
            <TabsList className="grid grid-cols-2 lg:grid-cols-5 gap-2 h-auto p-2 bg-surface/50 backdrop-blur-sm mb-12">
              <TabsTrigger value="geral" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white">
                Geral
              </TabsTrigger>
              <TabsTrigger value="planos" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white">
                Planos
              </TabsTrigger>
              <TabsTrigger value="uso" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white">
                Uso
              </TabsTrigger>
              <TabsTrigger value="segurança" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white">
                Segurança
              </TabsTrigger>
              <TabsTrigger value="técnico" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white">
                Técnico
              </TabsTrigger>
            </TabsList>

            {Object.entries(faqCategories).map(([category, faqs]) => (
              <TabsContent key={category} value={category}>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category}-${index}`}
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
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold text-text mb-4">
              Não encontrou sua dúvida?
            </h2>
            <p className="text-text-muted mb-6">
              Nossa equipe está pronta para ajudar você
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-brand-900 to-brand-700 text-white">
                <MessageSquare className="mr-2 h-5 w-5" />
                Falar pelo WhatsApp
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="mr-2 h-5 w-5" />
                Enviar Email
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
