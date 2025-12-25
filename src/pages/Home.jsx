import HomeHeading from '@/components/mycompo/HomeCompo/HomeHeading'
import HomeProfile from '@/components/mycompo/HomeCompo/HomeProfile'
import HomeLinks from "../components/mycompo/HomeCompo/HomeLinks";
import HomeButtons from '@/components/mycompo/HomeCompo/HomeButtons'
import React from 'react'
import { Button } from '@/components/ui/button';
import { Accordion } from '@/components/ui/accordion';
import WorkExperience from '@/components/WorkExperience/WorkExperience';

const Home = () => {


  return (
    <div className='flex flex-col '>
      <div className=' ml-[27vw] w-1/2 h-[90vh]' >
        <HomeProfile />
        <HomeHeading />
        <HomeButtons />
        <HomeLinks />

      </div>
      <div className=' w-1/2 ml-[27vw]  '>
      <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>Featured</div>
      <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl '>Experience</div>
       <WorkExperience/>
      <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300 mt-5 '>Featured</div>
      <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>Projects</div>

      </div>
    </div>

  )
}

export default Home