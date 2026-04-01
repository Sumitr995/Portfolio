import Footer from '@/components/mycompo/Footer/Footer'
import React from 'react'
import data from '@/Data/Data.json'
import ContactHeader from '@/components/mycompo/Contact/ContactHeader'
import ContactQuickActions from '@/components/mycompo/Contact/ContactQuickActions'
import ContactForm from '@/components/mycompo/Contact/ContactForm'
import ContactContext from '@/components/mycompo/Contact/ContactContext'
import { toWhatsAppNumber } from '@/Utils/contactUtils'

const Contact = () => {
  const basics = data?.basics ?? {}
  const email = basics?.email ?? ''
  const phone = basics?.phone ?? ''
  const profiles = basics?.profiles ?? {}

  const whatsappNumber = toWhatsAppNumber(phone)
  const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : ''
  const bookCallUrl = profiles?.calendly || profiles?.linktree || ''

  return (
    <div className='flex w-full flex-col'>
      <div className='w-full min-h-screen mx-auto p-4 md:w-1/2 md:m-auto md:p-6'>
        <ContactHeader subtitle='The fastest way to reach me is email. WhatsApp works too.' />

        <div className='flex flex-col gap-6'>
          <ContactQuickActions email={email} whatsappUrl={whatsappUrl} bookCallUrl={bookCallUrl} />
          <ContactForm email={email} />
          <ContactContext />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
