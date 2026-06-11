import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
// import NekoLoader from "../Features/Loader/NekoLoader";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function waitForWindowLoad() {
  if (document.readyState === "complete") return Promise.resolve();
  return new Promise((resolve) => {
    window.addEventListener("load", resolve, { once: true });
  });
}

function waitForFonts() {
  try {
    if (document.fonts?.ready) {
      return document.fonts.ready.then(
        () => {},
        () => {}
      );
    }
  } catch {
    // ignore
  }
  return Promise.resolve();
}

export default function Preloader({
  minShowMs = 4000, // Increased to show animation
  maxWaitMs = 15000,
  label = "Loading Experience...",
  onDone = () => {},
}) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const [catSettled, setCatSettled] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const startTime = Date.now();

    // Smooth progress increment
    const interval = setInterval(() => {
      if (progressRef.current < 90) {
        progressRef.current += Math.random() * 2;
        if (progressRef.current > 90) progressRef.current = 90;
        setProgress(progressRef.current);
      }
    }, 100);

    (async () => {
      const ready = Promise.all([waitForWindowLoad(), waitForFonts()]);
      await Promise.race([ready, sleep(maxWaitMs)]);

      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minShowMs - elapsed);
      
      if (remaining > 0) {
        // Finish progress over remaining time
        const steps = 20;
        const stepTime = remaining / steps;
        for (let i = 1; i <= steps; i++) {
          await sleep(stepTime);
          if (cancelled) return;
          const p = 90 + (i / steps) * 10;
          progressRef.current = p;
          setProgress(p);
        }
      } else {
        progressRef.current = 100;
        setProgress(100);
      }

      if (!cancelled) {
        await sleep(500); // Small pause at 100%
        setVisible(false);
      }
    })();

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [minShowMs, maxWaitMs]);

  useEffect(() => {
    setCatSettled(progress >= 99.5);
  }, [progress]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] } 
          }}
          className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-background text-foreground select-none"
          role="status"
          aria-live="polite"
          aria-label={label}
        >
          {/* Content Group */}
          <div className="flex flex-col items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex flex-col items-center gap-1"
            >
              <h1 className="text-xl font-light tracking-[0.3em] uppercase text-primary/80">
                Sumit Rathod
              </h1>
              <div className="h-px w-8 bg-primary/30" />
            </motion.div>

            {!catSettled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="h-10 w-10 rounded-full border-2 border-border/40 border-t-primary/70 animate-spin"
                aria-hidden="true"
              />
            )}
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center gap-1"
            >
              <p className="text-[10px] tracking-[0.5em] uppercase font-medium">
                {label}
              </p>
              <p className="text-[10px] font-mono opacity-50">
                {Math.round(progress)}%
              </p>
            </motion.div>
          </div>

          {/* Sprite-based loader using Oneko coordinates (driven by preloader progress) */}
          {/* <div className="absolute bottom-0 left-0 w-full h-12"> */}
            {/* <div className="absolute inset-x-0 bottom-0 h-px bg-border/30" /> */}
            {/* <NekoLoader progress={progress} /> */}
          {/* </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
