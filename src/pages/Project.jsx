import React from 'react'

const Project = () => {
  return (
    <div className='flex w-full flex-col'>
      <section className='w-full flex justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8'>
        <div className='w-full sm:w-4/5 lg:w-1/2 min-h-screen border-2 border-zinc-500 rounded-3xl p-6 sm:p-10'>
          <h1 className='text-2xl sm:text-3xl font-semibold text-zinc-800 dark:text-zinc-100'>Projects</h1>
          <p className='mt-4 text-sm sm:text-base text-zinc-500 dark:text-zinc-300'>
            Use this area to showcase project details, filters, or a full gallery layout.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Project
