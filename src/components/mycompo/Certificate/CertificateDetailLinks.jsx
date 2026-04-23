import React from 'react'
import { ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'

const LinkItem = ({ label, href }) => {
  const safeHref = typeof href === 'string' ? href.trim() : ''
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

  return (
    <div>
      <div className='text-sm font-semibold'>Links</div>
      <div className='mt-4 space-y-2'>
        <LinkItem label='Certificate Link' href={cert.credentialUrl} />
        <LinkItem label='Verify Link' href={cert.verifyUrl} />
        <LinkItem label='LinkedIn Post' href={cert.linkedinPostUrl} />
      </div>
    </div>
  )
}

export default CertificateDetailLinks
