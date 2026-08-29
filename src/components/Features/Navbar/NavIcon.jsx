import React from 'react'
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavLink } from "react-router-dom"
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas"

const NavIcon = () => {
  const canvasWrapRef = React.useRef(null)
  const [canvasSize, setCanvasSize] = React.useState({ w: 240, h: 240 })

  React.useEffect(() => {
    const el = canvasWrapRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const width = Math.round(entry.contentRect.width)
      if (width > 0) {
        // Keep compact square for mobile, clamp to avoid overflow on small drawers
        const w = Math.min(width, 260)
        // Responsive height: square on < 360px sheets, slightly taller on wider
        const ratio = width < 260 ? 1 : 1.08
        const h = Math.round(w * ratio)
        setCanvasSize({ w, h })
      }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="sm:hidden p-2  rounded-lg border  hover:border-black/10 dark:hover:border-white/10" aria-label="Open navigation menu">
          <Menu size={24} />
        </button>
      </SheetTrigger>
        
      <SheetContent side="right" className="w-3/4 max-w-xs overflow-y-auto">
        <div className="flex flex-col h-full">
          <nav className="flex flex-col gap-2 mt-8">
            <SheetClose asChild>
              <NavLink className="rounded-lg border-b px-3 py-2 text-base hover:bg-black/5 dark:hover:bg-white/10" to="/">Home</NavLink>
            </SheetClose>
            <SheetClose asChild>
              <NavLink className="rounded-lg border-b px-3 py-2 text-base hover:bg-black/5 dark:hover:bg-white/10" to="/work">Work</NavLink>
            </SheetClose>
            <SheetClose asChild>
              <NavLink className="rounded-lg border-b px-3 py-2 text-base hover:bg-black/5 dark:hover:bg-white/10" to="/projects">Projects</NavLink>
            </SheetClose>
            <SheetClose asChild>
              <NavLink className="rounded-lg border-b px-3 py-2 text-base hover:bg-black/5 dark:hover:bg-white/10" to="/about">About</NavLink>
            </SheetClose>
            <SheetClose asChild>
              <NavLink className="rounded-lg border-b px-3 py-2 text-base hover:bg-black/5 dark:hover:bg-white/10" to="/contact">Contact</NavLink>
            </SheetClose>
          </nav>

          {/* Separation line */}
          <div className="mt-55 border-t border-zinc-200 dark:border-zinc-800" />

          {/* Pixelated canvas at downside - compact, responsive, portfolio content */}
          <div className="mt-auto pt-4 pb-8">
            <div ref={canvasWrapRef} className="mx-auto w-full max-w-[260px]">
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <PixelatedCanvas
                  src="/images/publicpic2.jpg"
                  width={canvasSize.w}
                  height={canvasSize.h}
                  cellSize={3}
                  dotScale={0.9}
                  shape="square"
                  backgroundColor="#18181b"
                  dropoutStrength={0.4}
                  interactive
                  distortionStrength={3}
                  distortionRadius={80}
                  distortionMode="swirl"
                  followSpeed={0.2}
                  jitterStrength={4}
                  jitterSpeed={4}
                  tintColor="#FFFFFF"
                  tintStrength={0.2}
                  sampleAverage
                  objectFit="cover"
                  className="block w-full h-auto rounded-2xl"
                />
              </div>
              <div className="mt-3 text-center px-1">
                <p className="text-sm font-semibold leading-none tracking-tight">Sumit Rathod</p>
                <p className="mt-1 text-xs font-medium leading-none text-zinc-600 dark:text-zinc-400">
                  Full Stack & Software Developer
                </p>
                <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                  Building scalable, real-time systems • Mumbai, India
                </p>
                {/* <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground/80">
                  
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavIcon
