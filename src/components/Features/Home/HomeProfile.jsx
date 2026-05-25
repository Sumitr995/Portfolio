import React, { useMemo } from "react";
import PixelTransition from "@/components/ui/PixelTransition";

const HomeProfile = () => {
    const images = useMemo(() => ["/images/Profile-pic.png", "/images/Profilepic2.jpg"], []);

    return (
        <div className="h-24 sm:h-48 md:h-[28vh] w-full relative">
            <PixelTransition
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 rounded-[60px] bg-amber-100 cursor-pointer border-2 border-black dark:border-zinc-500 absolute bottom-0 left-0 bg-cover bg-center bg-no-repeat text-black dark:text-zinc-100"
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
