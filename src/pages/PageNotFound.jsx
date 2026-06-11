import React, { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/ui/blur-fade";
import { ArrowLeft, Compass, Home } from "lucide-react";

const PageNotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const quips = useMemo(
    () => [
      "You found a route that doesn’t exist.",
      "This page got deployed to another timeline.",
      "404: The URL wandered off for coffee.",
      "Nothing here… except vibes.",
    ],
    []
  );

  const [quip] = useState(() => {
    const idx = Math.floor(Math.random() * quips.length);
    return quips[idx];
  });

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.defaultPrevented) return;
      const key = String(event.key || "").toLowerCase();
      if (key === "h") navigate("/");
      if (key === "b") navigate(-1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate]);

  return (
    <main className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 p404-grid p404-scanlines opacity-60"
      />

      {/* Floating orbs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl p404-float-slow"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-6rem left-10 h-64 w-64 rounded-full bg-secondary/25 blur-3xl p404-float-fast"
      />
      <div
        aria-hidden="true"
        className="absolute top-24 -right-5rem h-56 w-56 rounded-full bg-accent/30 blur-3xl p404-float-slow"
      />

      <div className="relative mx-auto flex min-h-[90vh] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
        <BlurFade delay={0.02} duration={0.45} blur="10px">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/70 px-3 py-1 text-xs text-zinc-400 backdrop-blur">
            <Compass className="size-3.5" aria-hidden="true" />
            <span className="truncate max-w-[70vw]">
              Lost in routes:{" "}
              <span className="text-zinc-700 dark:text-zinc-100">
                {location.pathname}
              </span>
            </span>
          </div>
        </BlurFade>

        <BlurFade delay={0.08} duration={0.55} blur="14px">
          <div className="mt-10 select-none">
            <div className="p404-glitch text-7xl sm:text-8xl md:text-9xl font-black tracking-tight">
              <span className="text-zinc-700 dark:text-zinc-100">404</span>
              <span className="p404-glitch-layer p404-glitch-layer--a">404</span>
              <span className="p404-glitch-layer p404-glitch-layer--b">404</span>
            </div>
          </div>
        </BlurFade>

        <BlurFade delay={0.14} duration={0.55} blur="10px">
          <h1 className="mt-6 text-2xl sm:text-3xl font-semibold text-zinc-700 dark:text-zinc-100">
            Page not found
          </h1>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            {quip}
          </p>
        </BlurFade>

        <BlurFade delay={0.18} duration={0.55} blur="10px">
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/">
              <Button className="cursor-pointer">
                <Home className="size-4" aria-hidden="true" />
                Home
              </Button>
            </Link>

            <Button
              type="button"
              variant="outline"
              className="cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Go back
            </Button>
          </div>

          <div className="mt-8 text-xs text-zinc-400">
            Shortcut: <kbd className="rounded border px-1.5 py-0.5">H</kbd> home,
            <span className="mx-1">•</span>
            <kbd className="rounded border px-1.5 py-0.5">B</kbd> back
          </div>
        </BlurFade>
      </div>
    </main>
  );
};

export default PageNotFound;
