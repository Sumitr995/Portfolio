import React from 'react'

const CertificatePill = ({ children }) => (
  <span className='inline-flex items-center rounded-full border bg-muted px-3 py-1 text-xs font-medium text-foreground/80 transition-colors hover:bg-accent/50'>
    {children}
  </span>
)

export default CertificatePill
