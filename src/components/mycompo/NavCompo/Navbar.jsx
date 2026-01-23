import React from 'react'
import Navlists from './Navlists';
import NavImage from './NavImage';

const Navbar = () => {
    
    return (
        <div className='w-full h-[10vh] flex items-center justify-center  relative z-20'>
            <div className=' w-[52%] flex items-center justify-between fixed top-0 dark:bg-transparent bg-white '>
                <NavImage/>
                <Navlists/>
            </div>
        </div>
            
    )
};

export default Navbar
