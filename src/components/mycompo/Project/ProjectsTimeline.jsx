import { useMemo, useState } from "react";
import data from "@/Data/Data.json";
import projectsData from "@/Data/projects";
import ProjectsTimelineRow from "@/components/mycompo/Project/ProjectsTimelineRow";
import { getCategory } from "@/Utils/projectUtils";

export default function ProjectsTimeline() {
  const projects = useMemo(() => projectsData ?? [], []);
  const [openIndex, setOpenIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  const grouped = useMemo(() => {
    const result = {
      all: projects,
      fullstack: [],
      frontend: [],
      backend: [],
      other: [],
    };

    for (const project of projects) {
      result[getCategory(project)].push(project);
    }

    return result;
  }, [projects]);

  const filters = [
    { key: "all", label: "All" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
  ];

  const list = grouped[filter] ?? grouped.all;

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
        {filters.map((f) => {
          const isActive = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => {
                setFilter(f.key);
                setOpenIndex(null);
              }}
              className={
                isActive
                  ? "text-zinc-900 dark:text-zinc-100 underline underline-offset-8 decoration-primary"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              }
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 grid gap-1">
        {(list ?? []).map((project, index) => (
          <ProjectsTimelineRow
            key={`${project.title}-${index}`}
            project={project}
            index={index}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </div>
  );
}
