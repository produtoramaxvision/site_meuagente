"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Bot, LineChart, CalendarClock } from "lucide-react"

export function AboutProduct() {
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

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:auto-rows-fr">
          <Card className="h-full flex flex-col bg-background/90 border-border/70 shadow-adaptive">
            <CardHeader className="flex items-start gap-3 pb-3">
              <div className="h-10 w-10 rounded-xl bg-subtle-10 border border-border flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-brand-500" />
              </div>
              <div>
                <CardTitle className="text-base sm:text-lg">Atendimento 24/7 no WhatsApp</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Recepção, triagem e acompanhamento de leads e clientes, seguindo as regras do WhatsApp Business.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-0 text-xs sm:text-sm text-text-muted leading-relaxed">
              Sub-agentes como SDR, Confirmação e Follow-up ajudam a diminuir no-show, recuperar oportunidades
              e manter o relacionamento sempre ativo.
            </CardContent>
          </Card>

          <Card className="h-full flex flex-col bg-background/90 border-border/70 shadow-adaptive">
            <CardHeader className="flex items-start gap-3 pb-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
                <LineChart className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
              </div>
              <div>
                <CardTitle className="text-base sm:text-lg">Operações e finanças organizadas</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Registros de entradas e saídas, categorias e exportações em CSV/PDF nos planos pagos.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-0 text-xs sm:text-sm text-text-muted leading-relaxed">
              O Agente Financeiro centraliza o fluxo financeiro e facilita relatórios, sem depender de planilhas
              manuais espalhadas.
            </CardContent>
          </Card>

          <Card className="h-full flex flex-col bg-background/90 border-border/70 shadow-adaptive">
            <CardHeader className="flex items-start gap-3 pb-3">
              <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/40 flex items-center justify-center">
                <CalendarClock className="h-5 w-5 text-sky-500 dark:text-sky-400" />
              </div>
              <div>
                <CardTitle className="text-base sm:text-lg">Integrações com Google & rotina diária</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Agendamento, tarefas e arquivos integrados a Google Calendar, Drive e Tasks a partir do plano Básico.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-0 text-xs sm:text-sm text-text-muted leading-relaxed">
              Agentes de Agendamento e de Marketing conectam sua rotina diária aos seus canais digitais, com governança
              e automações sob medida.
            </CardContent>
          </Card>

          <Card className="h-full flex flex-col bg-background/90 border-border/70 shadow-adaptive">
            <CardHeader className="flex items-start gap-3 pb-3">
              <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/40 flex items-center justify-center">
                <Bot className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
              </div>
              <div>
                <CardTitle className="text-base sm:text-lg">App web para controlar seus agentes</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Painel completo para acompanhar conversas, configurar fluxos, ver relatórios e gerenciar sua operação em tempo real.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-0 text-xs sm:text-sm text-text-muted leading-relaxed">
              Pelo app você visualiza métricas dos agentes, ajusta mensagens, cria campanhas, organiza permissões da equipe
              e integra o Meu Agente com outras ferramentas do seu stack — tudo em uma interface única e simples de usar.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


