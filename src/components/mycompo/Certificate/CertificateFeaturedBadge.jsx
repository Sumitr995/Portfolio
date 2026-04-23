import React from 'react'
import { Sparkles } from 'lucide-react'

const CertificateFeaturedBadge = ({ featured }) => {
  if (!featured) return null

  return (
    <span className='inline-flex items-center gap-1 rounded-full border bg-background px-2.5 py-1 text-[11px] font-semibold text-foreground/80'>
      <Sparkles className='size-3.5 text-primary' />
      Featured
    </span>
  )
}

export default CertificateFeaturedBadge
