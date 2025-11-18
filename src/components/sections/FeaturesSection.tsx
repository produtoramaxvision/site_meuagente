import { Card } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Wallet, 
  Target, 
  Calendar, 
  CheckSquare, 
  BarChart3, 
  Bell, 
  Settings 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      description: "Visão consolidada de receitas, despesas, saldo e gráficos de evolução diária.",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Wallet,
      title: "Gestão de Contas",
      description: "Registre receitas/despesas, categorize (12 categorias), valide duplicatas automaticamente.",
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600",
    },
    {
      icon: Target,
      title: "Metas Financeiras",
      description: "Crie metas de economia, compra, viagem ou educação com acompanhamento visual.",
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600",
    },
    {
      icon: Calendar,
      title: "Agenda Completa",
      description: "6 visualizações (dia, semana, mês, lista, timeline, ano), drag-and-drop de eventos.",
      color: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-600",
    },
    {
      icon: CheckSquare,
      title: "Tarefas",
      description: "Organize tarefas com prioridades (alta, média, baixa), prazos e drag-and-drop.",
      color: "from-pink-500/10 to-rose-500/10",
      iconColor: "text-pink-600",
    },
    {
      icon: BarChart3,
      title: "Relatórios Avançados",
      description: "Filtros por período/categoria, gráficos interativos, exportação CSV/PDF/JSON.",
      color: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600",
    },
    {
      icon: Bell,
      title: "Notificações Inteligentes",
      description: "Alertas de contas vencendo, metas próximas, saldo baixo, eventos e tarefas.",
      color: "from-yellow-500/10 to-amber-500/10",
      iconColor: "text-yellow-600",
    },
    {
      icon: Settings,
      title: "Configurações Completas",
      description: "Dados pessoais, segurança, tema claro/escuro, notificações, backup e exportação.",
      color: "from-gray-500/10 to-slate-500/10",
      iconColor: "text-gray-600",
    },
  ];

  return (
    <section className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4">
            Recursos Completos do App
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Além dos Agentes de IA, tenha acesso a uma plataforma completa de gestão
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group p-6 bg-gradient-to-br ${feature.color} border-border/50 hover:border-brand-900/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-background/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-text mb-2">{feature.title}</h3>
              <p className="text-sm text-text-muted">{feature.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
            </Card>
          ))}
        </div>

        {/* Integration callout */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-border/50">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-text mb-4">
              Integrações Google Workspace
            </h3>
            <p className="text-text-muted mb-6">
              Integração com Google Calendar, Drive, Tasks e Gmail disponível nos planos <strong>Business/Premium</strong>.
              <br />
              Implantação opcional com custo adicional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
                <span className="text-sm font-semibold">Google Calendar</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
                <span className="text-sm font-semibold">Google Drive</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
                <span className="text-sm font-semibold">Google Tasks</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50">
                <span className="text-sm font-semibold">Gmail</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
