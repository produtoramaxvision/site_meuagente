import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageCircle,
  DollarSign,
  Search,
  Database,
  UserCheck,
  Megaphone,
  Calendar,
  Code,
  Video,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const useCases = [
  {
    id: "financeiro",
    label: "Financeiro",
    icon: DollarSign,
    kpi: "100%",
    kpiLabel: "lançamentos organizados",
    highlight:
      "Registre entradas, saídas e exporte relatórios completos sem abrir planilhas.",
  },
  {
    id: "web-search",
    label: "Web Search",
    icon: Search,
    kpi: "3x",
    kpiLabel: "mais insights qualificados",
    highlight:
      "Pesquise oportunidades, concorrentes e tendências direto pelo WhatsApp.",
  },
  {
    id: "scrape",
    label: "Scrape",
    icon: Database,
    kpi: "47+",
    kpiLabel: "contatos em segundos",
    highlight:
      "Extraia dados estruturados de fontes permitidas e receba tudo em CSV ou JSON.",
  },
  {
    id: "sdr",
    label: "SDR",
    icon: UserCheck,
    kpi: "+35%",
    kpiLabel: "em conversão de leads",
    highlight:
      "Qualifique leads, proponha horários e deixe o agente cuidar dos agendamentos.",
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    kpi: "–30%",
    kpiLabel: "de desperdício em mídia",
    highlight:
      "Analise campanhas, encontre termos negativos e gere comparativos semanais.",
  },
  {
    id: "agendamento",
    label: "Agendamento",
    icon: Calendar,
    kpi: "0",
    kpiLabel: "reuniões esquecidas",
    highlight:
      "Crie eventos, envie links e configure lembretes usando apenas mensagens.",
  },
  {
    id: "dev",
    label: "Dev",
    icon: Code,
    kpi: "–60%",
    kpiLabel: "no tempo de debug",
    highlight:
      "Revise endpoints, queries e receba sugestões pontuais para seu código.",
  },
  {
    id: "video",
    label: "Vídeo",
    icon: Video,
    kpi: "2x",
    kpiLabel: "produção criativa",
    highlight:
      "Gere roteiros, vídeos e storyboards completos para campanhas em minutos.",
  },
] as const;

type UseCaseId = (typeof useCases)[number]["id"];

const messagesByUseCase: Record<
  UseCaseId,
  { from: "user" | "agent"; text: string; time: string }[]
