import Footer from '@/components/Features/Footer/Footer'
import Qoutes from '@/components/Features/Qoutes/Qoutes'
import React from 'react'
import AboutClassic from '@/components/Features/About/AboutClassic'
import aboutData from '@/Data/aboutData'
import { BlurFade } from '@/components/ui/blur-fade'

const About = () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='w-full min-h-screen mx-auto p-4 md:w-1/2 md:max-w-3xl md:m-auto md:p-6'>
        <BlurFade inView delay={0.1}>
          <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>About</div>
          <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>Know more about me, my background, and my journey.</div>
        </BlurFade>

        <BlurFade inView delay={0.2}>
          <div className='mt-5 flex flex-col gap-6'>
            <AboutClassic about={aboutData} />
          </div>
        </BlurFade>
      </div>

      <Qoutes />
      <Footer />
    </div>
  )
}

export default About
