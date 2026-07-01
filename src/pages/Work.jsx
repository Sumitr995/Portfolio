import Footer from '@/components/Features/Footer/Footer'
import Qoutes from '@/components/Features/Qoutes/Qoutes'
import React from 'react'
import WorkCard from '@/components/Features/Work/WorkCard'
import { workData } from '@/Data/WorkData'
import { BlurFade } from '@/components/ui/blur-fade'

const Work = () => {
  return (
    <div className='flex w-full flex-col'>

      

      {/* LAYOUT */}
      <div className='w-full min-h-screen mx-auto p-4 md:w-1/2 md:max-w-3xl md:m-auto md:p-6'>
        <BlurFade inView delay={0.1}>
          <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>Work Experience</div>
          <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>A glimpse into my professional journey and accomplishments.</div>
        </BlurFade>

        <BlurFade inView delay={0.2}>
          <div className='mt-5'>
            {workData.map((job, index) => (
              <WorkCard key={index} job={job} />
            ))}
          </div>
        </BlurFade>
      </div>

      <Qoutes />
      <Footer/>

    </div>
  )
}

export default Work;