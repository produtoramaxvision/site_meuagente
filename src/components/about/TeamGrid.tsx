"use client"

import { Button } from '@/components/ui/button'
import { ChevronRight, Github, Linkedin, Twitter, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'

// Dados dos membros com links sociais adicionados
const members = [
  {
    src: '',
    name: 'Max Müller',
    role: 'CEO & Founder',
    bio: 'Visionário com 15 anos de experiência em tech.',
    socials: [
      { icon: Linkedin, href: '#' },
      { icon: Twitter, href: '#' }
    ]
  },
  {
    src: '',
    name: 'Maria Oliveira',
    role: 'CTO',
    bio: 'Especialista em IA e arquitetura de software.',
    socials: [
      { icon: Github, href: '#' },
      { icon: Linkedin, href: '#' }
    ]
  },
  {
    src: '',
    name: 'Carlos Santos',
    role: 'Head of Product',
    bio: 'Focado em criar experiências incríveis.',
    socials: [
      { icon: Linkedin, href: '#' },
      { icon: Globe, href: '#' }
    ]
  },
]

export function TeamGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <svg className="h-full w-full" fill="none">
          <defs>
            <pattern
              id="team-grid-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0L0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#team-grid-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center md:mb-24">
          <h2 className="text-brand-600 mb-4 text-lg font-semibold uppercase tracking-wider">
            Nosso Time
          </h2>
          <h3 className="text-foreground text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Mentes brilhantes, <br className="hidden md:block" />
            <span className="text-muted-foreground">missão única.</span>
          </h3>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
            Pessoas apaixonadas construindo o futuro da comunicação empresarial. 
            Juntos, transformamos desafios complexos em soluções simples.
          </p>
          
          <Button asChild variant="outline" className="mt-8 rounded-full border-subtle hover:bg-surface hover:text-text transition-all duration-300">
            <a href="/trabalhe-conosco" className="flex items-center gap-2">
              Junte-se a nós
              <ChevronRight className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center overflow-hidden rounded-2xl bg-card p-8 text-center shadow-adaptive transition-all duration-500 hover:-translate-y-2 hover:shadow-xl-adaptive border border-border/50"
            >
              {/* Background Gradient Animation */}
              <div className="absolute inset-0 bg-gradient-subtle opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Decorative Circle Background */}
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full glow-blur blur-3xl transition-all duration-500 group-hover:opacity-150" />

              {/* Image Container */}
              <div className="relative mb-6 h-40 w-40 overflow-hidden rounded-full border-4 border-background shadow-md ring-1 ring-border/50 transition-all duration-500 group-hover:scale-105 group-hover:ring-border">
                {member.src ? (
                  <img
                    src={member.src}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center avatar-fallback-neutral text-4xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <h4 className="text-xl font-bold text-foreground group-hover:text-brand-700 transition-colors duration-300">
                  {member.name}
                </h4>
                <span className="mb-3 text-sm font-medium text-brand-500">
                  {member.role}
                </span>
                <p className="mb-6 text-sm text-muted-foreground line-clamp-2">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-4 opacity-80 transition-opacity duration-300 hover:opacity-100">
                  {member.socials.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.href}
                      className="text-muted-foreground hover:text-brand-600 hover:scale-110 transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
