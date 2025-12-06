import { Badge } from "@/components/ui/badge";
import { MorphingCardStack, type CardData } from "@/components/ui/morphing-card-stack";
import { 
  DollarSign, 
  Search, 
  Database, 
  UserCheck, 
  TrendingUp, 
  Calendar, 
  Code, 
  Video,
  CheckCircle,
  FileText,
  Repeat,
  PhoneCall
} from "lucide-react";

const AgentsSection = () => {
  const agentCards: CardData[] = [
    {
      id: "financeiro",
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: "Agente Financeiro",
      description: "Controle total de receitas, despesas e exportações. Categorias inteligentes e alertas automáticos.",
      tier: "Todos os planos",
      color: "rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1)",
      titleColor: "text-green-600 dark:text-green-400",
      backgroundClass: "bg-gradient-to-br from-emerald-500/12 via-background to-surface",
      borderClass: "border border-emerald-500/30",
      iconBgClass: "bg-emerald-500/10 ring-1 ring-emerald-500/25",
    },
    {
      id: "websearch",
      icon: <Search className="w-6 h-6 text-blue-500" />,
      title: "Agente Web Search",
      description: "Pesquise informações na web, tendências e concorrentes em segundos.",
      tier: "Todos os planos",
      color: "rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1)",
      titleColor: "text-blue-600 dark:text-blue-400",
      backgroundClass: "bg-gradient-to-br from-sky-500/12 via-background to-surface",
      borderClass: "border border-sky-500/30",
      iconBgClass: "bg-sky-500/10 ring-1 ring-sky-500/25",
    },
    {
      id: "scrape",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      title: "Agente de Scrape/Extract",
      description: "Extraia dados de fontes permitidas, gere relatórios CSV/JSON estruturados.",
      tier: "Todos os planos",
      color: "rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)",
      titleColor: "text-purple-600 dark:text-purple-400",
      backgroundClass: "bg-gradient-to-br from-purple-500/12 via-background to-surface",
      borderClass: "border border-purple-500/30",
      iconBgClass: "bg-purple-500/10 ring-1 ring-purple-500/25",
    },
    {
      id: "sdr",
      icon: <UserCheck className="w-6 h-6 text-orange-500" />,
      title: "Agente SDR",
      description: "Qualifique leads, agende reuniões no Google Calendar, envie confirmações automáticas.",
      tier: "Business/Premium",
      color: "rgba(249, 115, 22, 0.1), rgba(239, 68, 68, 0.1)",
      titleColor: "text-orange-600 dark:text-orange-400",
      backgroundClass: "bg-gradient-to-br from-orange-500/12 via-background to-surface",
      borderClass: "border border-orange-500/30",
      iconBgClass: "bg-orange-500/10 ring-1 ring-orange-500/25",
    },
    {
      id: "marketing",
      icon: <TrendingUp className="w-6 h-6 text-pink-500" />,
      title: "Agente de Marketing",
      description: "Analise campanhas Google Ads, otimize termos, receba alertas de performance.",
      tier: "Business/Premium",
      color: "rgba(236, 72, 153, 0.1), rgba(244, 63, 94, 0.1)",
      titleColor: "text-pink-600 dark:text-pink-400",
      backgroundClass: "bg-gradient-to-br from-rose-500/12 via-background to-surface",
      borderClass: "border border-rose-500/30",
      iconBgClass: "bg-rose-500/10 ring-1 ring-rose-500/25",
    },
    {
      id: "agendamento",
      icon: <Calendar className="w-6 h-6 text-indigo-500" />,
      title: "Agente de Agendamento",
      description: "Gerencie Google Calendar, Drive, Tasks e envie lembretes automáticos.",
      tier: "Básico/Business/Premium",
      color: "rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.1)",
      titleColor: "text-indigo-600 dark:text-indigo-400",
      backgroundClass: "bg-gradient-to-br from-indigo-500/12 via-background to-surface",
      borderClass: "border border-indigo-500/30",
      iconBgClass: "bg-indigo-500/10 ring-1 ring-indigo-500/25",
    },
    {
      id: "dev",
      icon: <Code className="w-6 h-6 text-gray-500" />,
      title: "Agente de Dev",
      description: "Debugging, sugestões de código, suporte técnico em múltiplas linguagens.",
      tier: "Business/Premium",
      color: "rgba(107, 114, 128, 0.1), rgba(100, 116, 139, 0.1)",
      titleColor: "text-gray-600 dark:text-gray-400",
      backgroundClass: "bg-gradient-to-br from-slate-500/12 via-background to-surface",
      borderClass: "border border-slate-500/30",
      iconBgClass: "bg-slate-500/10 ring-1 ring-slate-500/25",
    },
    {
      id: "video",
      icon: <Video className="w-6 h-6 text-violet-500" />,
      title: "Agente de Vídeo – Veo 3",
      description: "Gere vídeos profissionais a partir de roteiros, ideal para marketing.",
      tier: "Business/Premium",
      color: "rgba(139, 92, 246, 0.1), rgba(168, 85, 247, 0.1)",
      titleColor: "text-violet-600 dark:text-violet-400",
      backgroundClass: "bg-gradient-to-br from-violet-500/12 via-background to-surface",
      borderClass: "border border-violet-500/30",
      iconBgClass: "bg-violet-500/10 ring-1 ring-violet-500/25",
    },
  ];

  const premiumAgents = [
    {
      icon: CheckCircle,
      name: "Agente de Confirmação",
      description: "Confirma reuniões e tarefas diariamente",
    },
    {
      icon: FileText,
      name: "Agente de Resumo de Grupos",
      description: "Resumo diário de grupos do WhatsApp",
    },
    {
      icon: Repeat,
      name: "Agente de Remarketing",
      description: "Reengajamento inteligente de leads inativos",
    },
    {
      icon: PhoneCall,
      name: "Agente de Follow-up",
      description: "Lembretes automáticos de contatos inativos",
    },
  ];

  return (
    <section className="py-24 bg-background section-texture-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4 pb-2 leading-normal">
            Agentes de IA Especializados
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto mb-2">
            Cada agente é treinado para executar tarefas específicas com precisão e velocidade
          </p>
          <p className="text-sm text-text-muted">
            Alterne entre os modos de visualização: pilha, grade ou lista
          </p>
        </div>

        {/* Morphing Card Stack */}
        <MorphingCardStack 
          cards={agentCards} 
          defaultLayout="stack"
          className="mb-16"
        />

        {/* Premium exclusive agents */}
        <div className="relative p-8 rounded-2xl bg-card-gradient border">
          <div className="absolute -top-4 left-8">
            <Badge className="btn-primary-gradient px-4 py-1 text-sm font-bold">
              EXCLUSIVO PREMIUM
            </Badge>
          </div>

          <h3 className="text-2xl font-bold text-text mb-6 mt-4">
            Agentes Premium Exclusivos
          </h3>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {premiumAgents.map((agent, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/70 px-4 py-3 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="w-10 h-10 rounded-lg bg-subtle-10 flex items-center justify-center flex-shrink-0">
                  <agent.icon className="w-5 h-5 icon-accent" />
                </div>
                <div>
                  <p className="font-semibold text-text text-sm mb-1">{agent.name}</p>
                  <p className="text-xs text-text-muted">{agent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
