import React from 'react'
import CertificateRow from './CertificateRow'

const CertificateList = ({ certificates }) => {
  return (
    <div className='space-y-3'>
      {(certificates ?? []).map((c) => (
        <CertificateRow key={c.id} certificate={c} />
      ))}
    </div>
  )
}

export default CertificateList
