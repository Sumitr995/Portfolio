import React from 'react'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'

const AboutQuickFacts = ({ items }) => {
  const filtered = (items ?? []).filter((fact) => fact?.label && fact?.value)
  if (!filtered.length) return null

  return (
    <BentoCard>
      <Label>Quick Facts</Label>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {filtered.map((fact) => (
          <div key={fact.label} className="rounded-xl border bg-muted/10 p-3">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">{fact.label}</div>
            <div className="mt-1 text-xs font-medium text-foreground truncate">{fact.value}</div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}

export default AboutQuickFacts
