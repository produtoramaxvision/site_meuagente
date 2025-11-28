"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-950 via-background to-background py-24 sm:py-32 lg:py-40">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
           <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-brand-500/20 rounded-full blur-3xl animate-pulse" />
           <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <Badge className="inline-flex items-center gap-2 bg-brand-500/10 text-brand-400 border-brand-500/20 px-4 py-1.5 text-sm font-medium rounded-full mb-8 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Nossa História & Visão
          </Badge>
        </motion.div>

        <motion.h1 
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
          Revolucionando o atendimento com <span className="text-brand-400">Inteligência Artificial</span>
        </motion.h1>
        
        <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
          Nascemos com o propósito de tornar a tecnologia de ponta acessível para empresas de todos os tamanhos. Conectamos negócios aos seus clientes de forma inteligente, rápida e humana.
        </motion.p>
        
        <motion.div 
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="h-12 px-8 text-base rounded-full bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/20 transition-all hover:scale-105">
            Conheça a Plataforma
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

