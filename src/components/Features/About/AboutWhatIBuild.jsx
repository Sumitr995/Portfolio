import { Cpu, Code2, Radio, Cloud } from 'lucide-react'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'

const AboutWhatIBuild = ({ focus }) => (
  <BentoCard>
    <Label icon={Cpu}>What I build</Label>
    <div className="mt-4 grid grid-cols-2 gap-3">
      {[
        { title: 'Frontend', meta: 'React 19 • Tailwind', icon: Cpu },
        { title: 'Backend', meta: 'Node • Postgres', icon: Code2 },
        { title: 'Realtime', meta: 'WS • MQTT', icon: Radio },
        { title: 'Cloud', meta: 'GCP • Docker', icon: Cloud },
      ].map((b) => (
        <div key={b.title} className="rounded-xl border bg-transparent p-3">
          <div className="flex items-center gap-2">
            <span className="rounded-md border bg-transparent p-1.5">
              <b.icon className="h-3.5 w-3.5 text-muted-foreground" />
            </span>
            <span className="text-xs font-semibold text-foreground">{b.title}</span>
          </div>
          <div className="mt-2 text-[11px] text-muted-foreground">{b.meta}</div>
        </div>
      ))}
    </div>
    <div className="mt-3 flex flex-wrap gap-1.5">
      {focus.map((f) => (
        <span key={f} className="rounded-full border bg-transparent px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
          {f}
        </span>
      ))}
    </div>
  </BentoCard>
)

export default AboutWhatIBuild
