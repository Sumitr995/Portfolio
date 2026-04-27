import Footer from '@/components/Features/Footer/Footer'
import { Separator } from '@/components/ui/separator'
import CertificateDetailCover from '@/components/Features/Certificate/CertificateDetailCover'
import CertificateDetailHeader from '@/components/Features/Certificate/CertificateDetailHeader'
import CertificateDetailInfo from '@/components/Features/Certificate/CertificateDetailInfo'
import CertificateDetailLinks from '@/components/Features/Certificate/CertificateDetailLinks'
import certificates from '@/Data/certificates'
import React from 'react'
import { useParams } from 'react-router-dom'

const CertificateDetail = () => {
  const { id } = useParams()
  const cert = certificates.find((c) => c.id === id)

  return (
    <div className='flex w-full flex-col'>
      <div className='w-full min-h-screen mx-auto p-4 md:w-1/2 md:max-w-3xl md:m-auto md:p-6'>
        <CertificateDetailHeader />
        {!cert ? (
          <div className='rounded-xl border bg-background p-6'>
            <div className='text-base font-semibold'>Certificate not found</div>
            <p className='mt-2 text-sm text-muted-foreground'>This certificate id doesn’t exist in your data.</p>
          </div>
        ) : (
          <article className='rounded-xl bg-background overflow-hidden'>
            <CertificateDetailCover cert={cert} />

            <div className='p-6'>
              <CertificateDetailInfo cert={cert} />

              <Separator className='my-5' />

              <CertificateDetailLinks cert={cert} />
            </div>
          </article>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default CertificateDetail
