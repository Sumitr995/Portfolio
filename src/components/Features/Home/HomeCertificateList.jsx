import React from 'react'
import HomeCertificateRow from './HomeCertificateRow'
import { BlurFade } from '@/components/ui/blur-fade'

const HomeCertificateList = ({ certificates }) => {
  const items = certificates ?? []

  return (
    <BlurFade inView delay={0.15} className='space-y-2'>
      {items.map((c, i) => (
        <BlurFade key={c.id} inView delay={0.15 + i * 0.08}>
          <HomeCertificateRow certificate={c} index={i} />
        </BlurFade>
      ))}
    </BlurFade>
  )
}

export default HomeCertificateList;
