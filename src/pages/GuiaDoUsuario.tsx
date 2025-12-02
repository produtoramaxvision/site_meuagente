import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  BookOpen,
  ChevronRight,
  Compass,
  Home,
  ListChecks,
  Sparkles,
  Clock,
} from "lucide-react";
import SEO from "@/components/SEO";
import { createUserGuideHowToSchema, createFAQPageSchema } from "@/lib/seo";
import guiaMarkdown from "../../docs/guia_meu_agente.md?raw";

type Heading = {
  title: string;
  id: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const GuiaDoUsuario = () => {
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [sidebarHeight, setSidebarHeight] = useState<number | null>(null);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const { headings, updatedAt } = useMemo(() => {
    const headingMatches: Heading[] =
      guiaMarkdown
        .match(/^## (.+)$/gm)
        ?.map((line) => {
          const rawTitle = line.replace(/^##\s+/, "").trim();
          // Remove marcações simples de negrito em Markdown (**texto**)
          const cleanTitle = rawTitle.replace(/\*\*(.+?)\*\*/g, "$1").trim();
          const id = slugify(cleanTitle);
          return { title: cleanTitle, id };
        }) ?? [];

    const updatedAtMatch = guiaMarkdown.match(
      /\*\*Guia do usuário atualizado em\*\*:\s*([0-9/]+)/i
    );

    return {
      headings: headingMatches,
      updatedAt: updatedAtMatch?.[1] ?? "16/01/2025",
    };
  }, []);

  const structuredData = useMemo(() => {
    const url = "https://site.meuagente.api.br/guia-do-usuario";

    const howToSchema = createUserGuideHowToSchema({
      title: "Guia do Usuário – Meu Agente",
      description:
        "Guia completo para colocar os Agentes de IA do Meu Agente em produção: primeiros passos, dashboard, metas, agenda, tarefas, relatórios, suporte e solução de problemas.",
      url,
      lastUpdated: updatedAt,
      sections: headings.map((h) => ({
        title: h.title,
        anchor: h.id,
      })),
    });

    // FAQ complementar baseado na seção de Solução de Problemas do guia
    const faqSchema = createFAQPageSchema([
      {
        question: "Não consigo fazer login, o que posso fazer?",
        answer:
          "Verifique se a senha está correta, utilize a opção “Esqueci minha senha”, confira sua conexão de internet e, se o problema persistir, entre em contato com o suporte informado no final do guia.",
      },
      {
        question: "Meus dados não aparecem ou parecem desatualizados.",
        answer:
          "Recarregue a página, revise os filtros aplicados nos relatórios ou dashboards, limpe o cache do navegador e, se necessário, faça uma sincronização manual conforme orientações do guia.",
      },
      {
        question: "Estou recebendo erro ao salvar informações.",
        answer:
          "Confirme se todos os campos obrigatórios foram preenchidos, corrija valores com formato inválido (como números negativos ou valores fora do limite) e garanta que a conexão com a internet esteja estável antes de tentar novamente.",
      },
      {
        question: "A exportação de relatórios não está funcionando.",
        answer:
          "Reduza o período selecionado, teste outros formatos de exportação (PDF, CSV, JSON) e verifique se o navegador não está bloqueando pop-ups ou downloads automáticos.",
      },
    ]);

    return [howToSchema, faqSchema];
  }, [headings, updatedAt]);

  // Mantém o destaque da seção atual conforme o usuário rola o conteúdo
  useEffect(() => {
    const articleHeadings = document.querySelectorAll("article h2");

    if (!articleHeadings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    articleHeadings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  // Mantém a altura do conteúdo alinhada com a coluna lateral
  useEffect(() => {
    if (!sidebarRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const nextHeight = entry.contentRect.height;
        setSidebarHeight((prev) => (prev !== nextHeight ? nextHeight : prev));
      }
    });

    observer.observe(sidebarRef.current);

    return () => observer.disconnect();
  }, []);

  // Contador simples para associar cada h2 ao índice correspondente de headings
  let h2Index = -1;

  return (
    <>
      <SEO
        title="Guia do Usuário – Meu Agente"
        description="Guia completo para colocar os Agentes de IA do Meu Agente em produção: primeiros passos, dashboard, metas, agenda, tarefas, relatórios, suporte e solução de problemas."
        canonicalUrl="/guia-do-usuario"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero / Cabeçalho do guia */}
        <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-surface via-background to-surface py-14 sm:py-16">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
            <div className="bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_60%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-text-muted">
              <Link to="/" className="transition-colors hover-accent">
                <Home className="h-4 w-4" />
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="transition-colors hover-accent">
                Documentação
              </span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-text">Guia do Usuário</span>
            </nav>

            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.2fr)]">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="text-[11px] uppercase tracking-[0.18em]"
                >
                  Guia do Usuário • Onboarding
                </Badge>

                <h1 className="text-balance pb-2 text-3xl font-extrabold leading-tight text-gradient sm:text-4xl lg:text-5xl">
                  Guia completo para operar o Meu Agente no dia a dia.
                </h1>

                <p className="max-w-2xl text-balance text-base text-text-muted sm:text-lg">
                  Este guia foi pensado para founders, gestores financeiros e
                  times operacionais que querem transformar o WhatsApp em uma
                  central de Agentes de IA. Siga os capítulos para sair do zero
                  até o uso avançado: dashboard, contas, metas, agenda, tarefas,
                  relatórios e suporte.
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-text-muted">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 px-3 py-1">
                    <BookOpen className="h-4 w-4 icon-accent" />
                    <span>Conteúdo guiado, passo a passo</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 px-3 py-1">
                    <Compass className="h-4 w-4 icon-accent" />
                    <span>Organizado por jornadas de uso</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 px-3 py-1">
                    <Clock className="h-4 w-4 icon-accent" />
                    <span>Atualizado em {updatedAt}</span>
                  </div>
                </div>
              </div>

              <Card className="border-border/70 bg-background/90 shadow-2xl-adaptive backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <ListChecks className="h-5 w-5 icon-accent" />
                    Comece pelo que importa para você
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-text-muted">
                  <p>
                    Use o guia como um manual vivo: marque seções, volte sempre
                    que precisar revisar um fluxo e compartilhe com seu time.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById(
                          headings[1]?.id ?? headings[0]?.id
                        );
                        if (!el) return;
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface/90 px-3 py-3 text-left text-xs sm:text-sm transition-all hover:border-accent hover:shadow-md"
                    >
                      <Sparkles className="mt-0.5 h-4 w-4 icon-accent" />
                      <div>
                        <p className="font-semibold text-text">
                          Primeiros passos rápidos
                        </p>
                        <p className="text-[11px] text-text-muted">
                          Criação de conta, primeiro login e configuração inicial.
                        </p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        const el = document.getElementById(
                          headings.find((h) =>
                            h.id.includes("dashboard")
                          )?.id ?? headings[2]?.id
                        );
                        if (!el) return;
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="flex items-start gap-3 rounded-2xl border border-border/70 bg-surface/90 px-3 py-3 text-left text-xs sm:text-sm transition-all hover:border-accent hover:shadow-md"
                    >
                      <BookOpen className="mt-0.5 h-4 w-4 icon-accent" />
                      <div>
                        <p className="font-semibold text-text">
                          Entendendo o dashboard
                        </p>
                        <p className="text-[11px] text-text-muted">
                          Visão geral, cards principais e gráficos.
                        </p>
                      </div>
                    </button>
                  </div>

                  <Separator className="my-2" />
                  <p className="text-xs">
                    Dica: salve esta página nos favoritos do navegador para
                    consultar sempre que tiver dúvidas de uso.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Conteúdo + Índice lateral + atalhos em acordeão */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
                  GUIA COMPLETO DO USUÁRIO
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  Siga a ordem sugerida ou use o índice lateral e os atalhos para
                  ir direto ao que você precisa agora.
                </p>
              </div>
            </div>

            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,2.6fr)_minmax(260px,1fr)]">
              {/* Conteúdo principal em área rolável */}
              <div>
                <ScrollArea
                  className="rounded-2xl border border-border/70 bg-surface/70 shadow-sm"
                  style={sidebarHeight ? { height: sidebarHeight } : undefined}
                >
                  <article className="mx-auto max-w-3xl space-y-6 px-5 py-6 text-sm leading-relaxed text-text-muted sm:px-7 sm:py-8 sm:text-[15px] lg:text-base">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h2: ({ children, ...props }) => {
                          h2Index += 1;
                          const heading = headings[h2Index];
                          const id = heading?.id ?? `secao-${h2Index}`;
                          return (
                            <h2
                              id={id}
                              className="mt-10 scroll-mt-28 text-lg font-semibold text-text sm:text-xl"
                              {...props}
                            >
                              {children}
                            </h2>
                          );
                        },
                        h3: ({ children, ...props }) => (
                          <h3
                            className="mt-6 scroll-mt-28 text-[15px] font-semibold text-text sm:text-base"
                            {...props}
                          >
                            {children}
                          </h3>
                        ),
                        p: ({ children, ...props }) => (
                          <p
                            className="mt-3 text-[13px] sm:text-sm leading-relaxed text-text-muted"
                            {...props}
                          >
                            {children}
                          </p>
                        ),
                        ul: ({ children, ...props }) => (
                          <ul
                            className="mt-3 list-disc space-y-2 pl-5 text-[13px] sm:text-sm leading-relaxed text-text-muted"
                            {...props}
                          >
                            {children}
                          </ul>
                        ),
                        ol: ({ children, ...props }) => (
                          <ol
                            className="mt-3 list-decimal space-y-2 pl-5 text-[13px] sm:text-sm leading-relaxed text-text-muted"
                            {...props}
                          >
                            {children}
                          </ol>
                        ),
                        strong: ({ children, ...props }) => (
                          <strong className="font-semibold text-text" {...props}>
                            {children}
                          </strong>
                        ),
                        a: ({ children, ...props }) => (
                          <a
                            className="font-medium text-accent underline-offset-2 hover:underline"
                            {...props}
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {guiaMarkdown}
                    </ReactMarkdown>
                  </article>
                </ScrollArea>
              </div>

              {/* Sidebar com índice, atalhos e FAQ rápida */}
              <aside className="self-start">
                <div
                  ref={sidebarRef}
                  className="sticky top-24 space-y-6"
                >
                  {headings.length > 0 && (
                    <Card className="border-border/70 bg-background/95 backdrop-blur">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base sm:text-lg">
                          Índice do guia
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-1.5 text-sm">
                        {headings.map((heading) => {
                          const isActive = activeHeading === heading.id;
                          return (
                            <a
                              key={heading.id}
                              href={`#${heading.id}`}
                              className={`group flex items-center justify-between rounded-lg border px-3 py-2 text-xs sm:text-sm transition-all ${
                                isActive
                                  ? "toc-link-active shadow-sm"
                                  : "border-transparent text-text-muted hover:border-subtle hover:bg-surface/90 hover:text-text"
                              }`}
                            >
                              <span className="flex items-center gap-2 min-w-0">
                                <span
                                  className={`h-1.5 w-1.5 flex-shrink-0 rounded-full transition-colors ${
                                    isActive ? "dot-active" : "bg-border"
                                  }`}
                                />
                                <span className="truncate">{heading.title}</span>
                              </span>
                            </a>
                          );
                        })}
                      </CardContent>
                    </Card>
                  )}

                  <Card className="border-border/70 bg-surface/90">
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <Sparkles className="h-4 w-4 icon-accent" />
                        Atalhos do guia
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-xs sm:text-sm text-text-muted">
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                      >
                        <AccordionItem value="primeiros-passos">
                          <AccordionTrigger className="text-xs sm:text-sm">
                            Começando agora
                          </AccordionTrigger>
                          <AccordionContent className="space-y-2">
                            <button
                              type="button"
                              onClick={() => {
                                const el = document.getElementById(
                                  headings.find((h) =>
                                    h.id.includes("primeiros-passos")
                                  )?.id ?? headings[1]?.id
                                );
                                if (!el) return;
                                el.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }}
                              className="block w-full rounded-md border border-border/60 bg-background/80 px-3 py-2 text-left text-xs hover:border-accent hover:text-text"
                            >
                              Ver seção de Primeiros Passos
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                const el = document.getElementById(
                                  headings.find((h) =>
                                    h.id.includes("gestao-de-contas")
                                  )?.id
                                );
                                if (!el) return;
                                el.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }}
                              className="mt-1 block w-full rounded-md border border-border/60 bg-background/80 px-3 py-2 text-left text-xs hover:border-accent hover:text-text"
                            >
                              Lançar receitas e despesas
                            </button>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="analise">
                          <AccordionTrigger className="text-xs sm:text-sm">
                            Análise e relatórios
                          </AccordionTrigger>
                          <AccordionContent className="space-y-2">
                            <button
                              type="button"
                              onClick={() => {
                                const el = document.getElementById(
                                  headings.find((h) =>
                                    h.id.includes("relatorios")
                                  )?.id
                                );
                                if (!el) return;
                                el.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }}
                              className="block w-full rounded-md border border-border/60 bg-background/80 px-3 py-2 text-left text-xs hover:border-accent hover:text-text"
                            >
                              Ver seção de Relatórios
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                const el = document.getElementById(
                                  headings.find((h) =>
                                    h.id.includes("dicas-e-truques")
                                  )?.id
                                );
                                if (!el) return;
                                el.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }}
                              className="mt-1 block w-full rounded-md border border-border/60 bg-background/80 px-3 py-2 text-left text-xs hover:border-accent hover:text-text"
                            >
                              Dicas e truques avançados
                            </button>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="suporte">
                          <AccordionTrigger className="text-xs sm:text-sm">
                            Suporte & problemas comuns
                          </AccordionTrigger>
                          <AccordionContent className="space-y-2">
                            <button
                              type="button"
                              onClick={() => {
                                const el = document.getElementById(
                                  headings.find((h) =>
                                    h.id.includes("solucao-de-problemas")
                                  )?.id
                                );
                                if (!el) return;
                                el.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }}
                              className="block w-full rounded-md border border-border/60 bg-background/80 px-3 py-2 text-left text-xs hover:border-accent hover:text-text"
                            >
                              Acessar Solução de Problemas
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                const el = document.getElementById(
                                  headings.find((h) =>
                                    h.id.includes("contato-e-suporte")
                                  )?.id
                                );
                                if (!el) return;
                                el.scrollIntoView({
                                  behavior: "smooth",
                                  block: "start",
                                });
                              }}
                              className="mt-1 block w-full rounded-md border border-border/60 bg-background/80 px-3 py-2 text-left text-xs hover:border-accent hover:text-text"
                            >
                              Ver canais de contato
                            </button>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GuiaDoUsuario;


