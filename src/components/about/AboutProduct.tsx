"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { AnimatedJobCard } from "@/components/ui/animated-job-card"
import { cn } from "@/lib/utils"
import { MessageCircle, Bot, LineChart, CalendarClock } from "lucide-react"

export function AboutProduct() {
  // Cards do deck (4 cards, nenhum removido)
  const deckCards = [
    {
      id: "atendimento",
      companyLogo: <MessageCircle className="h-5 w-5 text-brand-500" />,
      companyName: "Agente de Atendimento Meu Agente",
      jobTitle: "Atendimento 24/7 no WhatsApp",
      salary:
        "Recepção, triagem e acompanhamento de leads e clientes, seguindo as regras do WhatsApp Business.",
      tags: [
        "Sub-agentes SDR, Confirmação e Follow-up",
        "Redução de no-show e recuperação de oportunidades",
        "Relacionamento sempre ativo com seus contatos",
      ],
      postedDate: "Sempre online, sem folga ou férias.",
      variant: "blue" as const,
    },
    {
      id: "financeiro",
      companyLogo: <LineChart className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />,
      companyName: "Agente Financeiro Meu Agente",
      jobTitle: "Operações e finanças organizadas",
      salary:
        "Registros de entradas e saídas, categorias e exportações em CSV/PDF nos planos pagos.",
      tags: [
        "Centralização do fluxo financeiro",
        "Relatórios facilitados para seu contador",
        "Menos planilhas manuais espalhadas",
      ],
      postedDate: "Disponível nos planos pagos.",
      variant: "yellow" as const,
    },
    {
      id: "rotina",
      companyLogo: <CalendarClock className="h-5 w-5 text-sky-500 dark:text-sky-400" />,
      companyName: "Agente de Rotina & Agenda",
      jobTitle: "Integrações com Google & rotina diária",
      salary:
        "Agendamento, tarefas e arquivos integrados a Google Calendar, Drive e Tasks a partir do plano Básico.",
      tags: [
        "Rotina conectada ao seu calendário",
        "Organização de tarefas e arquivos",
        "Governança e automações sob medida",
      ],
      postedDate: "Incluso a partir do plano Básico.",
      variant: "pink" as const,
    },
    {
      id: "painel",
      companyLogo: <Bot className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />,
      companyName: "Painel Web Meu Agente",
      jobTitle: "App web para controlar seus agentes",
      salary:
        "Painel completo para acompanhar conversas, fluxos, relatórios e sua operação em tempo real.",
      tags: [
        "Métricas dos agentes em um só lugar",
        "Configuração de campanhas e mensagens",
        "Integração com o restante do seu stack",
      ],
      postedDate: "Gestão em tempo real via navegador.",
      variant: "purple" as const,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  // Calcula a posição visual de cada card no deck (esquerda, centro, direita, fundo)
  // A ideia aqui é ficar bem próximo do layout de referência: três cards sobrepostos,
  // com o central em destaque e os laterais levemente rotacionados.
  const getDeckPositionClasses = (index: number) => {
    if (index === activeIndex) {
      // Card em destaque (centro)
      return "z-30 -translate-y-2"
    }

    const total = deckCards.length
    const prevIndex = (activeIndex - 1 + total) % total
    const nextIndex = (activeIndex + 1) % total

    if (index === prevIndex) {
      // Card à esquerda (levemente rotacionado e deslocado)
      return "-rotate-8 -translate-x-24 sm:-translate-x-32 translate-y-2 z-20 opacity-80"
    }

    if (index === nextIndex) {
      // Card à direita (levemente rotacionado e deslocado)
      return "rotate-8 translate-x-24 sm:translate-x-32 translate-y-2 z-20 opacity-80"
    }

    // Cards que não estão imediatamente na esquerda/direita ficam discretos no fundo
    return "scale-95 opacity-0 pointer-events-none"
  }

  return (
    <section className="py-20 sm:py-24 bg-surface/40 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
        <div className="max-w-3xl">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 mb-3 rounded-full border border-brand-500/40 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-400"
          >
            <MessageCircle className="h-3.5 w-3.5 text-brand-400" />
            <span>Plataforma de agentes no WhatsApp</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text mb-4">
            O que é o Meu Agente, na prática?
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed mb-6">
            O Meu Agente é um micro SaaS que disponibiliza uma equipe de agentes de IA operando diretamente
            em um número de WhatsApp para cuidar de atendimento, operações e automação do seu negócio —
            reduzindo tempo operacional, aumentando conversão e padronizando processos.
          </p>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Nos planos Business e Premium, você conta com número dedicado, implantação inclusa,
            suporte 24/7 e sub-agentes especializados para finanças, marketing, agendamento, desenvolvimento
            e muito mais.
          </p>
        </div>

        {/* Deck interativo de cards sobrepostos (4 cards) */}
        <div className="relative flex justify-center items-center py-4 sm:py-8">
          <div className="relative w-full max-w-5xl h-[260px] sm:h-[280px] md:h-[320px]">
            {deckCards.map((card, index) => (
              <AnimatedJobCard
                key={card.id}
                companyLogo={card.companyLogo}
                companyName={card.companyName}
                jobTitle={card.jobTitle}
                salary={card.salary}
                tags={card.tags}
                postedDate={card.postedDate}
                variant={card.variant}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "absolute inset-0 max-w-xl mx-auto cursor-pointer transition-transform duration-300",
                  getDeckPositionClasses(index),
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

