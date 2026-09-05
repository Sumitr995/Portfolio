import { Link } from 'react-router-dom'
import { Award, ChevronRight } from 'lucide-react'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'
import certificates from '@/Data/certificates'

const AboutCertificatesShelf = () => {
  const featured = (certificates ?? []).filter((c) => c.featured).slice(0, 3)
  return (
    <BentoCard>
      <div className="flex items-center justify-between">
        <Label icon={Award}>Certificates</Label>
        <Link to="/certificates" className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground">
          View all <ChevronRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {featured.map((c) => (
          <Link key={c.id} to={`/certificates/${c.id}`} className="group overflow-hidden rounded-xl bg-transparent hover:bg-muted/10 transition-colors">
            <img src={c.cover?.src} alt={c.cover?.alt || c.title} className="aspect-4/3 w-full object-cover" loading="lazy" />
            <div className="p-2">
              <div className="line-clamp-2 text-[11px] font-medium leading-tight text-foreground">{c.title}</div>
              <div className="truncate text-[10px] text-muted-foreground">{c.issuer?.split('(')[0]}</div>
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="mt-3 flex flex-wrap gap-1.5">
        {(certificates ?? []).slice(3, 6).map((c) => (
          <span key={c.id} className="rounded-full bg-muted/20 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
            {c.title.split('—')[0].trim()}
          </span>
        ))}
      </div> */}
    </BentoCard>
  )
}

export default AboutCertificatesShelf
