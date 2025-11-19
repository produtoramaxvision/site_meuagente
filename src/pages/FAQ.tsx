import { useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Mail, Search, ShieldCheck, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import { createFAQPageSchema } from "@/lib/seo";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const faqCategories: Record<string, FAQItem[]> = {
    geral: [
      {
        question: "Como funciona o Meu Agente?",
        answer:
          "O Meu Agente disponibiliza uma equipe de Agentes de IA que operam diretamente no WhatsApp. Você conversa naturalmente, envia comandos por mensagem e os agentes executam tarefas como lançamentos financeiros, pesquisas web, qualificação de leads, agendamentos e muito mais.",
      },
      {
        question: "Preciso ter conhecimento técnico?",
        answer:
          "Não! O Meu Agente foi projetado para ser intuitivo. Você conversa com os agentes usando linguagem natural, sem comandos complexos ou programação. Se você sabe usar WhatsApp, já sabe usar o Meu Agente.",
      },
      {
        question: "Posso usar sem número próprio?",
        answer:
          "Sim. No plano Free e Básico, você opera manualmente via app. Nos planos Business e Premium, oferecemos número WhatsApp dedicado com infraestrutura completa e implantação inclusa.",
      },
      {
        question: "O Meu Agente funciona em qualquer dispositivo?",
        answer:
          "Sim! Como opera via WhatsApp, funciona em qualquer dispositivo com WhatsApp instalado (Android, iOS, desktop). O app web também é totalmente responsivo e funciona em tablets, laptops e desktops.",
      },
      {
        question: "Há limite de usuários por conta?",
        answer:
          "No Free e Básico, apenas 1 usuário. No Business, até 5 usuários. No Premium, usuários ilimitados. Cada usuário tem seu próprio acesso ao app e pode interagir com os agentes.",
      },
    ],
    planos: [
      {
        question: "Quais são as diferenças entre os planos?",
        answer:
          "Free: exploratório, manual, sem exportação. Básico: automação via WhatsApp, exportações CSV/PDF, lançamentos manuais. Business: número dedicado, implantação, suporte 24/7, sub-agentes (SDR, Marketing, Dev, Vídeo). Premium: tudo do Business + agentes exclusivos, backups off-site, pesquisa avançada.",
      },
      {
        question: "Como funciona a cobrança?",
        answer:
          "Todos os planos são cobrados mensalmente. Planos Business e Premium têm taxa de manutenção de R$ 149/h para suporte técnico avançado e customizações além do escopo padrão.",
      },
      {
        question: "Posso cancelar a qualquer momento?",
        answer:
          "Sim! Não há fidelidade. Você pode cancelar sua assinatura a qualquer momento via configurações do app ou entrando em contato com o suporte.",
      },
      {
        question: "O que muda entre Business e Premium?",
        answer:
          "Premium inclui 4 agentes exclusivos (Confirmação, Resumo de Grupos, Remarketing, Follow-up), pesquisa/extração avançada, backups diários off-site, cota maior de vídeo e governança ampliada de dados.",
      },
      {
        question: "Posso fazer upgrade ou downgrade?",
        answer:
          "Sim! Upgrades são aplicados imediatamente. Downgrades entram em vigor no próximo ciclo de cobrança. Entre em contato com suporte para solicitar mudança de plano.",
      },
      {
        question: "O que está incluído na implantação?",
        answer:
          "Nos planos Business/Premium, a implantação inclui configuração do número WhatsApp, setup inicial dos agentes, treinamento da equipe e customizações básicas. Integrações Google são opcionais com custo adicional.",
      },
    ],
    uso: [
      {
        question: "Como funcionam as mensagens proativas?",
        answer:
          "As mensagens proativas seguem estritamente as políticas do WhatsApp Business. Enviamos apenas notificações relevantes (alertas financeiros, confirmações de agenda, resumos solicitados) dentro de janelas de 24h após interação ativa. Você pode cancelar com \"SAIR\" ou \"pare\".",
      },
      {
        question: "Quantas mensagens posso enviar?",
        answer:
          "Não há limite rígido de mensagens nos planos pagos, mas seguimos as boas práticas do WhatsApp para evitar bloqueios. Nos planos Free e Básico, operações são mais limitadas.",
      },
      {
        question: "Os agentes funcionam 24/7?",
        answer:
          "Sim! Nos planos Business e Premium, os agentes operam 24 horas por dia, 7 dias por semana, respondendo instantaneamente às suas solicitações.",
      },
      {
        question: "Posso criar categorias financeiras personalizadas?",
        answer:
          "Sim! Nos planos pagos, você pode criar categorias customizadas além das 12 categorias padrão (Alimentação, Transporte, Moradia, Vestuário, Saúde, Educação, Lazer, Tecnologia, Marketing, Operação, Investimento, Outros).",
      },
      {
        question: "Como marco uma transação como paga/recebida?",
        answer:
          "Envie mensagem ao Agente Financeiro: 'Marcar transação [descrição] como paga' ou clique diretamente na transação no app web e altere o status.",
      },
      {
        question: "Posso agendar compromissos recorrentes?",
        answer:
          "Sim! Com o Agente de Agendamento (Business/Premium), você pode criar eventos recorrentes (diários, semanais, mensais) integrados ao Google Calendar.",
      },
    ],
    segurança: [
      {
        question: "Meus dados estão seguros?",
        answer:
          "Sim! Implementamos criptografia de ponta a ponta, conformidade LGPD completa, backups regulares (diários off-site no Premium) e políticas rigorosas de segurança. Seus dados nunca são compartilhados com terceiros.",
      },
      {
        question: "Vocês são LGPD compliant?",
        answer:
          "Sim, 100%. Temos canal do DPO disponível, garantimos todos os direitos do titular (acesso, correção, exclusão, portabilidade) e seguimos todas as diretrizes da Lei Geral de Proteção de Dados.",
      },
      {
        question: "Como cancelo notificações?",
        answer:
          "Envie a palavra \"SAIR\" ou \"pare\" a qualquer momento para cancelar notificações automáticas. Você mantém controle total sobre quais alertas deseja receber.",
      },
    ],
    técnico: [
      {
        question: "Como exporto meus dados?",
        answer:
          "Nos planos pagos, você pode exportar relatórios em CSV, PDF ou JSON diretamente via comando no WhatsApp ou pelo app web. No plano Free, não há exportação disponível.",
      },
      {
        question: "Vocês fazem scraping de sites proibidos?",
        answer:
          "Não. O Agente de Scrape/Extract respeita robots.txt, Terms of Service e só opera em fontes permitidas ou via APIs oficiais. Priorizamos conformidade legal e ética.",
      },
      {
        question: "Como alterar minha senha?",
        answer:
          "Acesse Configurações > Segurança > Alterar Senha no app web. Digite a senha atual, a nova senha (mínimo 8 caracteres) e confirme. Para redefinição sem acesso, use \"Esqueci minha senha\" na tela de login.",
      },
      {
        question: "Quais integrações estão disponíveis?",
        answer:
          "Integrações com Google Workspace (Calendar, Drive, Tasks, Gmail) estão disponíveis nos planos Business/Premium mediante implantação opcional com custo adicional.",
      },
      {
        question: "O sistema detecta transações duplicadas?",
        answer:
          "Sim! O Agente Financeiro compara valor, data, descrição e categoria de cada lançamento e te alerta se detectar possível duplicata, evitando lançamentos acidentais.",
      },
      {
        question: "Qual o prazo para suporte responder?",
        answer:
          "Planos Free e Básico não incluem suporte. Business e Premium têm suporte prioritário 24/7 com SLA de 2 horas para primeira resposta. Premium tem prioridade máxima na fila.",
      },
      {
        question: "Consigo importar dados de outro sistema?",
        answer:
          "Sim! Nos planos pagos, você pode importar dados via CSV ou API. Entre em contato com suporte para solicitar importação guiada de sistemas legados.",
      },
    ],
  };

  const [activeCategory, setActiveCategory] = useState<string>("geral");
  const [search, setSearch] = useState<string>("");

  // Flatten all FAQs para JSON-LD (mantém SEO completo, sem filtros)
  const allFAQs = useMemo(
    () => Object.values(faqCategories).flat(),
    [faqCategories]
  );

  const filteredFaqsByCategory = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return faqCategories;

    const next: Record<string, FAQItem[]> = {};

    Object.entries(faqCategories).forEach(([category, faqs]) => {
      next[category] = faqs.filter((faq) => {
        const text = `${faq.question} ${faq.answer}`.toLowerCase();
        return text.includes(query);
      });
    });

    return next;
  }, [search, faqCategories]);

  const currentFaqs = filteredFaqsByCategory[activeCategory] ?? [];

  return (
    <>
      <SEO
        title="Perguntas Frequentes (FAQ) – Meu Agente | Dúvidas sobre Agentes de IA"
        description="Respostas para as principais dúvidas sobre Meu Agente: como funciona, planos, segurança, exportação, integrações e muito mais."
        keywords={[
          "faq meu agente",
          "perguntas agentes ia",
          "dúvidas whatsapp business",
          "como funciona meu agente",
          "segurança lgpd",
        ]}
        canonicalUrl="/faq"
        structuredData={createFAQPageSchema(allFAQs)}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-surface via-background to-surface/80 py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
            <div className="bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.10),_transparent_60%)]" />
          </div>

          <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-6 text-left">
              <Badge
                variant="outline"
                className="border-brand-900/30 bg-background/80 text-xs font-medium uppercase tracking-[0.18em] text-text-muted"
              >
                FAQ • Central de ajuda
              </Badge>

              <div className="space-y-3">
                <h1 className="text-balance text-4xl font-extrabold leading-tight text-gradient sm:text-5xl lg:text-6xl">
                  Tire suas dúvidas sobre o Meu Agente.
                </h1>
                <p className="text-balance text-base text-text-muted sm:text-lg">
                  Uma FAQ pensada para founders, gestores e times que querem
                  colocar Agentes de IA em produção sem burocracia. Encontre em
                  segundos tudo o que precisa saber sobre planos, segurança,
                  operação e integrações.
                </p>
              </div>

              <div className="grid gap-4 text-sm text-text-muted sm:grid-cols-3">
                <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3 shadow-sm">
                  <Clock className="h-5 w-5 text-brand-900" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-text">
                      Agentes 24/7
                    </p>
                    <p className="text-xs text-text-muted">
                      Sempre disponíveis no WhatsApp.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3 shadow-sm">
                  <ShieldCheck className="h-5 w-5 text-brand-900" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-text">
                      LGPD 100%
                    </p>
                    <p className="text-xs text-text-muted">
                      Segurança e governança de dados.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3 shadow-sm">
                  <MessageSquare className="h-5 w-5 text-brand-900" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-text">
                      Atendimento guiado
                    </p>
                    <p className="text-xs text-text-muted">
                      Fale com o time em poucos cliques.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Search area / quick CTA */}
            <Card className="w-full max-w-md border-border/60 bg-background/90 shadow-lg shadow-black/5 backdrop-blur sm:rounded-3xl">
              <div className="space-y-4 p-5 sm:p-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                    BUSCAR NA CENTRAL
                  </p>
                  <p className="mt-1 text-sm text-text-muted">
                    Pesquise por palavras-chave como{" "}
                    <span className="font-semibold text-text">
                      plano, LGPD, integrações, suporte
                    </span>
                    .
                  </p>
                </div>

                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
                  <Input
                    placeholder="Pesquise por qualquer dúvida..."
                    className="h-11 rounded-xl border-border/70 bg-surface/60 pl-9 text-sm placeholder:text-text-muted focus-visible:ring-brand-900/60"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="text-text-muted">Sugestões rápidas:</span>
                  {["Planos", "Mensagens proativas", "Segurança", "Integrações"].map(
                    (chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => setSearch(chip)}
                        className="rounded-full border border-border/70 bg-background/60 px-3 py-1 text-[11px] font-medium text-text-muted transition-colors hover:border-brand-900/60 hover:text-text"
                      >
                        {chip}
                      </button>
                    )
                  )}
                </div>

                <Separator className="my-2 bg-border/60" />

                <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
                      PRECISA FALAR COM ALGUÉM?
                    </p>
                    <p className="text-xs text-text-muted">
                      Nosso time pode te ajudar a escolher o melhor plano.
                    </p>
                  </div>
                  <Button
                    size="sm"
                    className="mt-1 flex-1 bg-gradient-to-r from-brand-900 to-brand-700 text-xs sm:flex-none"
                  >
                    <MessageSquare className="mr-1.5 h-3.5 w-3.5" />
                    Falar com especialista
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ layout */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8 lg:flex-row">
            {/* Coluna principal: categorias + perguntas */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                    CATEGORIAS DE DÚVIDAS
                  </p>
                  <p className="text-sm text-text-muted">
                    Navegue por temas ou use a busca para encontrar algo
                    específico.
                  </p>
                </div>
              </div>

              <Tabs
                value={activeCategory}
                onValueChange={setActiveCategory}
                className="w-full"
              >
                <TabsList className="no-scrollbar mb-6 flex h-auto gap-2 overflow-x-auto rounded-2xl bg-surface/70 p-1.5 text-xs shadow-sm sm:gap-3 sm:p-2">
                  <TabsTrigger
                    value="geral"
                    className="rounded-xl px-3 py-1.5 text-xs font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white sm:px-4"
                  >
                    Geral
                  </TabsTrigger>
                  <TabsTrigger
                    value="planos"
                    className="rounded-xl px-3 py-1.5 text-xs font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white sm:px-4"
                  >
                    Planos & cobrança
                  </TabsTrigger>
                  <TabsTrigger
                    value="uso"
                    className="rounded-xl px-3 py-1.5 text-xs font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white sm:px-4"
                  >
                    Uso no dia a dia
                  </TabsTrigger>
                  <TabsTrigger
                    value="segurança"
                    className="rounded-xl px-3 py-1.5 text-xs font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white sm:px-4"
                  >
                    Segurança & LGPD
                  </TabsTrigger>
                  <TabsTrigger
                    value="técnico"
                    className="rounded-xl px-3 py-1.5 text-xs font-medium data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-900 data-[state=active]:to-brand-700 data-[state=active]:text-white sm:px-4"
                  >
                    Técnico & integrações
                  </TabsTrigger>
                </TabsList>

                {Object.entries(filteredFaqsByCategory).map(
                  ([category, faqs]) => (
                    <TabsContent
                      key={category}
                      value={category}
                      className="mt-0 space-y-4"
                    >
                      {faqs.length === 0 ? (
                        <Card className="border-dashed border-border/70 bg-background/80 p-6 text-center text-sm text-text-muted">
                          Nenhuma pergunta encontrada para{" "}
                          <span className="font-semibold text-text">
                            “{search}”
                          </span>{" "}
                          nesta categoria. Tente outra palavra-chave ou mude o
                          filtro.
                        </Card>
                      ) : (
                        <Accordion
                          type="single"
                          collapsible
                          className="space-y-3"
                        >
                          {faqs.map((faq, index) => (
                            <AccordionItem
                              key={index}
                              value={`${category}-${index}`}
                              className="overflow-hidden rounded-2xl border border-border/70 bg-background/90 px-4 py-1 shadow-sm transition-all duration-300 hover:border-brand-900/40 hover:shadow-md sm:px-6"
                            >
                              <AccordionTrigger className="text-left text-sm font-semibold text-text hover:text-brand-900">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="pb-4 pt-1 text-sm leading-relaxed text-text-muted">
                                {faq.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      )}
                    </TabsContent>
                  )
                )}
              </Tabs>
            </div>

            {/* Coluna lateral: CTA e atalho de tópicos */}
            <div className="lg:w-[320px] lg:flex-none">
              <div className="space-y-6 lg:sticky lg:top-28">
                <Card className="border-brand-900/40 bg-surface/90 p-6 shadow-lg shadow-black/5 backdrop-blur">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
                        SUPORTE HUMANO
                      </p>
                      <h2 className="mt-1 text-lg font-semibold text-text">
                        Ainda com dúvidas sobre os Agentes de IA?
                      </h2>
                    </div>
                  </div>

                  <p className="mb-4 text-sm text-text-muted">
                    Agendamos uma conversa rápida para entender seu cenário,
                    sugerir o melhor plano e mostrar exemplos reais de uso.
                  </p>

                  <div className="flex flex-col gap-3">
                    <Button className="w-full bg-gradient-to-r from-brand-900 to-brand-700 text-sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Falar pelo WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-border/70 text-sm"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar e-mail para o time
                    </Button>
                  </div>

                  <Separator className="my-5 bg-border/60" />

                  <div className="space-y-3 text-xs text-text-muted">
                    <p className="font-medium text-text">
                      Tópicos mais acessados
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { label: "Implantação Business/Premium", value: "planos" },
                        { label: "Mensagens proativas", value: "uso" },
                        { label: "Segurança LGPD", value: "segurança" },
                        { label: "Integrações Google", value: "técnico" },
                      ].map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setActiveCategory(item.value)}
                          className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-[11px] font-medium text-text-muted transition-colors hover:border-brand-900/50 hover:text-text"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="border-border/70 bg-background/90 p-4 text-xs text-text-muted">
                  <p>
                    Atualizamos esta página com frequência à medida que novos
                    agentes, planos e integrações são lançados. Salve nos
                    favoritos para consultar sempre que precisar.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;


