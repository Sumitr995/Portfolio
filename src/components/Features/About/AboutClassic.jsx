import { motion } from 'motion/react'
import { BentoGrid, container } from '@/components/Features/About/AboutBento'
import AboutHero from '@/components/Features/About/AboutHero'
import AboutPillars from '@/components/Features/About/AboutPillars'
import AboutJourney from '@/components/Features/About/AboutJourney'
import AboutStack from '@/components/Features/About/AboutStack'
import AboutFeaturedProjects from '@/components/Features/About/AboutFeaturedProjects'
import AboutGallery from '@/components/Features/About/AboutGallery'
import AboutCertificatesShelf from '@/components/Features/About/AboutCertificatesShelf'
import AboutImpact from '@/components/Features/About/AboutImpact'
import AboutHighlights from '@/components/Features/About/AboutHighlights'
import AboutConnect from '@/components/Features/About/AboutConnect'
import AboutQuickFacts from '@/components/Features/About/AboutQuickFacts'
import dataJson from '@/Data/Data.json'
import aboutData from '@/Data/aboutData'

const AboutClassic = ({ about }) => {
  const displayName = about?.basics?.name ?? dataJson?.basics?.name ?? 'Sumit Rathod'
  const locationText = about?.basics?.locationText ?? 'Mumbai, India'
  const email = about?.basics?.email ?? dataJson?.basics?.email ?? ''
  const profiles = about?.basics?.profiles ?? dataJson?.basics?.profiles ?? {}
  const paragraph = about?.basics?.summary ?? aboutData?.basics?.summary ?? ''
  const roles = about?.identity?.roles ?? []
  const pillars = about?.pillars ?? []
  const stats = about?.stats ?? []
  const achievements = about?.achievements ?? []
  const quickFacts = about?.quickFacts ?? []

  return (
    <div className="flex flex-col gap-4">
      {/* Initially visible — no scroll trigger: Hero */}
      <motion.div initial="hidden" animate="visible" variants={container} className="flex flex-col gap-4">
        <AboutHero
          displayName={displayName}
          locationText={locationText}
          email={email}
          profiles={profiles}
          roles={roles}
          paragraph={paragraph}
        />
      </motion.div>

      {/* Flow: Hero -> Impact -> Gallery -> Feature build -> Certificates -> Stack -> Highlights -> Quick Facts -> Rest (Pillars/Journey/Connect) */}
      <BentoGrid>
        <AboutImpact stats={stats} />
        <AboutGallery />
        <AboutFeaturedProjects />
        <AboutCertificatesShelf />
        <AboutStack tech={about?.tech} />
        <AboutHighlights achievements={achievements} />
        <AboutQuickFacts items={quickFacts} />
        <AboutPillars pillars={pillars} />
        <AboutJourney />
        <AboutConnect profiles={profiles} />
      </BentoGrid>
    </div>
  )
}

export default AboutClassic
