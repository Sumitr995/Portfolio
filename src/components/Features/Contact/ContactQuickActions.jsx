import React from 'react'
import { Button } from '@/components/ui/button'

const ContactQuickActions = ({ email, whatsappUrl, bookCallUrl }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>Quick</div>
      <div className='flex flex-row flex-wrap gap-3'>
        {email ? (
          <a href={`mailto:${email}`} className='inline-flex'>
            <Button variant='default'>Email</Button>
          </a>
        ) : null}
        {whatsappUrl ? (
          <a href={whatsappUrl} target='_blank' rel='noreferrer' className='inline-flex'>
            <Button variant='outline'>WhatsApp</Button>
          </a>
        ) : null}
        {bookCallUrl ? (
          <a href={bookCallUrl} target='_blank' rel='noreferrer' className='inline-flex'>
            <Button variant='outline'>Book a Call</Button>
          </a>
        ) : null}
      </div>
    </div>
  )
}

export default ContactQuickActions
