"use client"

import { Timeline, TimelineItem } from "@/components/ui/timeline"

const timelineData: TimelineItem[] = [
  {
    title: "O Início",
    description: "Fundação do Meu Agente com a visão de democratizar o acesso à IA para atendimento no WhatsApp.",
    date: "2023",
    status: "completed",
    category: "Fundação"
  },
  {
    title: "Primeiro MVP",
    description: "Lançamento da primeira versão beta para um grupo seleto de empresas parceiras, validando a eficiência dos agentes.",
    date: "Q3 2023",
    status: "completed",
    category: "Produto"
  },
  {
    title: "Expansão Nacional",
    description: "Abertura da plataforma para todo o Brasil, com integração oficial e novos recursos de personalização.",
    date: "2024",
    status: "current",
    category: "Crescimento"
  },
  {
    title: "Novas Fronteiras",
    description: "Planejamento de integração com outros canais de comunicação e agentes de voz.",
    date: "2025",
    status: "upcoming",
    category: "Futuro"
  }
]

export function CompanyTimeline() {
  return (
    <div className="bg-background py-20">
        <div className="text-center mb-12 px-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nossa Jornada</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                De uma ideia ambiciosa a uma plataforma que processa milhares de conversas diariamente.
            </p>
        </div>
        <Timeline items={timelineData} />
    </div>
  )
}

