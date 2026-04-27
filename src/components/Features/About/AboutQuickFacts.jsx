import React from 'react'

const AboutQuickFacts = ({ items }) => {
  const filtered = (items ?? []).filter((fact) => fact?.label && fact?.value)
  if (!filtered.length) return null

  return (
    <div>
      <h3 className='text-sm font-bold text-zinc-700 dark:text-zinc-200'>Quick Facts</h3>
      <div className='mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2'>
        {filtered.map((fact) => (
          <div
            key={fact.label}
            className='rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-900'
          >
            <div className='text-xs font-semibold text-zinc-500 dark:text-zinc-400'>{fact.label}</div>
            <div className='mt-1 text-sm font-semibold text-zinc-700 dark:text-zinc-200'>{fact.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutQuickFacts
