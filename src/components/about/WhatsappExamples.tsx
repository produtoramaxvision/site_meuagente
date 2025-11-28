"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle } from "lucide-react"

export function WhatsappExamples() {
  return (
    <section className="py-20 sm:py-24 bg-surface/40 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <Badge className="mb-3 bg-brand-500/10 text-brand-500 border-brand-500/40">
            Como conversamos no WhatsApp
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text mb-4">
            Exemplos reais de mensagens com o Meu Agente.
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Você fala com o Meu Agente como se estivesse falando com uma pessoa. Abaixo alguns exemplos de
            fluxos do dia a dia, inspirados nos nossos próprios clientes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="bg-background/95 border-border/70 shadow-lg relative overflow-hidden">
            <CardContent className="pt-5 pb-6 px-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-emerald-500" />
                </div>
                <p className="text-xs font-medium text-text-muted uppercase tracking-[0.12em]">
                  Financeiro
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="inline-block max-w-full rounded-2xl rounded-br-sm bg-brand-900 text-white px-3 py-2 text-left text-xs sm:text-sm">
                  {"\"Registra uma saída de R$ 320,00 em Marketing, descrição 'Impulsionamento Instagram', hoje às 14:40.\""}
                </div>
                <div className="inline-block max-w-full rounded-2xl rounded-bl-sm bg-surface px-3 py-2 text-left text-xs sm:text-sm text-text-muted">
                  {"\"Pronto! Lancei a saída de R$ 320,00 em Marketing para hoje às 14:40 e atualizei seus relatórios.\""}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/95 border-border/70 shadow-lg relative overflow-hidden">
            <CardContent className="pt-5 pb-6 px-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-sky-500/10 border border-sky-500/40 flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-sky-500" />
                </div>
                <p className="text-xs font-medium text-text-muted uppercase tracking-[0.12em]">
                  SDR & Agendamento
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="inline-block max-w-full rounded-2xl rounded-br-sm bg-brand-900 text-white px-3 py-2 text-left text-xs sm:text-sm">
                  {"\"Confirma com meus leads de amanhã se eles vão manter o horário e remarca quem precisar.\""}
                </div>
                <div className="inline-block max-w-full rounded-2xl rounded-bl-sm bg-surface px-3 py-2 text-left text-xs sm:text-sm text-text-muted">
                  {"\"Combinado! Vou revisar seu Google Calendar, confirmar cada reunião por WhatsApp e sugerir novos horários para quem precisar remarcar.\""}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/95 border-border/70 shadow-lg relative overflow-hidden">
            <CardContent className="pt-5 pb-6 px-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-purple-500/10 border border-purple-500/40 flex items-center justify-center">
                  <MessageCircle className="h-4 w-4 text-purple-500" />
                </div>
                <p className="text-xs font-medium text-text-muted uppercase tracking-[0.12em]">
                  Web Search & Scrape
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <div className="inline-block max-w-full rounded-2xl rounded-br-sm bg-brand-900 text-white px-3 py-2 text-left text-xs sm:text-sm">
                  {"\"Busca 3 pousadas em Fortaleza com bom custo-benefício e me manda nomes, sites e telefones.\""}
                </div>
                <div className="inline-block max-w-full rounded-2xl rounded-bl-sm bg-surface px-3 py-2 text-left text-xs sm:text-sm text-text-muted">
                  {"\"Encontrei 3 opções em fontes permitidas. Te envio agora um resumo com links oficiais, contatos e principais diferenciais de cada uma.\""}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


