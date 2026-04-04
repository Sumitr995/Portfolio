import React, { useEffect, useMemo, useState } from "react";
import data from "@/Data/Data.json";
import { contrastClassFor } from "@/Utils/techIconUtils";

const uniqueBy = (items, keyFn) => {
  const seen = new Set();
  const result = [];

  for (const item of items ?? []) {
    const key = keyFn(item);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    result.push(item);
  }

  return result;
};

const HomeStack = ({
  showEyebrow = true,
  showTitle = true,
  eyebrowText = "Featured",
  title = "Stack",
  className = "",
} = {}) => {
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

  const skills = data?.skills ?? {};

  // Keep your requested sequence
  const items = uniqueBy(
    [
      ...(skills?.languages ?? []),
      ...(skills?.frontend ?? []),
      ...(skills?.backend ?? []),
      ...(skills?.databases ?? []),
      ...(skills?.cloudDevOps ?? []),
      ...(skills?.tools ?? []),
    ],
    (t) => t?.icon || t?.name
  );

  const mid = Math.ceil(items.length / 2);
  const row1 = items.slice(0, mid);
  const row2 = items.slice(mid);

  return (
    <div className={`w-full ${className}`.trim()}>
      {showEyebrow ? (
        <div className="text-sm font-semibold dark:text-zinc-700 text-zinc-300 mt-5">
          {eyebrowText}
        </div>
      ) : null}
      {showTitle ? (
        <h2 className="text-2xl md:text-3xl font-semibold mb-5 text-zinc-900 dark:text-zinc-200">
          {title}
        </h2>
      ) : null}

      <div className="mb-10">
        {/* Mobile-first: wrap naturally (no forced rows) */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:hidden">
          {items.map((tech) => (
            (() => {
              const techKey = normalize(tech?.name);
              const explicit = String(tech?.icon ?? "").trim() || null;
              const fallback = getCdnFallback(tech?.name);
              const src = Object.prototype.hasOwnProperty.call(iconSrcByTech, techKey)
                ? iconSrcByTech[techKey]
                : explicit || fallback;

              if (!src) return null;

              return (
                <img
                  key={tech.name ?? tech.icon}
                  src={src}
                  alt={tech.name ?? "tech"}
                  title={tech.name ?? ""}
                  loading="lazy"
                  decoding="async"
                  className={`h-8 w-8 object-contain transition-transform duration-200 hover:scale-110 ${contrastClassFor(tech.name)}`}
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
              );
            })()
          ))}
        </div>

        <div className="hidden flex-col gap-6 md:flex">
          {[row1, row2].map((row, rowIndex) => (
            <div
              key={`stack-row-${rowIndex}`}
              className="flex w-full items-center justify-between gap-2"
            >
              {row.map((tech) => (
                (() => {
                  const techKey = normalize(tech?.name);
                  const explicit = String(tech?.icon ?? "").trim() || null;
                  const fallback = getCdnFallback(tech?.name);
                  const src = Object.prototype.hasOwnProperty.call(iconSrcByTech, techKey)
                    ? iconSrcByTech[techKey]
                    : explicit || fallback;

                  if (!src) return null;

                  return (
                    <img
                      key={tech.name ?? tech.icon}
                      src={src}
                      alt={tech.name ?? "tech"}
                      title={tech.name ?? ""}
                      loading="lazy"
                      decoding="async"
                      className={`h-9 w-9 cursor-pointer object-contain transition-transform duration-200 hover:scale-110 ${contrastClassFor(tech.name)}`}
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
                  );
                })()
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeStack;