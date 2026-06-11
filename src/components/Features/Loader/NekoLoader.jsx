import { useEffect, useRef } from "react";
import { NekoLoaderEngine } from "./nekoLoaderEngine";

export default function NekoLoader({ progress, className = "" }) {
  const ref = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // base styles
    el.style.width = "32px";
    el.style.height = "32px";
    el.style.position = "absolute";
    el.style.bottom = "6px";
    el.style.left = "0px";
    el.style.backgroundImage = "url('/images/Oneko-Loader.gif')";
    el.style.imageRendering = "pixelated";
    el.style.backgroundSize = "auto";
    el.style.backgroundRepeat = "no-repeat";

    engineRef.current = new NekoLoaderEngine(el);

    return () => engineRef.current.destroy();
  }, []);

  useEffect(() => {
    engineRef.current?.setProgress(progress);
  }, [progress]);

  return <div ref={ref} className={className}></div>;
}
