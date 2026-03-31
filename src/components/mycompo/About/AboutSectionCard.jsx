import React from 'react'

const AboutSectionCard = ({ title, eyebrow, children }) => {
  return (
    <section className='rounded-3xl border border-zinc-200 bg-white p-5 dark:border-zinc-700 dark:bg-zinc-900'>
      {eyebrow ? (
        <div className='text-xs font-semibold text-zinc-500 dark:text-zinc-400'>{eyebrow}</div>
      ) : null}
      {title ? (
        <h2 className='mt-1 text-lg font-bold text-zinc-700 dark:text-zinc-200'>{title}</h2>
      ) : null}
      <div className={title || eyebrow ? 'mt-4' : ''}>{children}</div>
    </section>
  )
}

export default AboutSectionCard
