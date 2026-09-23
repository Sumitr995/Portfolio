import { Layers, Radio, Cloud } from 'lucide-react'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'

const AboutPillars = ({ pillars }) => (
  <BentoCard>
    <Label>Pillars</Label>
    <div className="mt-4 grid grid-cols-1 divide-y sm:grid-cols-3 sm:divide-y-0 sm:divide-x rounded-xl overflow-hidden border">
      {pillars.map((p) => (
        <div key={p.k} className="p-4 bg-transparent">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{p.k}</span>
            <span className="rounded-full bg-primary/10 p-1 text-primary">
              {p.k === 'Stack' ? <Layers className="h-3 w-3" /> : p.k === 'Realtime' ? <Radio className="h-3 w-3" /> : <Cloud className="h-3 w-3" />}
            </span>
          </div>
          <div className="mt-2 text-sm font-semibold text-foreground">{p.v}</div>
          <div className="text-xs text-muted-foreground">{p.sub}</div>
        </div>
      ))}
    </div>
  </BentoCard>
)

export default AboutPillars
