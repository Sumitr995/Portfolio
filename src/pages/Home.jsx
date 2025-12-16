import HomeProfile from '@/components/mycompo/HomeCompo/HomeProfile'
import React from 'react'

const Home = () => {
  return (
    <div
      className='flex w-[95vw] flex-col'>
      <div className='w-1/2 min-h-screen  m-auto  mt-16.25 flex flex-col items-center  ' >
        <div className=' w-full h-[85vh]'>
          <HomeProfile/>
          <div>
            <h1 className='text-3xl font-bold text-transparent bg-linear-to-b from-gray-600 via-gray-700 to-primary dark:from-gray-300 dark:via-gray-200 dark:to-primary bg-clip-text mt-2.5'>
            {"Hi, I'm Sumit"}
            {" - "}
            <span className='text-zinc-500' >Full Stack Web Developer.</span>
          </h1>
          <p className='text-lg font-bold text-zinc-400 mt-5'>
           I build interactive full-stack web apps with React, Node.js, and cloud tooling, focused on clean UI and secure, real-world functionality.</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Home