> = {
  financeiro: [
    {
      from: "user",
      text: '"Registra uma entrada de R$ 1.200,00 na categoria Assinaturas — Plano Business — com data 01/10/2025."',
      time: "09:02",
    },
    {
      from: "agent",
      text: "✅ Entrada registrada com sucesso!",
      time: "09:02",
    },
    {
      from: "user",
      text: '"Exporta um CSV do período de 01/09 a 30/09 com as categorias Marketing e Operação."',
      time: "09:03",
    },
    {
      from: "agent",
      text: "📊 Relatório gerado e exportado!",
      time: "09:03",
    },
  ],
  "web-search": [
    {
      from: "user",
      text: '"Busque 3 pousadas em Fortaleza com potencial de vendas para o meu produto e me envie nomes, sites e telefones."',
      time: "11:18",
    },
    {
      from: "agent",
      text: "🔍 Pesquisa concluída com 3 resultados qualificados!",
      time: "11:19",
    },
    {
      from: "agent",
      text: '"Pesquise tendências de \'roupas fitness\' na região de SP e me entregue 5 insights com 3 links confiáveis."',
      time: "11:21",
    },
  ],
  scrape: [
    {
      from: "user",
      text: '"Faça o scrape do site exemplo.com e me envie os contatos comerciais (nome, e-mail e telefone) em CSV."',
      time: "14:01",
    },
    {
      from: "agent",
      text: "📊 Scraping concluído! 47 contatos extraídos em CSV.",
      time: "14:02",
    },
    {
      from: "user",
      text: '"Busque no portal de dados abertos de Curitiba o dataset de aluguel residencial de 2024 e me mande um CSV filtrado por bairro."',
      time: "14:05",
    },
    {
      from: "agent",
      text: "📁 Dataset processado e filtrado por bairro!",
      time: "14:06",
    },
  ],
  sdr: [
    {
      from: "user",
      text: '"Qualifique este lead: Ana, interessada em demo — me diga o fit e o próximo passo."',
      time: "10:12",
    },
    {
      from: "agent",
      text: "✅ Lead qualificado como High-Fit! Próximo: agendar demo.",
      time: "10:13",
    },
    {
      from: "user",
      text: '"Ofereça dois horários (qui 10:30 ou sex 14:00) e, se ela aceitar, marque a reunião e envie confirmação."',
      time: "10:15",
    },
    {
      from: "agent",
      text: "📅 Reunião agendada e confirmação enviada!",
      time: "10:16",
    },
  ],
  marketing: [
    {
      from: "user",
      text: '"Analise minha campanha de Google Ads \'Tráfego – Outubro\' e me diga 3 termos negativos para adicionar."',
      time: "16:40",
    },
    {
      from: "agent",
      text: "📊 Análise concluída com 3 recomendações!",
      time: "16:41",
    },
    {
      from: "user",
      text: '"Compare a última semana com a anterior e me envie 5 insights rápidos."',
      time: "16:42",
    },
    {
      from: "agent",
      text: "📈 Comparativo pronto com insights acionáveis!",
      time: "16:43",
    },
  ],
  agendamento: [
    {
      from: "user",
      text: '"Marque uma reunião com o João amanhã às 15:00 no Google Meet e envie o link."',
      time: "13:05",
    },
    {
      from: "agent",
      text: "📅 Reunião criada e link enviado!",
      time: "13:06",
    },
    {
      from: "user",
      text: '"Crie uma tarefa no Google Tasks: \'Enviar proposta para Maria\' com prazo sexta às 17:00."',
      time: "13:08",
    },
    {
      from: "agent",
      text: "✅ Tarefa criada e lembrete configurado!",
      time: "13:09",
    },
  ],
  dev: [
    {
      from: "user",
      text: '"Revise meu endpoint `/api/checkout`; estou recebendo erro 500 quando envio `customerId` vazio."',
      time: "19:21",
    },
    {
      from: "agent",
      text: "🐛 Problema identificado! Adicione validação no customerId.",
      time: "19:22",
    },
    {
      from: "user",
      text: '"Otimize esta query Postgres que ficou lenta ao filtrar por `created_at` no último mês."',
      time: "19:24",
    },
    {
      from: "agent",
      text: "⚡ Sugestão: adicione índice em created_at + EXPLAIN ANALYZE.",
      time: "19:25",
    },
  ],
  video: [
    {
      from: "user",
      text: '"Crie um vídeo de 30s em 1080x1920 com o roteiro: \'Bem-vindo ao Meu Agente...\' e me envie duas variações."',
      time: "21:03",
    },
    {
      from: "agent",
      text: "🎬 2 variações de vídeo renderizadas!",
      time: "21:04",
    },
    {
      from: "user",
      text: '"Monte um storyboard com 6 cenas e legendas e depois exporte o MP4 final."',
      time: "21:06",
    },
    {
      from: "agent",
      text: "🎥 Storyboard aprovado e MP4 exportado!",
      time: "21:07",
    },
  ],
};

