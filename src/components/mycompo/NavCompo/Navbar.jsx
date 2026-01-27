import React from 'react'
import Navlists from './Navlists'
import NavImage from './NavImage'

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center backdrop-blur-md bg-white/70 dark:bg-black/40">
      <div className="w-[52%] h-[10vh] flex items-center justify-between">
        <NavImage />
        <Navlists />
      </div>
    </div>
  )
}

export default Navbar
