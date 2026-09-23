import { Link } from 'react-router-dom'
import { FolderGit2, CalendarDays, ChevronRight, ArrowUpRight } from 'lucide-react'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'
import projects from '@/Data/projects'

const AboutFeaturedProjects = () => {
  const featured = (projects ?? []).slice(0, 3)
  return (
    <BentoCard>
      <div className="flex items-center justify-between">
        <Label icon={FolderGit2}>Featured builds</Label>
        <Link to="/projects" className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground">
          All projects <ChevronRight className="h-3 w-3" />
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3">
        {featured.map((p) => (
          <Link key={p.id} to={`/projects/${p.id}`} className="group flex gap-3 rounded-xl bg-transparent p-3 hover:bg-muted/10 transition-colors">
            <img
              src={p.preview || p.previews?.[0] || '/thumbnail/portfolio.png'}
              alt={p.title}
              className="h-16 w-24 shrink-0 rounded-lg object-cover bg-transparent"
              loading="lazy"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="text-xs font-semibold text-foreground leading-tight line-clamp-2">{p.title}</div>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground group-hover:text-foreground" />
              </div>
              <div className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
                <CalendarDays className="h-3 w-3" /> {p.duration}
              </div>
              <div className="mt-2 flex flex-wrap gap-1">
                {(p.techStack ?? []).slice(0, 4).map((t) => (
                  <img key={t.name} src={t.icon} alt={t.name} title={t.name} className="h-5 w-5 rounded-md bg-transparent object-contain p-0.5" loading="lazy" />
                ))}
                {(p.techStack ?? []).length > 4 ? (
                  <span className="rounded-full bg-muted/20 px-1.5 py-0.5 text-[10px] text-muted-foreground">+{p.techStack.length - 4}</span>
                ) : null}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </BentoCard>
  )
}

export default AboutFeaturedProjects
