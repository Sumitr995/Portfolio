import Footer from '@/components/mycompo/Footer/Footer'
import React from 'react'
import AboutClassic from '@/components/mycompo/About/AboutClassic'
import aboutData from '@/Data/aboutData'

const About = () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='w-full min-h-screen mx-auto p-4 md:w-1/2 md:m-auto md:p-6'>
        <div className='pb-3 mb-5'>
          <h1 className='text-xl text-zinc-600 dark:text-zinc-300 mx-0 font-bold text-left'>About</h1>
        </div>

        <div className='flex flex-col gap-6'>
          <AboutClassic about={aboutData} />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
