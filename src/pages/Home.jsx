import HomeHeading from '@/components/mycompo/HomeCompo/HomeHeading'
import HomeProfile from '@/components/mycompo/HomeCompo/HomeProfile'
import HomeLinks from "../components/mycompo/HomeCompo/HomeLinks";
import HomeButtons from '@/components/mycompo/HomeCompo/HomeButtons'
import React from 'react'
import WorkExperience from '@/components/WorkExperience/WorkExperience';
import ProjectCard from '@/components/mycompo/HomeCompo/ProjectCard';


const Home = () => {


  return (
    <div className='flex flex-col '>
      <div className=' w-full h-20vh flex items-center justify-center flex-col' >
        <div className='w-1/2'>
          <HomeProfile />
          <HomeHeading />
          <HomeButtons />
          <HomeLinks />
        </div>
        <div className=' w-1/2 '>
          <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>Featured</div>
          <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl '>Experience</div>
          <WorkExperience />
          <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300 mt-5 '>Featured</div>
          <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>Projects</div>
        </div>
          <div className='w-1/2'>
            <ProjectCard />
          </div>
      </div>
    </div>

  )
}

export default Home

