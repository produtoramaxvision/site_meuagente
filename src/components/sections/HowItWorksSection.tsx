import { Card } from "@/components/ui/card";
import { Smartphone, Users, MessageSquare, BarChart, Zap } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Smartphone,
      title: "Conecte seu WhatsApp",
      description: "Use seu número ou nossa infraestrutura dedicada - configuração em minutos",
    },
    {
      number: "02",
      icon: Users,
      title: "Escolha seus Agentes",
      description: "SDR, Financeiro, Marketing, Agendamento, Dev, Vídeo e mais",
    },
    {
      number: "03",
      icon: MessageSquare,
      title: "Converse Naturalmente",
      description: "Envie mensagens como faria com um assistente humano - sem comandos complexos",
    },
    {
      number: "04",
      icon: BarChart,
      title: "Receba Resultados Instantâneos",
      description: "Relatórios, agendamentos, exportações e automações prontas",
    },
    {
      number: "05",
      icon: Zap,
      title: "Escale Sem Limites",
      description: "Adicione mais agentes conforme sua necessidade cresce",
    },
  ];

  return (
    <section className="py-24 bg-surface/30 section-texture-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4 pb-2 leading-normal">
            Como Funciona
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Configure sua equipe de Agentes de IA em 5 passos simples
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 line-decorative -translate-y-1/2"></div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 relative">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-2xl p-6 bg-background/80 backdrop-blur-sm border-border/50 hover:border-text/20 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl-adaptive"
              >
                <div className="relative z-10 space-y-4">
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full btn-primary-gradient flex items-center justify-center font-bold text-lg shadow-adaptive">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-6 h-6 text-text" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-sm text-text-muted">{step.description}</p>
                </div>

                {/* Hover effect (camada visual, sem capturar clique) */}
                <div className="pointer-events-none absolute inset-0 sweep-hover -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
