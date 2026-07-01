import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Globe, Github, ArrowRight } from "lucide-react";
import { contrastClassFor } from "@/Utils/techIconUtils";
import { Link } from "react-router-dom";

export default function ProjectCard({ data, direction = "up" }) {
  const [iconSrcByTech, setIconSrcByTech] = useState({});
  const [cdnIconByTech, setCdnIconByTech] = useState({});

  const normalize = (value) => String(value ?? "").trim().toLowerCase();

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const moduleUrl = new URL(
          "/techstackCDN/techCDN.js",
          window.location.origin
        ).href;
        const mod = await import(/* @vite-ignore */ moduleUrl);
        const list = mod?.default ?? [];

        const map = {};
        for (const item of list) {
          const key = normalize(item?.name);
          if (!key || !item?.icon) continue;
          map[key] = item.icon;
        }

        if (!cancelled) setCdnIconByTech(map);
      } catch {
        // ignore: CDN fallback list is optional
      }
    };

    if (typeof window !== "undefined") load();
    return () => {
      cancelled = true;
    };
  }, []);

  const getCdnFallback = useMemo(() => {
    return (techName) => cdnIconByTech[normalize(techName)] ?? null;
  }, [cdnIconByTech]);

  const status =
    data?.status ??
    (data?.["Live-Link"] && data["Live-Link"] !== "NIL"
      ? "Active"
      : "Under Development");

  const statusDotClass = (() => {
    const normalized = String(status).toLowerCase();
    if (normalized.includes("active")) return "bg-green-400 animate-pulse";
    if (normalized.includes("develop")) return "bg-yellow-400";
    if (normalized.includes("inactive") || normalized.includes("down")) return "bg-red-400";
    return "bg-zinc-300";
  })();

  const projectId = data?.id;

  const cardRef = useRef(null)
  const inView = useInView(cardRef, { once: true, margin: "-40px" })

  const fromOutside = useMemo(() => {
    if (direction === "left") return { opacity: 0, x: -30 }
    if (direction === "right") return { opacity: 0, x: 30 }
    return { opacity: 0, y: 40 }
  }, [direction])

  const atRest = useMemo(() => {
    if (direction === "left" || direction === "right") return { opacity: 1, x: 0 }
    return { opacity: 1, y: 0 }
  }, [direction])

  return (
    <motion.div
      ref={cardRef}
      initial={fromOutside}
      animate={inView ? atRest : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative w-full max-w-sm md:max-w-none rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/20 hover:border-primary/50 dark:hover:border-primary/60 transition-all duration-500">

      {/* Thumbnail */}
      <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden">
        {/* Hover gradient border accent */}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

        <img
          src={data.preview}
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* Top Right Icons */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          {data?.["Live-Link"] && data["Live-Link"] !== "NIL" && (
            <a href={data["Live-Link"]} target="_blank" rel="noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all hover:scale-110">
              <Globe size={15} />
            </a>
          )}
          <a href={data["Github-Link"]} target="_blank" rel="noreferrer"
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all hover:scale-110">
            <Github size={15} />
          </a>
        </div>

        {/* Status */}
        <div className="absolute bottom-4 left-5 flex items-center gap-1.5 bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 z-10">
          <span className={`w-1.5 h-1.5 rounded-full ${statusDotClass}`} />
          <span className="text-[10px] font-medium text-white/90 uppercase tracking-wider">{status}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">

        {/* Title */}
        <h3 className="text-base font-semibold text-zinc-900 dark:text-white leading-snug group-hover:text-primary transition-colors">
          {data.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
          {data.description[0]}
        </p>

        {/* Tech Stack */}
        <div className="flex justify-between items-center pt-1">

          <div className="flex items-center">
            {data.techStack.slice(0, 4).map((tech, i) => (
              (() => {
                const techKey = normalize(tech?.name);
                const explicit = String(tech?.icon ?? "").trim() || null;
                const fallback = getCdnFallback(tech?.name);
                const src = Object.prototype.hasOwnProperty.call(iconSrcByTech, techKey)
                  ? iconSrcByTech[techKey]
                  : explicit || fallback;

                if (!src) return null;

                return (
                  <div
                    key={tech.name}
                    title={tech.name}
                    style={{
                      marginLeft: i === 0 ? 0 : "-8px",
                      zIndex: 10 - i,
                    }}
                  >
                    <div className="w-7 h-7 rounded-full bg-zinc-100 dark:bg-zinc-800 border-2 border-white dark:border-zinc-900 flex items-center justify-center overflow-hidden hover:scale-110 transition-transform">
                      <img
                        src={src}
                        alt={tech.name}
                        className={`w-4 h-4 ${contrastClassFor(tech?.name)}`}
                        onError={() => {
                          setIconSrcByTech((prev) => {
                            const current = prev[techKey];
                            if (current === null) return prev;

                            const nextFallback = getCdnFallback(tech?.name);
                            if (nextFallback && src !== nextFallback) {
                              return { ...prev, [techKey]: nextFallback };
                            }

                            return { ...prev, [techKey]: null };
                          });
                        }}
                      />
                    </div>
                  </div>
                );
              })()
            ))}
            {data.techStack.length > 4 && (
              <span className="ml-1 text-[10px] font-medium text-zinc-400 dark:text-zinc-500">
                +{data.techStack.length - 4}
              </span>
            )}
          </div>

          {/* Button */}
          {projectId ? (
            <Link
              to={`/projects/${projectId}`}
              className="flex items-center gap-1.5 text-xs font-medium text-zinc-400 hover:text-primary dark:text-zinc-500 dark:hover:text-primary transition-colors"
            >
              View Details
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          ) : null}

        </div>
      </div>
    </motion.div>
  );
}