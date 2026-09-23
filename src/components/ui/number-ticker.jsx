import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'motion/react'
import { cn } from '@/lib/utils'

// MagicUI NumberTicker — adapted for Impact counts
// https://magicui.design/docs/components/number-ticker
export function NumberTicker({ value, direction = 'up', delay = 0, className, decimalPlaces = 0, ...props }) {
  const ref = useRef(null)
  const motionValue = useMotionValue(direction === 'down' ? value : 0)
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 })
  const isInView = useInView(ref, { once: true, margin: '0px' })

  useEffect(() => {
    if (isInView) {
      const t = setTimeout(() => motionValue.set(direction === 'down' ? 0 : value), delay * 1000)
      return () => clearTimeout(t)
    }
  }, [isInView, motionValue, delay, value, direction])

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US', {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        }).format(Number(latest.toFixed(decimalPlaces)))
      }
    })
  }, [springValue, decimalPlaces])

  return <span ref={ref} className={cn('tabular-nums', className)} {...props} />
}
