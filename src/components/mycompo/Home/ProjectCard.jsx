import { Globe, Github, ArrowRight } from "lucide-react";

export default function ProjectCard({ data }) {
  return (
    <div className="group relative w-full max-w-[20rem] rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all duration-300">

      {/* Thumbnail */}
      <div className="relative h-40 sm:h-44 overflow-hidden ">

        {/* Image */}
        <img
          src={data.preview}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Optional gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />

        {/* Top Right Icons */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          {data["Live-Link"] !== "NIL" && (
            <a href={data["Live-Link"]} target="_blank" rel="noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
              <Globe size={14} />
            </a>
          )}
          <a href={data["Github-Link"]} target="_blank" rel="noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
            <Github size={14} />
          </a>
        </div>

        {/* Status */}
        <div className="absolute bottom-4 left-5 flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[10px] text-white/80">Active</span>
        </div>
      </div>

      {/* 🔥 Content */}
      <div className="px-5 pt-5 pb-5 space-y-4">

        {/* Title */}
        <h3 className="text-sm font-semibold text-zinc-900 dark:text-white leading-snug">
          {data.title}
        </h3>

        {/* Description (FIXED for your data) */}
        <p className="text-xs text-zinc-600 dark:text-white/60 line-clamp-2">
          {data.description[0]}
        </p>

        <div className="border-t border-zinc-200 dark:border-zinc-700" />

        {/* Tech Stack (AI style overlap) */}
        <div className="flex justify-between items-center">

          <div className="flex items-center">
            {data.techStack.slice(0, 4).map((tech, i) => (
              <div
                key={tech.name}
                title={tech.name}
                className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 flex items-center justify-center overflow-hidden"
                style={{
                  marginLeft: i === 0 ? 0 : "-6px",
                  zIndex: 10 - i,
                }}
              >
                <img src={tech.icon} alt={tech.name} className="w-3.5 h-3.5" />
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition">
            View Details
            <ArrowRight className="w-3 h-3" />
          </button>

        </div>
      </div>
    </div>
  );
}