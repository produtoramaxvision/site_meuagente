import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SEO from "@/components/SEO";
import { createOrganizationSchema } from "@/lib/seo";
import {
  ArrowRight,
  Clock3,
  Globe2,
  HeartHandshake,
  Laptop2,
  LineChart,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

type JobAreaId =
  | "todas"
  | "produto-design"
  | "engenharia"
  | "operacoes-sucesso"
  | "outras";

type JobSeniorityId =
  | "todas"
  | "estagio"
  | "junior"
  | "pleno"
  | "senior"
  | "lead";

interface Job {
  id: string;
  title: string;
  areaId: Exclude<JobAreaId, "todas">;
  areaLabel: string;
  seniorityId: Exclude<JobSeniorityId, "todas">;
  seniorityLabel: string;
  location: string;
  workModel: "Remoto" | "Híbrido" | "Presencial";
  type: string;
  highlight: string;
  tags: string[];
}

const JOB_AREAS: { id: JobAreaId; label: string }[] = [
  { id: "todas", label: "Todas as áreas" },
  { id: "produto-design", label: "Produto & Design" },
  { id: "engenharia", label: "Engenharia & Dados" },
  { id: "operacoes-sucesso", label: "Operações & Sucesso do Cliente" },
  { id: "outras", label: "Outras frentes" },
];

const JOB_SENIORITIES: { id: JobSeniorityId; label: string }[] = [
  { id: "todas", label: "Todos os níveis" },
  { id: "estagio", label: "Estágio" },
  { id: "junior", label: "Júnior" },
  { id: "pleno", label: "Pleno" },
  { id: "senior", label: "Sênior" },
  { id: "lead", label: "Liderança" },
];

const JOBS: Job[] = [
  {
    id: "product-designer-pleno",
    title: "Product Designer Pleno",
    areaId: "produto-design",
    areaLabel: "Produto & Design",
    seniorityId: "pleno",
    seniorityLabel: "Pleno",
    location: "Remoto – Brasil",
    workModel: "Remoto",
    type: "Tempo integral",
    highlight:
      "Você será a ponta entre negócio, dados e UX para criar experiências que misturam chat, automação e interfaces web.",
    tags: ["Design de produto", "UX research", "Design systems", "SaaS B2B"],
  },
  {
    id: "frontend-senior",
    title: "Frontend Engineer Sênior",
    areaId: "engenharia",
    areaLabel: "Engenharia & Dados",
    seniorityId: "senior",
    seniorityLabel: "Sênior",
    location: "Remoto – Brasil / LATAM",
    workModel: "Remoto",
    type: "Tempo integral",
    highlight:
      "Responsável por interfaces ricas em tempo real, painéis de operação e experiências de autosserviço para clientes.",
    tags: ["React", "TypeScript", "Shadcn UI", "Arquitetura frontend"],
  },
  {
    id: "data-analyst-pleno",
    title: "Analista de Dados Pleno",
    areaId: "engenharia",
    areaLabel: "Engenharia & Dados",
    seniorityId: "pleno",
    seniorityLabel: "Pleno",
    location: "Remoto – Brasil",
    workModel: "Remoto",
    type: "Tempo integral",
    highlight:
      "Ajude a traduzir eventos de uso, funis de atendimento e métricas de IA em decisões de produto e operação.",
    tags: ["SQL", "BI", "Métricas SaaS", "Product analytics"],
  },
  {
    id: "customer-success-pleno",
    title: "Customer Success Pleno",
    areaId: "operacoes-sucesso",
    areaLabel: "Operações & Sucesso do Cliente",
    seniorityId: "pleno",
    seniorityLabel: "Pleno",
    location: "Híbrido – São Paulo / Remoto",
    workModel: "Híbrido",
    type: "Tempo integral",
    highlight:
      "Você será a voz dos clientes dentro do produto, acompanhando implantação e expansão de contas com forte uso de IA.",
    tags: ["Sucesso do cliente", "Onboarding", "Playbooks", "Relacionamento"],
  },
  {
    id: "sdr-virtual-junior",
    title: "SDR Virtual Júnior",
    areaId: "operacoes-sucesso",
    areaLabel: "Operações & Sucesso do Cliente",
    seniorityId: "junior",
    seniorityLabel: "Júnior",
    location: "Remoto – Brasil",
    workModel: "Remoto",
    type: "Tempo integral",
    highlight:
      "Trabalhe lado a lado com nossos próprios agentes de IA para qualificar leads, agendar demos e alimentar o time comercial.",
    tags: ["Prospecção", "Qualificação de leads", "Inside sales"],
  },
  {
    id: "talentos-pool",
    title: "Banco de Talentos Meu Agente",
    areaId: "outras",
    areaLabel: "Outras frentes",
    seniorityId: "estagio",
    seniorityLabel: "Estágio / Júnior",
    location: "Remoto – Brasil",
    workModel: "Remoto",
    type: "Banco de talentos",
    highlight:
      "Ainda não achou uma vaga com a sua cara? Envie seu perfil para nosso banco de talentos e seja considerado(a) para futuras oportunidades.",
    tags: ["Produto", "Engenharia", "Ops", "Gente & Gestão"],
  },
];

const BENEFITS = [
  {
    icon: Globe2,
    title: "Remote-first, assíncrono por padrão",
    description:
      "Trabalhe de onde fizer mais sentido para você. Nos organizamos com rituais leves, documentação forte e poucas reuniões.",
  },
  {
    icon: Laptop2,
    title: "Stack moderna e desafios reais",
    description:
      "React, TypeScript, IA generativa, automação de WhatsApp e dados em tempo real. Sem MVP eterno: entregamos em produção.",
  },
  {
    icon: LineChart,
    title: "Crescimento linkado a resultado",
    description:
      "Planos de desenvolvimento individual alinhados a métricas de negócio, não a horas em reunião.",
  },
  {
    icon: HeartHandshake,
    title: "Cultura de confiança radical",
    description:
      "Feedbacks diretos, transparência nas decisões e segurança psicológica para experimentar e errar rápido.",
  },
] as const;

const CULTURE = [
  {
    label: "1. Operação guiada por dados",
    description:
      "Tomamos decisões olhando para métricas de produto, NPS de atendimento e impacto em receita, não só em opiniões.",
  },
  {
    label: "2. IA como co-piloto, não substituto",
    description:
      "Usamos agentes de IA para amplificar o trabalho de pessoas, nunca para mascarar falta de responsabilidade.",
  },
  {
    label: "3. Clareza antes da velocidade",
    description:
      "Valorizamos boas definições de problema e alinhamento antes de qualquer sprint acelerado.",
  },
  {
    label: "4. Ownership de ponta a ponta",
    description:
      "Você participa desde a descoberta até o resultado em produção, sempre em colaboração com outras áreas.",
  },
] as const;

const METRICS: { value: string; label: string; prefix?: string }[] = [
  {
    value: "+8",
    label: "Agentes de IA em produção",
  },
  {
    value: "24/7",
    label: "Operação rodando para clientes",
  },
  {
    value: "dias",
    label: "para tirar um experimento do papel",
    prefix: "< 10",
  },
];

const CANDIDATE_FAQS = [
  {
    question: "Vocês trabalham 100% remoto?",
    answer:
      "Sim. Somos uma empresa remote-first com pessoas em diferentes cidades do Brasil. Para algumas funções de Operações podemos preferir quem tenha disponibilidade eventual para encontros presenciais em São Paulo.",
  },
  {
    question: "Como é o processo seletivo?",
    answer:
      "Nosso processo costuma ter 3 etapas: conversa inicial com People/gestão, desafio prático leve (quando faz sentido) e entrevista final com o time. Sempre damos feedback, independente do resultado.",
  },
  {
    question: "Preciso já ter experiência com IA?",
    answer:
      "Não necessariamente. Em muitas vagas o mais importante é ter curiosidade, noção de produto digital e vontade de aprender rápido. Ter repertório com IA generativa é um plus, não um pré-requisito absoluto.",
  },
  {
    question: "Quais benefícios vocês oferecem?",
    answer:
      "Além de remuneração compatível com mercado, oferecemos ambiente remoto estruturado, apoio para cursos e eventos, horário flexível, folgas pontuais para saúde mental e possibilidade de experimentos como semana de 4 dias em alguns períodos.",
  },
] as const;

const TrabalheConosco = () => {
  const [areaFilter, setAreaFilter] = useState<JobAreaId>("todas");
  const [seniorityFilter, setSeniorityFilter] =
    useState<JobSeniorityId>("todas");

  const description =
    "Trabalhe com IA de verdade, impactando a forma como empresas brasileiras operam no WhatsApp. Veja nossas vagas abertas e conheça a cultura do Meu Agente.";

  const filteredJobs = JOBS.filter((job) => {
    const matchesArea =
      areaFilter === "todas" || job.areaId === areaFilter;
    const matchesSeniority =
      seniorityFilter === "todas" ||
      job.seniorityId === seniorityFilter;
    return matchesArea && matchesSeniority;
  });

  const talentEmail = "talentos@meuagente.api.br";

  const handleApply = (job: Job) => {
    const subject = `[Vaga] ${job.title} – ${job.areaLabel}`;
    const bodyLines = [
      "Olá, time Meu Agente 👋",
      "",
      `Tenho interesse na vaga \"${job.title}\" (${job.areaLabel}, nível ${job.seniorityLabel}).`,
      "",
      "Conte em poucas linhas sua experiência, links relevantes (LinkedIn, portfólio, GitHub) e sua disponibilidade:",
      "",
      "",
      "—",
      "Enviado pela página Trabalhe Conosco do site",
    ];

    const mailto = `mailto:${talentEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.open(mailto, "_blank");
  };

  return (
    <>
      <SEO
        title="Trabalhe Conosco – Meu Agente | Carreiras em IA aplicada a negócios"
        description={description}
        keywords={[
          "trabalhe conosco meu agente",
          "vagas ia",
          "carreiras produto digital",
          "frontend remoto",
          "customer success ia",
        ]}
        canonicalUrl="/trabalhe-conosco"
        structuredData={{
          "@context": "https://schema.org",
          "@graph": [
            createOrganizationSchema(),
            {
              "@type": "WebPage",
              name: "Trabalhe Conosco – Meu Agente",
              url: "https://site.meuagente.api.br/trabalhe-conosco",
              description,
            },
          ],
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-surface/40 to-background relative overflow-hidden">
        {/* Background global sutil */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-subtle-10 blur-3xl" />
          <div className="absolute top-1/3 -right-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-brand-700/10 blur-3xl" />
        </div>

        <main className="relative z-10">
          {/* HERO */}
          <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-brand-950 via-background to-background py-20 sm:py-24">
            <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:14px_24px]" />
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:px-8">
              <div className="max-w-2xl space-y-6">
                <Badge className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border-emerald-500/40 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  <Sparkles className="h-3.5 w-3.5" />
                  Carreiras em IA aplicada a negócios
                </Badge>

                <h1 className="text-balance text-4xl font-semibold tracking-tight leading-normal pb-2 text-gradient sm:text-5xl lg:text-6xl">
                  Trabalhe com IA de verdade, não só com promessas.
                </h1>
                <p className="mt-2 text-base text-text-muted sm:text-lg">
                  No Meu Agente você constrói, testa e escala agentes de IA que
                  já rodam em produção para empresas reais. Um ambiente
                  remoto-first, com autonomia alta e obsessão por entregar
                  resultado para clientes.
                </p>

                <div className="grid gap-4 text-sm text-text-muted sm:grid-cols-3">
                  <Card className="border-border/60 bg-background/80 p-4">
                    <p className="text-xs uppercase tracking-wide text-text-muted/80">
                      Como trabalhamos
                    </p>
                    <p className="mt-2 font-semibold text-text">
                      Squads enxutas, ciclos curtos e muita colaboração entre
                      produto, engenharia e operação.
                    </p>
                  </Card>
                  <Card className="border-border/60 bg-background/80 p-4">
                    <p className="text-xs uppercase tracking-wide text-text-muted/80">
                      Para quem é
                    </p>
                    <p className="mt-2 font-semibold text-text">
                      Pessoas curiosas, com senso de dono e vontade de aprender
                      rápido com clientes.
                    </p>
                  </Card>
                  <Card className="border-border/60 bg-background/80 p-4">
                    <p className="text-xs uppercase tracking-wide text-text-muted/80">
                      Próximo passo
                    </p>
                    <p className="mt-2 font-semibold text-text">
                      Explore as vagas abertas abaixo ou inscreva-se no nosso
                      banco de talentos.
                    </p>
                  </Card>
                </div>
              </div>

              {/* Métricas culturais + CTA principal */}
              <div className="w-full max-w-md lg:ml-auto flex flex-col justify-between">
                <Card className="relative overflow-hidden border-border/70 bg-background/90 shadow-2xl-adaptive backdrop-blur">
                  <div className="absolute inset-0 bg-gradient-subtle pointer-events-none" />
                  <div className="relative p-6 space-y-6">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-text-muted/80 mb-1">
                          Como é estar no Meu Agente
                        </p>
                        <p className="text-sm text-text-muted">
                          Um snapshot da nossa operação hoje (e para onde
                          estamos indo).
                        </p>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-subtle-10 flex items-center justify-center">
                        <Users className="h-5 w-5 icon-accent" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {METRICS.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-border/60 bg-background/80 px-3 py-3 text-center"
                        >
                          <p className="text-xl font-bold text-text">
                            {metric.prefix ? (
                              <>
                                <span className="block text-xs text-text-muted">
                                  {metric.prefix}
                                </span>
                                {metric.value}
                              </>
                            ) : (
                              metric.value
                            )}
                          </p>
                          <p className="mt-1 text-[11px] text-text-muted">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 px-4 py-3 text-xs text-text-muted">
                      <p className="flex items-center gap-2 text-text">
                        <Clock3 className="h-4 w-4 text-emerald-500" />
                        Explorações periódicas de semana de 4 dias e janelas de
                        foco profundo sem reuniões.
                      </p>
                    </div>
                  </div>
                </Card>

                <div className="mt-6 flex flex-col items-start lg:items-end gap-3">
                  <Button
                    size="lg"
                    className="group relative overflow-hidden btn-primary-gradient shadow-adaptive"
                    onClick={() => {
                      const el = document.getElementById("vagas");
                      if (!el) return;
                      const rect = el.getBoundingClientRect();
                      const offsetTop = window.scrollY + rect.top - 80;
                      window.scrollTo({
                        top: offsetTop,
                        behavior: "smooth",
                      });
                    }}
                  >
                    Ver vagas abertas
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duração-200 group-hover:translate-x-1" />
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duração-700" />
                  </Button>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted justify-start lg:justify-end">
                    <span className="rounded-full bg-surface/60 px-3 py-1">
                      Rotina remota, horários flexíveis e foco em resultado.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cultura e benefícios */}
          <section className="border-b border-border/60 bg-surface/40 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-stretch">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text">
                    Uma cultura feita para quem gosta de construir.
                  </h2>
                  <p className="text-sm sm:text-base text-text-muted max-w-xl">
                    Mais do que benefícios, nos preocupamos em criar um ambiente
                    em que pessoas talentosas tenham contexto, autonomia e
                    segurança para tomar decisões com impacto real.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {BENEFITS.map((item) => (
                      <Card
                        key={item.title}
                        className="p-5 bg-background/90 backdrop-blur-sm border-border/60 hover:border-accent hover:-translate-y-1 transition-all duração-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="h-9 w-9 rounded-xl bg-subtle-10 flex items-center justify-center flex-shrink-0">
                            <item.icon className="h-5 w-5 icon-accent" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-text">
                              {item.title}
                            </p>
                            <p className="mt-1 text-xs text-text-muted">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between space-y-8">
                  <div className="inline-flex items-center gap-2 rounded-full bg-background/80 border border-border/60 px-3 py-1 text-[11px] text-text-muted">
                    <Star className="h-3.5 w-3.5 icon-accent" />
                    Nossos princípios em decisões do dia a dia
                  </div>

                  <Card className="mt-4 p-5 bg-background/90 border-border/60">
                    <ul className="space-y-5 text-sm text-text">
                      {CULTURE.map((item) => (
                        <li key={item.label} className="space-y-1">
                          <p className="font-semibold">{item.label}</p>
                          <p className="text-xs text-text-muted">
                            {item.description}
                          </p>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 rounded-xl bg-surface/80 border border-dashed border-border/60 px-4 py-3 text-[11px] text-text-muted flex items-start gap-2">
                      <HeartHandshake className="h-4 w-4 icon-accent mt-0.5" />
                      <p>
                        Quer sentir se faz sentido para você? Durante o
                        processo seletivo incentivamos conversas abertas com
                        quem já está no time para tirar dúvidas sobre rotina,
                        desafios e cultura.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Vagas abertas */}
          <section
            id="vagas"
            className="bg-background py-16 sm:py-20 border-b border-border/60"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-2 max-w-xl">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text">
                    Vagas abertas
                  </h2>
                  <p className="text-sm sm:text-base text-text-muted">
                    Escolha a área e o nível que mais combinam com você. Mesmo
                    que nenhuma vaga pareça perfeita, você pode se inscrever no
                    banco de talentos.
                  </p>
                </div>
                <div className="text-xs text-text-muted" />
              </div>

              {/* Filtros */}
              <div className="space-y-4">
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted/80">
                    Filtrar por área
                  </p>
                  <Tabs
                    defaultValue="todas"
                    value={areaFilter}
                    onValueChange={(value) =>
                      setAreaFilter(value as JobAreaId)
                    }
                    className="w-full"
                  >
                    <TabsList className="flex w-full flex-wrap justify-start gap-2 rounded-full bg-surface/70 p-1">
                      {JOB_AREAS.map((area) => (
                        <TabsTrigger
                          key={area.id}
                          value={area.id}
                          className="rounded-full px-3 py-1 text-xs sm:text-sm data-[state=active]:bg-background data-[state=active]:text-text data-[state=active]:border-border/70 border border-transparent"
                        >
                          {area.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                  </Tabs>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs font-semibold uppercase tracking-wide text-text-muted/80">
                    Filtrar por senioridade
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {JOB_SENIORITIES.map((seniority) => (
                      <Button
                        key={seniority.id}
                        size="sm"
                        variant={
                          seniorityFilter === seniority.id
                            ? "default"
                            : "outline"
                        }
                        className="h-8 rounded-full px-3 text-xs"
                        onClick={() =>
                          setSeniorityFilter(seniority.id as JobSeniorityId)
                        }
                      >
                        {seniority.label}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lista de vagas */}
              <div className="mt-4 space-y-4">
                {filteredJobs.length === 0 ? (
                  <Card className="p-6 bg-background/90 border-dashed border-border/60 text-sm text-text-muted">
                    No momento não temos vagas que combinem com esses filtros.
                    Envie seu perfil para o banco de talentos e avisaremos
                    quando abrirmos algo alinhado a você.
                  </Card>
                ) : (
                  filteredJobs.map((job) => (
                    <Card
                      key={job.id}
                      className="p-5 sm:p-6 bg-background/90 border-border/60 hover:border-accent hover:-translate-y-0.5 transition-all duração-300"
                    >
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {job.areaLabel}
                            </Badge>
                            <Badge className="text-xs btn-toggle-active">
                              {job.seniorityLabel}
                            </Badge>
                            <span className="text-[11px] text-text-muted">
                              {job.type} · {job.workModel}
                            </span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-text">
                            {job.title}
                          </h3>
                          <p className="text-sm text-text-muted max-w-2xl">
                            {job.highlight}
                          </p>

                          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-text-muted">
                            <Globe2 className="h-4 w-4 icon-accent" />
                            <span>{job.location}</span>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-2">
                            {job.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full bg-surface/80 px-3 py-1 text-[11px] text-text-muted border border-border/60"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 sm:items-end">
                          <Button
                            className="w-full sm:w-auto btn-primary-gradient shadow-md"
                            onClick={() => handleApply(job)}
                          >
                            Candidatar-se
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full sm:w-auto text-xs border-border/60"
                            onClick={() =>
                              window.open(
                                `mailto:${talentEmail}?subject=${encodeURIComponent(
                                  `[Vaga] ${job.title} – Quero saber mais`,
                                )}`,
                                "_blank",
                              )
                            }
                          >
                            Quero entender melhor a vaga
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </section>

          {/* FAQ + CTA final */}
          <section className="bg-surface/40 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text mb-3">
                    Perguntas frequentes antes de se aplicar.
                  </h2>
                  <p className="text-sm sm:text-base text-text-muted mb-6 max-w-xl">
                    Selecionamos algumas dúvidas comuns de quem está
                    considerando dar o próximo passo na carreira com IA aplicada
                    a negócios.
                  </p>

                  <Accordion
                    type="single"
                    collapsible
                    className="space-y-3"
                  >
                    {CANDIDATE_FAQS.map((faq, index) => (
                      <AccordionItem
                        key={faq.question}
                        value={`faq-${index}`}
                        className="border border-border/60 rounded-xl bg-background/90 px-4 sm:px-5"
                      >
                        <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-text hover-accent">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-text-muted leading-relaxed pt-1">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <div className="space-y-4">
                  <Card className="p-5 card-highlight-accent">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-background/80 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-5 w-5 icon-accent" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-text">
                          Ainda ficou com dúvida se é sua cara?
                        </h3>
                        <p className="text-xs text-text-muted">
                          Você pode mandar um email curto contando como se vê
                          contribuindo com o Meu Agente nos próximos 12 meses.
                          Nosso time de People responde com orientações sobre a
                          melhor trilha ou vaga para seu momento.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-1 border-border/70"
                          onClick={() =>
                            window.open(
                              `mailto:${talentEmail}?subject=${encodeURIComponent(
                                "Quero entender se o Meu Agente faz sentido para minha carreira",
                              )}`,
                              "_blank",
                            )
                          }
                        >
                          Falar com o time de People
                        </Button>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-5 bg-background/90 border-border/60">
                    <p className="text-xs text-text-muted">
                      Não encontrou nenhuma vaga que seja a sua cara agora?
                      Tudo bem. O melhor jeito de ficar por dentro é enviar seu
                      perfil para o banco de talentos e acompanhar o{" "}
                      <span className="font-semibold text-text">
                        LinkedIn do Meu Agente
                      </span>{" "}
                      para novas oportunidades.
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default TrabalheConosco;


