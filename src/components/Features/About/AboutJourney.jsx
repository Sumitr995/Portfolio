import { Link } from 'react-router-dom'
import { Briefcase, ChevronRight } from 'lucide-react'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'
import { workData } from '@/Data/WorkData'

const AboutJourney = () => {
  const journey = workData ?? []
  return (
    <BentoCard>
      <div className="flex items-center justify-between">
        <Label icon={Briefcase}>Journey</Label>
        <Link to="/work" className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground">
          View work <ChevronRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        {journey.map((j) => (
          <div key={`${j.company}-${j.role}`} className="flex gap-3 rounded-xl bg-transparent border p-3">
            <img
              src={j.imageUrl || '/images/GDGC-icon.png'}
              alt={j.company}
              className="h-9 w-9 shrink-0 rounded-xl bg-transparent object-contain p-1"
              loading="lazy"
            />
            <div className="min-w-0 flex-1">
              <div className="text-xs font-semibold text-foreground leading-none truncate">{j.role}</div>
              <div className="text-[11px] text-muted-foreground truncate">{j.company} • {j.period}</div>
              <div className="mt-2 flex flex-wrap gap-1">
                {(j.technologies ?? []).slice(0, 5).map((t) => (
                  <img key={t.name} src={t.icon} alt={t.name} title={t.name} className="h-5 w-5 rounded-md bg-transparent object-contain p-0.5" loading="lazy" />
                ))}
                {(j.technologies ?? []).length > 5 ? (
                  <span className="inline-flex items-center rounded-full bg-muted/20 px-2 py-0.5 text-[10px] text-muted-foreground">+{j.technologies.length - 5}</span>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}

export default AboutJourney
