export function hasLiveLink(project) {
  const live = project?.["Live-Link"];
  return Boolean(live) && live !== "NIL";
}

export function getCategory(project) {
  const names = (project?.techStack ?? []).map((t) =>
    String(t?.name ?? "").toLowerCase()
  );

  const hasReact = names.some((n) => n.includes("react"));
  const hasNode = names.some((n) => n.includes("node"));
  const hasExpress = names.some((n) => n.includes("express"));
  const hasMongo = names.some((n) => n.includes("mongo"));
  const hasApi = names.some((n) => n.includes("api"));

  if (hasReact && (hasNode || hasExpress || hasMongo || hasApi)) return "fullstack";
  if (hasNode || hasExpress || hasMongo || hasApi) return "backend";
  if (hasReact) return "frontend";
  return "other";
}
