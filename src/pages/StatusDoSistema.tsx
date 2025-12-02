import { useMemo } from "react";
import { Activity, AlertTriangle, Bot, CheckCircle2, Clock3, Globe2, Smartphone, XOctagon } from "lucide-react";

import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type ServiceScope = "app" | "site" | "agent" | "infra";
type ServiceStatus = "online" | "intermitente" | "offline";

interface Service {
  id: string;
  name: string;
  scope: ServiceScope;
  status: ServiceStatus;
  uptime: number;
  description: string;
  lastIncident?: string;
}

const SERVICES: Service[] = [
  {
    id: "app-core",
    name: "App Meu Agente (Core)",
    scope: "app",
    status: "online",
    uptime: 99.99,
    description: "Interface web do painel Meu Agente para configuração de agentes e relatórios.",
    lastIncident: "Último incidente em 02/11/2025 – instabilidade breve no login.",
  },
  {
    id: "app-realtime",
    name: "Sincronização em Tempo Real",
    scope: "app",
    status: "online",
    uptime: 99.9,
    description: "Atualização em tempo real de mensagens, métricas e filas de atendimento.",
  },
  {
    id: "site-public",
    name: "Site Meu Agente",
    scope: "site",
    status: "online",
    uptime: 99.95,
    description: "Site institucional, landing pages e conteúdo público.",
  },
  {
    id: "site-blog",
    name: "Blog & Conteúdo",
    scope: "site",
    status: "online",
    uptime: 99.9,
    description: "Artigos, FAQ e documentação pública.",
  },
  {
    id: "agent-financeiro",
    name: "Agente Financeiro",
    scope: "agent",
    status: "online",
    uptime: 99.9,
    description:
      "Controle total de receitas, despesas e exportações, com categorias inteligentes e alertas automáticos.",
  },
  {
    id: "agent-web-search",
    name: "Agente Web Search",
    scope: "agent",
    status: "online",
    uptime: 99.7,
    description: "Pesquisa informações na web, tendências e concorrentes em segundos.",
  },
  {
    id: "agent-scrape-extract",
    name: "Agente de Scrape/Extract",
    scope: "agent",
    status: "online",
    uptime: 99.5,
    description: "Extrai dados de fontes permitidas e gera relatórios CSV/JSON estruturados.",
  },
  {
    id: "agent-sdr",
    name: "Agente SDR",
    scope: "agent",
    status: "online",
    uptime: 99.3,
    description: "Prospecção e qualificação de leads via WhatsApp, com follow-ups inteligentes.",
  },
  {
    id: "agent-marketing",
    name: "Agente de Marketing",
    scope: "agent",
    status: "online",
    uptime: 99.4,
    description: "Otimização de campanhas, análises e recomendações.",
  },
  {
    id: "agent-agendamento",
    name: "Agente de Agendamento",
    scope: "agent",
    status: "online",
    uptime: 99.6,
    description: "Gerencia Google Calendar, Drive, Tasks e envia lembretes automáticos.",
  },
  {
    id: "agent-dev",
    name: "Agente de Dev",
    scope: "agent",
    status: "online",
    uptime: 99.2,
    description: "Suporte técnico e sugestões de código em múltiplas linguagens.",
  },
  {
    id: "agent-video-veo3",
    name: "Agente de Vídeo – Veo 3",
    scope: "agent",
    status: "online",
    uptime: 99.1,
    description: "Gera vídeos profissionais a partir de roteiros, ideal para marketing.",
  },
  {
    id: "infra-whatsapp",
    name: "Conectividade WhatsApp",
    scope: "infra",
    status: "online",
    uptime: 99.8,
    description: "Canal de comunicação entre os agentes e o WhatsApp.",
  },
  {
    id: "infra-integrations",
    name: "Integrações Externas",
    scope: "infra",
    status: "intermitente",
    uptime: 98.9,
    description: "Google Calendar, Google Drive, CRM e demais integrações.",
    lastIncident: "Oscilações em APIs de terceiros – sem impacto crítico.",
  },
];

const statusTabTriggerClasses =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium " +
  "border border-transparent text-text-muted " +
  "data-[state=active]:btn-toggle-active data-[state=active]:border-transparent " +
  "data-[state=active]:shadow-md data-[state=active]:scale-[1.02] " +
  "hover:bg-surface-2/60 hover:text-text transition-all";

const statusOrder: Record<ServiceStatus, number> = {
  online: 0,
  intermitente: 1,
  offline: 2,
};

