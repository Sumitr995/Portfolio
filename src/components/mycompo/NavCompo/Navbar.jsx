import React from 'react'
import Navlists from './Navlists'
import NavImage from './NavImage'
import NavIcon from './NavIcon'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center backdrop-blur-md bg-white/70 dark:bg-zinc-950/10">
      <div className="mx-auto w-full sm:w-1/2  h-16  flex items-center justify-around sm:justify-between">
        <NavImage />
        <Navlists />
        <NavIcon />
      </div>
    </div>
  )
}

export default Navbar
