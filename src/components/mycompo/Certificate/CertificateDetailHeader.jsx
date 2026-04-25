import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, BadgeCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'

const CertificateDetailHeader = ({ backTo = '/certificates', label = 'Certificate Details' }) => {
  const navigate = useNavigate()

  const canGoBack = () => {
    const idx = typeof window !== 'undefined' ? window.history?.state?.idx : null
    return typeof idx === 'number' ? idx > 0 : false
  }

  const handleBack = () => {
    if (canGoBack()) {
      navigate(-1)
      return
    }
    navigate(backTo)
  }

  return (
    <div className='pb-3 mb-5 flex items-center justify-between gap-3'>
      <Button
        type='button'
        variant='outline'
        size='sm'
        className='rounded-full'
        onClick={handleBack}
      >
        <ArrowLeft className='size-4' /> Back
      </Button>

      <div className='text-xs text-muted-foreground inline-flex items-center gap-2'>
        <BadgeCheck className='size-4' />
        {label}
      </div>
    </div>
  )
}

export default CertificateDetailHeader
