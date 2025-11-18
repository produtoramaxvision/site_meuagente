import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, FolderOpen, CheckSquare, Mail, Zap } from "lucide-react";

const IntegrationsSection = () => {
  const integrations = [
    {
      icon: Calendar,
      name: "Google Calendar",
      description: "Crie, edite e gerencie eventos e reuniões automaticamente diretamente do WhatsApp.",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: FolderOpen,
      name: "Google Drive",
      description: "Anexe arquivos, documentos e apresentações em eventos e compartilhe via WhatsApp.",
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600",
    },
    {
      icon: CheckSquare,
      name: "Google Tasks",
      description: "Crie tarefas, defina prazos e receba lembretes automáticos de pendências.",
      color: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-600",
    },
    {
      icon: Mail,
      name: "Gmail",
      description: "Envie e-mails de confirmação, lembretes e follow-ups automaticamente.",
      color: "from-red-500/10 to-pink-500/10",
      iconColor: "text-red-600",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-xs font-semibold">
            <Zap className="w-3 h-3 mr-1 inline" />
            Business/Premium
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4">
            Integrações Poderosas
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Conecte-se ao Google Workspace e gerencie tudo direto do WhatsApp
          </p>
        </div>

        {/* Integrations grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden p-8 bg-gradient-to-br ${integration.color} border-border/50 hover:border-brand-900/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <integration.icon className={`w-8 h-8 ${integration.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text mb-3">{integration.name}</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {integration.description}
              </p>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Card>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-text-muted max-w-3xl mx-auto">
            <strong>Nota:</strong> As integrações com Google Workspace estão disponíveis nos planos{" "}
            <span className="text-brand-900 font-semibold">Business</span> e{" "}
            <span className="text-brand-900 font-semibold">Premium</span> mediante implantação opcional com custo adicional. Todas as integrações seguem as melhores práticas de segurança e requerem OAuth com escopos mínimos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;

