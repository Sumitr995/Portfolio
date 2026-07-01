import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"

import { cn } from "@/lib/utils"

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  origin = "button",
  ...props
}) => {
  const [isDark, setIsDark] = useState(false)
  const buttonRef = useRef(null)

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect();
  }, [])

  const toggleTheme = useCallback(async () => {
    const buttonEl = buttonRef.current
    if (!buttonEl) return

    const applyThemeToggle = () => {
      const newTheme = !isDark
      setIsDark(newTheme)
      document.documentElement.classList.toggle("dark")
      localStorage.setItem("theme", newTheme ? "dark" : "light")
    }

    const supportsViewTransition =
      typeof document !== "undefined" &&
      typeof document.startViewTransition === "function"

    if (supportsViewTransition) {
      await document.startViewTransition(() => {
        flushSync(applyThemeToggle)
      }).ready
    } else {
      applyThemeToggle()
      return
    }

    const rect = buttonEl.getBoundingClientRect()
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight
    const scrollX = window.scrollX ?? 0
    const scrollY = window.scrollY ?? 0

    const clipPathFrames =
      origin === "top-right"
        ? [
            "circle(0px at 100% 0%)",
            "circle(150vmax at 100% 0%)",
          ]
        : (() => {
            const x = Math.round(scrollX + rect.left + rect.width / 2)
            const y = Math.round(scrollY + rect.top + rect.height / 2)
            const maxRadius = Math.max(
              Math.hypot(x - scrollX, y - scrollY),
              Math.hypot(x - (scrollX + viewportWidth), y - scrollY),
              Math.hypot(x - scrollX, y - (scrollY + viewportHeight)),
              Math.hypot(x - (scrollX + viewportWidth), y - (scrollY + viewportHeight))
            )

            return [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ]
          })()

    document.documentElement.animate(
      {
        clipPath: clipPathFrames,
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [isDark, duration, origin])

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(className)}
      {...props}>
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
