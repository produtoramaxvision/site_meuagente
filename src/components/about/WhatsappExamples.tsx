"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import {
  DollarSign,
  Globe2,
  Search,
  PhoneCall,
  Megaphone,
  CalendarClock,
  Code2,
  Video,
} from "lucide-react"

const examples = [
  {
    label: "Financeiro",
    icon: DollarSign,
    iconClass: "text-emerald-500 dark:text-emerald-400",
    bubbleBg: "bg-emerald-500/10",
    badgeBorder: "border-emerald-500/60",
    badgeShadow: "shadow-[0_0_0_1px_rgba(16,185,129,0.9)]",
    user: "Registra uma entrada de R$ 1.200,00 na categoria Assinaturas — Plano Business — com data 01/10/2025.",
    agent: "Entrada registrada com sucesso! Já aparece nos seus relatórios financeiros desse período."
  },
  {
    label: "Web Search",
    icon: Globe2,
    iconClass: "text-sky-500 dark:text-sky-400",
    bubbleBg: "bg-sky-500/10",
    badgeBorder: "border-sky-500/60",
    badgeShadow: "shadow-[0_0_0_1px_rgba(56,189,248,0.9)]",
    user: "Pesquise tendências de 'roupas fitness' na região de SP e me entregue 5 insights com 3 links confiáveis.",
    agent: "Analisei as principais fontes. Te enviei 5 insights objetivos com 3 links confiáveis para você aprofundar."
  },
  {
    label: "Scrape",
    icon: Search,
    iconClass: "text-purple-500 dark:text-purple-400",
    bubbleBg: "bg-purple-500/10",
    badgeBorder: "border-purple-500/60",
    badgeShadow: "shadow-[0_0_0_1px_rgba(168,85,247,0.9)]",
    user: "Busque no portal de dados abertos de Curitiba o dataset de aluguel residencial de 2024 e me mande um CSV por bairro.",
    agent: "Encontrei o dataset oficial, filtrei por bairro e gerei um CSV pronto para você analisar."
  },
  {
    label: "SDR",
    icon: PhoneCall,
    iconClass: "text-orange-500 dark:text-orange-400",
    bubbleBg: "bg-orange-500/10",
    badgeBorder: "border-orange-500/60",
    badgeShadow: "shadow-[0_0_0_1px_rgba(249,115,22,0.9)]",
    user: "Qualifique este lead: Ana, interessada em demo — me diga o fit e o próximo passo.",
    agent: "Qualifiquei a Ana como High-Fit. Próximo passo recomendado: agendar uma demo de 20 minutos ainda esta semana."
  },
  {
    label: "Marketing",
    icon: Megaphone,
    iconClass: "text-rose-500 dark:text-rose-400",
    bubbleBg: "bg-rose-500/10",
    badgeBorder: "border-rose-500/60",
    badgeShadow: "shadow-[0_0_0_1px_rgba(244,63,94,0.9)]",
    user: "Analisa minha campanha de Google Ads 'Tráfego – Outubro' e me sugere 3 termos negativos para adicionar.",
    agent: "Revisei sua campanha e separei 3 termos negativos que estão gastando orçamento sem resultado. Já deixei a lista pronta para você aplicar."
  },
  {
    label: "Agendamento",
    icon: CalendarClock,
    iconClass: "text-indigo-500 dark:text-indigo-400",
    bubbleBg: "bg-indigo-500/10",
    badgeBorder: "border-indigo-500/60",
    badgeShadow: "shadow-[0_0_0_1px_rgba(79,70,229,0.9)]",
    user: "Marque uma reunião com o João amanhã às 15:00 no Google Meet e envie o link para ele e para mim.",
    agent: "Reunião criada no seu Google Calendar às 15:00, com link do Meet enviado para você e para o João."
  },
  {
    label: "Dev",
    icon: Code2,
    iconClass: "text-slate-500 dark:text-slate-400",
    bubbleBg: "bg-slate-500/10",
    badgeBorder: "border-slate-500/60",
    badgeShadow: "shadow-[0_0_0_1px_rgba(100,116,139,0.9)]",
    user: "Revise meu endpoint /api/checkout; estou recebendo erro 500 quando envio customerId vazio.",
    agent: "Encontrei o ponto de falha. Recomendo validar o customerId antes de chamar o serviço externo e retornar 400 com mensagem clara."
  },
  {
    label: "Vídeo",
    icon: Video,
    iconClass: "text-violet-500 dark:text-violet-400",
    bubbleBg: "bg-violet-500/10",
    badgeBorder: "border-violet-500/60",
    badgeShadow: "shadow-[0_0_0_1px_rgba(139,92,246,0.9)]",
    user: "Crie um vídeo de 30s em 1080x1920 com o roteiro: 'Bem-vindo ao Meu Agente...' e me envie duas variações.",
    agent: "Modelei duas versões de roteiro e gerei 2 vídeos em 1080x1920 prontinhos para usar em stories e anúncios."
  }
] as const

export function WhatsappExamples() {
  const autoplayPlugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: true,
    }),
  )

  return (
    <section className="py-20 sm:py-24 bg-surface/40 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 mb-3 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-500"
          >
            <PhoneCall className="h-3.5 w-3.5 text-brand-500" />
            <span>Como conversamos no WhatsApp</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text mb-4">
            Exemplos reais de mensagens com o Meu Agente.
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Você fala com o Meu Agente como se estivesse falando com uma pessoa. Veja exemplos de como cada agente
            atua no seu dia a dia, direto pelo WhatsApp.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[autoplayPlugin.current]}
          onMouseEnter={autoplayPlugin.current.stop}
          onMouseLeave={autoplayPlugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {examples.map((item) => {
              const Icon = item.icon
              return (
                <CarouselItem
                  key={item.label}
                  className="pl-4 md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                >
                  <Card className="group relative h-full overflow-hidden rounded-xl border border-border/60 bg-background/70 px-0 shadow-adaptive hover:shadow-xl-adaptive transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
                    <CardContent className="relative z-10 pt-5 pb-6 px-5">
                      <div className="flex items-center gap-2 mb-4">
                        <div
                          className={`h-8 w-8 rounded-full ${item.bubbleBg} border flex items-center justify-center`}
                        >
                          <Icon className={`h-4 w-4 ${item.iconClass}`} />
                        </div>
                        <Badge
                          variant="secondary"
                          className={`mb-1 rounded-full ${item.bubbleBg} border ${"badgeBorder" in item ? item.badgeBorder : "border-border/60"} text-[10px] font-semibold uppercase tracking-[0.18em] px-3 py-1 ${
                            "badgeShadow" in item ? item.badgeShadow : "shadow-[0_0_0_1px_rgba(15,23,42,0.6)]"
                          } animate-badge-pulse ${item.iconClass}`}
                        >
                          {item.label}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm">
                        {/* Balão principal - padrão WhatsApp verde */}
                        <div className="inline-block max-w-full rounded-2xl rounded-br-sm bg-[#005c4b] text-[#e9edef] px-3 py-2 text-left text-xs sm:text-sm shadow-sm shadow-black/40">
                          {`"${item.user}"`}
                        </div>
                        {/* Balão de resposta - cinza escuro WhatsApp web */}
                        <div className="inline-block max-w-full rounded-2xl rounded-bl-sm bg-[#202c33] border border-[#202c33] px-3 py-2 text-left text-xs sm:text-sm text-[#e9edef]">
                          {`"${item.agent}"`}
                        </div>
                      </div>
                    </CardContent>

                    {/* Camada de brilho/gradiente para feedback visual, alinhada ao padrão do site */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px line-via-accent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}

