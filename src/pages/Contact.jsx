import Footer from '@/components/mycompo/Footer/Footer'
import React from 'react'
import UnderDevelopment from '@/components/other/underDevelopment'

const Contact = () => {
  return (
    <div className='flex w-full flex-col'>
        <div className='w-1/2 min-h-screen flex items-center justify-center  m-auto'>
          <UnderDevelopment/>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
