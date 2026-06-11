import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import AboutFocus from '@/components/Features/About/AboutFocus'
import AboutQuickFacts from '@/components/Features/About/AboutQuickFacts'
import HomeStack from '@/components/Features/Home/HomeStack'

const AboutClassic = ({ about }) => {
  const displayName = about?.basics?.name ?? 'Sumit'
  const locationText = about?.basics?.locationText
  const summaryText = typeof about?.basics?.summary === 'string' ? about.basics.summary.trim() : ''
  const achievements = about?.achievements ?? about?.highlights ?? []
  const profileLinks = about?.basics?.profiles ?? {}

  const portfolioUrl = useMemo(() => {
    if (typeof window === 'undefined') return ''
    return window.location.origin
  }, [])

  const shareItems = [
    { id: 'linkedin', label: 'LinkedIn', value: profileLinks?.linkedin ?? '' },
    { id: 'github', label: 'GitHub', value: profileLinks?.github ?? '' },
    { id: 'portfolio', label: 'Portfolio', value: portfolioUrl },
  ].filter((item) => item.value)

  return (
    <div className='flex flex-col gap-4'>
      <div>
        <h2 className='text-lg font-semibold text-zinc-800 dark:text-zinc-100'>{displayName}</h2>
        {locationText ? <p className='mt-1 text-xs text-zinc-500 dark:text-zinc-400'>{locationText}</p> : null}
        {summaryText ? (
          <p className='mt-3 text-sm text-zinc-600 dark:text-zinc-300'>{summaryText}</p>
        ) : null}
      </div>

      <div className='flex flex-row flex-wrap gap-3'>
        <Link to='/resume'>
          <Button variant='outline'>Resume</Button>
        </Link>
        <Link to='/contact'>
          <Button variant='outline'>Contact</Button>
        </Link>
        {profileLinks?.github ? (
          <a href={profileLinks.github} target='_blank' rel='noreferrer' className='inline-flex '>
            <Button variant='outline'>GitHub</Button>
          </a>
        ) : null}
        {profileLinks?.linkedin ? (
          <a href={profileLinks.linkedin} target='_blank' rel='noreferrer' className='inline-flex'>
            <Button variant='outline'>LinkedIn</Button>
          </a>
        ) : null}
      </div>

      <AboutFocus items={about?.currentFocus} />
      <AboutQuickFacts items={about?.quickFacts} />

      {achievements.length ? (
        <div>
          <h3 className='text-sm font-bold text-zinc-700 dark:text-zinc-200'>Achievements</h3>
          <ul className='mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300'>
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {shareItems.length ? (
        <div>
          <div className='flex items-center justify-between gap-3'>
            <h3 className='text-sm font-bold text-zinc-700 dark:text-zinc-200'>Links</h3>
            <Link to='/share'>
              <Button variant='outline' size='sm'>
                View all
              </Button>
            </Link>
          </div>

          <div className='mt-4 space-y-2'>
            {shareItems.map((it) => (
              <div key={it.id} className='flex items-center justify-between gap-3 rounded-xl border bg-background px-4 py-3'>
                <div className='min-w-0'>
                  <div className='text-sm font-medium text-foreground'>{it.label}</div>
                  <div className='mt-0.5 truncate text-xs text-muted-foreground'>{it.value}</div>
                </div>

                <Button asChild size='sm' variant='outline' className='rounded-full shrink-0'>
                  <Link to={`/share/${it.id}`}>View QR</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div className='mt-8 mb-2'>
      <HomeStack showEyebrow={false} showTitle={true} className='mt-2' />
      </div>
    </div>
  )
}

export default AboutClassic
