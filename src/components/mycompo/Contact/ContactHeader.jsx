import React from 'react'

const ContactHeader = ({ title = 'Contact', subtitle }) => {
  return (
    <div className='pb-3 mb-5 rounded-b-xl border-b border-zinc-700'>
      <h1 className='text-xl text-zinc-600 dark:text-zinc-300 mx-2 font-bold text-left'>{title}</h1>
      {subtitle ? (
        <p className='text-left text-sm text-semibold mx-2 text-zinc-500'>{subtitle}</p>
      ) : null}
    </div>
  )
}

export default ContactHeader
