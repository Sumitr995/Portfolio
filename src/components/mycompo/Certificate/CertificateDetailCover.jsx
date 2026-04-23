import React from 'react'
import { ExternalLink, Eye } from 'lucide-react'

import PreviewImage from '@/components/other/PreviewImage'
import { Button } from '@/components/ui/button'

const shortcutLinkFor = (cert) => {
  const links = [cert?.credentialUrl, cert?.verifyUrl, cert?.linkedinPostUrl]
  for (const l of links) {
    const safe = typeof l === 'string' ? l.trim() : ''
    if (safe) return safe
  }
  return ''
}

const CertificateDetailCover = ({ cert }) => {
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false)

  const src = cert?.cover?.src
  if (!src) return null

  const title = cert?.title || 'Certificate'
  const alt = cert?.cover?.alt || title
  const shortcut = shortcutLinkFor(cert)

  return (
    <div className='relative'>
      {shortcut ? (
        <a href={shortcut} target='_blank' rel='noreferrer' className='block'>
          <img src={src} alt={alt} loading='lazy' className='w-full h-auto object-contain' />
        </a>
      ) : (
        <img src={src} alt={alt} loading='lazy' className='w-full h-auto object-contain' />
      )}

      <div className='absolute top-3 right-3 flex items-center gap-2'>
        <Button
          type='button'
          size='icon-sm'
          variant='secondary'
          className='rounded-full'
          onClick={() => setIsPreviewOpen(true)}
          aria-label='Preview certificate image'
        >
          <Eye className='size-4' />
        </Button>

        {shortcut ? (
          <Button asChild size='icon-sm' variant='secondary' className='rounded-full'>
            <a href={shortcut} target='_blank' rel='noreferrer' aria-label='Open certificate link'>
              <ExternalLink className='size-4' />
            </a>
          </Button>
        ) : null}
      </div>

      <PreviewImage
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        title={title}
        images={src}
        liveLink={shortcut}
      />
    </div>
  )
}

export default CertificateDetailCover
