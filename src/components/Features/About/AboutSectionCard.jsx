import React from 'react'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'

const AboutSectionCard = ({ title, eyebrow, icon: Icon, children, className = '' }) => {
  return (
    <BentoCard className={className}>
      {eyebrow ? <Label icon={Icon}>{eyebrow}</Label> : null}
      {title ? <h3 className="mt-2 text-sm font-semibold text-foreground">{title}</h3> : null}
      <div className={eyebrow || title ? 'mt-4' : ''}>{children}</div>
    </BentoCard>
  )
}

export default AboutSectionCard
