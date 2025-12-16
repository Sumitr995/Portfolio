import React from 'react'
import Navlists from './Navlists';
import NavImage from './NavImage';



const Navbar = () => {
    
    return (
        <div className='flex justify-center gap-50 items-center fixed dark:bg-[#09090B] bg-white w-screen z-10 '>
            <NavImage/>
            <Navlists/>
        </div>
    )
};

export default Navbar
