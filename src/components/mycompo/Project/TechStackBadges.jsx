import { useEffect, useMemo, useState } from "react";

export default function TechStackBadges({ technologies }) {
  const [activeTech, setActiveTech] = useState(null);
  const [iconSrcByTech, setIconSrcByTech] = useState({});
  const [cdnIconByTech, setCdnIconByTech] = useState({});

  const normalize = (value) => String(value ?? "").trim().toLowerCase();

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        // Source of truth lives in /public/techstackCDN/techCDN.js
        const mod = await import("/techstackCDN/techCDN.js");
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

  const handleTechClick = (techName) => {
    if (typeof window !== "undefined") {
      const canHover = window.matchMedia?.("(hover: hover)")?.matches;
      if (canHover) return;
    }

    setActiveTech((prev) => (prev === techName ? null : techName));
  };

  return (
    <div className="flex flex-wrap gap-2">
      {(technologies ?? []).map((tech) => (
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
          title={tech.name}
        >
          {(() => {
            const techKey = normalize(tech.name);
            const src =
              Object.prototype.hasOwnProperty.call(iconSrcByTech, techKey)
                ? iconSrcByTech[techKey]
                : tech.icon || getCdnFallback(tech.name);

            if (!src) return null;

            return (
              <img
                src={src}
                alt={tech.name}
                className="w-4 h-4 shrink-0 md:w-5 md:h-5"
                onError={() => {
                  const fallback = getCdnFallback(tech.name);

                  setIconSrcByTech((prev) => {
                    const current = prev[techKey];
                    if (current === null) return prev;

                    if (fallback && src !== fallback) {
                      return { ...prev, [techKey]: fallback };
                    }

                    return { ...prev, [techKey]: null };
                  });
                }}
              />
            );
          })()}

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
                ${activeTech === tech.name ? "ml-2 max-w-25" : ""}
              `}
          >
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}
