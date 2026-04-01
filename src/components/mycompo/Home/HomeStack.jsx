import React from "react";
import data from "@/Data/Data.json";

const LOW_CONTRAST_ICON_NAMES = new Set([
  "shadcn UI",
  "Flask",
  "REST APIs",
  "Restful APIs",
  "Express.js",
]);

const contrastClassFor = (name) => {
  if (!name) return "";
  return LOW_CONTRAST_ICON_NAMES.has(name) ? "dark:brightness-0 dark:invert" : "";
};

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
            <img
              key={tech.name ?? tech.icon}
              src={tech.icon}
              alt={tech.name ?? "tech"}
              title={tech.name ?? ""}
              loading="lazy"
              decoding="async"
              className={`h-8 w-8 object-contain transition-transform duration-200 hover:scale-110 ${contrastClassFor(tech.name)}`}
            />
          ))}
        </div>

        {/* Desktop/Tablet: keep the original two-row layout */}
        <div className="hidden flex-col gap-6 md:flex">
          {[row1, row2].map((row, rowIndex) => (
            <div
              key={`stack-row-${rowIndex}`}
              className="flex w-full items-center justify-between gap-2"
            >
              {row.map((tech) => (
                <img
                  key={tech.name ?? tech.icon}
                  src={tech.icon}
                  alt={tech.name ?? "tech"}
                  title={tech.name ?? ""}
                  loading="lazy"
                  decoding="async"
                  className={`h-9 w-9 object-contain transition-transform duration-200 hover:scale-110 ${contrastClassFor(tech.name)}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeStack;