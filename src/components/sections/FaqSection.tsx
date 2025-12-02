import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sparkles, ArrowRight } from "lucide-react";

const FaqSection = () => {
  const faqs = [
    {
      question: "Como funciona o Meu Agente na prática?",
      answer:
        "Você conversa com os agentes diretamente pelo WhatsApp, como se fosse um contato comum. A partir dos seus pedidos em linguagem natural, eles executam tarefas como organizar finanças, pesquisar informações, resumir conversas, criar listas de tarefas e muito mais.",
    },
    {
      question: "Quais tipos de tarefas os agentes conseguem fazer?",
      answer:
        "Hoje temos agentes focados em finanças, atendimento, SDR, pesquisa web, organização de agenda, automações e análise de dados. Você pode combiná-los para montar fluxos que atendam desde um profissional autônomo até equipes completas.",
    },
    {
      question: "Preciso ter conhecimento técnico ou saber programar?",
      answer:
        "Não. O Meu Agente foi pensado para quem quer resultado sem complexidade. Basta explicar o que você precisa em português claro e os agentes cuidam do resto, sem códigos, integrações manuais ou painéis complicados.",
    },
    {
      question: "Como funciona a segurança e a privacidade dos meus dados?",
      answer:
        "Utilizamos criptografia em trânsito, controle de acesso por função e práticas de segurança inspiradas em padrões de mercado. Seus dados são usados apenas para operar seus agentes e nunca são vendidos ou compartilhados com terceiros para fins comerciais.",
    },
    {
      question: "O Meu Agente funciona só no WhatsApp?",
      answer:
        "Hoje o foco é o WhatsApp, justamente por ser o principal canal de comunicação das empresas no Brasil. Porém, a infraestrutura foi pensada para, no futuro, conectar outros canais e ferramentas sem que você precise mudar o jeito de trabalhar.",
    },
    {
      question: "Posso testar antes de contratar um plano pago?",
      answer:
        "Sim. Você pode começar pelo plano Free para conhecer os agentes e entender como eles se encaixam na sua rotina. Quando fizer sentido automatizar de vez, é só migrar para um dos planos pagos sem perder histórico.",
    },
    {
      question: "E se eu precisar de ajuda para configurar meus agentes?",
      answer:
        "Você conta com materiais de apoio, tutoriais e suporte por dentro do app. Em planos superiores, nossa equipe acompanha de perto a implantação para garantir que os agentes estejam alinhados com o seu processo de negócio.",
    },
  ];

  return (
    <section className="py-24 bg-surface/30 relative overflow-hidden">
      {/* Elementos decorativos de fundo (mesmo estilo da página de Planos) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
        <div className="absolute top-20 right-0 w-96 h-96 bg-subtle-10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-24 items-stretch">
          {/* Coluna Esquerda: Cabeçalho + CTA */}
          <div className="flex flex-col gap-6 h-full lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-medium text-text-muted">
                <Sparkles className="h-3 w-3 icon-accent" />
                <span>Perguntas Frequentes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">
                Tudo o que você precisa saber sobre o Meu Agente
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Reunimos as principais dúvidas de quem está começando a usar agentes de IA no dia a dia, para você entender onde o Meu Agente realmente entra na sua operação.
              </p>
            </div>

            {/* Card de Suporte - altura independente do acordeão */}
            <div className="flex flex-col justify-between p-6 rounded-2xl border border-subtle bg-gradient-subtle backdrop-blur-sm mt-2">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-surface-2 flex items-center justify-center text-text shadow-sm">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-text">
                    Ainda com perguntas sobre o Meu Agente?
                  </p>
                </div>
                <p className="text-sm text-text-muted mb-5 leading-relaxed">
                  Nossa equipe pode te ajudar a entender se os agentes se encaixam bem no seu momento e sugerir o melhor próximo passo.
                </p>
              </div>
              <Button
                className="w-full mt-auto group relative overflow-hidden btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive"
                onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
              >
                Falar com um especialista
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </div>
          </div>

          {/* Coluna Direita: Accordion padronizado */}
          <div className="w-full">
            <Accordion
              type="single"
              collapsible
              className="flex h-full flex-col justify-between space-y-2"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="group border border-border/60 rounded-lg bg-background/60 px-1 hover:border-accent hover:bg-background/80 transition-all duration-300 shadow-sm data-[state=open]:border-border data-[state=open]:bg-background/90 data-[state=open]:shadow-md"
                >
                  <AccordionTrigger className="px-3 text-left font-medium text-sm text-text group-hover-accent transition-colors py-3">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 text-sm text-text-muted leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Link para FAQ completa */}
            <div className="mt-8 text-sm text-text-muted text-center">
              <span>Quer ver respostas mais detalhadas? </span>
              <a
                href="/faq"
                className="text-accent font-semibold hover:underline transition-all"
              >
                Acesse a central completa de dúvidas →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
