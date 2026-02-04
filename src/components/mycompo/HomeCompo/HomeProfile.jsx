import React from 'react'

const HomeProfile = () => {
    return (
        <div className='w-full flex items-end'>
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-3xl bg-amber-100
             bg-[url('/Profile-pic.png')] border-2 border-black
             bg-cover bg-center bg-no-repeat
           dark:border-zinc-500"
            ></div>
        </div>
    )
}

export default HomeProfile
