import React, { useState } from 'react'
import { contrastClassFor } from '@/Utils/techIconUtils'

const TechStack = ({ technologies }) => {
  const [activeTech, setActiveTech] = useState(null)

  const handleTechClick = (techName) => {
    if (typeof window !== 'undefined') {
      const canHover = window.matchMedia?.('(hover: hover)').matches
      if (canHover) return
    }

    setActiveTech((prev) => (prev === techName ? null : techName))
  }

  return (
    <div className="mb-6">
      <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
        Technologies & Tools
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            onClick={() => handleTechClick(tech.name)}
            className="
              group flex items-center
              h-7 md:h-8
              px-2
              rounded-lg
              border border-dashed border-zinc-700
              dark:bg-zinc-900
              bg-zinc-200
              transition-all duration-300 ease-in-out
              dark:hover:bg-zinc-800
                dark:hover:border-zinc-500
              hover:bg-zinc-300
                hover:border-zinc-900
              cursor-pointer
            "
          >
            {/* ICON */}
            <img
              src={tech.icon}
              alt={tech.name}
              className={`w-4 h-4 shrink-0 md:w-5 md:h-5 ${contrastClassFor(tech.name)}`}
            />

            {/* TEXT */}
            <span
              className={`
                ml-0
                max-w-0
                overflow-hidden
                whitespace-nowrap
                text-xs dark:text-zinc-300
                text-zinc-700
                transition-all duration-300 ease-in-out
                group-hover:ml-2
                group-hover:max-w-25
                ${activeTech === tech.name ? 'ml-2 max-w-25' : ''}
              `}
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack