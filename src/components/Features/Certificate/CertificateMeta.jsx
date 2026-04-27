import React from 'react'
import { Building2, Calendar } from 'lucide-react'

const CertificateMeta = ({ issuer, issued }) => (
  <div className='mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground'>
    <span className='inline-flex items-center gap-1'>
      <Building2 className='size-4' />
      {issuer}
    </span>
    <span className='inline-flex items-center gap-1'>
      <Calendar className='size-4' />
      {issued}
    </span>
  </div>
)

export default CertificateMeta
