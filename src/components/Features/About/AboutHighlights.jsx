import { BentoCard, Label } from '@/components/Features/About/AboutBento'
import dataJson from '@/Data/Data.json'

const AboutHighlights = ({ achievements }) => {
  const languages = dataJson?.languages ?? {}
  return (
    <BentoCard>
      <Label>Highlights</Label>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {achievements.map((a) => (
          <span key={a} className="inline-flex max-w-full items-center gap-2 rounded-full bg-muted/20 px-3 py-1.5 text-xs font-medium text-foreground">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span className="truncate">{a}</span>
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {Object.entries(languages).map(([lang, lvl]) => (
          <span key={lang} className="rounded-full bg-muted/20 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
            {lang} • {String(lvl).split(' ')[0]}
          </span>
        ))}
      </div>
    </BentoCard>
  )
}

export default AboutHighlights
