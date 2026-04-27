import React from 'react'
import HomeCertificateRow from './HomeCertificateRow'

const HomeCertificateList = ({ certificates }) => {
  return (
    <div className='space-y-2'>
      {(certificates ?? []).map((c) => (
        <HomeCertificateRow key={c.id} certificate={c} />
      ))}
    </div>
  )
}

export default HomeCertificateList;
