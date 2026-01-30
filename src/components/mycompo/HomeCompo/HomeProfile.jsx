import React from 'react'

const HomeProfile = () => {
    return (
        <div className='h-[28vh] w-full relative '>
            <div className="w-25 h-25 rounded-[60px] bg-amber-100
             bg-[url('/Profile-pic.png')] border-2 border-black
             bg-cover bg-center bg-no-repeat
           dark:border-zinc-500 
           absolute bottom-0 left-0 "
            ></div>
        </div>
    )
}

export default HomeProfile
