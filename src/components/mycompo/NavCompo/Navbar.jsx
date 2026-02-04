import React from 'react'
import Navlists from './Navlists'
import NavImage from './NavImage'
import NavIcon from './NavIcon'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center backdrop-blur-md bg-white/80 dark:bg-zinc-950/30 border-b border-black/5 dark:border-white/5">
      <div className="mx-auto w-full max-w-5xl h-16 flex items-center justify-between px-4 sm:px-6">
        <NavImage />
        <Navlists />
        <NavIcon />
      </div>
    </div>
  )
}

export default Navbar
