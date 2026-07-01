import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import CertificateFeaturedBadge from '@/components/Features/Certificate/CertificateFeaturedBadge'

const HomeCertificateRow = ({ certificate }) => {
  const c = certificate
  const isFeatured = Boolean(c?.featured)

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="relative"
    >
      <Link
        to={`/certificates/${c.id}`}
        className={
          'group relative flex items-center justify-between gap-4 rounded-2xl border bg-background px-4 py-3 transition-colors duration-300 hover:bg-accent/40 ' +
          (isFeatured
            ? 'border-primary/30 ring-1 ring-primary/15 shadow-[0_0_12px_-4px_hsl(var(--primary))]'
            : '')
        }
      >
        <div className='min-w-0'>
          <div className='flex flex-wrap items-center gap-2'>
            <div className='text-base font-semibold text-foreground'>{c.title}</div>
            <CertificateFeaturedBadge featured={isFeatured} />
          </div>

          <div className='mt-1 text-sm text-muted-foreground truncate'>
            {c.description || c.note || `${c.issuer} • ${c.issued}`}
          </div>

          <div className='mt-1 text-xs text-muted-foreground'>
            {c.issuer} • {c.issued}
          </div>
        </div>

        <motion.div
          className='shrink-0 text-muted-foreground'
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <ArrowRight className='size-5 transition-transform group-hover:rotate-[-8deg]' />
        </motion.div>
      </Link>

      {isFeatured && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-primary/20"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </motion.div>
  )
}

export default HomeCertificateRow
