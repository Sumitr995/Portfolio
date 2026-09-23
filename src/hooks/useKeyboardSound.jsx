import { useClickSound } from "./useClickSound"

/**
 * @deprecated Use `useClickSound` from "@/hooks/useClickSound" instead.
 * Kept for backwards compatibility.
 */
export function useKeyboardSound() {
  return useClickSound()
}

export default useKeyboardSound
