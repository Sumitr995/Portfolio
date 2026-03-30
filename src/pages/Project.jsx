import Footer from '@/components/mycompo/Footer/Footer'
import React from 'react'
import ProjectsTimeline from '@/components/mycompo/Project/ProjectsTimeline'

const Project = () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='w-full min-h-screen flex flex-col items-center justify-start gap-10 py-6'>

        <div className='w-full md:w-1/2 px-4 md:px-0'>
          <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>Featured</div>
          <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>Projects</div>
          <div className='mt-3'>
            <ProjectsTimeline />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Project;
