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

const variantClasses: Record<NonNullable<JobCardProps["variant"]>, string> = {
  pink: "border-t-pink-500",
  yellow: "border-t-yellow-500",
  blue: "border-t-blue-500",
  purple: "border-t-purple-500",
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

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const { left, top, width, height } = cardRef.current.getBoundingClientRect()

    mouseX.set(e.clientX - left - width / 2)
    mouseY.set(e.clientY - top - height / 2)
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
    <div className={cn("h-full w-full [perspective:1000px]", className)}>
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
          "relative h-full w-full transform-gpu cursor-pointer overflow-hidden rounded-xl bg-card border border-border/70 shadow-adaptive p-6 transition-shadow duration-300 hover:shadow-xl-adaptive",
          "border-t-4",
          variantClasses[variant],
        )}
        aria-label={`Job opening: ${jobTitle} at ${companyName}`}
        tabIndex={0}
      >
        <div style={{ transform: "translateZ(20px)" }} className="space-y-4">
          {/* Header */}
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
              {companyLogo}
            </div>
            <span className="font-semibold text-muted-foreground">{companyName}</span>
          </div>

          {/* Job Details */}
          <div>
            <h3 className="text-lg font-bold text-card-foreground">{jobTitle}</h3>
            <p className="text-sm text-primary">{salary}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
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


