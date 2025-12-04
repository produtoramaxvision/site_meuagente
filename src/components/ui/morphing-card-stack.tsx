"use client"

import { useState, type ReactNode } from "react"
import { motion, AnimatePresence, LayoutGroup, type PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"
import { Grid3X3, Layers, LayoutList } from "lucide-react"

export type LayoutMode = "stack" | "grid" | "list"

export interface CardData {
  id: string
  title: string
  description: string
  icon?: ReactNode
  color?: string
  tier?: string
}

export interface MorphingCardStackProps {
  cards?: CardData[]
  className?: string
  defaultLayout?: LayoutMode
  onCardClick?: (card: CardData) => void
}

const layoutIcons = {
  stack: Layers,
  grid: Grid3X3,
  list: LayoutList,
}

const SWIPE_THRESHOLD = 50

export function MorphingCardStack({
  cards = [],
  className,
  defaultLayout = "stack",
  onCardClick,
}: MorphingCardStackProps) {
  const [layout, setLayout] = useState<LayoutMode>(defaultLayout)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  if (!cards || cards.length === 0) {
    return null
  }

  const getTierBadgeClasses = (cardId?: string) => {
    switch (cardId) {
      case "financeiro":
        return "bg-emerald-500/15 text-emerald-300 border border-emerald-500/40"
      case "websearch":
        return "bg-sky-500/15 text-sky-300 border border-sky-500/40"
      case "scrape":
        return "bg-purple-500/15 text-purple-300 border border-purple-500/40"
      case "sdr":
        return "bg-orange-500/15 text-orange-300 border border-orange-500/40"
      case "marketing":
        return "bg-pink-500/15 text-pink-300 border border-pink-500/40"
      case "agendamento":
        return "bg-indigo-500/15 text-indigo-300 border border-indigo-500/40"
      case "dev":
        return "bg-slate-500/20 text-slate-200 border border-slate-500/40"
      case "video":
        return "bg-violet-500/15 text-violet-300 border border-violet-500/40"
      default:
        return "bg-accent/10 text-accent"
    }
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info
    const swipe = Math.abs(offset.x) * velocity.x

    if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
      // Swiped left - go to next card
      setActiveIndex((prev) => (prev + 1) % cards.length)
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      // Swiped right - go to previous card
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
    }
    setIsDragging(false)
  }

  const getStackOrder = () => {
    const reordered = []
    for (let i = 0; i < cards.length; i++) {
      const index = (activeIndex + i) % cards.length
      reordered.push({ ...cards[index], stackPosition: i })
    }
    return reordered.reverse() // Reverse so top card renders last (on top)
  }

  const getLayoutStyles = (stackPosition: number) => {
    switch (layout) {
      case "stack":
        return {
          top: stackPosition * 8,
          left: stackPosition * 8,
          zIndex: cards.length - stackPosition,
          rotate: (stackPosition - 1) * 2,
        }
      case "grid":
        return {
          top: 0,
          left: 0,
          zIndex: 1,
          rotate: 0,
        }
      case "list":
        return {
          top: 0,
          left: 0,
          zIndex: 1,
          rotate: 0,
        }
    }
  }

  const containerStyles = {
    stack: "relative h-72 w-72 sm:h-80 sm:w-80",
    grid: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
    list: "flex flex-col gap-4",
  }

  const displayCards = layout === "stack" ? getStackOrder() : cards.map((c, i) => ({ ...c, stackPosition: i }))

  return (
    <div className={cn("space-y-6", className)}>
      {/* Layout Toggle */}
      <div className="flex items-center justify-center gap-1 rounded-lg bg-subtle-10 p-1 w-fit mx-auto">
        {(Object.keys(layoutIcons) as LayoutMode[]).map((mode) => {
          const Icon = layoutIcons[mode]
          return (
            <button
              key={mode}
              onClick={() => setLayout(mode)}
              className={cn(
                "rounded-md p-2.5 transition-all",
                layout === mode
                  ? "bg-accent text-white shadow-md"
                  : "text-text-muted hover:text-text hover:bg-subtle-5",
              )}
              aria-label={`Mudar para layout ${mode}`}
            >
              <Icon className="h-4 w-4" />
            </button>
          )
        })}
      </div>

      {/* Cards Container */}
      <LayoutGroup>
        <motion.div layout className={cn(containerStyles[layout], "mx-auto")}>
          <AnimatePresence mode="popLayout">
            {displayCards.map((card) => {
              const styles = getLayoutStyles(card.stackPosition)
              const isExpanded = expandedCard === card.id
              const isTopCard = layout === "stack" && card.stackPosition === 0

              return (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: isExpanded ? 1.05 : 1,
                    x: 0,
                    ...styles,
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: -200 }}
                  transition={{
                    // Transição mais rápida entre layouts (aprox. 2x da velocidade original)
                    type: "spring",
                    stiffness: 600,
                    damping: 28,
                  }}
                  drag={isTopCard ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                  whileHover={
                    layout === "grid"
                      ? { y: -4, scale: 1.02, transition: { duration: 0.08, ease: "easeOut" } }
                      : layout === "list"
                        ? { y: -2, scale: 1.01, transition: { duration: 0.08, ease: "easeOut" } }
                        : { y: -2, transition: { duration: 0.08, ease: "easeOut" } }
                  }
                  onClick={() => {
                    if (isDragging) return
                    setExpandedCard(isExpanded ? null : card.id)
                    onCardClick?.(card)
                  }}
                  className={cn(
                    // Base
                    "cursor-pointer rounded-xl border p-5 transition-all duration-300",
                    // Stack / list – cards com blur leve e sombra forte
                    (layout === "stack" || layout === "list") &&
                      "border-border/70 bg-background/95 dark:bg-card/95 backdrop-blur-sm shadow-lg hover:border-accent/50",
                    // Grid – usa só sombra/cores via CSS; o "pulo" fica 100% a cargo do Framer Motion
                    layout === "grid" &&
                      "border-border/60 bg-background/70 shadow-adaptive hover:shadow-none",
                    layout === "stack" && "absolute w-64 h-56 sm:w-72 sm:h-64",
                    layout === "stack" && isTopCard && "cursor-grab active:cursor-grabbing",
                    layout === "grid" && "w-full",
                    layout === "list" && "w-full",
                    isExpanded && "ring-2 ring-accent",
                  )}
                >
                  <div className="flex items-start gap-3">
                    {card.icon && (
                      <div 
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          background: card.color ? `linear-gradient(135deg, ${card.color})` : undefined,
                        }}
                      >
                        {card.icon}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-foreground dark:text-white truncate">{card.title}</h3>
                      <p
                        className={cn(
                          "text-sm text-muted-foreground dark:text-gray-300 mt-1",
                          layout === "stack" && "line-clamp-3",
                          layout === "grid" && "line-clamp-2",
                          layout === "list" && "line-clamp-2",
                        )}
                      >
                        {card.description}
                      </p>
                      {card.tier && (
                        <span
                          className={cn(
                            "inline-block mt-2 text-xs px-2 py-1 rounded-full font-medium",
                            getTierBadgeClasses(card.id),
                          )}
                        >
                          {card.tier}
                        </span>
                      )}
                    </div>
                  </div>

                  {isTopCard && layout === "stack" && (
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                      <span className="text-xs text-muted-foreground/70 dark:text-gray-400">Arraste para navegar</span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {layout === "stack" && cards.length > 1 && (
        <div className="flex justify-center gap-1.5">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                index === activeIndex ? "w-6 bg-accent" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50",
              )}
              aria-label={`Ir para card ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
