const TechStack = ({ technologies }) => {
  return (
    <div className="mb-6">
      <p className="text-xs font-semibold text-zinc-300 mb-2">
        Technologies & Tools
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="
              group flex items-center
              h-10
              px-2
              rounded-lg
              border border-dashed border-zinc-700
              bg-zinc-900
              transition-all duration-300 ease-in-out
              hover:bg-zinc-800
              hover:border-zinc-500
              cursor-default
            "
          >
            {/* ICON */}
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-5 h-5 flex-shrink-0"
            />

            {/* TEXT (hidden → visible on hover) */}
            <span
              className="
                ml-0
                max-w-0
                overflow-hidden
                whitespace-nowrap
                text-xs text-zinc-300
                transition-all duration-300 ease-in-out
                group-hover:ml-2
                group-hover:max-w-25
              "
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