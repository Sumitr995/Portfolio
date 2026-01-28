import { Globe, Github, ArrowRight } from "lucide-react";

export default function ProjectCard({ data }) {
  return (
    <div className="relative w-80 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl">

      {/* Preview */}
      <div className="relative h-48 bg-linear-to-br from-pink-500 to-purple-700" />

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Title + Links */}
        <div className="flex justify-between items-center">
          <h3 className="text-[100%] font-semibold text-zinc-900 dark:text-white">
            {data.title}
          </h3>
          <div className="flex gap-3">
            {data["Live-Link"] !== "NIL" && (
              <a href={data["Live-Link"]} target="_blank" rel="noreferrer">
                <Globe size={18} className="cursor-pointer text-zinc-400 hover:text-zinc-500" />
              </a>
            )}
            <a href={data["Github-Link"]} target="_blank" rel="noreferrer">
              <Github size={18} className="cursor-pointer text-zinc-400 hover:text-zinc-500" />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-zinc-700 dark:text-white/60">
          {data.description[0]}
        </p>

        {/* Tech Stack */}
        <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-300">
          Technologies
        </span>

        <div className="flex flex-wrap gap-2">
          {data.techStack.map((tech) => (
            <img
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
              title={tech.name}
              className="w-6 h-6 cursor-pointer transition-transform duration-200 hover:scale-90"
            />
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-3">
          <span className="flex items-center gap-1 rounded-md px-2 py-1 text-xs border-green-300 bg-green-500/20 dark:bg-green-500/10">
            <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
            Active
          </span>

          <button className="text-gray-500 hover:text-zinc-900 dark:hover:text-white text-sm flex hover:underline items-center gap-1">
            View Details <ArrowRight className="w-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
