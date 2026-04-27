import React from 'react'
import { Link } from 'react-router-dom'

const NavImage = () => {
    return (
        <Link
            to='/'
            aria-label='Go to home'
            className="
             w-12 h-12 rounded-xl cursor-pointer 
            bg-[url('/Profile-pic.png')] bg-cover
            bg-center border dark:border-zinc-500
            transition-transform hover:scale-95 
            bg-amber-100 shrink-0"
        />
    )
}

export default NavImage
