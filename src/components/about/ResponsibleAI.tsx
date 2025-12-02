"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ShieldCheck, Eye, Database } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ResponsibleAI() {
  return (
    <section className="py-20 sm:py-24 bg-surface/40 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 mb-3 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
            <span>IA responsável & privacidade</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text mb-4">
            Segurança, LGPD e ética em primeiro lugar.
          </h2>
          <p className="text-sm sm:text-base text-text-muted leading-relaxed">
            Toda a arquitetura do Meu Agente foi pensada para respeitar a LGPD, as políticas oficiais dos canais
            e os limites éticos do uso de IA — desde scraping somente em fontes permitidas até backups e governança
            de dados.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="group relative flex flex-col rounded-xl border border-border/60 bg-background/70 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
            <CardHeader className="flex items-start gap-3 px-4 pt-4 pb-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <CardTitle className="text-base sm:text-lg text-text">Conformidade com LGPD</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-text-muted">
                  Base legal, consentimento, opt-out e direitos do titular respeitados de ponta a ponta.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0 text-xs sm:text-sm text-text-muted leading-relaxed">
              Mantemos canal dedicado de privacidade (DPO), regras claras de retenção e descarte, e processos
              para atendimento a solicitações de acesso ou eliminação de dados.
            </CardContent>
          </Card>

          <Card className="group relative flex flex-col rounded-xl border border-border/60 bg-background/70 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
            <CardHeader className="flex items-start gap-3 px-4 pt-4 pb-3">
              <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/40 flex items-center justify-center">
                <Database className="h-5 w-5 text-sky-400" />
              </div>
              <div>
                <CardTitle className="text-base sm:text-lg text-text">Segurança & backups</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-text-muted">
                  Infraestrutura em nuvem, criptografia em trânsito e política de backups 3-2-1 no Premium.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0 text-xs sm:text-sm text-text-muted leading-relaxed">
              Logs, monitoramento e testes periódicos de restauração garantem continuidade mesmo em cenários de falha,
              com governança reforçada nos planos superiores.
            </CardContent>
          </Card>

          <Card className="group relative flex flex-col rounded-xl border border-border/60 bg-background/70 shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
            <CardHeader className="flex items-start gap-3 px-4 pt-4 pb-3">
              <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center">
                <Eye className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-base sm:text-lg text-text">IA ética & limites claros</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-text-muted">
                  Scraping apenas em fontes permitidas, respeito às políticas de canais e transparência com o usuário final.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4 pt-0 text-xs sm:text-sm text-text-muted leading-relaxed">
              Agentes Web Search e Scrape operam apenas com APIs oficiais e dados autorizados, evitando abusos
              e mantendo a confiança como pilar da plataforma.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


