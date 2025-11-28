"use client"

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronRight } from 'lucide-react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'

// Placeholder data - replace with real team members later
const members = [
  { src: '', name: 'João Silva', role: 'CEO & Founder', bio: 'Visionário com 15 anos de experiência em tech.' },
  { src: '', name: 'Maria Oliveira', role: 'CTO', bio: 'Especialista em IA e arquitetura de software.' },
  { src: '', name: 'Carlos Santos', role: 'Head of Product', bio: 'Focado em criar experiências incríveis.' },
  { src: '', name: 'Ana Costa', role: 'Lead Developer', bio: 'Full-stack developer apaixonada por código limpo.' },
  { src: '', name: 'Pedro Souza', role: 'Customer Success', bio: 'Garantindo que nossos clientes tenham sucesso.' },
  { src: '', name: 'Lucia Lima', role: 'Marketing Director', bio: 'Contando nossa história para o mundo.' },
]

export function TeamGrid() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto w-full max-w-5xl px-6">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-foreground text-balance text-3xl font-bold md:text-5xl">
            Conheça Nosso Time
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl text-lg leading-relaxed">
            Pessoas apaixonadas construindo o futuro da comunicação empresarial.
          </p>

          <Button asChild variant="outline" className="mt-6 rounded-full">
            <a href="/trabalhe-conosco">
              Junte-se a nós
              <ChevronRight className="ml-1 h-4 w-4 opacity-60" />
            </a>
          </Button>
        </div>

        {/* Members Grid */}
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {members.map((member, index) => (
            <HoverCard key={index} openDelay={200}>
              <HoverCardTrigger asChild>
                <div className="group relative flex cursor-pointer items-center gap-4 rounded-xl border bg-background p-4 transition-all hover:shadow-md hover:-translate-y-1">
                  <Avatar className="h-14 w-14 border-2 border-background shadow-sm ring-1 ring-border">
                    <AvatarImage src={member.src} alt={member.name} />
                    <AvatarFallback className="bg-brand-100 text-brand-700 text-lg font-medium">
                      {member.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="min-w-0">
                    <span className="block truncate text-base font-semibold text-foreground group-hover:text-brand-600 transition-colors">
                      {member.name}
                    </span>
                    <span className="block truncate text-sm text-muted-foreground">
                      {member.role}
                    </span>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 p-4" align="start">
                <div className="flex justify-between space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.src} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  )
}

