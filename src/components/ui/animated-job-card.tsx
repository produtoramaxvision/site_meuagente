"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

// --- PROPS INTERFACE ---

export interface JobCardProps {
  companyLogo: React.ReactNode
  companyName: string
  jobTitle: string
  salary: string
  tags: string[]
  postedDate: string
  variant?: "pink" | "yellow" | "blue" | "purple"
  className?: string
  onClick?: () => void
}

// --- BORDER VARIANT STYLES ---
const variantStyles: Record<NonNullable<JobCardProps["variant"]>, {
  cardBg: string
  border: string
  iconBg: string
  tagBg: string
  tagText: string
  accentText: string
  topBorder: string
}> = {
  pink: {
    cardBg: "bg-gradient-to-br from-rose-500/12 via-background to-surface",
    border: "border border-rose-500/30",
    iconBg: "bg-rose-500/12 ring-1 ring-rose-500/25",
    tagBg: "bg-rose-500/10",
    tagText: "text-rose-600 dark:text-rose-400",
    accentText: "text-rose-600 dark:text-rose-400",
    topBorder: "border-t-4 border-t-rose-500/70",
  },
  yellow: {
    cardBg: "bg-gradient-to-br from-amber-500/12 via-background to-surface",
    border: "border border-amber-500/30",
    iconBg: "bg-amber-500/12 ring-1 ring-amber-500/25",
    tagBg: "bg-amber-500/10",
    tagText: "text-amber-700 dark:text-amber-400",
    accentText: "text-amber-700 dark:text-amber-400",
    topBorder: "border-t-4 border-t-amber-500/70",
  },
  blue: {
    cardBg: "bg-gradient-to-br from-sky-500/12 via-background to-surface",
    border: "border border-sky-500/30",
    iconBg: "bg-sky-500/12 ring-1 ring-sky-500/25",
    tagBg: "bg-sky-500/10",
    tagText: "text-sky-700 dark:text-sky-400",
    accentText: "text-sky-700 dark:text-sky-400",
    topBorder: "border-t-4 border-t-sky-500/70",
  },
  purple: {
    cardBg: "bg-gradient-to-br from-violet-500/12 via-background to-surface",
    border: "border border-violet-500/30",
    iconBg: "bg-violet-500/12 ring-1 ring-violet-500/25",
    tagBg: "bg-violet-500/10",
    tagText: "text-violet-600 dark:text-violet-400",
    accentText: "text-violet-600 dark:text-violet-400",
    topBorder: "border-t-4 border-t-violet-500/70",
  },
}

/**
 * A responsive, theme-adaptive job card with a 3D tilt effect on hover.
 */
export const AnimatedJobCard = ({
  companyLogo,
  companyName,
  jobTitle,
  salary,
  tags,
  postedDate,
  variant = "purple",
  className,
  onClick,
}: JobCardProps) => {
  // --- FULL ANIMATION LOGIC ---

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const cardRef = React.useRef<HTMLDivElement | null>(null)
  // Cache das dimensões para evitar reflow em cada mousemove
  const dimensionsRef = React.useRef<{ width: number; height: number } | null>(null)

  // Atualizar cache de dimensões usando ResizeObserverEntry.contentRect 
  // ao invés de getBoundingClientRect() - evita reflow forçado
  React.useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      // ResizeObserverEntry.contentRect já contém as dimensões
      // sem precisar fazer leitura síncrona de layout
      for (const entry of entries) {
        dimensionsRef.current = { 
          width: entry.contentRect.width, 
          height: entry.contentRect.height 
        }
      }
    })
    
    if (cardRef.current) {
      resizeObserver.observe(cardRef.current)
    }
    
    return () => resizeObserver.disconnect()
  }, [])

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !dimensionsRef.current) return

    // Usar offsetX/offsetY do evento nativo - não causa reflow
    // Estes valores são relativos ao elemento target
    const { width, height } = dimensionsRef.current
    
    // nativeEvent.offsetX/offsetY são relativos ao target, não causam reflow
    const offsetX = e.nativeEvent.offsetX
    const offsetY = e.nativeEvent.offsetY

    mouseX.set(offsetX - width / 2)
    mouseY.set(offsetY - height / 2)
  }

  const onMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Transform mouse position into a 3D rotation (card tilt)
  // Usamos um range menor para evitar movimentos exagerados e manter a animação suave.
  const rotateX = useTransform(mouseY, [-80, 80], [8, -8])
  const rotateY = useTransform(mouseX, [-80, 80], [-8, 8])

  // Apply spring physics for a smooth return effect
  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  return (
    // Wrapper com perspectiva 3D
    <div
      className={cn(
        // Wrapper com perspectiva 3D e respiro lateral em telas menores
        // para evitar que o card "estoure" as bordas em MOBILE/TABLET.
        "h-full w-full [perspective:1000px] px-4 sm:px-6 lg:px-0",
        className,
      )}
    >
      <motion.div
        layout
        onClick={onClick}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          // Em telas menores, limitamos a largura visual do card para ~90vw,
          // garantindo que mesmo com o tilt 3D ele não ultrapasse as bordas.
          // Usamos h-full para ocupar o container, que agora tem min-h adequado em mobile.
          "relative h-full w-full max-w-[90vw] sm:max-w-none mx-auto",
          "transform-gpu cursor-pointer overflow-hidden rounded-xl shadow-adaptive p-6 transition-shadow duration-300 hover:shadow-xl-adaptive",
          variantStyles[variant].cardBg,
          variantStyles[variant].border,
          variantStyles[variant].topBorder,
        )}
        aria-label={`Job opening: ${jobTitle} at ${companyName}`}
        tabIndex={0}
      >
        <div style={{ transform: "translateZ(20px)" }} className="space-y-4">
          {/* Header */}
          <div className="flex items-center space-x-3">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-full",
                variantStyles[variant].iconBg,
              )}
            >
              {companyLogo}
            </div>
            <span className={cn("font-semibold", variantStyles[variant].accentText)}>{companyName}</span>
          </div>

          {/* Job Details */}
          <div>
            <h3 className="text-lg font-bold text-white">{jobTitle}</h3>
            <p className="text-sm font-medium text-muted-foreground">{salary}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-xs font-medium",
                  variantStyles[variant].tagBg,
                  variantStyles[variant].tagText,
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-2 text-right text-xs text-muted-foreground">{postedDate}</div>
        </div>
      </motion.div>
    </div>
  )
}