const getOverallStatus = (services: Service[]): ServiceStatus => {
  return services.reduce<ServiceStatus>((acc, service) => {
    return statusOrder[service.status] > statusOrder[acc] ? service.status : acc;
  }, "online");
};

const formatStatusLabel = (status: ServiceStatus) => {
  switch (status) {
    case "online":
      return "Todos os sistemas operacionais";
    case "intermitente":
      return "Alguns serviços com intermitências";
    case "offline":
      return "Interrupção em pelo menos um serviço";
    default:
      return "";
  }
};

const StatusPill = ({ status }: { status: ServiceStatus }) => {
  const baseClasses =
    "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium border backdrop-blur-sm";

  if (status === "online") {
    return (
      <span className={`${baseClasses} border-emerald-500/40 bg-emerald-500/10 text-emerald-500`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        100% operacional
      </span>
    );
  }

  if (status === "intermitente") {
    return (
      <span
        className={`${baseClasses} border-emerald-500/40 bg-emerald-500/5 text-emerald-500 shadow-[0_0_0_1px_rgba(16,185,129,0.20),0_0_18px_rgba(16,185,129,0.35)] hover:shadow-[0_0_0_1px_rgba(16,185,129,0.25),0_0_24px_rgba(16,185,129,0.55)] hover:-translate-y-0.5 hover:scale-[1.01] transition-transform transition-shadow duration-300`}
      >
        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="absolute inset-0 rounded-full border border-emerald-300/80 animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-200" />
        </span>
        Sistemas operacionais
      </span>
    );
  }

  return (
    <span className={`${baseClasses} border-red-500/40 bg-red-500/10 text-red-500`}>
      <span className="inline-flex h-2 w-2 rounded-full bg-red-400" />
      Interrupção parcial
    </span>
  );
};

const ServiceStatusBadge = ({ status }: { status: ServiceStatus }) => {
  if (status === "online") {
    return (
      <Badge
        variant="secondary"
        className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/30"
      >
        <CheckCircle2 className="w-3.5 h-3.5" />
        Operacional
      </Badge>
    );
  }

  if (status === "intermitente") {
    return (
      <Badge
        variant="secondary"
        className="flex items-center gap-1.5 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/30"
      >
        <AlertTriangle className="w-3.5 h-3.5" />
        Intermitente
      </Badge>
    );
  }

  return (
    <Badge
      variant="secondary"
      className="flex items-center gap-1.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/30"
    >
      <XOctagon className="w-3.5 h-3.5" />
      Indisponível
    </Badge>
  );
};

const scopeIconMap: Record<ServiceScope, JSX.Element> = {
  app: <Smartphone className="w-4 h-4 icon-accent" />,
  site: <Globe2 className="w-4 h-4 icon-accent" />,
  agent: <Bot className="w-4 h-4 icon-accent" />,
  infra: <Activity className="w-4 h-4 icon-accent" />,
};

const groupByScope = (scope: ServiceScope | "all") => {
  if (scope === "all") return SERVICES;
  return SERVICES.filter((service) => service.scope === scope);
};

const StatusDoSistema = () => {
  const overallStatus = useMemo(() => getOverallStatus(SERVICES), []);

  const totalServices = SERVICES.length;
  const onlineServices = SERVICES.filter((s) => s.status === "online").length;
  const intermitentServices = SERVICES.filter((s) => s.status === "intermitente").length;
  const offlineServices = SERVICES.filter((s) => s.status === "offline").length;

  const averageUptime = useMemo(() => {
    const sum = SERVICES.reduce((acc, service) => acc + service.uptime, 0);
    return sum / SERVICES.length;
  }, []);

  return (
    <>
      <SEO
        title="Status do Sistema – Meu Agente"
        description="Acompanhe a disponibilidade em tempo real do app Meu Agente, do site e dos agentes de IA."
        canonicalUrl="/status-do-sistema"
      />

      <section className="py-16 bg-background section-texture-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gradient pb-1 mb-3">
                Status do Sistema
              </h1>
              <p className="text-base sm:text-lg text-text-muted max-w-2xl">
                Transparência total sobre a disponibilidade dos serviços do Meu Agente – app, site e
                agentes de IA. Use esta página para verificar se está tudo operando normalmente.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <StatusPill status={overallStatus} />
              <p className="text-xs text-text-muted">
                Atualizado em tempo quase real com base no monitoramento interno dos serviços.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 mb-10">
            <Card className="md:col-span-2 card-highlight">
              <CardHeader className="flex flex-row items-center justify-between gap-4">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Activity className="w-5 h-5 icon-accent" />
                    Visão geral dos serviços
                  </CardTitle>
                  <CardDescription className="mt-1">
                    {formatStatusLabel(overallStatus)}
                  </CardDescription>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1 text-xs text-text-muted">
                  <span>
                    <strong>{onlineServices}</strong> operacionais
                  </span>
                  <span>
                    <strong>{intermitentServices}</strong> intermitentes
                  </span>
                  <span>
                    <strong>{offlineServices}</strong> indisponíveis
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-text-muted mb-1">
                    <span>Uptime médio dos últimos 30 dias</span>
                    <span className="font-semibold text-text">
                      {averageUptime.toFixed(2)}%
                    </span>
                  </div>
                  <Progress value={averageUptime} />
                  <p className="text-xs text-text-muted mt-1">
                    Valores ilustrativos. Em produção, esta seção pode ser conectada ao seu
                    monitoramento (Grafana, Statuspage, etc).
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock3 className="w-4 h-4 icon-accent" />
                  Últimos eventos relevantes
                </CardTitle>
                <CardDescription>
                  Resumo de incidentes recentes que podem ter afetado parte dos usuários.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-xs">
                {SERVICES.filter((s) => s.lastIncident).map((service) => (
                  <div
                    key={service.id}
                    className="rounded-lg border border-border/50 bg-surface/60 px-3 py-2"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-medium text-text text-xs">{service.name}</span>
                      <ServiceStatusBadge status={service.status} />
                    </div>
                    <p className="text-[11px] text-text-muted">{service.lastIncident}</p>
                  </div>
                ))}
                {SERVICES.filter((s) => s.lastIncident).length === 0 && (
                  <p className="text-[11px] text-text-muted">
                    Nenhum incidente recente registrado.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="mt-4">
            <TabsList className="inline-flex h-10 items-center justify-center rounded-md p-1 text-muted-foreground bg-surface-2/80 backdrop-blur-sm gap-1">
              <TabsTrigger value="overview" className={statusTabTriggerClasses}>
                Visão geral
              </TabsTrigger>
              <TabsTrigger value="app" className={statusTabTriggerClasses}>
                App Meu Agente
              </TabsTrigger>
              <TabsTrigger value="site" className={statusTabTriggerClasses}>
                Site Meu Agente
              </TabsTrigger>
              <TabsTrigger value="agents" className={statusTabTriggerClasses}>
                Agentes de IA
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <ScopeGrid services={groupByScope("all")} />
            </TabsContent>

            <TabsContent value="app" className="mt-6">
              <ScopeGrid
                title="Status do app Meu Agente"
                description="Disponibilidade do painel em nuvem e recursos principais."
                services={groupByScope("app")}
              />
            </TabsContent>

            <TabsContent value="site" className="mt-6">
              <ScopeGrid
                title="Status do site Meu Agente"
                description="Disponibilidade do site institucional, blog e páginas de marketing."
                services={groupByScope("site")}
              />
            </TabsContent>

            <TabsContent value="agents" className="mt-6">
              <ScopeGrid
                title="Status dos agentes de IA"
                description="Disponibilidade e estabilidade dos agentes especializados que operam no WhatsApp."
                services={groupByScope("agent")}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

interface ScopeGridProps {
  services: Service[];
  title?: string;
  description?: string;
}

const ScopeGrid = ({ services, title, description }: ScopeGridProps) => {
  return (
    <div className="space-y-4">
      {(title || description) && (
        <div className="max-w-2xl">
          {title && <h2 className="text-lg font-semibold text-text mb-1">{title}</h2>}
          {description && <p className="text-sm text-text-muted">{description}</p>}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.id}
            className="relative overflow-hidden border-border/60 bg-surface/80 hover:border-accent hover:shadow-xl-adaptive hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full glow-decorative blur-3xl" />
            </div>
            <CardHeader className="relative flex flex-row items-start justify-between gap-3">
              <div className="flex items-start gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-background/70 backdrop-blur-sm flex items-center justify-center border border-border/50">
                  {scopeIconMap[service.scope]}
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold leading-snug">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="mt-1 text-xs">
                    {service.description}
                  </CardDescription>
                </div>
              </div>
              <ServiceStatusBadge status={service.status} />
            </CardHeader>
            <CardContent className="relative pt-0 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-text-muted mb-1">
                <span>Uptime 30 dias</span>
                <span className="font-semibold text-text">
                  {service.uptime.toFixed(2)}%
                </span>
              </div>
              <Progress value={service.uptime} className="h-2.5" />
              {service.lastIncident && (
                <p className="mt-2 text-[11px] text-text-muted">
                  <span className="font-semibold text-text">Último evento: </span>
                  {service.lastIncident}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StatusDoSistema;


