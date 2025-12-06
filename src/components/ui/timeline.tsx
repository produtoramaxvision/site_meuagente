"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Circle } from "lucide-react"

export interface TimelineItem {
  title: string
  description: string
  date?: string
  image?: string
  status?: "completed" | "current" | "upcoming"
  category?: string
}

export interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const getStatusConfig = (status: TimelineItem["status"]) => {
  const configs = {
    completed: {
      progressColor: "bg-emerald-500",
      borderColor: "border-emerald-500/20",
      badgeBg: "bg-emerald-500/10",
      badgeText: "text-emerald-600 dark:text-emerald-400"
    },
    current: {
      progressColor: "bg-blue-600 dark:bg-blue-400",
      borderColor: "border-blue-600/20 dark:border-blue-400/20",
      badgeBg: "bg-blue-100 dark:bg-blue-900/30",
      badgeText: "text-blue-800 dark:text-blue-200"
    },
    upcoming: {
      progressColor: "bg-amber-500",
      borderColor: "border-amber-500/20",
      badgeBg: "bg-amber-500/10",
      badgeText: "text-amber-600 dark:text-amber-400"
    }
  }
  
  return configs[status || "upcoming"]
}

const getStatusLabel = (status: TimelineItem["status"]) => {
  switch (status) {
    case "completed":
      return "Concluído"
    case "current":
      return "Em Andamento"
    case "upcoming":
      return "Em Breve"
    default:
      return "Em Breve"
  }
}

const getStatusIcon = (status: TimelineItem["status"]) => {
  switch (status) {
    case "completed":
      return CheckCircle
    case "current":
      return Clock
    default:
      return Circle
  }
}

export function Timeline({ items, className }: TimelineProps) {
  if (!items || items.length === 0) {
    return (
      <div className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}>
        <p className="text-center text-muted-foreground">No timeline items to display</p>
      </div>
    )
  }

  return (
    <section 
      className={cn("w-full max-w-4xl mx-auto px-4 sm:px-6 py-8", className)}
      role="list"
      aria-label="Timeline of events and milestones"
    >
      <div className="relative">
        <div 
          className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" 
          aria-hidden="true"
        />
        
        <motion.div
          className="absolute left-4 sm:left-6 top-0 w-px bg-primary origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ 
            scaleY: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
            }
          }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ willChange: 'transform' }}
          aria-hidden="true"
        />

        <div className="space-y-8 sm:space-y-12 relative">
          {items.map((item, index) => {
            const config = getStatusConfig(item.status)
            const IconComponent = getStatusIcon(item.status)
            
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true, margin: "-80px" }}
                style={{ willChange: 'transform, opacity' }}
                role="listitem"
                aria-label={`Timeline item ${index + 1}: ${item.title}`}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <div className="relative flex-shrink-0">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      tabIndex={0}
                      role="img"
                      aria-label={`Icon for ${item.title}`}
                    >
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-background shadow-adaptive relative z-10 bg-background flex items-center justify-center">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={`${item.title} visual`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <IconComponent 
                            className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground/70" 
                            aria-hidden="true"
                          />
                        )}
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <Card className={cn(
                      "border transition-all duration-300 hover:shadow-md relative",
                      "bg-card/50 backdrop-blur-sm",
                      config.borderColor,
                      "group-hover:border-primary/30"
                    )}>
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                              {item.title}
                            </h3>
                            
                            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                              {item.category && (
                                <span className="font-medium">{item.category}</span>
                              )}
                              {item.category && item.date && (
                                <span className="w-1 h-1 bg-muted-foreground rounded-full" aria-hidden="true" />
                              )}
                              {item.date && (
                                <time dateTime={item.date}>{item.date}</time>
                              )}
                            </div>
                          </div>
                          
                          <Badge 
                            className={cn(
                              "w-fit text-xs font-medium border",
                              config.badgeBg,
                              config.badgeText,
                              "border-current/20"
                            )}
                            aria-label={`Status: ${getStatusLabel(item.status)}`}
                          >
                            {getStatusLabel(item.status)}
                          </Badge>
                        </div>

                        <p 
                          className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 transition-opacity hover:opacity-100 opacity-80"
                        >
                          {item.description}
                        </p>

                        <div 
                          className="h-1 bg-muted rounded-full overflow-hidden"
                          role="progressbar"
                          aria-valuenow={item.status === "completed" ? 100 : item.status === "current" ? 65 : 25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label={`Progress for ${item.title}`}
                        >
                          <motion.div
                            className={cn("h-full rounded-full", config.progressColor)}
                            initial={{ width: 0 }}
                            animate={{ 
                              width: item.status === "completed" ? "100%" : 
                                     item.status === "current" ? "65%" : "25%"
                            }}
                            transition={{ 
                              duration: 1.2, 
                              delay: index * 0.2 + 0.8,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="absolute left-4 sm:left-6 -bottom-6 transform -translate-x-1/2"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ willChange: 'transform, opacity' }}
          aria-hidden="true"
        >
          <div className="w-3 h-3 bg-primary rounded-full shadow-sm" />
        </motion.div>
      </div>
    </section>
  )
}
