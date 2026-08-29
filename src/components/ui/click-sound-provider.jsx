import * as React from "react"
import { playClickSound, initClickSound } from "@/lib/clickSound"

export function ClickSoundProvider({ children }) {
  React.useEffect(() => {
    initClickSound()

    const isDisabled = (el) => {
      if (!el) return false
      const target = el.closest('button, a, input')
      if (target?.hasAttribute("disabled")) return true
      if (target?.getAttribute("aria-disabled") === "true") return true
      return false
    }

    const handler = (e) => {
      const target = e.target
      if (!(target instanceof Element)) return
      const clickable = target.closest(
        'button, a, [role="button"], input[type="button"], input[type="submit"], input[type="reset"], [data-slot="button"]'
      )
      if (!clickable) return
      if (isDisabled(clickable)) return
      // ignore if user prefers reduced motion? still play sound - not tying to motion
      playClickSound()
    }

    // capture phase to catch even if stopPropagation in bubble
    document.addEventListener("click", handler, true)

    // also warm audio context on first interaction (required for autoplay)
    const warm = () => {
      // import will resume context on next playClickSound
    }
    document.addEventListener("pointerdown", warm, { once: true })
    document.addEventListener("keydown", warm, { once: true })

    return () => {
      document.removeEventListener("click", handler, true)
      document.removeEventListener("pointerdown", warm)
      document.removeEventListener("keydown", warm)
    }
  }, [])

  return children
}
