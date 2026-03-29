import Footer from '@/components/mycompo/Footer/Footer'
import React from 'react'
import WorkCard from '@/components/mycompo/Work/WorkCard'
import { workData } from '@/Data/WorkData'

const Work = () => {
  return (
    <div className='flex w-full flex-col'>

      

      {/* LAYOUT */}
      <div className='w-full min-h-screen mx-auto p-4 md:w-1/2 md:m-auto md:p-6'>
      <div className='pb-3 mb-5 rounded-b-xl  border-b border-zinc-700'>
        <h1 className='text-xl text-zinc-600 dark:text-zinc-300 mx-2 font-bold text-left '>Work Experience</h1>
        <p className='text-left text-sm text-semibold mx-2 text-zinc-500 '>A glimpse into my professional journey and accomplishments.</p>
      </div>
        <div className="">
          {workData.map((job, index) => (
            <WorkCard key={index} job={job} />
          ))}
        </div>

      </div>

      <Footer/>

    </div>
  )
}

export default Work;