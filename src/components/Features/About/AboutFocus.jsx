import React from 'react'

const AboutFocus = ({ items }) => {
  if (!items?.length) return null

  return (
    <div>
      <h3 className='text-sm font-bold text-zinc-700 dark:text-zinc-200'>Now / Currently</h3>
      <ul className='mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default AboutFocus
