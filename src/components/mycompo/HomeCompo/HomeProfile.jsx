import React from 'react'

const HomeProfile = () => {
    return (
        <div className='w-full flex items-end lg:relative lg:h-[28vh]'>
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 rounded-3xl lg:rounded-[60px] bg-amber-100
             bg-[url('/Profile-pic.png')] border-2 border-black
             bg-cover bg-center bg-no-repeat
           dark:border-zinc-500 lg:absolute lg:bottom-0 lg:left-0"
            ></div>
        </div>
    )
}

export default HomeProfile
