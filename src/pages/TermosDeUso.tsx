import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, ChevronRight, ShieldCheck, FileText, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import termosDeUsoMarkdown from "../../docs/termos-de-uso.md?raw";

const TermosDeUso = () => {
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [sidebarHeight, setSidebarHeight] = useState<number | null>(null);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const { headings, effectiveDate } = useMemo(() => {
    const headingMatches =
      termosDeUsoMarkdown
        .match(/^## (.+)$/gm)
        ?.map((h) => {
          const title = h.replace("## ", "");
          const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return { title, id };
        }) ?? [];

    const dateMatch = termosDeUsoMarkdown.match(
      /\*\*Data de vigência:\*\*\s*([0-9/]+)/
    );

    return {
      headings: headingMatches,
      effectiveDate: dateMatch?.[1] ?? "19/11/2025",
    };
  }, []);

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

  // Mantém a altura da caixa de leitura alinhada com a coluna lateral
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

  return (
    <>
      <SEO
        title="Termos de Uso – Meu Agente"
        description="Leia os Termos de Uso da plataforma Meu Agente, que regulam o acesso, responsabilidades, limites de uso e demais condições legais aplicáveis ao serviço."
        canonicalUrl="/termos-de-uso"
      />
      <div className="min-h-screen bg-background">
        {/* Hero / Cabeçalho legal */}
        <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-surface via-background to-surface py-14 sm:py-16">
          <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800b_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
            <div className="bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.16),_transparent_60%)]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-text-muted">
              <Link to="/" className="transition-colors hover-accent">
                <Home className="h-4 w-4" />
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="transition-colors hover-accent">
                Legal
              </span>
              <ChevronRight className="h-4 w-4" />
              <span className="text-text">Termos de Uso</span>
            </nav>

            <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1.2fr)]">
              <div className="space-y-6">
                <Badge
                  variant="secondary"
                  className="text-[11px] uppercase tracking-[0.18em]"
                >
                  Documento legal
                </Badge>
                <h1 className="text-balance pb-2 text-3xl font-extrabold leading-tight text-gradient sm:text-4xl lg:text-5xl">
                  Termos de Uso – Meu Agente
                </h1>
                <p className="max-w-2xl text-balance text-base text-text-muted sm:text-lg">
                  Este documento descreve as condições para uso da Plataforma
                  Meu Agente, incluindo responsabilidades, limitações,
                  tratamento de dados, penalidades e demais obrigações entre
                  você e o Meu Agente.
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-text-muted">
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 px-3 py-1">
                    <ShieldCheck className="h-4 w-4 icon-accent" />
                    <span>Documento vinculante entre Cliente e Meu Agente</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/80 px-3 py-1">
                    <Clock className="h-4 w-4 icon-accent" />
                    <span>Atualizado em {effectiveDate}</span>
                  </div>
                </div>
              </div>

              <Card className="border-border/70 bg-background/90 shadow-2xl-adaptive backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <FileText className="h-5 w-5 icon-accent" />
                    Antes de continuar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-text-muted">
                  <p>
                    Ao criar uma conta ou utilizar a Plataforma Meu Agente, você
                    declara que leu, compreendeu e concorda integralmente com
                    estes Termos de Uso e com a Política de Privacidade.
                  </p>
                  <p>
                    Em caso de dúvidas, entre em contato com nosso time pelos
                    canais oficiais indicados na página de Contato.
                  </p>
                  <Separator className="my-3" />
                  <p className="text-xs">
                    Este texto é um resumo. A versão legalmente válida é o
                    conteúdo completo apresentado abaixo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Conteúdo + Índice lateral */}
        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Cabeçalho da seção, alinhado para ambas as colunas */}
            <div className="mb-6 flex items-baseline justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
                  VERSÃO COMPLETA
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  Leia com calma. Recomendamos reservar alguns minutos para
                  revisar cada seção.
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
                          const raw = String(children);
                          const id = raw
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-");
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
                        h3: ({ children, ...props }) => {
                          const raw = String(children);
                          const id = raw
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-");
                          return (
                            <h3
                              id={id}
                              className="mt-6 scroll-mt-28 text-[15px] font-semibold text-text sm:text-base"
                              {...props}
                            >
                              {children}
                            </h3>
                          );
                        },
                        p: ({ children, ...props }) => (
                          <p className="mt-3 text-[13px] sm:text-sm leading-relaxed text-text-muted" {...props}>
                            {children}
                          </p>
                        ),
                        ul: ({ children, ...props }) => (
                          <ul className="mt-3 list-disc space-y-2 pl-5 text-[13px] sm:text-sm leading-relaxed text-text-muted" {...props}>
                            {children}
                          </ul>
                        ),
                        ol: ({ children, ...props }) => (
                          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[13px] sm:text-sm leading-relaxed text-text-muted" {...props}>
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
                      {termosDeUsoMarkdown}
                    </ReactMarkdown>
                  </article>
                </ScrollArea>
              </div>

              {/* Sidebar com índice e reforços de leitura */}
              <aside className="self-start">
                <div
                  ref={sidebarRef}
                  className="sticky top-24 space-y-6"
                >
                  {headings.length > 0 && (
                    <Card className="border-border/70 bg-background/95 backdrop-blur">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base sm:text-lg">
                          Índice deste documento
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
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-base">
                        <ShieldCheck className="h-4 w-4 icon-accent" />
                        Relacionado à privacidade
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-text-muted">
                      <p>
                        O tratamento de dados pessoais pela plataforma é detalhado
                        na{" "}
                        <span className="font-semibold text-text">
                          Política de Privacidade – Meu Agente
                        </span>
                        , que complementa estes Termos de Uso.
                      </p>
                      <p className="text-xs">
                        Sempre que tiver dúvidas sobre como seus dados são
                        tratados, consulte a Política de Privacidade em conjunto
                        com este documento.
                      </p>
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

export default TermosDeUso;