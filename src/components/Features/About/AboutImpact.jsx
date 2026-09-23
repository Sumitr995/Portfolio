import { Activity } from 'lucide-react'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'
import { NumberTicker } from '@/components/ui/number-ticker'

const AboutImpact = ({ stats }) => (
  <BentoCard>
    <Label icon={Activity}>Impact</Label>
    <div className="mt-4 grid grid-cols-2 gap-3">
      {stats.map((s) => {
        const numeric = parseInt(String(s.value).replace(/\D/g, ''), 10) || 0
        const suffix = String(s.value).replace(/[0-9]/g, '')
        return (
          <div key={s.label} className="rounded-xl bg-transparent p-4 border">
            <div className="text-xl font-semibold tracking-tight text-foreground flex items-baseline gap-0.5">
              <NumberTicker value={numeric} className="text-xl font-semibold tracking-tight text-foreground" />
              {suffix ? <span className="text-xl font-semibold tracking-tight text-foreground">{suffix}</span> : null}
            </div>
            <div className="text-xs font-medium text-foreground">{s.label}</div>
            <div className="text-[11px] text-muted-foreground">{s.hint}</div>
          </div>
        )
      })}
    </div>
  </BentoCard>
)

export default AboutImpact
