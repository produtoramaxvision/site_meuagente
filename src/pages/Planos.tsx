import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Check, X, Calculator, ArrowRight, Sparkles, Loader2 } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";
import { createSoftwareApplicationSchema } from "@/lib/seo";
import { useSubscription } from "@/hooks/use-subscription";

const Planos = () => {
  const { handleSubscribe, loading } = useSubscription();
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
      id: "free",
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
      id: "basic",
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
      id: "business",
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
      id: "premium",
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

  const popularPlan = plans.find((plan) => plan.popular) ?? plans[2];

  const onPlanClick = (planId: string) => {
    if (planId === "free") {
      window.open("https://app.meuagente.api.br/?plan=free", "_blank");
    } else {
      handleSubscribe(planId);
    }
  };

  return (
    <>
      <SEO
        title="Planos e Preços – Meu Agente | A partir de R$ 497/mês"
        description="Escolha o plano ideal: Free (gratuito), Básico (R$ 497/mês), Business (R$ 997/mês) ou Premium (R$ 1.497/mês). Compare recursos, calcule ROI e contrate online."
        keywords={["planos meu agente", "preços automação whatsapp", "quanto custa agente ia", "sdr virtual preço", "whatsapp business preço"]}
        canonicalUrl="/planos"
        structuredData={createSoftwareApplicationSchema()}
      />
      <div className="min-h-screen bg-background">
        {/* Hero section */}
        <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-brand-900/15 via-background to-surface">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light">
            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-brand-900/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-brand-700/10 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] items-center lg:items-stretch">
              <div className="flex flex-col gap-8 lg:h-full lg:justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-medium text-text-muted mb-4">
                  <Sparkles className="h-3 w-3 text-brand-900" />
                  <span>Planos pensados para operação em escala</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient mb-6 pb-2 leading-normal">
                  Planos e preços que acompanham o crescimento do seu negócio
                </h1>
                <p className="text-lg sm:text-xl text-text-muted max-w-xl">
                  Compare recursos, calcule o ROI em tempo real e escolha o plano ideal para automatizar sua operação no WhatsApp com agentes de IA.
                </p>
                <div className="grid gap-4 sm:grid-cols-3 max-w-xl text-sm">
                  <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3">
                    <p className="font-semibold text-text mb-1">Sem fidelidade</p>
                    <p className="text-text-muted">Planos mensais com possibilidade de upgrade a qualquer momento.</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3">
                    <p className="font-semibold text-text mb-1">Onboarding guiado</p>
                    <p className="text-text-muted">Implantação assistida nos planos Business e Premium.</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3">
                    <p className="font-semibold text-text mb-1">Foco em resultado</p>
                    <p className="text-text-muted">Agentes pensados para recuperar leads e aumentar receita.</p>
                  </div>
                </div>
              </div>

              <Card className="relative overflow-hidden border-brand-900/30 bg-background/80 backdrop-blur-xl p-8 shadow-2xl">
                <div className="absolute inset-x-0 -top-32 h-40 bg-gradient-to-b from-brand-900/20 via-brand-900/5 to-transparent pointer-events-none" />
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-900/80 mb-1">
                        Plano recomendado
                      </p>
                      <h2 className="text-2xl font-bold text-text">{popularPlan.name}</h2>
                      <p className="text-sm text-text-muted max-w-xs">{popularPlan.description}</p>
                    </div>
                    {popularPlan.badge && (
                      <Badge className="bg-gradient-to-r from-brand-900 to-brand-700 text-white px-4 py-1 font-bold shadow-sm">
                        {popularPlan.badge}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-text">{popularPlan.price}</span>
                    <span className="text-text-muted">{popularPlan.period}</span>
                  </div>

                  <ul className="space-y-2 text-sm">
                    {popularPlan.features.slice(0, 7).map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-text">
                        <Check className="h-4 w-4 text-success" />
                        <span>{feature.text}</span>
                      </li>
                    ))}
                    {popularPlan.features.length > 7 && (
                      <li className="text-xs text-text-muted">
                        +{popularPlan.features.length - 7} recursos avançados incluídos
                      </li>
                    )}
                  </ul>

                  <Button
                    className="mt-2 w-full group relative overflow-hidden bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-800 hover:to-brand-600 text-white shadow-lg"
                    onClick={() => onPlanClick(popularPlan.id)}
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    ) : null}
                    Começar com o plano Business
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                  </Button>

                  <p className="text-xs text-text-muted text-center mt-1">
                    Dúvida entre planos? Você pode fazer upgrade ou downgrade a qualquer momento.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-20 sm:py-24 bg-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 md:p-10 bg-gradient-to-br from-brand-900/5 to-brand-700/5 border-brand-900/25 shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-900/10 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-brand-900" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text">Calculadora de ROI</h2>
                    <p className="text-sm text-text-muted">
                      Ajuste os valores e veja, em poucos segundos, quanto o Meu Agente pode economizar por mês.
                    </p>
                  </div>
                </div>
                <div className="text-xs text-text-muted">
                  <p>Mudanças não afetam o preço do plano, apenas sua estimativa de retorno.</p>
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-start">
                <div className="space-y-6">
                  <div>
                    <Label className="block text-sm font-medium text-text mb-2">
                      Horas/mês em tarefas operacionais
                    </Label>
                    <Slider
                      value={[hoursPerMonth]}
                      min={0}
                      max={200}
                      step={5}
                      onValueChange={(value) => setHoursPerMonth(value[0])}
                    />
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <p className="text-xs text-text-muted">
                        Inclua tarefas manuais como confirmação de presença, follow-ups e organização de leads.
                      </p>
                      <div className="w-24">
                        <Input
                          type="number"
                          value={hoursPerMonth}
                          onChange={(e) => setHoursPerMonth(Number(e.target.value))}
                          className="h-9 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-text mb-2">
                      Custo/hora da equipe (R$)
                    </Label>
                    <Slider
                      value={[costPerHour]}
                      min={10}
                      max={500}
                      step={10}
                      onValueChange={(value) => setCostPerHour(value[0])}
                    />
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <p className="text-xs text-text-muted">
                        Utilize o custo médio da hora de quem faz hoje esse trabalho manual.
                      </p>
                      <div className="w-24">
                        <Input
                          type="number"
                          value={costPerHour}
                          onChange={(e) => setCostPerHour(Number(e.target.value))}
                          className="h-9 text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="block text-sm font-medium text-text mb-2">
                      Leads perdidos/mês
                    </Label>
                    <Slider
                      value={[leadsLost]}
                      min={0}
                      max={200}
                      step={5}
                      onValueChange={(value) => setLeadsLost(value[0])}
                    />
                    <div className="mt-3 flex items-center justify-between gap-4">
                      <p className="text-xs text-text-muted">
                        Quantos contatos deixam de ser atendidos ou respondidos hoje?
                      </p>
                      <div className="w-24">
                        <Input
                          type="number"
                          value={leadsLost}
                          onChange={(e) => setLeadsLost(Number(e.target.value))}
                          className="h-9 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-background/80 backdrop-blur border border-border/60">
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-text-muted mb-3">
                      Resultado estimado
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="text-left sm:text-center">
                        <p className="text-xs text-text-muted mb-1">Economia de tempo</p>
                        <p className="text-2xl font-bold text-success">
                          R$ {roi.timeSavings.toLocaleString("pt-BR")}
                        </p>
                      </div>
                      <div className="text-left sm:text-center">
                        <p className="text-xs text-text-muted mb-1 whitespace-nowrap">
                          Recuperação de leads
                        </p>
                        <p className="text-2xl font-bold text-success">
                          R$ {roi.leadRecovery.toLocaleString("pt-BR")}
                        </p>
                      </div>
                      <div className="text-left sm:text-center">
                        <p className="text-xs text-text-muted mb-1">Economia total/mês</p>
                        <p className="text-2xl font-bold text-brand-900">
                          R$ {roi.totalSavings.toLocaleString("pt-BR")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 rounded-xl bg-success/10 border border-success/25 space-y-3">
                    <p className="text-sm text-text">
                      <strong>ROI Plano Básico:</strong> +{roi.basicROI}% |{" "}
                      <strong>ROI Plano Business:</strong> +{roi.businessROI}%
                    </p>
                    <p className="text-xs text-text-muted">
                      Estimativa baseada em leads recuperados a R$ 200,00 por oportunidade. Os resultados reais podem
                      variar conforme seu funil e ticket médio.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[11px] text-text-muted leading-relaxed">
                * <strong>ROI (Retorno sobre Investimento)</strong> é a relação entre o que você ganha e o que investe,
                expresso em porcentagem. Em termos simples: quanto maior o ROI, maior a economia ou o ganho financeiro em
                comparação ao custo do plano.
              </p>
            </Card>
          </div>
        </section>

        {/* Pricing & comparison */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-background via-surface/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-10">
              <Badge variant="outline" className="mb-3 uppercase tracking-[0.18em] text-xs">
                Planos Meu Agente
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-3">
                Compare planos por valor, recurso e momento do negócio
              </h2>
              <p className="text-text-muted max-w-2xl">
                Entenda rapidamente o que cada plano oferece, de forma visual e responsiva, inspirado em práticos
                comparativos de SaaS modernos.
              </p>
            </div>

            <Tabs defaultValue="plans" className="w-full">
              <TabsList className="mx-auto mb-12 md:mb-14 flex w-full max-w-md justify-center">
                <TabsTrigger
                  value="plans"
                  className="flex-1 rounded-full text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-text data-[state=active]:shadow-md data-[state=active]:border border-transparent"
                >
                  Visão por plano
                </TabsTrigger>
                <TabsTrigger
                  value="comparison"
                  className="flex-1 rounded-full text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-text data-[state=active]:shadow-md data-[state=active]:border border-transparent"
                >
                  Comparação detalhada
                </TabsTrigger>
              </TabsList>

              <TabsContent value="plans">
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 items-stretch">
                  {plans.map((plan, index) => (
                    <Card
                      key={index}
                      className={`relative flex flex-col h-full p-8 bg-background border-border/60 transition-all duration-300 ${
                        plan.popular
                          ? "ring-2 ring-brand-900 shadow-2xl scale-105"
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
                        className={`mt-auto w-full group relative overflow-hidden ${
                          plan.popular
                            ? "bg-gradient-to-r from-brand-900 to-brand-700 hover:from-brand-800 hover:to-brand-600 text-white shadow-lg"
                            : ""
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        onClick={() => onPlanClick(plan.id)}
                        disabled={loading}
                      >
                        {loading ? (
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                        ) : null}
                        {plan.cta}
                        {!loading && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                        )}
                      </Button>
                    </Card>
                  ))}
                </div>

                <div className="mt-14 md:mt-16 text-center">
                  <p className="text-text-muted mb-4">Não sabe qual plano escolher?</p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2"
                    onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
                  >
                    Falar com Especialista
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="comparison">
                <div className="mt-2 rounded-2xl border border-border/60 bg-background/80 backdrop-blur p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-text mb-1">
                        Comparação completa de recursos
                      </h3>
                      <p className="text-sm text-text-muted">
                        Veja, linha a linha, o que está incluído em cada plano para facilitar sua decisão.
                      </p>
                    </div>
                  </div>

                  <div className="overflow-x-auto -mx-2 sm:mx-0">
                    <table className="min-w-full bg-background rounded-xl border border-border/50 text-sm">
                      <thead>
                        <tr className="border-b border-border/50">
                          <th className="px-4 sm:px-6 py-4 text-left text-xs sm:text-sm font-semibold text-text">
                            Recurso
                          </th>
                          <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-semibold text-text">
                            Free
                          </th>
                          <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-semibold text-text">
                            Básico
                          </th>
                          <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-semibold text-text bg-brand-900/5">
                            Business
                          </th>
                          <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-semibold text-text">
                            Premium
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50">
                        {/* Core funcionalidades base */}
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Agente Financeiro</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Agente Web Search</td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs">Básico</td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs">Básico</td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5 text-xs">Básico</td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs font-semibold text-success">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Agente de Scrape</td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs">Básico</td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs">Básico</td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5 text-xs">Intermediário</td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs font-semibold text-success">
                            Avançado
                          </td>
                        </tr>

                        {/* Funcionalidades a partir do Básico */}
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Exportação CSV/PDF</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Automação via WhatsApp</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>

                        {/* Funcionalidades a partir do Business */}
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Número WhatsApp dedicado</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Suporte prioritário 24/7</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">
                            Implantação (setup inicial) inclusa
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">
                            Sub-agentes Business (SDR, Marketing, Dev, Vídeo)
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">
                            Agente SDR (qualificação de leads)
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">
                            Agente de Marketing (Google Ads)
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">
                            Agente de Agendamento (Calendar/Drive/Tasks)
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">
                            Agente de Dev (programação e debugging)
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">
                            Agente de Vídeo (Google Veo 3)
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs font-semibold text-success">
                            Cota maior
                          </td>
                        </tr>

                        {/* Funcionalidades exclusivas Premium */}
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Agentes Premium Exclusivos</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Backups diários off-site</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Agente de Confirmação</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Agente de Resumo de Grupos</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Agente de Remarketing</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Agente de Follow-up</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>

                        {/* Governança e maturidade de dados */}
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">
                            Governança de dados / auditoria
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs">Básico</td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-brand-900/5 text-xs">
                            Intermediário
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs font-semibold text-success">
                            Avançado
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text text-center mb-12 pb-2 leading-normal">
            Perguntas Frequentes sobre Planos
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Posso usar o Meu Agente sem número próprio?
              </AccordionTrigger>
              <AccordionContent className="text-text-muted">
                Sim, no <strong>Free</strong> e no <strong>Básico</strong> o atendimento ocorre na infraestrutura do Meu Agente. Nos planos Business e Premium você tem um número WhatsApp dedicado.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                O que muda entre os planos Business e Premium?
              </AccordionTrigger>
              <AccordionContent className="text-text-muted">
                O Premium inclui 4 agentes exclusivos (Confirmação, Resumo de Grupos, Remarketing e Follow-up), pesquisa/extração avançada, backups diários off-site, cota maior de vídeo e governança ampliada de dados.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Como funcionam as mensagens proativas?
              </AccordionTrigger>
              <AccordionContent className="text-text-muted">
                Fora da janela de 24h, somente com <strong>template aprovado</strong> e opt-in do contato. Dentro da janela de 24h, mensagens livres são permitidas seguindo as políticas do WhatsApp Business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Há taxa de manutenção adicional?
              </AccordionTrigger>
              <AccordionContent className="text-text-muted">
                Sim, nos planos <strong>Business</strong> e <strong>Premium</strong> há uma taxa de <strong>R$ 149,00/h</strong> quando solicitada para ajustes de modelos, reconfigurações e treinamentos pontuais. Não é cobrada mensalmente, apenas sob demanda.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Vocês fazem scraping de sites que proíbem?
              </AccordionTrigger>
              <AccordionContent className="text-text-muted">
                Não. Trabalhamos apenas com <strong>APIs oficiais</strong> e <strong>fontes permitidas</strong> que autorizam extração de dados. Respeitamos os termos de uso de todos os sites.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Posso mudar de plano depois?
              </AccordionTrigger>
              <AccordionContent className="text-text-muted">
                Sim! Você pode fazer upgrade ou downgrade a qualquer momento. Upgrades são aplicados imediatamente, downgrades entram em vigor no próximo ciclo de cobrança. Entre em contato com nosso suporte para solicitar a mudança.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-background border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                O que está incluído na implantação?
              </AccordionTrigger>
              <AccordionContent className="text-text-muted">
                Nos planos <strong>Business</strong> e <strong>Premium</strong>, a implantação inclui configuração do número WhatsApp, setup inicial dos agentes, treinamento da equipe e customizações básicas. Integrações com Google Workspace são opcionais com custo adicional.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-background border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Como funciona o suporte prioritário 24/7?
              </AccordionTrigger>
              <AccordionContent className="text-text-muted">
                Clientes <strong>Business</strong> e <strong>Premium</strong> têm acesso a suporte via WhatsApp, email e telefone 24 horas por dia, 7 dias por semana, com SLA de resposta de 2 horas. Premium tem prioridade máxima na fila.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
    </>
  );
};

export default Planos;
