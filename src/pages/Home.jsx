import HomeHeading from '@/components/mycompo/HomeCompo/HomeHeading'
import HomeProfile from '@/components/mycompo/HomeCompo/HomeProfile'
import HomeLinks from "../components/mycompo/HomeCompo/HomeLinks";
import HomeButtons from '@/components/mycompo/HomeCompo/HomeButtons'
import React from 'react'
import { Button } from '@/components/ui/button';
import Data from '@/Data/Data.json'

const Home = () => {

  console.log(Data);


  return (
    <div className='flex flex-col '>
      <div className=' ml-[27vw] w-1/2 h-[90vh]' >
        <HomeProfile />
        <HomeHeading />
        <HomeButtons />
        <HomeLinks />

      </div>
      <div className='h-[80vh] w-1/2 ml-[27vw]  '>
      <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>Featured</div>
      <div className='text-zinc-500 font-bold text-xl '>Experience</div>


      </div>
    </div>

  )
}

export default Home