import { Globe, Github } from "lucide-react";
import { ArrowRight } from 'lucide-react';
export default function ProjectCard() {
  return (
    <div className="relative w-80 rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-xl">
      
      {/* Preview Image / Video */}
      <div className="relative h-48 bg-linear-to-br from-pink-500 to-purple-700">
        <div className="absolute inset-0 flex items-center justify-center">
          
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">NotesBuddy</h3>
          <div className="flex gap-3 text-white/70">
            <Globe size={18} className="cursor-pointer text-zinc-400 hover:text-zinc-500" />
            <Github size={18} className="cursor-pointer text-zinc-400 hover:text-zinc-500" />
          </div>
        </div>

        <p className="text-sm text-zinc-700 dark:text-white/60">
          A comprehensive study platform with notes, flashcards, quizzes, AI chatbot,
          and interactive learning tools
        </p>

        {/* Tech Stack */}
        <span className="mb-2 block text-sm font-semibold text-zinc-900 dark:text-zinc-300">Technologies</span>
        <div className="flex gap-2 items-center">
          <span className="bg-black text-white text-xs px-2 py-1 rounded">Next.js</span>
          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">TS</span>
          <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded">React</span>
          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">MongoDB</span>
          <span className="bg-sky-500 text-white text-xs px-2 py-1 rounded">Tailwind</span>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-3">
          <span className="flex items-center gap-1 rounded-md px-2 py-1 dark:text-zinc-200 text-zinc-900 text-xs border-green-300 dark:bg-green-500/10 bg-green-500/20  ">
            <div className="size-2 rounded-full bg-green-500 animate-pulse" ></div>
             All Systems Operational
          </span>

          <button className="text-gray-500 hover:text-white text-sm flex hover:underline cursor-pointer items-center gap-1">
            View Details <ArrowRight className="text-gray-500 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
