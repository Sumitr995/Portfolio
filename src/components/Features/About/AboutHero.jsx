import { Link } from 'react-router-dom'
import { MapPin, Mail, ArrowUpRight, Github, Linkedin, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BentoCard } from '@/components/Features/About/AboutBento'

const AboutHero = ({ displayName, locationText, email, profiles, roles, paragraph }) => (
  <BentoCard className="p-6 border">
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-2 rounded-full bg-muted/20 px-3 py-1 text-xs font-medium text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Available for opportunities
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/20 px-3 py-1 text-xs font-medium text-muted-foreground">
        <MapPin className="h-3.5 w-3.5" /> {locationText}
      </span>
      {email ? (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-muted/20 px-3 py-1 text-xs font-medium text-muted-foreground">
          <Mail className="h-3.5 w-3.5" /> {email}
        </span>
      ) : null}
    </div>

    <div className="mt-5 flex gap-4">
      <img
        src="/images/Profile-pic.png"
        alt={displayName}
        className="h-16 w-16 shrink-0 rounded-2xl object-cover object-top md:h-20 md:w-20"
        loading="eager"
      />
      <div className="min-w-0">
        <h1 className="text-[1.65rem] font-semibold tracking-tight text-foreground md:text-[1.9rem] leading-none">{displayName}</h1>
        <div className="mt-1 text-xs font-medium text-muted-foreground">Mumbai • Systems • Realtime</div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {roles.map((r) => (
            <span key={r} className="inline-flex rounded-full bg-primary px-2.5 py-1 text-[11px] font-medium text-primary-foreground">
              {r}
            </span>
          ))}
        </div>
      </div>
    </div>

    {paragraph ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{paragraph}</p> : null}

    <div className="mt-5 flex flex-wrap gap-2">
      <Button asChild className="rounded-full h-8 px-4 text-xs">
        <Link to="/contact">
          Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </Button>
      <Button asChild variant="outline" className="rounded-full h-8 px-4 text-xs">
        <Link to="/resume">
          Resume <ExternalLink className="h-3.5 w-3.5" />
        </Link>
      </Button>
      {profiles?.github ? (
        <Button asChild variant="outline" size="icon" className="rounded-full h-8 w-8">
          <a href={profiles.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
        </Button>
      ) : null}
      {profiles?.linkedin ? (
        <Button asChild variant="outline" size="icon" className="rounded-full h-8 w-8">
          <a href={profiles.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
      ) : null}
    </div>
  </BentoCard>
)

export default AboutHero
