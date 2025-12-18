import HomeHeading from '@/components/mycompo/HomeCompo/HomeHeading'
import HomeProfile from '@/components/mycompo/HomeCompo/HomeProfile'
import HomeLinks from "../components/mycompo/HomeCompo/HomeLinks";
import React from 'react'

const Home = () => {
  return (
    <div className=' h-[300vh] flex  '>
      <div className='ml-[27vw] w-1/2 h-[90vh]' >
        <HomeProfile />
        <HomeHeading />
        <HomeLinks />
        <div className='h-20 w-full bg-zinc-800'>

        </div>
      </div>

    </div>

  )
}

export default Home