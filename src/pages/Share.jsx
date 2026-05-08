import React, { useMemo } from 'react'
import QRCode from 'react-qr-code'
import { Link, useParams } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

import Footer from '@/components/Features/Footer/Footer'
import { Button } from '@/components/ui/button'
import aboutData from '@/Data/aboutData'

const Share = () => {
  const { id } = useParams()
  const profiles = aboutData?.basics?.profiles ?? {}
  const linkedinUrl = profiles?.linkedin ?? ''
  const githubUrl = profiles?.github ?? ''

  const portfolioUrl = useMemo(() => {
    if (typeof window === 'undefined') return ''
    return window.location.origin
  }, [])

  const items = [
    { id: 'linkedin', label: 'LinkedIn', value: linkedinUrl },
    { id: 'github', label: 'GitHub', value: githubUrl },
    { id: 'portfolio', label: 'Portfolio', value: portfolioUrl },
  ].filter((item) => item.value)

  const active = id ? items.find((x) => x.id === id) : null

  return (
    <div className='flex w-full flex-col'>
      <div className='w-full min-h-screen mx-auto p-4 md:w-1/2 md:max-w-3xl md:m-auto md:p-6'>
        <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>Share</div>
        <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>Scan a QR code to open my profiles.</div>

        <div className='mt-5 flex flex-col gap-6'>
          {!id ? (
            <div>
              <div className='text-sm font-semibold'>Links</div>
              <div className='mt-4 space-y-2'>
                {items.map((it) => (
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
          ) : !active ? (
            <div className='rounded-xl border bg-background p-6'>
              <div className='text-base font-semibold'>Link not found</div>
              <p className='mt-2 text-sm text-muted-foreground'>This share id doesn’t exist.</p>

              <div className='mt-4'>
                <Button asChild variant='outline'>
                  <Link to='/share'>Back to Share</Link>
                </Button>
              </div>
            </div>
          ) : (
            <article className='rounded-xl bg-background overflow-hidden'>
              <div className='p-6'>
                <div className='text-sm font-semibold'>{active.label}</div>
                <div className='mt-1 truncate text-xs text-muted-foreground'>{active.value}</div>

                <div className='mt-5 flex items-center justify-center'>
                  <div className='rounded-2xl bg-white p-4'>
                    <QRCode value={active.value} size={220} />
                  </div>
                </div>

                <div className='mt-5 flex flex-row flex-wrap gap-3'>
                  <Button asChild variant='outline'>
                    <Link to='/share'>Back</Link>
                  </Button>

                  <Button asChild variant='outline'>
                    <a href={active.value} target='_blank' rel='noreferrer'>
                      Open <ExternalLink className='size-4' />
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Share
