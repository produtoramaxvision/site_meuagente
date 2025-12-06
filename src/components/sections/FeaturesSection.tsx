import { useState } from "react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Layers,
  MessageSquare,
  Briefcase,
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
    {
      icon: MessageSquare,
      title: "Chat IA Integrado",
      description: "Converse diretamente pelo chat sem abrir transações. Solicitações e respostas instantâneas.",
      color: "from-teal-500/10 to-cyan-500/10",
      iconColor: "text-teal-600 dark:text-teal-400",
    },
    {
      icon: Briefcase,
      title: "CRM & Gestão de Projetos",
      description: "Gerencie clientes, leads, projetos e pipelines comerciais em um só lugar.",
      color: "from-violet-500/10 to-purple-500/10",
      iconColor: "text-violet-600 dark:text-violet-400",
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
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 mb-3 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-500"
          >
            <Layers className="h-3.5 w-3.5 text-brand-500" />
            <span>Plataforma completa além dos agentes de IA</span>
          </Badge>

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
        <div className="relative grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
          {/* Dashboard preview – inspired by modern finance SaaS UIs */}
          <div className="relative h-full flex flex-col">
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
                <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
                  {/* Left – financial summary + chart */}
                  <div className="space-y-4">
                    {/* KPI cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="rounded-2xl border border-emerald-500/35 bg-gradient-to-b from-emerald-500/12 via-surface/92 to-background/85 px-4 py-3">
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
                      <div className="rounded-2xl border border-border/70 bg-gradient-to-b from-surface/95 via-surface/90 to-background/85 px-4 py-3">
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
                      <div className="hidden sm:block rounded-2xl border border-border/70 bg-gradient-to-b from-surface/95 via-surface/90 to-background/85 px-4 py-3">
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
                    <div className="mt-3 rounded-2xl border border-border/60 bg-gradient-to-b from-surface/95 via-surface/90 to-background/85 px-4 py-4">
                      <div className="flex flex-col gap-2 mb-3">
                        <span className="text-xs font-medium text-text-muted uppercase tracking-[0.2em]">
                          Evolução diária
                        </span>
                        <span className="text-sm font-semibold text-text">
                          Receita x Despesa (últimos 7 dias)
                        </span>
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

                      {/* Chart container with proper responsive flex layout */}
                      <div className="relative w-full h-32 flex items-end justify-between gap-[3px] sm:gap-1.5 px-1">
                        {[
                          { revenue: 72, expense: 28 },
                          { revenue: 65, expense: 35 },
                          { revenue: 78, expense: 22 },
                          { revenue: 58, expense: 42 },
                          { revenue: 82, expense: 18 },
                          { revenue: 88, expense: 12 },
                          { revenue: 76, expense: 24 },
                        ].map((data, index) => (
                          <div key={index} className="flex flex-col items-center gap-1 flex-1 min-w-0">
                            {/* Bar container */}
                            <div className="relative w-full h-28 flex flex-col justify-end">
                              {/* Revenue bar (green) */}
                              <div
                                className="w-full rounded-t-sm bg-gradient-to-t from-emerald-500/70 via-emerald-400/80 to-emerald-300/90 shadow-[0_0_8px_rgba(16,185,129,0.35)] transition-all duration-500 hover:shadow-[0_0_14px_rgba(16,185,129,0.55)]"
                                style={{
                                  height: `${data.revenue}%`,
                                }}
                              />
                              {/* Expense bar (red, overlaid at bottom) */}
                              <div
                                className="absolute bottom-0 w-full rounded-t-sm bg-gradient-to-t from-rose-500/70 via-rose-400/50 to-rose-300/0 transition-all duration-500"
                                style={{
                                  height: `${data.expense}%`,
                                }}
                              />
                            </div>
                            {/* Day label */}
                            <span className="text-[9px] sm:text-[10px] text-text-muted/70 text-center whitespace-nowrap">
                              D{index + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      {/* Mobile legend */}
                      <div className="flex sm:hidden items-center justify-center gap-3 mt-3 text-[10px] text-text-muted">
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-3 rounded-full bg-emerald-400/80" />
                          Receita
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-3 rounded-full bg-rose-400/80" />
                          Despesa
                        </span>
                      </div>
                    </div>

                    {/* Gestão Unificada Card - moved from right column */}
                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-dashed border-border/80 bg-gradient-to-b from-surface/95 via-surface/90 to-background/85 px-4 py-3">
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

                  {/* Right – agenda, tarefas & alertas ligados às features */}
                  <div className="h-full flex flex-col justify-between space-y-4">
                    {/* Category Breakdown Card */}
                    <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-surface/95 via-surface/90 to-background/85 px-4 py-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-text-muted uppercase tracking-[0.2em]">
                            Por categoria
                          </span>
                          <span className="text-sm font-semibold text-text">
                            Distribuição mensal (Top 6)
                          </span>
                        </div>
                      </div>

                      {/* Category bars */}
                      <div className="space-y-2.5">
                        {[
                          { name: "Marketing", value: 42, barClass: "bg-sky-500/70", textClass: "text-sky-400" },
                          { name: "Operação", value: 68, barClass: "bg-emerald-500/70", textClass: "text-emerald-400" },
                          { name: "Impostos", value: 35, barClass: "bg-amber-500/70", textClass: "text-amber-400" },
                          { name: "Pessoal", value: 78, barClass: "bg-purple-500/70", textClass: "text-purple-400" },
                          { name: "Infraestrutura", value: 52, barClass: "bg-indigo-500/70", textClass: "text-indigo-400" },
                          { name: "Outros", value: 28, barClass: "bg-slate-500/70", textClass: "text-slate-400" },
                        ].map((category, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <span className="text-[11px] font-medium text-text-muted w-24 sm:w-28 flex-shrink-0 truncate">
                              {category.name}
                            </span>
                            <div className="relative flex-1 h-5 bg-surface/80 rounded-full overflow-hidden border border-border/40">
                              <div
                                className={`absolute inset-y-0 left-0 ${category.barClass} rounded-full transition-all duration-700 ease-out shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]`}
                                style={{
                                  width: `${category.value}%`,
                                }}
                              />
                            </div>
                            <span className={`text-[11px] font-semibold ${category.textClass} w-8 text-right flex-shrink-0`}>
                              {category.value}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-surface/95 via-surface/90 to-background/85 px-4 py-3">
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

                    <div className="rounded-2xl border border-border/60 bg-gradient-to-b from-surface/95 via-surface/90 to-background/85 px-4 py-3">
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
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Feature navigator – sofisticado, ligado ao preview */}
          <div className="h-full flex flex-col">
            <div className="space-y-2 mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-muted">
                Tudo o que a sua operação precisa
              </p>
              <p className="text-sm text-text-muted max-w-md">
                Passe o mouse ou toque nos recursos abaixo para ver como o
                painel se adapta à forma como você trabalha no dia a dia.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 flex-1">
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
                <Badge
                  variant="outline"
                  className="inline-flex items-center gap-2 mb-3 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-500"
                >
                  <Folder className="h-3.5 w-3.5 text-brand-500" />
                  <span>Integrações Google Workspace</span>
                </Badge>
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
