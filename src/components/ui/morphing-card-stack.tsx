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
  titleColor?: string
  backgroundClass?: string
  borderClass?: string
  iconBgClass?: string
}

// Mapeamento de cores para diferentes tiers
const tierColorMap: Record<string, { bg: string; text: string; border: string }> = {
  "Todos os planos": {
    bg: "bg-emerald-500/15",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border border-emerald-500/30",
  },
  "Básico/Business/Premium": {
    bg: "bg-blue-500/15",
    text: "text-blue-600 dark:text-blue-400",
    border: "border border-blue-500/30",
  },
  "Business/Premium": {
    bg: "bg-purple-500/15",
    text: "text-purple-600 dark:text-purple-400",
    border: "border border-purple-500/30",
  },
  "Premium": {
    bg: "bg-amber-500/15",
    text: "text-amber-600 dark:text-amber-400",
    border: "border border-amber-500/30",
  },
  default: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border border-accent/30",
  },
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
        <motion.div 
          layout="position"
          layoutDependency={layout}
          className={cn(containerStyles[layout], "mx-auto")}
          style={{ contain: 'layout' }}
        >
          <AnimatePresence mode="popLayout">
            {displayCards.map((card) => {
              const styles = getLayoutStyles(card.stackPosition)
              const isExpanded = expandedCard === card.id
              const isTopCard = layout === "stack" && card.stackPosition === 0

              return (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  layout="position"
                  layoutDependency={layout}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: isExpanded ? 1.05 : 1,
                    x: 0,
                    ...styles,
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: -200 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    layout: { duration: 0.3 }
                  }}
                  style={{ willChange: 'transform, opacity' }}
                  drag={isTopCard ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                  onClick={() => {
                    if (isDragging) return
                    setExpandedCard(isExpanded ? null : card.id)
                    onCardClick?.(card)
                  }}
                  className={cn(
                    "group cursor-pointer rounded-xl p-5",
                    card.borderClass || "border border-border/70",
                    card.backgroundClass || "bg-background/95 dark:bg-card/95 backdrop-blur-sm",
                    "hover:border-accent/50 transition-colors shadow-lg",
                    "flex h-full overflow-hidden",
                    layout === "list" ? "flex-row items-center gap-4" : "flex-col",
                    layout === "stack" && "absolute w-64 h-56 sm:w-72 sm:h-64",
                    layout === "stack" && isTopCard && "cursor-grab active:cursor-grabbing",
                    layout === "grid" && "w-full shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]",
                    layout === "list" && "w-full shadow-adaptive hover:shadow-none transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]",
                    isExpanded && "ring-2 ring-accent",
                  )}
                >
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {card.icon && (
                      <div 
                        className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300 ease-out",
                          card.iconBgClass
                        )}
                        style={card.iconBgClass ? undefined : {
                          background: card.color ? `linear-gradient(135deg, ${card.color})` : undefined,
                        }}
                      >
                        {card.icon}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className={cn(
                        "font-bold leading-tight",
                        card.titleColor || "text-foreground dark:text-white"
                      )}>{card.title}</h3>
                      <p
                        className={cn(
                          "text-muted-foreground dark:text-gray-300 mt-1 leading-relaxed",
                          layout === "stack" ? "text-sm line-clamp-3" : "text-xs",
                        )}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={cn(
                      layout === "stack" && "flex flex-col gap-1 mt-auto items-center",
                      layout === "grid" && "flex flex-col gap-1 mt-auto items-start pt-3",
                      layout === "list" && "ml-auto flex items-center"
                    )}
                  >
                    {card.tier && (
                      <span 
                        className={cn(
                          "inline-block text-xs px-2.5 py-1 rounded-full font-medium",
                          tierColorMap[card.tier]?.bg || tierColorMap.default.bg,
                          tierColorMap[card.tier]?.text || tierColorMap.default.text,
                          tierColorMap[card.tier]?.border || tierColorMap.default.border,
                        )}
                      >
                        {card.tier}
                      </span>
                    )}

                    {layout === "stack" && (
                      <span
                        className={cn(
                          "text-xs text-muted-foreground/70 dark:text-gray-400",
                          "opacity-70 transition-opacity duration-300 ease-out",
                          "group-hover:opacity-100 group-active:opacity-100",
                          isDragging && isTopCard ? "opacity-100" : ""
                        )}
                      >
                        Arraste para navegar
                      </span>
                    )}
                  </div>
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
