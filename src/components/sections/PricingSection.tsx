import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "R$ 0",
      period: "gratuito",
      description: "Explore sem custo",
      badge: null,
      features: [
        { text: "Agente Financeiro", included: true },
        { text: "Agente Web Search", included: true },
        { text: "Agente de Scrape (básico)", included: true },
        { text: "Automação via WhatsApp", included: false },
        { text: "Exportação CSV/PDF", included: false },
        { text: "Número WhatsApp dedicado", included: false },
        { text: "Sub-agentes Business", included: false },
        { text: "Suporte prioritário", included: false },
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
        { text: "Automação via WhatsApp", included: true },
        { text: "Exportação CSV/PDF", included: true },
        { text: "Agente Scrape intermediário", included: true },
        { text: "Lançamentos manuais", included: true },
        { text: "Número WhatsApp dedicado", included: false },
        { text: "Implantação inclusa", included: false },
        { text: "Suporte prioritário", included: false },
      ],
      cta: "Começar Agora",
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
        { text: "Suporte prioritário 24/7", included: true },
        { text: "Agente SDR", included: true },
        { text: "Agente Marketing (Google Ads)", included: true },
        { text: "Agente Agendamento", included: true },
        { text: "Agente Dev + Vídeo", included: true },
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
        { text: "Agente de Confirmação", included: true },
        { text: "Agente de Resumo de Grupos", included: true },
        { text: "Agente de Remarketing", included: true },
        { text: "Agente de Follow-up", included: true },
        { text: "Pesquisa/extração avançada", included: true },
        { text: "Backups diários off-site", included: true },
        { text: "Cota maior Vídeo (Veo 3)", included: true },
        { text: "Taxa manutenção: R$ 149/h", included: true },
      ],
      cta: "Contratar Premium",
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-4">
            Planos e Preços
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Escolha o plano ideal para o tamanho do seu negócio
          </p>
        </div>

        {/* Pricing cards */}
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
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-brand-900 to-brand-700 text-white px-4 py-1 font-bold">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-text">{plan.price}</span>
                  <span className="text-text-muted">{plan.period}</span>
                </div>
                <p className="text-sm text-text-muted">{plan.description}</p>
              </div>

              {/* Features */}
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

              {/* CTA */}
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

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-text-muted mb-4">
            Não sabe qual plano escolher?
          </p>
          <Button variant="outline" size="lg">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
