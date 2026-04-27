import React, { useEffect, useMemo, useRef, useState } from "react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const REVEAL_DURATION_MS = 900;
const SWAP_FADE_DURATION_MS = 280;
const SWAP_AT_MS = 140;

const HomeProfile = () => {
    const images = useMemo(() => ["/Profile-pic.png", "/Profilepic2.jpg"], []);
    const [imageIndex, setImageIndex] = useState(0);
    const [isRevealing, setIsRevealing] = useState(false);
    const [isSwapping, setIsSwapping] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const isHoveringRef = useRef(false);
    const timeoutRef = useRef(null);
    const swapTimeoutRef = useRef(null);
    const fadeTimeoutRef = useRef(null);

    const startReveal = () => {
        if (isRevealing) return;
        if (images.length === 0) return;

        isHoveringRef.current = true;
        setIsRevealing(true);

        // Start fade near the end so the swap feels smooth.
        fadeTimeoutRef.current = window.setTimeout(() => {
            fadeTimeoutRef.current = null;

            if (!isHoveringRef.current) return;
            if (images.length <= 1) return;

            setIsSwapping(true);

            swapTimeoutRef.current = window.setTimeout(() => {
                swapTimeoutRef.current = null;

                if (isHoveringRef.current) {
                    setImageIndex((prev) => (prev + 1) % images.length);
                }
            }, SWAP_AT_MS);

            // End fade a bit after the swap.
            timeoutRef.current = window.setTimeout(() => {
                timeoutRef.current = null;
                setIsSwapping(false);
                setIsRevealing(false);
            }, SWAP_FADE_DURATION_MS);
        }, Math.max(0, REVEAL_DURATION_MS - SWAP_FADE_DURATION_MS));
    };

    const stopReveal = () => {
        isHoveringRef.current = false;

        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        if (swapTimeoutRef.current) {
            window.clearTimeout(swapTimeoutRef.current);
            swapTimeoutRef.current = null;
        }

        if (fadeTimeoutRef.current) {
            window.clearTimeout(fadeTimeoutRef.current);
            fadeTimeoutRef.current = null;
        }

        setIsSwapping(false);
        setIsRevealing(false);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                window.clearTimeout(timeoutRef.current);
            }
            if (swapTimeoutRef.current) {
                window.clearTimeout(swapTimeoutRef.current);
            }
            if (fadeTimeoutRef.current) {
                window.clearTimeout(fadeTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const updateTheme = () => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        };

        updateTheme();

        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });

        return () => observer.disconnect();
    }, []);

    const effectColors = useMemo(() => {
        return isDarkMode
            ? [[228, 228, 231], [113, 113, 122]]
            : [[24, 24, 27], [161, 161, 170]];
    }, [isDarkMode]);

    return (
        <div className="h-25 sm:h-48 md:h-[28vh] w-full relative">
            <div
                onMouseEnter={startReveal}
                onMouseLeave={stopReveal}
                className={
                    "w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 rounded-[60px] bg-amber-100 cursor-pointer border-2 border-black bg-cover bg-center bg-no-repeat dark:border-zinc-500 absolute bottom-0 left-0 overflow-hidden transition-opacity duration-300 ease-out " +
                    (isRevealing && isSwapping ? "opacity-70" : "opacity-100")
                }
                style={{ backgroundImage: `url(${images[imageIndex]})` }}
            >
                {isRevealing && (
                    <div className="absolute inset-0 pointer-events-none">
                        <CanvasRevealEffect
                            containerClassName="bg-transparent"
                            showGradient={false}
                            animationSpeed={0.8}
                            dotSize={5}
                            colors={effectColors}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomeProfile;
