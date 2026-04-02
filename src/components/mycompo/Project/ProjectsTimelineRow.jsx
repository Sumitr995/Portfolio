import { useMemo, useState } from "react";
import { Eye, Github, Globe } from "lucide-react";
import TechStackBadges from "@/components/mycompo/Project/TechStackBadges";
import { hasLiveLink } from "@/Utils/projectUtils";
import PreviewImage from "@/components/other/PreviewImage";

export default function ProjectsTimelineRow({
  project,
  index,
  openIndex,
  setOpenIndex,
}) {
  const isOpen = openIndex === index;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const primaryLink = hasLiveLink(project)
    ? project?.["Live-Link"]
    : project?.["Github-Link"];

  const previewImages = useMemo(() => {
    if (!project) return [];

    const extra = Array.isArray(project.previews)
      ? project.previews
      : Array.isArray(project.images)
        ? project.images
        : [];

    const first = project.preview ? [project.preview] : [];
    const merged = [...first, ...extra].filter(Boolean);

    return merged.filter((src, i) => merged.indexOf(src) === i);
  }, [project]);

  return (
    <div className="relative pl-6 py-3">
      <div className="absolute left-2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800" />
      <div className="absolute left-2 top-6 -translate-x-1/2 w-2 h-2 bg-primary" />

      <div className="flex gap-4 items-start">
        <div className="min-w-0 flex-1">
          <div className="text-xs text-zinc-500 dark:text-zinc-400">
            {project.duration}
          </div>
          {primaryLink ? (
            <a
              href={primaryLink}
              target="_blank"
              rel="noreferrer"
              className="mt-0.5 inline-flex text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4"
              aria-label={`Open ${project.title}`}
            >
              {project.title}
            </a>
          ) : (
            <div className="mt-0.5 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {project.title}
            </div>
          )}

          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            {project?.description?.[0] ?? ""}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            <TechStackBadges technologies={project.techStack} />
          </div>

          <div className="mt-3 flex items-center gap-4 text-xs">
            <button
              type="button"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              onClick={() => setOpenIndex((v) => (v === index ? null : index))}
            >
              {isOpen ? "Hide details" : "Show details"}
            </button>

            {project?.preview && (
              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className="sm:hidden inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
                aria-label={`Preview ${project.title}`}
              >
                <Eye className="w-3.5 h-3.5" /> Preview
              </button>
            )}

            {hasLiveLink(project) && (
              <a
                href={project["Live-Link"]}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              >
                <Globe className="w-3.5 h-3.5" /> Live
              </a>
            )}

            {project?.["Github-Link"] && (
              <a
                href={project["Github-Link"]}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition"
              >
                <Github className="w-3.5 h-3.5" /> Code
              </a>
            )}
          </div>

          {isOpen && (
            <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-200">
                Details
              </div>
              <ul className="mt-2 space-y-2">
                {((project?.details?.length ? project.details : project?.description) ?? []).map((line, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-zinc-600 dark:text-zinc-500 mt-1 text-[8px]">
                      ▪
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {project?.preview && (
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="group/preview relative hidden sm:block w-36 h-20"
            aria-label={`Open preview for ${project.title}`}
            aria-haspopup="dialog"
            title="Open preview"
          >
            <img
              src={project.preview}
              alt={project.title}
              loading="lazy"
              className="w-36 h-20 object-cover opacity-90 dark:opacity-80 rounded-md border border-zinc-200/70 dark:border-zinc-800/70 group-hover/preview:opacity-100 transition"
            />
            <span className="absolute top-1.5 right-1.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-black/50 text-white opacity-90 group-hover/preview:opacity-100 transition">
              <Eye className="w-3.5 h-3.5" />
            </span>
          </button>
        )}
      </div>

      <PreviewImage
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        title={project?.title}
        images={previewImages}
        liveLink={project?.["Live-Link"]}
        githubLink={project?.["Github-Link"]}
      />
    </div>
  );
}
