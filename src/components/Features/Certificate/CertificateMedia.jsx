import React from 'react'

const isImage = (t) => t === 'image'
const isVideo = (t) => t === 'video'

const MediaCard = ({ m, heightClassName }) => {
  const caption = m.caption || m.alt
  const sizeClassName = heightClassName ? ` ${heightClassName}` : ''

  return (
    <figure className='overflow-hidden rounded-xl border bg-background'>
      {isImage(m.type) ? (
        <a href={m.src} target='_blank' rel='noreferrer' className='block'>
          <img
            src={m.src}
            alt={m.alt || caption || 'Certificate media'}
            loading='lazy'
            className={`w-full h-auto object-contain${sizeClassName}`}
          />
        </a>
      ) : isVideo(m.type) ? (
        <video
          className={`w-full h-auto bg-black/5 object-contain${sizeClassName}`}
          src={m.src}
          poster={m.poster}
          controls
          preload='metadata'
        />
      ) : (
        <a
          href={m.href || m.src}
          target='_blank'
          rel='noreferrer'
          className='block p-4 text-sm text-muted-foreground underline underline-offset-4'
        >
          Open media
        </a>
      )}

      {caption ? <figcaption className='px-3 py-2 text-xs text-muted-foreground'>{caption}</figcaption> : null}
    </figure>
  )
}

const CertificateMedia = ({ media }) => {
  const items = (media ?? []).filter(Boolean)
  if (!items.length) return null

  const [featured, ...rest] = items

  return (
    <div>
      <div className='text-sm font-semibold'>Media</div>
      <p className='mt-1 text-sm text-muted-foreground'>Images / videos related to this certificate.</p>

      {featured ? (
        <div className='mt-4'>
          <MediaCard m={featured} />
        </div>
      ) : null}

      {rest.length ? (
        <div className='mt-3 grid gap-3 sm:grid-cols-2'>
          {rest.map((m, idx) => {
            const key = m.id || `${m.type || 'media'}-${idx}`
            return <div key={key}><MediaCard m={m} /></div>
          })}
        </div>
      ) : null}
    </div>
  )
}

export default CertificateMedia
