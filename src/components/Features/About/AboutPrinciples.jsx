import { Zap, ShieldCheck, Sparkles } from 'lucide-react'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'

const AboutPrinciples = ({ principles }) => (
  <BentoCard>
    <Label>How I work</Label>
    <div className="mt-4 flex flex-col gap-3">
      {principles.map((pr, i) => (
        <div key={pr.title} className="flex gap-3 rounded-xl border bg-transparent p-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border bg-transparent">
            {i === 0 ? <Zap className="h-3.5 w-3.5" /> : i === 1 ? <ShieldCheck className="h-3.5 w-3.5" /> : <Sparkles className="h-3.5 w-3.5" />}
          </span>
          <div>
            <div className="text-sm font-medium leading-none text-foreground">{pr.title}</div>
            <div className="mt-1 text-xs text-muted-foreground">{pr.detail}</div>
          </div>
        </div>
      ))}
    </div>
  </BentoCard>
)

export default AboutPrinciples
