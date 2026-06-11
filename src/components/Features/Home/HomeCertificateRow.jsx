import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import CertificateFeaturedBadge from '@/components/Features/Certificate/CertificateFeaturedBadge'

const HomeCertificateRow = ({ certificate }) => {
  const c = certificate
  const isFeatured = Boolean(c?.featured)

  return (
    <Link
      to={`/certificates/${c.id}`}
      className={
        'group flex items-center justify-between gap-4 rounded-2xl border bg-background px-4 py-3 transition-colors hover:bg-accent/40 ' +
        (isFeatured ? 'border-primary/30 ring-1 ring-primary/15' : '')
      }
    >
      <div className='min-w-0'>
        <div className='flex flex-wrap items-center gap-2'>
          <div className='text-base font-semibold text-foreground'>{c.title}</div>
          <CertificateFeaturedBadge featured={isFeatured} />
        </div>

        <div className='mt-1 text-sm text-muted-foreground truncate'>
          {c.description || c.note || `${c.issuer} • ${c.issued}`}
        </div>

        <div className='mt-1 text-xs text-muted-foreground'>
          {c.issuer} • {c.issued}
        </div>
      </div>

      <div className='shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5'>
        <ArrowRight className='size-5' />
      </div>
    </Link>
  )
}

export default HomeCertificateRow
