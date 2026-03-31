import React from 'react'

const normalizeItems = (items) => (items ?? []).filter((t) => t?.name || t?.icon)

const SIMPLEICONS_OVERRIDES = {
  'Next.js': 'nextdotjs',
  'Node.js': 'nodedotjs',
  'React.js': 'react',
  'Express.js': 'express',
  'Tailwind CSS': 'tailwindcss',
  'Google Cloud Platform': 'googlecloud',
  JWT: 'jsonwebtokens',
  'JWT Authentication': 'jsonwebtokens',
  'C++': 'cplusplus',
  'C#': 'csharp',
  'shadcn UI': 'shadcnui',
  'REST APIs': null,
  'Restful APIs': null,
  'Load Balancing': null,
}

const toSimpleIconsSlug = (name) => {
  if (!name) return null
  if (Object.prototype.hasOwnProperty.call(SIMPLEICONS_OVERRIDES, name)) {
    return SIMPLEICONS_OVERRIDES[name]
  }

  const trimmed = String(name).trim()
  if (!trimmed) return null

  return trimmed
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/\./g, 'dot')
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/g, '')
}

const simpleIconsCdnUrl = (name) => {
  const slug = toSimpleIconsSlug(name)
  if (!slug) return null
  return `https://cdn.simpleicons.org/${slug}`
}

const MarqueeRow = ({ items, reverse = false, duration = 28 }) => {
  const normalized = normalizeItems(items)
  if (!normalized.length) return null

  const doubled = [...normalized, ...normalized]

  return (
    <div className='overflow-hidden'>
      <div
        className={`flex w-max items-center gap-6 py-2 about-marquee-track ${reverse ? 'about-marquee-reverse' : ''}`}
        style={{ '--about-marquee-duration': `${duration}s` }}
      >
        {doubled.map((tech, idx) => {
          const key = `${tech.name ?? tech.icon ?? 'tech'}-${idx}`
          const initialSrc = tech.icon || simpleIconsCdnUrl(tech.name)

          if (!initialSrc) return null

          return (
            <img
              key={key}
              src={initialSrc}
              data-name={tech.name ?? ''}
              alt={tech.name ?? 'tech icon'}
              title={tech.name ?? ''}
              className='about-tech-icon h-7 w-7 opacity-80 transition-opacity duration-200 hover:opacity-100'
              loading='lazy'
              decoding='async'
              onError={(e) => {
                const img = e.currentTarget
                if (img.dataset.fallbackApplied === '1') return

                const techName = img.dataset.name
                const cdn = simpleIconsCdnUrl(techName)
                if (!cdn) return

                if (img.currentSrc === cdn || img.src === cdn) return

                img.dataset.fallbackApplied = '1'
                img.dataset.from = 'cdn'
                img.src = cdn
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
