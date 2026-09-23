import * as React from "react"
import { initClickSound } from "@/lib/clickSound"

/**
 * @deprecated Global click sound was removed. This provider is now a no-op
 * kept for backwards compatibility. Use `WithClickSound`, `SoundButton`
 * from "@/components/ui/click-sound" or `useClickSound` from "@/hooks/useClickSound"
 * to opt-in per button.
 *
 * It still warms the sound config/audio on mount but no longer adds a
 * global document click listener.
 */
export function ClickSoundProvider({ children }) {
  React.useEffect(() => {
    initClickSound()
  }, [])

  return children
}
