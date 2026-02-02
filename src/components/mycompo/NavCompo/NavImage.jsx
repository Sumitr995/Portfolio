import React from 'react'

const NavImage = () => {
    return (
        <div
            className="
             w-12 h-12 rounded-xl 
            bg-[url('/Profile-pic.png')] bg-cover
            bg-center border dark:border-zinc-500
            transition-transform hover:scale-95 
            bg-amber-100 shrink-0"
        ></div>
    )
}

export default NavImage
