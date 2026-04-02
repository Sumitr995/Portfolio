import React from 'react'
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavLink } from "react-router-dom"

const NavIcon = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="sm:hidden p-2  rounded-lg border  hover:border-black/10 dark:hover:border-white/10" aria-label="Open navigation menu">
          <Menu size={24} />
        </button>
      </SheetTrigger>
        
      <SheetContent side="right" className="w-3/4 max-w-xs">
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
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default NavIcon
