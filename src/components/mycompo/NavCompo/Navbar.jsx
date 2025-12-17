import React from 'react'
import Navlists from './Navlists';
import NavImage from './NavImage';



const Navbar = () => {
    
    return (
        <div className='w-full h-[10vh] flex items-center justify-center  relative z-20'>
            <div className='flex w-1/2 justify-between items-center fixed left-[27vw] m-0.75  bg-white dark:bg-[#09090B] '>
                <NavImage/>
                <Navlists/>
            </div>
        </div>
            
    )
};

export default Navbar
