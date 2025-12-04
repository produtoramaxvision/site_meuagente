"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { flushSync } from "react-dom"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

type AnimatedThemeTogglerProps = {
  className?: string
}

/**
 * Botão de alternância de tema com animação de ícone (Sun/Moon)
 * e transição radial usando View Transitions API (quando suportado).
 *
 * Mantém compatibilidade com `next-themes`, usando `setTheme`
 * para aplicar `light`/`dark` e sincronizar com o restante da aplicação.
 */
export const AnimatedThemeToggler = ({ className }: AnimatedThemeTogglerProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { resolvedTheme, setTheme } = useTheme()

  // Estado local só para dirigir a animação dos ícones
  const [darkMode, setDarkMode] = useState<boolean>(() => resolvedTheme === "dark")

  // Mantém o estado local sincronizado com o tema vindo do next-themes
  useEffect(() => {
    if (!resolvedTheme) return
    setDarkMode(resolvedTheme === "dark")
  }, [resolvedTheme])

  const onToggle = useCallback(async () => {
    const buttonEl = buttonRef.current
    if (!buttonEl) return

    const nextIsDark = !darkMode

    const applyTheme = () => {
      flushSync(() => {
        setDarkMode(nextIsDark)
        setTheme(nextIsDark ? "dark" : "light")
      })
    }

    // Se View Transitions API não estiver disponível, faz apenas o toggle normal
    const docAny = document as any
    if (!docAny.startViewTransition) {
      applyTheme()
      return
    }

    const transition = docAny.startViewTransition(applyTheme)

    await transition.ready

    // Animação radial a partir do centro do botão
    const { left, top, width, height } = buttonEl.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2
    const maxDistance = Math.hypot(
      Math.max(centerX, window.innerWidth - centerX),
      Math.max(centerY, window.innerHeight - centerY),
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${centerX}px ${centerY}px)`,
          `circle(${maxDistance}px at ${centerX}px ${centerY}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        // @ts-expect-error – pseudoElement ainda não está tipado em todos os libs
        pseudoElement: "::view-transition-new(root)",
      },
    )
  }, [darkMode, setTheme])

  return (
    <button
      ref={buttonRef}
      onClick={onToggle}
      aria-label="Alternar tema"
      type="button"
      className={cn(
        "inline-flex items-center justify-center rounded-full p-2 outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors cursor-pointer",
        "bg-transparent hover:bg-surface-2",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {darkMode ? (
          <motion.span
            key="sun-icon"
            initial={{ opacity: 0, scale: 0.55, rotate: 25 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: -10 }}
            transition={{ duration: 0.33, ease: "easeOut" }}
            className="text-amber-300"
          >
            <Sun className="h-5 w-5" />
          </motion.span>
        ) : (
          <motion.span
            key="moon-icon"
            initial={{ opacity: 0, scale: 0.55, rotate: -25 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
            transition={{ duration: 0.33, ease: "easeOut" }}
            className="text-slate-900 dark:text-slate-50"
          >
            <Moon className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}


