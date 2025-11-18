import { Card } from "@/components/ui/card";
import { Clock, TrendingUp, Target } from "lucide-react";

const WhySection = () => {
  const problems = [
    {
      icon: Clock,
      title: "Tempo Perdido com Tarefas Operacionais Repetitivas",
      problem: "Sua equipe gasta horas em lançamentos manuais, atualizações e processos mecânicos",
      solution: "Agentes de IA automatizam tudo via WhatsApp - envie uma mensagem e pronto",
      color: "from-red-500/10 to-orange-500/10",
      iconColor: "text-red-600",
    },
    {
      icon: TrendingUp,
      title: "Baixa Conversão por Falta de Resposta Rápida",
      problem: "Leads perdidos porque ninguém respondeu fora do horário comercial",
      solution: "Atendimento 24/7 sem perder nenhum lead - qualificação e agendamento automáticos",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
    },
    {
      icon: Target,
      title: "Processos Desorganizados e Dados Dispersos",
      problem: "Informações espalhadas em planilhas, e-mails e aplicativos diferentes",
      solution: "Centralização total com relatórios automáticos e exportação estruturada",
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4">
            Por Que Meu Agente?
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Resolva os principais gargalos operacionais do seu negócio
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden p-8 bg-gradient-to-br ${item.color} border-border/50 hover:border-brand-900/30 transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-background/50 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-text mb-4">{item.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-error mb-1">❌ Problema:</p>
                  <p className="text-sm text-text-muted">{item.problem}</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-success mb-1">✅ Solução:</p>
                  <p className="text-sm text-text">{item.solution}</p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