const ProductShowcaseSection = () => {
  return (
    <section className="py-20 md:py-24 bg-surface/40 section-texture-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da seção */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
          <div className="max-w-2xl space-y-3">
            <Badge variant="outline" className="rounded-full px-3 py-1 text-xs">
              <span className="inline-flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                Vitrine em tempo real
              </span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gradient leading-tight">
              Veja seus Agentes de IA{" "}
              <span className="whitespace-nowrap">em ação no WhatsApp</span>
            </h2>
            <p className="text-base sm:text-lg text-text-muted">
              Navegue pelos principais casos de uso e veja como o Meu Agente
              assume o trabalho pesado: atendimento, vendas, financeiro e
              marketing em um único fluxo contínuo de conversa.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Configuração em minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock3 className="w-4 h-4 icon-accent" />
              <span>Atendimento 24/7</span>
            </div>
          </div>
        </div>

        {/* Layout principal: menu + preview */}
        <Tabs
          defaultValue="financeiro"
          className="grid gap-8 lg:grid-cols-12 items-stretch w-full min-w-0"
        >
          {/* Coluna esquerda – menu de casos de uso */}
          <div className="lg:col-span-4 space-y-4 w-full min-w-0">
            <TabsList className="flex flex-nowrap w-full h-auto items-center justify-start gap-2 overflow-x-auto rounded-full border border-border/60 bg-surface/80 p-1 shadow-sm backdrop-blur-sm touch-pan-x snap-x snap-mandatory sm:rounded-xl sm:p-1.5 lg:flex-col lg:items-stretch lg:space-y-2 lg:rounded-2xl lg:border-0 lg:bg-transparent lg:p-0 max-w-full scrollbar-hide">
              {useCases.map((useCase) => (
                <TabsTrigger
                  key={useCase.id}
                  value={useCase.id}
                  className="group relative flex min-w-[120px] sm:min-w-[140px] flex-none items-center justify-start gap-2 sm:gap-3 rounded-full border border-transparent px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm font-medium text-text-muted transition-colors data-[state=active]:border-border data-[state=active]:bg-surface-2 data-[state=active]:text-text data-[state=active]:shadow-sm lg:rounded-xl lg:py-3 hover:bg-surface-2 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background whitespace-nowrap"
                >
                  <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-surface-2">
                    <useCase.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 icon-accent" />
                  </span>
                  <span>{useCase.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Destaque do caso de uso ativo (texto genérico – continua coerente para todos) */}
            <Card className="relative overflow-hidden border-border/60 bg-background/80 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-subtle" />
              <div className="relative p-5 space-y-3">
                <p className="text-sm text-text-muted">
                  Cada agente segue regras de negócio, limites de
                  segurança e tom de voz alinhado à sua marca.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() =>
                    window.open("https://app.meuagente.api.br", "_blank")
                  }
                >
                  Explorar no app
                </Button>
              </div>
            </Card>
          </div>

          {/* Coluna direita – preview “WhatsApp / dashboard” */}
          <div className="lg:col-span-8 w-full min-w-0">
            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id} className="mt-0 w-full focus-visible:ring-0">
                <Card className="relative overflow-hidden border-border/70 bg-gradient-to-br from-surface-2 via-surface to-surface-3 shadow-2xl-adaptive md:mt-4 lg:mt-6 w-full max-w-full">
                  {/* Glow de fundo */}
                  <div className="pointer-events-none absolute -top-40 left-1/3 h-72 w-72 rounded-full bg-subtle-25 blur-3xl" />

                  <div className="relative flex flex-col gap-4 p-4 sm:p-6 lg:p-7 w-full max-w-full overflow-hidden">
                    {/* Topo do “app” */}
                    <div className="flex items-center justify-between gap-4 w-full">
                      <div className="flex items-center gap-3 min-w-0 overflow-hidden">
                        {/* Ícone principal – usando border em vez de ring para evitar clipping com overflow-hidden */}
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/60">
                          <MessageCircle className="w-4 h-4 text-emerald-500" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-text truncate">
                            Meu Agente • {useCase.label}
                          </p>
                          <p className="text-[11px] text-emerald-400 truncate">
                            Online • resposta média &lt; 2 min
                          </p>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-4 text-xs text-text-muted shrink-0">
                        <div className="flex flex-col items-end">
                          <span className="font-semibold text-text">
                            {useCase.kpi}
                          </span>
                          <span>{useCase.kpiLabel}</span>
                        </div>
                        <Badge
                          variant="secondary"
                          className="mb-2 rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-500 border border-emerald-500/60 shadow-[0_0_0_1px_rgba(16,185,129,0.9)] animate-badge-pulse"
                        >
                          Agente ativo
                        </Badge>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-stretch md:min-h-[420px] lg:min-h-[460px] w-full max-w-full">
                      {/* Conversa em si */}
                      <ScrollArea className="h-full min-h-[340px] sm:min-h-[400px] rounded-2xl border border-border/60 bg-[#0b141a] bg-[radial-gradient(circle_at_1px_1px,#202c33_1px,transparent_0)] bg-[length:26px_26px] p-4 w-full max-w-full">
                        <div className="flex h-full flex-col justify-end space-y-3 text-[13px] leading-relaxed w-full">
                          {messagesByUseCase[useCase.id].map((msg, index) => (
                            <div
                              key={index}
                              className={`flex w-full ${
                                msg.from === "user"
                                  ? "justify-end"
                                  : "justify-start"
                              }`}
                            >
                              <div
                                className={`max-w-[85%] sm:max-w-[82%] rounded-2xl px-3.5 py-2.5 shadow-sm break-words overflow-hidden flex flex-col ${
                                  msg.from === "user"
                                    ? "bg-[#005c4b] text-white"
                                    : "bg-[#202c33] text-white"
                                }`}
                              >
                                <p className="whitespace-pre-line break-words leading-relaxed">{msg.text}</p>
                                <span
                                  className={`mt-1 block text-[10px] self-end text-right ${
                                    msg.from === "user"
                                      ? "text-white/70"
                                      : "text-white/70"
                                  }`}
                                >
                                  {msg.time}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>

                      {/* Painel lateral com KPIs / destaques */}
                      <div className="flex h-full flex-col space-y-3 md:space-y-4">
                        <Card className="rounded-xl border border-border/50 hover:border-accent bg-background/80 p-4 sm:p-5 text-card-foreground shadow-adaptive hover:shadow-xl-adaptive transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:scale-[1.02]">
                          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-text-muted">
                            Destaque deste cenário
                          </p>
                          <p className="text-sm text-text leading-relaxed">
                            {useCase.highlight}
                          </p>
                        </Card>

                        <Card className="rounded-xl border border-border/50 hover:border-accent bg-background/80 p-4 sm:p-5 space-y-3 flex-1 text-card-foreground shadow-adaptive hover:shadow-xl-adaptive transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:scale-[1.02]">
                          <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                            Em números
                          </p>
                          <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                            <div className="rounded-xl bg-surface-2/80 p-3">
                              <p className="text-[11px] text-text-muted mb-1">
                                Tempo economizado
                              </p>
                              <p className="text-lg font-semibold text-text">
                                40h/mês
                              </p>
                              <p className="text-[11px] text-text-muted">
                                em tarefas manuais
                              </p>
                            </div>
                            <div className="rounded-xl bg-surface-2/80 p-3">
                              <p className="text-[11px] text-text-muted mb-1">
                                Atendimento
                              </p>
                              <p className="text-lg font-semibold text-text">
                                24/7
                              </p>
                              <p className="text-[11px] text-text-muted">
                                sem aumentar equipe
                              </p>
                            </div>
                            <div className="rounded-xl bg-surface-2/80 p-3">
                              <p className="text-[11px] text-text-muted mb-1">
                                Precisão
                              </p>
                              <p className="text-lg font-semibold text-text">
                                99,9%
                              </p>
                              <p className="text-[11px] text-text-muted">
                                seguindo regras de negócio
                              </p>
                            </div>
                            <div className="rounded-xl bg-surface-2/80 p-3">
                              <p className="text-[11px] text-text-muted mb-1">
                                Integrações
                              </p>
                              <p className="text-lg font-semibold text-text">
                                +4
                              </p>
                              <p className="text-[11px] text-text-muted">
                                Google Workspace & mais
                              </p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>

                    {/* Input fake do chat */}
                    <div className="mt-2 flex items-center gap-3 rounded-full bg-background/90 px-3 py-2 text-[13px] text-text-muted border border-border/60">
                      <div className="h-7 w-7 rounded-full bg-emerald-500/15 flex items-center justify-center">
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      </div>
                      <span className="flex-1 truncate">
                        Digite uma mensagem como se estivesse falando com seu
                        assistente...
                      </span>
                      <Button
                        size="sm"
                        className="h-7 rounded-full px-3 text-[11px] btn-primary-gradient"
                      >
                        Enviar
                      </Button>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;


