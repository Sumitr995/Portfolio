import React from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

import AboutSectionCard from '@/components/mycompo/About/AboutSectionCard'
import AboutFocus from '@/components/mycompo/About/AboutFocus'
import AboutQuickFacts from '@/components/mycompo/About/AboutQuickFacts'
import AboutTechMarquee from '@/components/mycompo/About/AboutTechMarquee'

const AboutClassic = ({ about }) => {
  const displayName = about?.basics?.name ?? 'Sumit'
  const locationText = about?.basics?.locationText
  const educationText = about?.education?.educationText
  const highlights = about?.highlights ?? []
  const profileLinks = about?.basics?.profiles ?? {}

  return (
    <AboutSectionCard>
      <div className='flex flex-col gap-4'>
        <div>
          <h2 className='text-lg font-semibold text-zinc-800 dark:text-zinc-100'>{displayName}</h2>
          {(locationText || educationText) && (
            <p className='mt-1 text-xs text-zinc-500 dark:text-zinc-400'>
              {[locationText, educationText].filter(Boolean).join(' • ')}
            </p>
          )}
        </div>

        <div className='flex flex-row flex-wrap gap-3'>
          <Link to='/resume'>
            <Button variant='outline'>Resume</Button>
          </Link>
          <Link to='/contact'>
            <Button variant='default'>Contact</Button>
          </Link>
          {profileLinks?.github ? (
            <a
              href={profileLinks.github}
              target='_blank'
              rel='noreferrer'
              className='inline-flex'
            >
              <Button variant='ghost'>GitHub</Button>
            </a>
          ) : null}
          {profileLinks?.linkedin ? (
            <a
              href={profileLinks.linkedin}
              target='_blank'
              rel='noreferrer'
              className='inline-flex'
            >
              <Button variant='ghost'>LinkedIn</Button>
            </a>
          ) : null}
        </div>

        <AboutFocus items={about?.currentFocus} />
        <AboutQuickFacts items={about?.quickFacts} />

        {highlights.length ? (
          <div>
            <h3 className='text-sm font-bold text-zinc-700 dark:text-zinc-200'>Highlights</h3>
            <ul className='mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300'>
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <AboutTechMarquee tech={about?.tech} />
      </div>
    </AboutSectionCard>
  )
}

export default AboutClassic
