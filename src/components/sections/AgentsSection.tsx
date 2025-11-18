import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  const agents = [
    {
      icon: DollarSign,
      name: "Agente Financeiro",
      description: "Controle total de receitas, despesas e exportações. Categorias inteligentes e alertas automáticos.",
      tier: "Todos os planos",
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600",
    },
    {
      icon: Search,
      name: "Agente Web Search",
      description: "Pesquise informações na web, tendências e concorrentes em segundos.",
      tier: "Todos os planos",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Database,
      name: "Agente de Scrape/Extract",
      description: "Extraia dados de fontes permitidas, gere relatórios CSV/JSON estruturados.",
      tier: "Todos os planos",
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600",
    },
    {
      icon: UserCheck,
      name: "Agente SDR",
      description: "Qualifique leads, agende reuniões no Google Calendar, envie confirmações automáticas.",
      tier: "Business/Premium",
      color: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-600",
    },
    {
      icon: TrendingUp,
      name: "Agente de Marketing",
      description: "Analise campanhas Google Ads, otimize termos, receba alertas de performance.",
      tier: "Business/Premium",
      color: "from-pink-500/10 to-rose-500/10",
      iconColor: "text-pink-600",
    },
    {
      icon: Calendar,
      name: "Agente de Agendamento",
      description: "Gerencie Google Calendar, Drive, Tasks e envie lembretes automáticos.",
      tier: "Business/Premium",
      color: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600",
    },
    {
      icon: Code,
      name: "Agente de Dev",
      description: "Debugging, sugestões de código, suporte técnico em múltiplas linguagens.",
      tier: "Business/Premium",
      color: "from-gray-500/10 to-slate-500/10",
      iconColor: "text-gray-600",
    },
    {
      icon: Video,
      name: "Agente de Vídeo – Veo 3",
      description: "Gere vídeos profissionais a partir de roteiros, ideal para marketing.",
      tier: "Business/Premium",
      color: "from-violet-500/10 to-purple-500/10",
      iconColor: "text-violet-600",
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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4">
            Agentes de IA Especializados
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            Cada agente é treinado para executar tarefas específicas com precisão e velocidade
          </p>
        </div>

        {/* Main agents grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {agents.map((agent, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden p-6 bg-gradient-to-br ${agent.color} border-border/50 hover:border-brand-900/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-background/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <agent.icon className={`w-6 h-6 ${agent.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-text mb-2">{agent.name}</h3>
              <p className="text-sm text-text-muted mb-4">{agent.description}</p>

              {/* Tier badge */}
              <Badge 
                variant="secondary" 
                className="text-xs"
              >
                {agent.tier}
              </Badge>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Card>
          ))}
        </div>

        {/* Premium exclusive agents */}
        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-brand-900/5 to-brand-700/5 border border-brand-900/20">
          <div className="absolute -top-4 left-8">
            <Badge className="bg-gradient-to-r from-brand-900 to-brand-700 text-white px-4 py-1 text-sm font-bold">
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
                className="flex items-start gap-3 p-4 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-brand-900/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-900/10 flex items-center justify-center flex-shrink-0">
                  <agent.icon className="w-5 h-5 text-brand-900" />
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
