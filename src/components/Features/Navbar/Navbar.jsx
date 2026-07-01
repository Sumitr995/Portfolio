import React from 'react'
import Navlists from './Navlists'
import NavImage from './NavImage'
import NavIcon from './NavIcon'
import { AnimatedThemeToggler } from '../../ui/animated-theme-toggler'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center backdrop-blur-md bg-white/70 dark:bg-zinc-950/10">
      <div className=" w-full sm:w-1/2 sm:max-w-3xl  h-16  flex items-center justify-between mx-5 sm:justify-between">
        <NavImage />
        <Navlists />
        <div className="flex items-center gap-2 sm:hidden">
          <AnimatedThemeToggler
            origin="top-right"
            duration={1000}
            className="inline-flex items-center justify-center p-2 rounded-lg border border-zinc-300/70 bg-white/70 dark:bg-zinc-900/60 hover:bg-black/5 dark:hover:bg-white/10 hover:border-black/10 dark:hover:border-white/10"
          />
          <NavIcon />
        </div>
      </div>
    </div>
  )
}

export default Navbar
