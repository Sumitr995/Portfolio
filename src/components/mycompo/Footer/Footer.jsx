import React from 'react'
import FooterContent from './FooterContent';
import FooterConnect from './FooterConnect';

const Footer = () => {


  return (
    <div className='h-[40vh] w-full dark:bg-zinc-900 border flex items-center justify-center bg-zinc-100 '>
      <div className='w-1/2  h-full  '>
        <div className='h-[60%] w-[95%] m-auto mt-8 flex'>
          <FooterContent />
          <div className='h-[20vh] flex flex-col gap-0   justify-start w-[40%]'>
            <FooterConnect/>
          </div>
        </div>
        <div className='h-[20%] w-[95%] m-auto mb-8 dark:border-zinc-800  border-t-2'>
                <div className='flex items-center justify-between h-full'>
                  <p className='text-sm text-zinc-500 mt-2 text-center'>© 2025 Sumit Rathod. All rights reserved.</p>
                  <p className='text-sm text-zinc-500 mt-2 text-center'>Designed and Built with ❤️ by <span className='hover:underline cursor-pointer hover:text-zinc-700'><a href="https://github.com/Sumitr995" target="_blank" rel="noopener noreferrer">Sumitr995</a></span></p>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
