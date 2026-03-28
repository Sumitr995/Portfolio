import React from 'react'
import FooterContent from './FooterContent';
import FooterConnect from './FooterConnect';

const Footer = () => {


  return (
    <div className='w-full dark:bg-zinc-900 border flex items-center justify-center bg-zinc-100 py-8 md:py-0 md:h-[40vh]'>
      <div className='w-full px-4 md:px-0 md:w-1/2 md:h-full'>
        <div className='w-full md:h-[60%] md:w-[95%] m-auto md:mt-8 flex flex-col gap-6 md:gap-0 md:flex-row'>
          <FooterContent />
          <div className='h-auto md:h-[20vh] flex flex-col gap-0 justify-start w-full md:w-[40%]'>
            <FooterConnect />
          </div>
        </div>
        <div className='w-full md:w-[95%] m-auto mt-6 md:mt-0 md:mb-8 dark:border-zinc-800 border-t-2'>
          <div className='flex flex-col gap-2 md:gap-0 md:flex-row md:items-center md:justify-between py-4 md:py-0 md:h-full'>
            <p className='text-[10px] text-zinc-500 text-center  md:text-left'>© 2025 Sumit Rathod. All rights reserved.</p>
            <p className='text-sm text-zinc-500 text-center md:text-right'>Designed and Built with ❤️ by <span className='hover:underline cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300'><a href="https://github.com/Sumitr995" target="_blank" rel="noopener noreferrer">Sumitr995</a></span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
