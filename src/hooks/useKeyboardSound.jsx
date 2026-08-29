import { playClickSound } from "@/lib/clickSound"

export function useKeyboardSound() {
  return { play: playClickSound }
}

export default useKeyboardSound
