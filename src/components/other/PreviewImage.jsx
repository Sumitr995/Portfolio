import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Github, Globe, X } from "lucide-react";

export default function PreviewImage({
  open,
  onClose,
  title,
  images,
  liveLink,
  githubLink,
}) {
  const normalizedImages = useMemo(() => {
    const value = images ?? [];
    return Array.isArray(value) ? value.filter(Boolean) : [value].filter(Boolean);
  }, [images]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const hasMultiple = normalizedImages.length > 1;
  const activeSrc = normalizedImages[activeIndex] ?? null;

  const primaryLink = liveLink && liveLink !== "NIL" ? liveLink : githubLink;
  const PrimaryIcon = liveLink && liveLink !== "NIL" ? Globe : Github;

  const goPrev = () => {
    if (!hasMultiple) return;
    setDirection(-1);
    setActiveIndex((i) => (i - 1 + normalizedImages.length) % normalizedImages.length);
  };

  const goNext = () => {
    if (!hasMultiple) return;
    setDirection(1);
    setActiveIndex((i) => (i + 1) % normalizedImages.length);
  };

  useEffect(() => {
    if (!open) return;
    setActiveIndex(0);
    setDirection(0);
    setIsVisible(false);
  }, [open, normalizedImages.length]);

  useEffect(() => {
    if (!open) return;
    setIsVisible(false);
    const id = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(id);
  }, [open, activeIndex]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, hasMultiple, normalizedImages.length]);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title ? `Preview: ${title}` : "Preview"}
      onClick={() => onClose?.()}
    >
      <div
        className="w-full max-w-4xl max-h-[85dvh] rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate">
            {title}
          </div>
          <button
            type="button"
            onClick={() => onClose?.()}
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Close preview"
          >
            <X className="w-4 h-4 text-zinc-700 dark:text-zinc-200" />
          </button>
        </div>

        <div className="relative flex-1 bg-zinc-50 dark:bg-zinc-900/30 overflow-hidden">
          {activeSrc ? (
            <img
              key={`${activeSrc}-${activeIndex}`}
              src={activeSrc}
              alt={title ? `${title} preview ${activeIndex + 1}` : `Preview ${activeIndex + 1}`}
              className={
                "w-full h-full object-contain p-3 transition-all duration-200 ease-out will-change-transform " +
                (isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 " + (direction >= 0 ? "translate-x-2" : "-translate-x-2"))
              }
              draggable={false}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-sm text-zinc-500">
              No preview
            </div>
          )}

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/60 transition"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/60 transition"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {primaryLink && (
            <a
              href={primaryLink}
              target="_blank"
              rel="noreferrer"
              className="absolute right-5 bottom-5 inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/60 transition"
              aria-label="Open project link"
              title="Open project"
            >
              <PrimaryIcon className="w-5 h-5" />
            </a>
          )}

          {hasMultiple && (
            <div className="absolute left-3 bottom-3 text-xs text-white/90 bg-black/40 px-2 py-1 rounded-full">
              {activeIndex + 1}/{normalizedImages.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return typeof document !== "undefined" ? createPortal(modal, document.body) : modal;
}
