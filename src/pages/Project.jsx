import Footer from '@/components/mycompo/Footer/Footer'
import React from 'react'
import ProjectsTimeline from '@/components/mycompo/Project/ProjectsTimeline'

const Project = () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='w-full min-h-screen mx-auto p-4 md:w-1/2 md:max-w-3xl md:m-auto md:p-6'>
        <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>Projects</div>
        <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>My Personal & Open Source Projects</div>
        <div className='mt-5'>
          <ProjectsTimeline />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Project;
