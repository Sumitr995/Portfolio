import React from 'react'
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NavLink } from "react-router-dom"

const NavIcon = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="sm:hidden p-2">
          <Menu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-1/2">
        <nav className="flex flex-col gap-4 mt-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default NavIcon
