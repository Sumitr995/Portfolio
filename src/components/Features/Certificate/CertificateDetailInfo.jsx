import React from 'react'

import CertificateMeta from '@/components/Features/Certificate/CertificateMeta'
import CertificateFeaturedBadge from '@/components/Features/Certificate/CertificateFeaturedBadge'
import CertificatePill from '@/components/Features/Certificate/CertificatePill'
import { Separator } from '@/components/ui/separator'

const CertificateDetailInfo = ({ cert }) => {
  if (!cert) return null

  return (
    <>
      <div className='flex flex-wrap items-center gap-2'>
        <h1 className='text-2xl font-bold text-zinc-600 dark:text-zinc-300'>{cert.title}</h1>
        <CertificateFeaturedBadge featured={Boolean(cert.featured)} />
      </div>

      <CertificateMeta issuer={cert.issuer} issued={cert.issued} />

      <Separator className='my-5' />

      <div>
        <div className='text-sm font-semibold'>Details</div>

        {cert.description ? (
          <p className='mt-3 text-base leading-relaxed text-muted-foreground'>{cert.description}</p>
        ) : null}

        {cert.note ? <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>{cert.note}</p> : null}

        {(cert.skills ?? []).length ? (
          <>
            <div className='mt-4 text-sm font-semibold'>Skills</div>
            <div className='mt-3 flex flex-wrap gap-2'>
              {cert.skills.map((s) => (
                <CertificatePill key={s}>{s}</CertificatePill>
              ))}
            </div>
          </>
        ) : null}

        {(cert.whatILearned ?? []).length ? (
          <>
            <div className='mt-5 text-sm font-semibold'>What I learned</div>
            <ul className='mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground'>
              {cert.whatILearned.map((h, idx) => (
                <li key={`${cert.id}-learn-${idx}`}>{h}</li>
              ))}
            </ul>
          </>
        ) : null}

        {(cert.highlights ?? []).length ? (
          <>
            <div className='mt-5 text-sm font-semibold'>Highlights</div>
            <ul className='mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground'>
              {cert.highlights.map((h, idx) => (
                <li key={`${cert.id}-highlight-${idx}`}>{h}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </>
  )
}

export default CertificateDetailInfo
