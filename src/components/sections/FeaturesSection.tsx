import { useState } from "react";

import { Card } from "@/components/ui/card";
import {
  BarChart3,
  Bell,
  Calendar,
  CheckSquare,
  Folder,
  LayoutDashboard,
  Mail,
  Settings,
  Sparkles,
  Target,
  Wallet,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      description: "Visão consolidada de receitas, despesas, saldo e gráficos de evolução diária.",
      color: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Wallet,
      title: "Gestão de Contas",
      description: "Registre receitas/despesas, categorize (12 categorias), valide duplicatas automaticamente.",
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: Target,
      title: "Metas Financeiras",
      description: "Crie metas de economia, compra, viagem ou educação com acompanhamento visual.",
      color: "from-purple-500/10 to-pink-500/10",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: Calendar,
      title: "Agenda Completa",
      description: "6 visualizações (dia, semana, mês, lista, timeline, ano), drag-and-drop de eventos.",
      color: "from-orange-500/10 to-red-500/10",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      icon: CheckSquare,
      title: "Tarefas",
      description: "Organize tarefas com prioridades (alta, média, baixa), prazos e drag-and-drop.",
      color: "from-pink-500/10 to-rose-500/10",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      icon: BarChart3,
      title: "Relatórios Avançados",
      description: "Filtros por período/categoria, gráficos interativos, exportação CSV/PDF/JSON.",
      color: "from-indigo-500/10 to-blue-500/10",
      iconColor: "text-indigo-600 dark:text-indigo-400",
    },
    {
      icon: Bell,
      title: "Notificações Inteligentes",
      description: "Alertas de contas vencendo, metas próximas, saldo baixo, eventos e tarefas.",
      color: "from-yellow-500/10 to-amber-500/10",
      iconColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Settings,
      title: "Configurações Completas",
      description: "Dados pessoais, segurança, tema claro/escuro, notificações, backup e exportação.",
      color: "from-gray-500/10 to-slate-500/10",
      iconColor: "text-gray-600 dark:text-gray-400",
    },
  ];

  const [activeFeature, setActiveFeature] = useState<(typeof features)[number]>(
    features[0]
  );

  return (
    <section className="relative py-24 bg-surface/30 section-texture-soft">
      {/* Ambient glow inspired by premium SaaS dashboards */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-40 -left-20 h-72 w-72 rounded-full glow-blur-soft blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/70 px-4 py-1 text-[11px] font-medium text-text-muted shadow-[0_0_0_1px_rgba(15,23,42,0.35)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="uppercase tracking-[0.22em]">
              Plataforma completa além dos agentes de IA
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gradient mb-2 pb-1 leading-tight">
            Recursos Completos do App
          </h2>

          <p className="text-base sm:text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            Além dos Agentes de IA, você conta com uma{" "}
            <span className="font-semibold text-text">
              suíte completa de gestão financeira, agenda, tarefas e insights
            </span>{" "}
            pensada para dar visão em tempo real do seu negócio.
          </p>
        </div>

        {/* Main layout – Dashboard preview + feature navigator */}
        <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* Dashboard preview – inspired by modern finance SaaS UIs */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-6 rounded-[32px] glow-decorative blur-2xl -z-10" />

            <Card className="relative overflow-hidden rounded-3xl border border-border/50 hover:border-accent bg-surface/95 backdrop-blur-xl text-card-foreground shadow-2xl-adaptive transition-all duration-300">
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-border/60 bg-gradient-to-r from-background/80 via-surface/80 to-background/80">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                  </div>
                  <div className="h-6 w-px bg-border/60" />
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-text-muted/80">
                      Visão consolidada
                    </span>
                    <span className="text-sm font-semibold text-text">
                      Meu Agente · Painel financeiro
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted">
                      Focado em: {activeFeature.title}
                    </span>
                  </div>
                  <div className="rounded-full bg-surface/80 px-3 py-1 text-xs font-medium text-text-muted border border-border/60">
                    Hoje · 24/7 em produção
                  </div>
                </div>
              </div>

              {/* Content grid */}
              <div className="px-6 pb-6 pt-4">
                <div className="grid gap-6 lg:grid-cols-[1.3fr_minmax(0,0.9fr)] items-start">
                  {/* Left – financial summary + chart */}
                  <div className="space-y-4">
                    {/* KPI cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-background/80 px-4 py-3">
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-300/90">
                          Saldo em caixa
                        </p>
                        <p className="mt-1 text-lg font-semibold text-text">
                          R$ 128.450,00
                        </p>
                        <p className="mt-1 text-[11px] text-emerald-300/90">
                          +18% vs. último mês
                        </p>
                      </div>
                      <div className="rounded-2xl border border-border/70 bg-background/90 px-4 py-3">
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                          Receitas hoje
                        </p>
                        <p className="mt-1 text-lg font-semibold text-text">
                          R$ 7.320,00
                        </p>
                        <p className="mt-1 text-[11px] text-emerald-400/90">
                          +32 novos pedidos
                        </p>
                      </div>
                      <div className="hidden sm:block rounded-2xl border border-border/70 bg-background/90 px-4 py-3">
                        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
                          Despesas hoje
                        </p>
                        <p className="mt-1 text-lg font-semibold text-text">
                          R$ 3.980,00
                        </p>
                        <p className="mt-1 text-[11px] text-amber-300/90">
                          4 contas vencem em 2 dias
                        </p>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="mt-3 rounded-2xl border border-border/60 bg-gradient-to-b from-surface/90 to-background/80 px-4 py-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-text-muted uppercase tracking-[0.2em]">
                            Evolução diária
                          </span>
                          <span className="text-sm font-semibold text-text">
                            Receita x Despesa (últimos 14 dias)
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] text-text-muted">
                          <span className="inline-flex items-center gap-1">
                            <span className="h-1.5 w-4 rounded-full bg-emerald-400/80" />
                            Receita
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <span className="h-1.5 w-4 rounded-full bg-rose-400/80" />
                            Despesa
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-14 gap-1.5 items-end h-32">
                        {[
                          30, 45, 50, 38, 62, 72, 68, 80, 76, 60, 54, 70, 82,
                          64,
                        ].map((height, index) => (
                          <div key={index} className="flex flex-col gap-0.5">
                            <div className="relative flex-1 flex items-end">
                              <div
                                className="w-full rounded-full bg-gradient-to-t from-emerald-500/60 via-emerald-400/70 to-emerald-300/80 shadow-[0_0_12px_rgba(16,185,129,0.45)] transition-all duration-500"
                                style={{
                                  height: `${height}%`,
                                }}
                              />
                              <div
                                className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-rose-500/60 via-rose-400/0 to-transparent opacity-60"
                                style={{
                                  height: `${Math.max(18, 90 - height)}%`,
                                }}
                              />
                            </div>
                            <span className="text-[10px] text-text-muted/70 text-center">
                              D{index + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right – agenda, tarefas & alertas ligados às features */}
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-border/60 bg-background/90 px-4 py-3">
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted mb-2">
                        Agenda & tarefas do dia
                      </p>
                      <div className="space-y-2.5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            <p className="text-xs font-medium text-text">
                              Revisar fluxo de caixa semanal
                            </p>
                          </div>
                          <span className="rounded-full bg-surface/80 px-2 py-0.5 text-[10px] text-text-muted border border-border/70">
                            Dashboard
                          </span>
                        </div>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-amber-400" />
                            <p className="text-xs font-medium text-text">
                              Confirmar boletos vencendo
                            </p>
                          </div>
                          <span className="rounded-full bg-surface/80 px-2 py-0.5 text-[10px] text-text-muted border border-border/70">
                            Contas & Agenda
                          </span>
                        </div>
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-sky-400" />
                            <p className="text-xs font-medium text-text">
                              Atualizar metas do trimestre
                            </p>
                          </div>
                          <span className="rounded-full bg-surface/80 px-2 py-0.5 text-[10px] text-text-muted border border-border/70">
                            Metas & Relatórios
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-surface/95 via-surface/90 to-background/90 px-4 py-3">
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-text-muted mb-2">
                        Notificações inteligentes em tempo real
                      </p>
                      <div className="space-y-2 text-xs text-text-muted">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <Bell className="w-3.5 h-3.5 text-amber-400" />
                            <span>
                              {activeFeature.title}{" "}
                              <span className="font-semibold text-text">
                                atualizado automaticamente
                              </span>
                            </span>
                          </div>
                          <span className="text-[10px] text-text-muted/70">
                            há 2 min
                          </span>
                        </div>
                        <p className="text-[11px] leading-relaxed">
                          {activeFeature.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-dashed border-border/80 bg-surface/80 px-4 py-3">
                      <div className="flex flex-col">
                        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted">
                          Gestão unificada
                        </span>
                        <span className="text-xs text-text-muted">
                          Dashboard, contas, metas, agenda, tarefas e alertas em
                          uma única interface.
                        </span>
                      </div>
                      <div className="hidden sm:flex flex-col items-end gap-1 text-[11px] text-text-muted">
                        <span>• Zero planilhas soltas</span>
                        <span>• Zero duplicidade de dados</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Feature navigator – sofisticado, ligado ao preview */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
                Tudo o que a sua operação precisa
              </p>
              <p className="text-sm text-text-muted max-w-md">
                Passe o mouse ou toque nos recursos abaixo para ver como o
                painel se adapta à forma como você trabalha no dia a dia.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const isActive = feature.title === activeFeature.title;

                return (
                  <button
                    key={feature.title}
                    type="button"
                    onMouseEnter={() => setActiveFeature(feature)}
                    onFocus={() => setActiveFeature(feature)}
                    className={`group relative flex items-start gap-3 rounded-2xl border px-4 py-4 text-left transition-all overflow-hidden ${
                      isActive
                        ? "border-border/50 hover:border-accent bg-gradient-to-br from-background/98 via-surface/95 to-emerald-500/6 shadow-[0_18px_40px_rgba(15,23,42,0.55)] scale-[1.02]"
                        : "border-border/50 bg-surface/80 hover:border-accent hover:bg-surface/95"
                    }`}
                  >
                    <div
                      className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} border border-border/40 shadow-sm group-hover:scale-105 transition-transform`}
                    >
                      <feature.icon
                        className={`w-5 h-5 ${
                          isActive
                            ? "icon-accent"
                            : `${feature.iconColor} group-hover-accent`
                        }`}
                      />
                    </div>

                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-semibold text-text">
                        {feature.title}
                      </p>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-2xl -z-10">
                      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-emerald-400/14 via-emerald-400/0 to-transparent" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Integration callout – mais elegante e conectado à narrativa */}
        <div className="mt-16">
          <Card className="relative overflow-hidden rounded-3xl border border-border/50 hover:border-accent bg-gradient-to-r from-blue-500/8 via-background/90 to-purple-500/8 px-6 py-7 sm:px-8 sm:py-8 bg-surface text-card-foreground shadow-adaptive hover:shadow-xl-adaptive transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 hover:scale-[1.02]">
            <div className="pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-purple-500/15 blur-3xl" />

            <div className="relative flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-background/80 border border-border/60 px-3 py-1 text-[11px] font-medium text-text-muted uppercase tracking-[0.22em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Integrações Google Workspace
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-text">
                  Conecte seu painel aos apps que você já usa no dia a dia.
                </h3>
                <p className="text-sm sm:text-base text-text-muted">
                  Integração com Google Calendar, Drive, Tasks e Gmail
                  disponível nos planos{" "}
                  <strong>Business/Premium</strong>.{" "}
                  <span className="text-text-muted/90">
                    Implantação assistida opcional com custo adicional.
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                {[
                  { name: "Google Calendar", icon: Calendar },
                  { name: "Google Drive", icon: Folder },
                  { name: "Google Tasks", icon: CheckSquare },
                  { name: "Gmail", icon: Mail },
                ].map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/70 px-4 py-3 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-surface/80 border border-border/60">
                      <Icon className="w-3.5 h-3.5 text-emerald-500" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-text">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
