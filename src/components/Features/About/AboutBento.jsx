import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

// Shared motion variants — Context7: motion.dev whileInView stagger
export const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
}
export const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
}

// MagicUI BentoGrid + shadcn Card — minimalist single-col for md:w-1/2
export const BentoGrid = ({ children, className, ...props }) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.08 }}
    className={cn('grid w-full grid-cols-1 gap-4', className)}
    {...props}
  >
    {children}
  </motion.div>
)

export const BentoCard = ({ children, className, ...props }) => (
  <motion.div
    variants={item}
    className={cn('group relative flex flex-col overflow-hidden rounded-xl bg-transparent p-5', className)}
    {...props}
  >
    {children}
  </motion.div>
)

export const Label = ({ children, icon: Icon }) => (
  <div className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
    {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
    {children}
  </div>
)

export const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-muted/20 px-2.5 py-1 text-xs font-medium text-muted-foreground">
    {children}
  </span>
)
