import React from 'react'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'

const AboutFocus = ({ items }) => {
  if (!items?.length) return null
  return (
    <BentoCard>
      <Label>Now • Currently</Label>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {items.map((it) => (
          <span key={it} className="inline-flex items-center rounded-full border bg-transparent px-2.5 py-1 text-xs font-medium text-foreground">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
            {it}
          </span>
        ))}
      </div>
    </BentoCard>
  )
}

export default AboutFocus
