import Footer from '@/components/mycompo/Footer/Footer'
import React from 'react'
import WorkCard from '@/components/mycompo/Work/WorkCard'
import { workData } from '@/Data/WorkData'

const Work = () => {
  return (
    <div className='flex w-full flex-col'>

      {/* SAME LAYOUT */}
      <div className='w-full min-h-screen mx-auto p-4 md:w-1/2 md:m-auto md:p-6'>

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