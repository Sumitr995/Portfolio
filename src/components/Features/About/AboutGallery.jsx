import { Images } from 'lucide-react'
import { BentoCard, Label } from '@/components/Features/About/AboutBento'

const gallery = [
  { src: '/Certificate/HackRobo-1.png', label: 'BaymaxX • Build' },
  { src: '/Certificate/HackRobo-2.png', label: 'Sensors • ESP32' },
  { src: '/Certificate/HackRobo-3.png', label: 'Field Test' },
  { src: '/Certificate/HackRobo-4.png', label: 'Team • 48h' },
  { src: '/Certificate/PDP_ML.jpg', label: 'Signal • MATLAB' },
  { src: '/Certificate/AINCAT-1.png', label: 'AINCAT • AIR 4967' },
]

const AboutGallery = () => (
  <BentoCard>
    <div className="flex items-center justify-between">
      <Label icon={Images}>Gallery</Label>
      <span className="text-[11px] text-muted-foreground">{gallery.length} shots • Real builds</span>
    </div>
    <div className="mt-4 grid grid-cols-3 gap-2">
      {gallery.map((g) => (
        <div key={g.src} className="group overflow-hidden rounded-xl bg-transparent">
          <img src={g.src} alt={g.label} className="aspect-square w-full object-cover group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
          <div className="bg-transparent px-2 py-1.5">
            <div className="truncate text-[10px] font-medium text-muted-foreground">{g.label}</div>
          </div>
        </div>
      ))}
    </div>
  </BentoCard>
)

export default AboutGallery
