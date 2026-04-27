import React from 'react'

const ContactContext = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>Context</div>
      <ul className='list-disc space-y-1 pl-5 text-sm text-zinc-600 dark:text-zinc-300'>
        <li>Timezone: IST (UTC+5:30)</li>
        <li>Availability: Usually replies within 24–48 hours</li>
        <li>Open to: Internships, freelance projects, and collaborations</li>
      </ul>
    </div>
  )
}

export default ContactContext
