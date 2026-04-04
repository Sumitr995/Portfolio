const LOW_CONTRAST_ICON_NAMES = new Set([
  "shadcn UI",
  "Flask",
  "REST APIs",
  "Restful APIs",
  "Express.js",
  "OpenAI API",
  "ChatGPT",
]);

export const contrastClassFor = (name) => {
  if (!name) return "";
  return LOW_CONTRAST_ICON_NAMES.has(name) ? "dark:brightness-0 dark:invert" : "";
};
