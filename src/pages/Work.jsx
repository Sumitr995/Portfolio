import Footer from '@/components/mycompo/Footer/Footer'
import React from 'react'
import UnderDevelopment from '@/components/other/underDevelopment'
import WorkCard from '@/components/mycompo/Work/WorkCard'
import { workData } from '@/Data/WorkData'

const Work = () => {
  return (
    <div className='flex w-full flex-col'>

      {/* SAME LAYOUT */}
      <div className='w-1/2 min-h-screen m-auto p-6'>

        <div className="border-t border-zinc-800">
          {workData.map((job, index) => (
            <WorkCard key={index} job={job} />
          ))}
        </div>

      </div>

      <Footer/>
      <UnderDevelopment/>

    </div>
  )
}

export default Work;