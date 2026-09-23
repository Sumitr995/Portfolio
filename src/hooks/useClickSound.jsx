import { useCallback, useEffect } from "react"
import { playClickSound, initClickSound } from "@/lib/clickSound"

/**
 * Opt-in click sound hook.
 * Warms audio on mount and returns a `play` function.
 *
 * Usage:
 *   const { play } = useClickSound()
 *   <button onClick={() => { play(); doSomething() }}>Click</button>
 */
export function useClickSound() {
  useEffect(() => {
    initClickSound()
  }, [])

  const play = useCallback(() => {
    playClickSound()
  }, [])

  return { play, playClickSound: play }
}

export default useClickSound
