import React from 'react'
import { ExternalLink, Eye } from 'lucide-react'

import PreviewImage from '@/components/other/PreviewImage'
import { Button } from '@/components/ui/button'

const shortcutLinkFor = (cert) => {
  const dynamicLinks = cert?.links && typeof cert.links === 'object' ? Object.values(cert.links) : []
  const links = [...dynamicLinks, cert?.credentialUrl, cert?.verifyUrl, cert?.linkedinPostUrl]
  for (const l of links) {
    const safe = typeof l === 'string' ? l.trim() : ''
    if (safe) return safe
  }
  return ''
}

const CertificateDetailCover = ({ cert }) => {
  const [isPreviewOpen, setIsPreviewOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(0)

  const src = cert?.cover?.src
  if (!src) return null

  const title = cert?.title || 'Certificate'
  const alt = cert?.cover?.alt || title
  const shortcut = shortcutLinkFor(cert)

  const images = React.useMemo(() => {
    const out = []

    if (src) out.push({ src, alt })

    const media = Array.isArray(cert?.media) ? cert.media : []
    for (const item of media) {
      if (!item) continue

      if (typeof item === 'string') {
        out.push({ src: item, alt: title })
        continue
      }

      const itemAlt = typeof item?.alt === 'string' && item.alt.trim() ? item.alt.trim() : title

      const directSrc = typeof item?.src === 'string' ? item.src.trim() : ''
      const imageSrc = typeof item?.image === 'string' ? item.image.trim() : ''
      const imgSrc = typeof item?.img === 'string' ? item.img.trim() : ''
      const imageUrlSrc = typeof item?.imageUrl === 'string' ? item.imageUrl.trim() : ''

      const fallbackSrc = (() => {
        const entries = Object.entries(item)
        for (const [k, v] of entries) {
          if (k === 'alt' || k === 'caption' || k === 'id' || k === 'type' || k === 'poster' || k === 'href') continue
          if (typeof v !== 'string') continue
          const trimmed = v.trim()
          if (!trimmed) continue
          if (/^image\d+$/i.test(k) || /^img\d+$/i.test(k) || /^image$/i.test(k) || /^img$/i.test(k)) return trimmed
        }

        for (const [, v] of entries) {
          if (typeof v !== 'string') continue
          const trimmed = v.trim()
          if (trimmed) return trimmed
        }
        return ''
      })()

      const itemSrc = directSrc || imageSrc || imgSrc || imageUrlSrc || fallbackSrc
      if (!itemSrc) continue
      out.push({ src: itemSrc, alt: itemAlt })
    }

    const seen = new Set()
    return out.filter((x) => {
      const key = x?.src || ''
      if (!key || seen.has(key)) return false
      seen.add(key)
      return true
    })
  }, [alt, cert?.media, src, title])

  const active = images[activeIndex] || images[0]
  const activeSrc = active?.src || src
  const activeAlt = active?.alt || alt


  return (
    <div className='relative'>
      <div className='flex w-full items-center justify-center bg-muted/40 px-3 py-4'>
        {shortcut ? (
          <a href={shortcut} target='_blank' rel='noreferrer' className='block w-full'>
            <img
              src={activeSrc}
              alt={activeAlt}
              loading='lazy'
              className='mx-auto max-h-[65vh] w-auto max-w-full object-contain'
            />
          </a>
        ) : (
          <img
            src={activeSrc}
            alt={activeAlt}
            loading='lazy'
            className='mx-auto max-h-[65vh] w-auto max-w-full object-contain'
          />
        )}
      </div>

      {images.length > 1 ? (
        <div className='border-t bg-background px-3 py-2'>
          <div className='flex gap-2 overflow-x-auto'>
            {images.map((img, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={img.src}
                  type='button'
                  onClick={() => setActiveIndex(idx)}
                  className={
                    'shrink-0 overflow-hidden rounded-lg border ' +
                    (isActive ? 'border-foreground/30' : 'border-border')
                  }
                  aria-label={`Show image ${idx + 1}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading='lazy'
                    className='h-14 w-24 object-contain bg-muted/40'
                  />
                </button>
              )
            })}
          </div>
        </div>
      ) : null}

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
        images={images.map((x) => x.src)}
        liveLink={shortcut}
      />
    </div>
  )
}

export default CertificateDetailCover
