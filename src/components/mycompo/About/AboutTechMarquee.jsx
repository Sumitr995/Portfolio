import React, { useEffect, useMemo, useState } from 'react'

const normalizeItems = (items) => (items ?? []).filter((t) => t?.name || t?.icon)

const LOW_CONTRAST_ICON_NAMES = new Set([
  'shadcn UI',
  'Flask',
  'REST APIs',
  'Restful APIs',
  'Express.js',
])

const contrastClassFor = (name) => {
  if (!name) return ''
  return LOW_CONTRAST_ICON_NAMES.has(name) ? 'dark:brightness-0 dark:invert' : ''
}

const normalize = (value) => String(value ?? '').trim().toLowerCase()

const MarqueeRow = ({ items, reverse = false, duration = 28 }) => {
  const normalized = normalizeItems(items)
  if (!normalized.length) return null

  const doubled = [...normalized, ...normalized]

  const [cdnIconByTech, setCdnIconByTech] = useState({})

  useEffect(() => {
    let cancelled = false

    const load = async () => {
      try {
        // Source of truth lives in /public/techstackCDN/techCDN.js
        const moduleUrl = new URL('/techstackCDN/techCDN.js', window.location.origin).href
        const mod = await import(/* @vite-ignore */ moduleUrl)
        const list = mod?.default ?? []

        const map = {}
        for (const item of list) {
          const key = normalize(item?.name)
          if (!key || !item?.icon) continue
          map[key] = item.icon
        }

        if (!cancelled) setCdnIconByTech(map)
      } catch {
        // ignore: CDN fallback list is optional
      }
    }

    if (typeof window !== 'undefined') load()
    return () => {
      cancelled = true
    }
  }, [])

  const getCdnFallback = useMemo(() => {
    return (techName) => cdnIconByTech[normalize(techName)] ?? null
  }, [cdnIconByTech])

  return (
    <div className='overflow-hidden'>
      <div
        className={`flex w-max items-center gap-6 py-2 about-marquee-track ${reverse ? 'about-marquee-reverse' : ''}`}
        style={{ '--about-marquee-duration': `${duration}s` }}
      >
        {doubled.map((tech, idx) => {
          const key = `${tech.name ?? tech.icon ?? 'tech'}-${idx}`
          const initialSrc = tech.icon || getCdnFallback(tech.name)
          const contrastClass = contrastClassFor(tech.name)

          if (!initialSrc) return null

          return (
            <img
              key={key}
              src={initialSrc}
              data-name={tech.name ?? ''}
              alt={tech.name ?? 'tech icon'}
              title={tech.name ?? ''}
              className={`about-tech-icon h-10 w-10 opacity-100 transition-transform duration-200 hover:scale-110 ${contrastClass}`}
              loading='lazy'
              decoding='async'
              onError={(e) => {
                const img = e.currentTarget
                if (img.dataset.fallbackApplied === '1') return

                const fallback = getCdnFallback(img.dataset.name)
                if (fallback && img.currentSrc !== fallback && img.src !== fallback) {
                  img.dataset.fallbackApplied = '1'
                  img.dataset.from = 'cdn'
                  img.src = fallback
                  return
                }

                img.dataset.fallbackApplied = '1'
                img.style.display = 'none'
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

const AboutTechMarquee = ({ tech }) => {
  const row1 = tech?.row1
  const row2 = tech?.row2

  if (!normalizeItems(row1).length && !normalizeItems(row2).length) return null

  return (
    <div className='space-y-2'>
      <MarqueeRow items={row1} duration={30} />
      <MarqueeRow items={row2 ?? row1} reverse duration={34} />
    </div>
  )
}

export default AboutTechMarquee
