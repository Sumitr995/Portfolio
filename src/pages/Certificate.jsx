import React from 'react'

const Certificate = () => {
  return (
    <div className='flex w-full flex-col'>
      <section className='w-full flex justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8'>
        <div className='w-full max-w-4xl min-h-[60vh] rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/40 p-6 sm:p-10'>
          <h1 className='text-2xl sm:text-3xl font-semibold text-zinc-800 dark:text-zinc-100'>Certificate</h1>
          <p className='mt-4 text-sm sm:text-base text-zinc-500 dark:text-zinc-300'>
            Highlight your certifications with brief descriptions and dates earned.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Certificate
