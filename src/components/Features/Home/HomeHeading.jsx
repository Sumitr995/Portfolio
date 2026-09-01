import React from 'react'

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MorphingText } from "@/components/ui/morphing-text";

const HomeHeading = () => {
    const headingText = "I build full-stack web applications with React and Node.js, Express, MongoDB, PostgreSQL focused on clean UI, secure authentication, and cloud-deployed systems that solve real problems end-to-end."

    return (
        <div>
            <h1 className='text-2xl sm:text-3xl md:text-[3.8rem] leading-tight font-bold text-transparent bg-linear-to-b from-gray-600 via-gray-700 to-primary dark:from-gray-300 dark:via-gray-200 dark:to-primary bg-clip-text mt-2.5'>
                {"Hi, I'm Sumit"}
                {" ! "}
                <MorphingText
                    texts={[
                        "Full Stack Developer.",
                        "Software Engineer.",
                        "Cloud/DevOps Engineer.",
                        "Backend Engineer.",
                        "Frontend Engineer.",
                    ]}
                    className="relative inline-block align-baseline h-[1.15em] md:h-[1.15em] w-[13em] max-w-full mx-0 translate-y-[0.12em] text-left text-2xl sm:text-3xl md:text-[3.8rem] lg:text-[3.8rem] leading-tight font-bold text-zinc-500 bg-none bg-clip-border filter-[url(#threshold)_blur(0.6px)]"
                />
            </h1>

            <TextGenerateEffect words={headingText} className={"text-base sm:text-lg font-semibold text-justify text-zinc-400 dark:text-zinc-300 mt-1 sm:mt-5"} />
        </div>

    )
}

export default HomeHeading
