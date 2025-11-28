"use client"

import {
  BentoGridWithFeatures,
  type BentoFeature,
} from "@/components/ui/bento-grid"
import { Sparkles, Zap, Heart, ShieldCheck, Globe, Users } from "lucide-react"

export function ValuesBento() {
  const features: BentoFeature[] = [
    {
      id: "1",
      title: "Inovação Constante",
      description: "Estamos sempre na fronteira da tecnologia, trazendo o que há de mais novo em IA para nossos clientes.",
      content: (
        <div className="flex items-center justify-center h-full min-h-[120px] bg-brand-500/5 rounded-lg border border-brand-500/10">
            <Sparkles className="h-12 w-12 text-brand-500" />
        </div>
      ),
      className: "col-span-1 md:col-span-3 lg:col-span-4",
    },
    {
      id: "2",
      title: "Agilidade",
      description: "Respostas rápidas e soluções eficientes. O tempo do seu cliente é precioso.",
      content: (
        <div className="flex items-center justify-center h-full min-h-[120px] bg-amber-500/5 rounded-lg border border-amber-500/10">
            <Zap className="h-12 w-12 text-amber-500" />
        </div>
      ),
      className: "col-span-1 md:col-span-3 lg:col-span-2",
    },
    {
      id: "3",
      title: "Foco no Cliente",
      description: "Nossa tecnologia existe para servir pessoas. Humanização é prioridade.",
      content: (
        <div className="flex items-center justify-center h-full min-h-[120px] bg-rose-500/5 rounded-lg border border-rose-500/10">
            <Heart className="h-12 w-12 text-rose-500" />
        </div>
      ),
      className: "col-span-1 md:col-span-3 lg:col-span-2",
    },
    {
      id: "4",
      title: "Segurança",
      description: "Proteção de dados e privacidade em primeiro lugar, sempre.",
      content: (
        <div className="flex items-center justify-center h-full min-h-[120px] bg-emerald-500/5 rounded-lg border border-emerald-500/10">
            <ShieldCheck className="h-12 w-12 text-emerald-500" />
        </div>
      ),
      className: "col-span-1 md:col-span-3 lg:col-span-4",
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Nossos Valores</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Os princípios que guiam cada linha de código e cada decisão que tomamos.
          </p>
        </div>
        <BentoGridWithFeatures features={features} />
      </div>
    </section>
  )
}
