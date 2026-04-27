import React from 'react'

const ContactHeader = ({ title = 'Contact', subtitle }) => {
  return (
    <div>
      <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>{title}</div>
      {subtitle ? (
        <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>{subtitle}</div>
      ) : null}
    </div>
  )
}

export default ContactHeader
