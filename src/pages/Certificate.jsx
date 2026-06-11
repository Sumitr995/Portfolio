import Footer from '@/components/Features/Footer/Footer'
import Qoutes from '@/components/Features/Qoutes/Qoutes'
import CertificateList from '@/components/Features/Certificate/CertificateList'
import certificates from '@/Data/certificates'
import React from 'react'

const Certificate = () => {
  return (
    <div className='flex w-full flex-col'>
      <div className='w-full min-h-screen mx-auto p-4 md:w-1/2 md:max-w-3xl md:m-auto md:p-6'>
        <div className='text-zinc-500 dark:text-zinc-300 font-bold text-2xl'>Certificates</div>
        <div className='text-sm font-semibold dark:text-zinc-700 text-zinc-300'>Click a certificate to view all details.</div>

        <div className='mt-5'>
          <CertificateList certificates={certificates} />
        </div>
      </div>

      <Qoutes />
      <Footer />
    </div>
  );
};

export default Certificate;
