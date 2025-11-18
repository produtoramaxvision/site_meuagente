import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Calculator } from "lucide-react";
import { useState } from "react";

const Planos = () => {
  const [hoursPerMonth, setHoursPerMonth] = useState(40);
  const [costPerHour, setCostPerHour] = useState(50);
  const [leadsLost, setLeadsLost] = useState(10);

  const calculateROI = () => {
    const timeSavings = hoursPerMonth * costPerHour;
    const leadRecovery = leadsLost * 200; // Assuming R$200 per lead
    const totalSavings = timeSavings + leadRecovery;
    return {
      timeSavings,
      leadRecovery,
      totalSavings,
      basicROI: ((totalSavings - 497) / 497 * 100).toFixed(0),
      businessROI: ((totalSavings - 997) / 997 * 100).toFixed(0),
    };
  };

  const roi = calculateROI();

  const plans = [
    {
      name: "Free",
      price: "R$ 0",
      period: "gratuito",
      description: "Explore sem custo",
      badge: null,
      features: [
        { text: "Acesso ao app em nuvem", included: true },
        { text: "Agente Financeiro (manual)", included: true },
        { text: "Agente Web Search", included: true },
        { text: "Agente de Scrape (básico)", included: true },
        { text: "Automação via WhatsApp", included: false },
        { text: "Exportação CSV/PDF", included: false },
        { text: "Número WhatsApp dedicado", included: false },
        { text: "Backups", included: false },
        { text: "Suporte", included: false },
        { text: "Sub-agentes Business/Premium", included: false },
      ],
      cta: "Começar Agora",
      popular: false,
    },
    {
      name: "Básico",
      price: "R$ 497",
      period: "/mês",
      description: "Para profissionais e pequenas equipes",
      badge: null,
      features: [
        { text: "Tudo do Free +", included: true },
        { text: "Automação via WhatsApp (lançamentos manuais)", included: true },
        { text: "Exportação CSV/PDF", included: true },
        { text: "Agente Scrape intermediário", included: true },
        { text: "Infraestrutura em nuvem Meu Agente", included: true },
        { text: "Número WhatsApp dedicado", included: false },
        { text: "Implantação inclusa", included: false },
        { text: "Suporte prioritário", included: false },
        { text: "Sub-agentes Business", included: false },
        { text: "Backups automáticos", included: false },
      ],
      cta: "Contratar Básico",
      popular: false,
    },
    {
      name: "Business",
      price: "R$ 997",
      period: "/mês",
      description: "Para empresas em crescimento",
      badge: "MAIS POPULAR",
      features: [
        { text: "Tudo do Básico +", included: true },
        { text: "Número WhatsApp dedicado", included: true },
        { text: "Implantação inclusa", included: true },
        { text: "Suporte prioritário 24/7 (SLA 2h)", included: true },
        { text: "Agente SDR (qualificação + agendamento)", included: true },
        { text: "Agente Marketing (Google Ads)", included: true },
        { text: "Agente Agendamento (Calendar/Drive/Tasks)", included: true },
        { text: "Agente Dev (debugging + sugestões)", included: true },
        { text: "Agente Vídeo (Veo 3)", included: true },
        { text: "Integrações Google (opcional, custo adicional)", included: true },
        { text: "Taxa manutenção: R$ 149/h", included: true },
      ],
      cta: "Contratar Business",
      popular: true,
    },
    {
      name: "Premium",
      price: "R$ 1.497",
      period: "/mês",
      description: "Tudo do Business + recursos exclusivos",
      badge: "MELHOR VALOR",
      features: [
        { text: "Tudo do Business +", included: true },
        { text: "Agente de Confirmação (diário)", included: true },
        { text: "Agente de Resumo de Grupos", included: true },
        { text: "Agente de Remarketing", included: true },
        { text: "Agente de Follow-up", included: true },
        { text: "Pesquisa/extração avançada", included: true },
        { text: "Backups diários off-site (3-2-1)", included: true },
        { text: "Cota maior Vídeo (Veo 3)", included: true },
        { text: "Prioridade máxima no suporte", included: true },
        { text: "Análises mensais personalizadas", included: true },
        { text: "Taxa manutenção: R$ 149/h", included: true },
      ],
      cta: "Contratar Premium",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-surface via-background to-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gradient mb-6">
            Planos e Preços
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho e necessidade do seu negócio
          </p>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-surface/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-brand-900/5 to-brand-700/5 border-brand-900/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-900/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-brand-900" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text">Calculadora de ROI</h2>
                <p className="text-sm text-text-muted">Veja quanto você pode economizar</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Horas/mês em tarefas operacionais
                </label>
                <input
                  type="number"
                  value={hoursPerMonth}
                  onChange={(e) => setHoursPerMonth(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-brand-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Custo/hora da equipe (R$)
                </label>
                <input
                  type="number"
                  value={costPerHour}
                  onChange={(e) => setCostPerHour(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-brand-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text mb-2">
                  Leads perdidos/mês
                </label>
                <input
                  type="number"
                  value={leadsLost}
                  onChange={(e) => setLeadsLost(Number(e.target.value))}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-brand-900"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 p-6 rounded-xl bg-background/50 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-sm text-text-muted mb-1">Economia de Tempo</p>
                <p className="text-2xl font-bold text-success">R$ {roi.timeSavings.toLocaleString('pt-BR')}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-text-muted mb-1">Recuperação de Leads</p>
                <p className="text-2xl font-bold text-success">R$ {roi.leadRecovery.toLocaleString('pt-BR')}</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-text-muted mb-1">Economia Total/Mês</p>
                <p className="text-2xl font-bold text-brand-900">R$ {roi.totalSavings.toLocaleString('pt-BR')}</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-success/10 border border-success/20">
              <p className="text-sm text-text">
                <strong>ROI Plano Básico:</strong> +{roi.basicROI}% | <strong>ROI Plano Business:</strong> +{roi.businessROI}%
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Pricing table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-4">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative p-8 bg-background border-border/50 transition-all duration-300 ${
                  plan.popular
                    ? "ring-2 ring-brand-900 shadow-2xl scale-105 lg:-mt-4 lg:mb-4"
                    : "hover:border-brand-900/30 hover:shadow-xl"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-brand-900 to-brand-700 text-white px-4 py-1 font-bold">
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-extrabold text-text">{plan.price}</span>
                    <span className="text-text-muted">{plan.period}</span>
                  </div>
                  <p className="text-sm text-text-muted">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-text" : "text-text-muted"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full group relative overflow-hidden ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-800 hover:to-brand-600 text-white shadow-lg"
                      : ""
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-text-muted mb-4">Não sabe qual plano escolher?</p>
            <Button variant="outline" size="lg">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12">
            Comparação Completa de Recursos
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-xl border border-border/50">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-text">Recurso</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-text">Free</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-text">Básico</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-text bg-brand-900/5">Business</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-text">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/50">
                <tr>
                  <td className="px-6 py-4 text-sm text-text">Automação via WhatsApp</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-brand-900/5"><Check className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-success mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-text">Número WhatsApp dedicado</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-brand-900/5"><Check className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-success mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-text">Sub-agentes Business (SDR, Marketing, Dev, Vídeo)</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-brand-900/5"><Check className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-success mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-text">Agentes Premium Exclusivos</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-brand-900/5"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-success mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-text">Backups diários off-site</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-brand-900/5"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-success mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-text">Suporte prioritário 24/7</td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><X className="w-5 h-5 text-text-muted mx-auto" /></td>
                  <td className="px-6 py-4 text-center bg-brand-900/5"><Check className="w-5 h-5 text-success mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><Check className="w-5 h-5 text-success mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planos;
