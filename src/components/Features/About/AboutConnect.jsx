import { Link } from 'react-router-dom'
import { Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BentoCard } from '@/components/Features/About/AboutBento'
import dataJson from '@/Data/Data.json'

const AboutConnect = ({ profiles }) => (
  <BentoCard>
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="text-sm font-medium text-foreground">Connect & share</div>
        <div className="text-xs text-muted-foreground">QR • Collaborations open • {dataJson?.basics?.location?.city}</div>
      </div>
      <div className="flex gap-2">
        {profiles?.github ? (
          <Button asChild variant="outline" className="rounded-full h-8">
            <a href={profiles.github} target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" /> GitHub
            </a>
          </Button>
        ) : null}
        {profiles?.linkedin ? (
          <Button asChild variant="outline" className="rounded-full h-8">
            <a href={profiles.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </Button>
        ) : null}
        <Button asChild className="rounded-full h-8">
          <Link to="/share">
            View QR <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </BentoCard>
)

export default AboutConnect
