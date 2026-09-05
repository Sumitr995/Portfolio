import HomeStack from '@/components/Features/Home/HomeStack'
import AboutTechMarquee from '@/components/Features/About/AboutTechMarquee'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'
import dataJson from '@/Data/Data.json'

// Reuses previous AboutTechMarquee (rewritten for minimalist theme) + HomeStack fallback
const AboutStack = ({ tech }) => {
  const hasTech = tech?.row1?.length || tech?.row2?.length
  return (
    <BentoCard className="overflow-hidden">
      <div className="flex items-center justify-between">
        <Label>Stack</Label>
        <span className="hidden sm:inline text-[11px] text-muted-foreground">
          {Object.keys(dataJson?.skills ?? {}).length} groups • {Object.values(dataJson?.skills ?? {}).flat().length} tools
        </span>
      </div>
      <div className="mt-3">
        {hasTech ? <AboutTechMarquee tech={tech} /> : <HomeStack showEyebrow={false} showTitle={false} className="mt-0" />}
      </div>
    </BentoCard>
  )
}

export default AboutStack
