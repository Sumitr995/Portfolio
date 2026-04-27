import React from 'react'
import { ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'

const toSafeString = (v) => (typeof v === 'string' ? v.trim() : '')

const normalizeLinks = (cert) => {
  const out = []

  const push = (label, href) => {
    const safeLabel = toSafeString(label)
    const safeHref = toSafeString(href)
    if (!safeLabel || !safeHref) return
    out.push({ label: safeLabel, href: safeHref })
  }

  const links = cert?.links
  if (Array.isArray(links)) {
    for (const item of links) {
      if (!item) continue
      if (typeof item === 'string') {
        push('Link', item)
        continue
      }
      const label = item.label ?? item.name ?? item.key
      const href = item.href ?? item.url ?? item.link ?? item.value
      push(label, href)
    }
  } else if (links && typeof links === 'object') {
    for (const [label, href] of Object.entries(links)) {
      push(label, href)
    }
  }

  // Backward compatibility
  push('Certificate Link', cert?.credentialUrl)
  push('Verify Link', cert?.verifyUrl)
  push('LinkedIn Post', cert?.linkedinPostUrl)

  const seen = new Set()
  return out.filter((x) => {
    const key = `${x.label}@@${x.href}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

const LinkItem = ({ label, href }) => {
  const safeHref = toSafeString(href)
  if (!safeHref) return null

  return (
    <div className='flex items-center justify-between gap-3 rounded-xl border bg-background px-4 py-3'>
      <div className='min-w-0'>
        <div className='text-sm font-medium text-foreground'>{label}</div>
        <div className='mt-0.5 truncate text-xs text-muted-foreground'>{safeHref}</div>
      </div>

      <Button asChild size='sm' variant='outline' className='rounded-full shrink-0'>
        <a href={safeHref} target='_blank' rel='noreferrer'>
          Open <ExternalLink className='size-4' />
        </a>
      </Button>
    </div>
  )
}

const CertificateDetailLinks = ({ cert }) => {
  if (!cert) return null

  const items = normalizeLinks(cert)
  if (!items.length) return null

  return (
    <div>
      <div className='text-sm font-semibold'>Links</div>
      <div className='mt-4 space-y-2'>
        {items.map((it) => (
          <LinkItem key={`${it.label}-${it.href}`} label={it.label} href={it.href} />
        ))}
      </div>
    </div>
  )
}

export default CertificateDetailLinks
