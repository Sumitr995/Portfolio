import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, BadgeCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'

const CertificateDetailHeader = ({ backTo = '/certificates', label = 'Certificate Details' }) => {
  return (
    <div className='pb-3 mb-5 flex items-center justify-between gap-3'>
      <Button asChild variant='outline' size='sm' className='rounded-full'>
        <Link to={backTo}>
          <ArrowLeft className='size-4' /> Back
        </Link>
      </Button>

      <div className='text-xs text-muted-foreground inline-flex items-center gap-2'>
        <BadgeCheck className='size-4' />
        {label}
      </div>
    </div>
  )
}

export default CertificateDetailHeader
