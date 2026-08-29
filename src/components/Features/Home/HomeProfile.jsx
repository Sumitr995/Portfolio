import React, { useMemo } from "react";
import PixelTransition from "@/components/ui/PixelTransition";
import Threads from "@/components/ui/Threads";

const HomeProfile = () => {
    const images = useMemo(() => ["/images/Profile-pic.png", "/images/Profilepic2.jpg"], []);

    return (
        <div className="relative h-24 sm:h-48 md:h-[28vh] w-full overflow-hidden rounded-xl  bg-zinc-50 dark:bg-zinc-950">
            <Threads
                className="absolute inset-0  opacity-35 dark:invert dark:opacity-25"
                color={[0.2, 0.2, 0.24]}
                amplitude={1.6}
                distance={0.12}
                enableMouseInteraction
                aria-hidden="true"
            />
            <PixelTransition
                className="absolute left-0 top-[55%] z-10 h-20 w-20 -translate-y-1/2 rounded-[60px] border-2 border-black bg-amber-100 bg-cover bg-center bg-no-repeat text-black cursor-pointer dark:border-zinc-500 dark:text-zinc-100 sm:left-6 sm:h-24 sm:w-24 md:left-0 md:h-30 md:w-30"
                aspectRatio="100%"
                gridSize={13}
                animationStepDuration={0.35}
                pixelColor="black"
                firstContent={
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${images[0]})` }}
                    />
                }
                secondContent={
                    <div
                        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${images[1]})` }}
                    />
                }
            />
        </div>
    );
};

export default HomeProfile;
