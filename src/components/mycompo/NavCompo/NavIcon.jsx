import React from 'react'
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavLink } from "react-router-dom"
import { AnimatedThemeToggler } from '../../ui/animated-theme-toggler'

const NavIcon = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden p-2 rounded-lg border border-transparent hover:border-black/10 dark:hover:border-white/10" aria-label="Open navigation menu">
          <Menu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-3/4 max-w-xs">
        <div className="flex flex-col h-full">
          <nav className="flex flex-col gap-2 mt-8">
            <NavLink className="rounded-lg px-3 py-2 text-base hover:bg-black/5 dark:hover:bg-white/10" to="/">Home</NavLink>
            <NavLink className="rounded-lg px-3 py-2 text-base hover:bg-black/5 dark:hover:bg-white/10" to="/about">About</NavLink>
            <NavLink className="rounded-lg px-3 py-2 text-base hover:bg-black/5 dark:hover:bg-white/10" to="/projects">Projects</NavLink>
            <NavLink className="rounded-lg px-3 py-2 text-base hover:bg-black/5 dark:hover:bg-white/10" to="/certificates">Certificate</NavLink>
            <NavLink className="rounded-lg px-3 py-2 text-base hover:bg-black/5 dark:hover:bg-white/10" to="/contact">Contact</NavLink>
          </nav>
          <div className="mt-auto flex items-center gap-2 border-t border-black/5 dark:border-white/5 pt-4">
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Theme</span>
            <AnimatedThemeToggler duration={1000} className={"px-2.5 cursor-pointer"} />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavIcon
