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
import { cn } from "@/lib/utils";

const Planos = () => {
  const { handleSubscribe, loading } = useSubscription();
  const [hoursPerMonth, setHoursPerMonth] = useState(40);
  const [costPerHour, setCostPerHour] = useState(50);
  const [leadsLost, setLeadsLost] = useState(10);
  
  // Estado para controlar o plano selecionado no Hero
  const [heroPlanId, setHeroPlanId] = useState("business");

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
        { text: "Número de WhatsApp próprio", included: false },
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
        { text: "Tudo do Free + Automações via WhatsApp", included: true },
        { text: "Exportação CSV/PDF", included: true },
        { text: "Agente Scrape intermediário", included: true },
        { text: "Infraestrutura em nuvem Meu Agente", included: true },
        { text: "Número de WhatsApp próprio", included: false },
        { text: "Implantação inclusa", included: false },
        { text: "Suporte prioritário", included: false },
        { text: "Sub-agentes Business", included: false },
        { text: "Backups automáticos", included: false },
        { text: "Agentes de IA avançados", included: false },
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
        { text: "Número de WhatsApp próprio", included: true },
        { text: "Implantação inclusa", included: true },
        { text: "Suporte prioritário 24/7 (SLA 2h)", included: true },
        { text: "Agente SDR (qualificação + agendamento)", included: true },
        { text: "Agente Marketing (Google Ads)", included: true },
        { text: "Agente Agendamento (Calendar/Drive/Tasks)", included: true },
        { text: "Agente Dev (debugging + sugestões)", included: true },
        { text: "Agente Vídeo (Veo 3)", included: true },
        { text: "Integrações Google (opcional, custo adicional)", included: true },
        { text: "Treinamento da IA e Manutenção R$ 149,00/hr, somente quando solicitado", included: true },
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
        { text: "Treinamento da IA e Manutenção R$ 149,00/hr, somente quando solicitado", included: true },
      ],
      cta: "Contratar Premium",
      popular: false,
    },
  ];

  const popularPlan = plans.find((plan) => plan.popular) ?? plans[2];
  
  // Plano ativo no Hero
  const heroPlan = plans.find((plan) => plan.id === heroPlanId) ?? plans[2];
  const heroPlanIncludedFeatures = heroPlan.features.filter((feature) => feature.included);
  const heroPlanExtraIncludedCount = Math.max(heroPlanIncludedFeatures.length - 7, 0);
  const heroPlanMissingAdvancedCount = heroPlan.features.filter((feature) => !feature.included).length;

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
        <section className="relative overflow-hidden py-20 sm:py-24 bg-gradient-hero">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light">
            <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-text/5 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-text/5 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)] items-center lg:items-stretch">
              <div className="flex flex-col gap-8 lg:h-full lg:justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-medium text-text-muted mb-4">
                  <Sparkles className="h-3 w-3 icon-accent" />
                  <span>Planos pensados para operação em escala</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient mb-6 pb-2 leading-normal">
                  Planos e preços que acompanham o crescimento do seu negócio
                </h1>
                <p className="text-lg sm:text-xl text-text-muted max-w-xl">
                  Compare recursos, calcule o ROI em tempo real e escolha o plano ideal para automatizar sua operação no WhatsApp com agentes de IA.
                </p>
                <div className="grid gap-4 sm:grid-cols-3 max-w-xl text-sm">
                  <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                    <p className="font-semibold text-text mb-1">Sem fidelidade</p>
                    <p className="text-text-muted">Planos mensais com possibilidade de upgrade a qualquer momento.</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                    <p className="font-semibold text-text mb-1">Onboarding guiado</p>
                    <p className="text-text-muted">Implantação assistida nos planos Business e Premium.</p>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-background/70 px-4 py-3 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                    <p className="font-semibold text-text mb-1">Foco em resultado</p>
                    <p className="text-text-muted">Agentes pensados para recuperar leads e aumentar receita.</p>
                  </div>
                </div>
              </div>

              <Card className="relative overflow-hidden border-border bg-background/80 backdrop-blur-xl p-8 shadow-2xl-adaptive transition-all duration-300">
                <div className="absolute inset-x-0 -top-32 h-40 bg-gradient-to-b from-text/10 via-text/3 to-transparent pointer-events-none" />
                
                <div className="relative flex flex-col gap-6">
                  {/* Seletor de Planos */}
                  <div className="flex justify-center mb-2">
                    <div className="flex p-1 bg-surface/50 rounded-full border border-border/50 backdrop-blur-md">
                      {plans.map((plan) => (
                        <button
                          key={plan.id}
                          onClick={() => setHeroPlanId(plan.id)}
                          className={cn(
                            "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                            heroPlanId === plan.id
                              ? "btn-toggle-active"
                              : "text-text-muted hover:text-text hover:bg-surface-2"
                          )}
                        >
                          {plan.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Header Estável - Altura mínima controlada */}
                  <div className="flex flex-col gap-2 min-h-[88px]">
                    <div className="flex items-start justify-between gap-3 relative">
                      <div className="flex flex-col gap-1 w-full">
                        {/* Label Recomendado (Business) - Absoluto ou ocupando espaço reservado */}
                        {heroPlan.id === "business" && (
                          <span className="absolute -top-6 left-0 text-[10px] font-bold uppercase tracking-wider badge-highlight px-2 py-0.5 rounded-sm backdrop-blur-sm border animate-in fade-in slide-in-from-bottom-2">
                            Recomendado
                          </span>
                        )}
                        
                        {/* Título com margem superior fixa para acomodar o label em todos os casos (ou manter alinhado se absolute) */}
                        <div className="flex items-center justify-between w-full mt-2">
                          <h2 className="text-2xl font-bold text-text transition-all">{heroPlan.name}</h2>
                          
                          {/* Badge flutuante à direita */}
                          <div className="h-6 flex items-center">
                            {heroPlan.badge && (
                              <Badge className="btn-primary-gradient px-4 py-1 font-bold shadow-sm animate-in zoom-in-95 whitespace-nowrap">
                                {heroPlan.badge}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-text-muted max-w-xs h-10 line-clamp-2 leading-relaxed">
                      {heroPlan.description}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-text tabular-nums tracking-tight">
                      {heroPlan.price}
                    </span>
                    <span className="text-text-muted">{heroPlan.period}</span>
                  </div>

                  <ul className="space-y-2 text-sm min-h-[200px]">
                    {heroPlan.features.slice(0, 7).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-text animate-in fade-in slide-in-from-bottom-1 duration-300"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {feature.included ? (
                          <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-4 w-4 text-text-muted/50 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={cn("leading-tight", feature.included ? "text-text" : "text-text-muted")}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                    <li className="text-xs text-text-muted pt-1 h-5 flex items-center">
                      {heroPlan.id === "premium" ? (
                        <span>
                          Total de <strong>19</strong> recursos avançados incluídos.
                        </span>
                      ) : heroPlan.id === "business" ? (
                        <span>
                          Este plano deixa de fora{" "}
                          <strong>7</strong> recursos avançados que podem turbinar seus
                          resultados.
                        </span>
                      ) : heroPlan.id === "basic" ? (
                        <span>
                          Este plano deixa de fora{" "}
                          <strong>11</strong> recursos avançados que podem turbinar seus
                          resultados.
                        </span>
                      ) : (
                        <span>
                          Este plano deixa de fora{" "}
                          <strong>13</strong> recursos avançados que podem turbinar seus
                          resultados.
                        </span>
                      )}
                    </li>
                  </ul>

                  <Button
                    className={cn(
                      "mt-2 w-full group relative overflow-hidden btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive",
                      heroPlan.popular ? "" : ""
                    )}
                    onClick={() => onPlanClick(heroPlan.id)}
                    disabled={loading}
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    ) : null}
                    {heroPlan.cta}
                    {heroPlan.popular && (
                      <>
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-text-muted text-center mt-1 h-8 flex items-center justify-center px-2">
                    {heroPlan.id === "free" 
                      ? "Teste gratuito, sem necessidade de cartão de crédito."
                      : "Dúvida entre planos? Você pode fazer upgrade ou downgrade a qualquer momento."}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing & comparison */}
        <section className="py-20 sm:py-24 bg-gradient-to-b from-background via-surface/30 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-10">
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 mb-3 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-medium text-text-muted"
              >
                <Sparkles className="h-3 w-3 icon-accent" />
                <span>Planos Meu Agente</span>
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
                      className={`relative flex flex-col h-full p-8 bg-background border-border/60 shadow-adaptive backdrop-blur-sm transition-all duration-300 ${
                      plan.popular
                          ? "ring-2 ring-text/20 dark:ring-text/30 shadow-xl-adaptive scale-105 hover:shadow-none hover:-translate-y-1 hover:scale-[1.08]"
                          : "hover:shadow-none hover:-translate-y-1 hover:scale-[1.02]"
                      }`}
                    >
                      {plan.badge && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                          <Badge className="btn-primary-gradient px-4 py-1 font-bold">
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
                            ? "btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive"
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
                    size="lg"
                    className="gap-2 group relative overflow-hidden btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive"
                    onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
                  >
                    Falar com Especialista
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
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
                          <th className="px-4 sm:px-6 py-4 text-center text-xs sm:text-sm font-semibold text-text bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5 text-xs">Básico</td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs font-semibold text-success">
                            Avançado
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Agente de Scrape</td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs">Básico</td>
                          <td className="px-4 sm:px-6 py-4 text-center text-xs">Básico</td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5 text-xs">Intermediário</td>
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <Check className="w-5 h-5 text-success mx-auto" />
                          </td>
                        </tr>

                        {/* Funcionalidades a partir do Business */}
                        <tr>
                          <td className="px-4 sm:px-6 py-4 text-sm text-text">Número de WhatsApp próprio</td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center">
                            <X className="w-5 h-5 text-text-muted mx-auto" />
                          </td>
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5">
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
                          <td className="px-4 sm:px-6 py-4 text-center bg-subtle-5 text-xs">
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

      {/* ROI Calculator */}
      <section className="py-20 sm:py-24 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 md:p-10 bg-card-gradient border shadow-2xl-adaptive transition-all duration-300 hover:shadow-none">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-surface-2 flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-text" />
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
                      <p className="text-2xl font-bold text-accent">
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

      {/* FAQ Section Modernizada */}
      <section className="py-24 bg-surface/30 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-40">
            <div className="absolute top-20 right-0 w-96 h-96 bg-subtle-10 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
        </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-24 items-stretch">
              
              {/* Coluna Esquerda: Cabeçalho + CTA Suporte */}
              <div className="flex flex-col gap-6 h-full lg:justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-medium text-text-muted">
                    <Sparkles className="h-3 w-3 icon-accent" />
                    <span>Tira-dúvidas</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-text leading-tight">
                    Perguntas frequentes sobre nossos planos
                  </h2>
                  <p className="text-text-muted text-lg leading-relaxed">
                    Separamos as respostas para as dúvidas mais comuns de quem está buscando escalar sua operação com Agentes de IA.
                  </p>
                </div>

                {/* Card de Suporte - Flexível para alinhar o fundo */}
                <div className="flex-1 flex flex-col justify-between p-6 rounded-2xl border border-subtle bg-gradient-subtle backdrop-blur-sm mt-2 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-full bg-surface-2 flex items-center justify-center text-text shadow-sm">
                        <Sparkles className="h-5 w-5" />
                      </div>
                      <p className="font-semibold text-text">Ainda com dúvidas?</p>
                    </div>
                    <p className="text-sm text-text-muted mb-5 leading-relaxed">
                      Nossa equipe de especialistas está pronta para te ajudar a escolher o plano ideal para o seu momento de negócio.
                    </p>
                  </div>
                  <Button 
                    className="w-full mt-auto group relative overflow-hidden btn-primary-gradient shadow-xl-adaptive hover:shadow-2xl-adaptive"
                    onClick={() => window.open("https://app.meuagente.api.br", "_blank")}
                  >
                    Falar com consultor
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>

            {/* Coluna Direita: Accordion Estilizado e Compacto */}
            <div className="w-full">
              {/* 
                Usamos flex + h-full + justify-between para que o último item do Accordion 
                alinhe a sua base com a base da coluna, garantindo o alinhamento horizontal 
                com o card da esquerda quando todas as perguntas estão fechadas.
              */}
              <Accordion
                type="single"
                collapsible
                className="flex h-full flex-col justify-between space-y-2"
              >
                <AccordionItem value="item-1" className="group border border-border/60 rounded-lg bg-background/60 px-1 hover:border-accent hover:bg-background/80 transition-all duration-300 shadow-sm data-[state=open]:border-accent data-[state=open]:bg-background/90 data-[state=open]:shadow-md">
                  <AccordionTrigger className="px-3 text-left font-medium text-sm text-text group-hover-accent transition-colors py-3">
                    Posso usar o Meu Agente sem número próprio?
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 text-sm text-text-muted leading-relaxed">
                    Sim, no <strong>Free</strong> e no <strong>Básico</strong> o atendimento ocorre na infraestrutura do Meu Agente. Nos planos Business e Premium você tem um número de WhatsApp próprio.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="group border border-border/60 rounded-lg bg-background/60 px-1 hover:border-accent hover:bg-background/80 transition-all duration-300 shadow-sm data-[state=open]:border-accent data-[state=open]:bg-background/90 data-[state=open]:shadow-md">
                  <AccordionTrigger className="px-3 text-left font-medium text-sm text-text group-hover-accent transition-colors py-3">
                    O que muda entre os planos Business e Premium?
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 text-sm text-text-muted leading-relaxed">
                    O Premium inclui 4 agentes exclusivos (Confirmação, Resumo de Grupos, Remarketing e Follow-up), pesquisa/extração avançada, backups diários off-site, cota maior de vídeo e governança ampliada de dados.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="group border border-border/60 rounded-lg bg-background/60 px-1 hover:border-accent hover:bg-background/80 transition-all duration-300 shadow-sm data-[state=open]:border-accent data-[state=open]:bg-background/90 data-[state=open]:shadow-md">
                  <AccordionTrigger className="px-3 text-left font-medium text-sm text-text group-hover-accent transition-colors py-3">
                    Como funcionam as mensagens proativas?
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 text-sm text-text-muted leading-relaxed">
                    Fora da janela de 24h, somente com <strong>template aprovado</strong> e opt-in do contato. Dentro da janela de 24h, mensagens livres são permitidas seguindo as políticas do WhatsApp Business.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="group border border-border/60 rounded-lg bg-background/60 px-1 hover:border-accent hover:bg-background/80 transition-all duration-300 shadow-sm data-[state=open]:border-accent data-[state=open]:bg-background/90 data-[state=open]:shadow-md">
                  <AccordionTrigger className="px-3 text-left font-medium text-sm text-text group-hover-accent transition-colors py-3">
                    Há taxa de manutenção adicional?
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 text-sm text-text-muted leading-relaxed">
                    Sim, nos planos <strong>Business</strong> e <strong>Premium</strong> há uma taxa de <strong>Treinamento da IA e Manutenção R$ 149,00/hr, somente quando solicitado</strong> para ajustes de modelos, reconfigurações e treinamentos pontuais. Não é cobrada mensalmente, apenas sob demanda.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="group border border-border/60 rounded-lg bg-background/60 px-1 hover:border-accent hover:bg-background/80 transition-all duration-300 shadow-sm data-[state=open]:border-accent data-[state=open]:bg-background/90 data-[state=open]:shadow-md">
                  <AccordionTrigger className="px-3 text-left font-medium text-sm text-text group-hover-accent transition-colors py-3">
                    Vocês fazem scraping de sites que proíbem?
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 text-sm text-text-muted leading-relaxed">
                    Não. Trabalhamos apenas com <strong>APIs oficiais</strong> e <strong>fontes permitidas</strong> que autorizam extração de dados. Respeitamos os termos de uso de todos os sites.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="group border border-border/60 rounded-lg bg-background/60 px-1 hover:border-accent hover:bg-background/80 transition-all duration-300 shadow-sm data-[state=open]:border-accent data-[state=open]:bg-background/90 data-[state=open]:shadow-md">
                  <AccordionTrigger className="px-3 text-left font-medium text-sm text-text group-hover-accent transition-colors py-3">
                    Posso mudar de plano depois?
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 text-sm text-text-muted leading-relaxed">
                    Sim! Você pode fazer upgrade ou downgrade a qualquer momento. Upgrades são aplicados imediatamente, downgrades entram em vigor no próximo ciclo de cobrança. Entre em contato com nosso suporte para solicitar a mudança.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="group border border-border/60 rounded-lg bg-background/60 px-1 hover:border-accent hover:bg-background/80 transition-all duration-300 shadow-sm data-[state=open]:border-accent data-[state=open]:bg-background/90 data-[state=open]:shadow-md">
                  <AccordionTrigger className="px-3 text-left font-medium text-sm text-text group-hover-accent transition-colors py-3">
                    O que está incluído na implantação?
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 text-sm text-text-muted leading-relaxed">
                    Nos planos <strong>Business</strong> e <strong>Premium</strong>, a implantação inclui configuração do número WhatsApp, setup inicial dos agentes, treinamento da equipe e customizações básicas. Integrações com Google Workspace são opcionais com custo adicional.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="group border border-border/60 rounded-lg bg-background/60 px-1 hover:border-accent hover:bg-background/80 transition-all duration-300 shadow-sm data-[state=open]:border-accent data-[state=open]:bg-background/90 data-[state=open]:shadow-md">
                  <AccordionTrigger className="px-3 text-left font-medium text-sm text-text group-hover-accent transition-colors py-3">
                    Como funciona o suporte prioritário 24/7?
                  </AccordionTrigger>
                  <AccordionContent className="px-3 pb-3 text-sm text-text-muted leading-relaxed">
                    Clientes <strong>Business</strong> e <strong>Premium</strong> têm acesso a suporte via WhatsApp, email e telefone 24 horas por dia, 7 dias por semana, com SLA de resposta de 2 horas. Premium tem prioridade máxima na fila.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Planos;
