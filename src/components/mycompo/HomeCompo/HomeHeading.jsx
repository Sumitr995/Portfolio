import React from 'react'

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const HomeHeading = () => {

    const headingText = "I build full-stack web applications with React and Node.js, Express, MongoDB, PostgreSQL focused on clean UI, secure authentication, and cloud-deployed systems that solve real problems end-to-end."

    return (
        <div>
            <h1 className='text-3xl sm:text-4xl lg:text-[56px] font-bold text-transparent bg-linear-to-b from-gray-600 via-gray-700 to-primary dark:from-gray-300 dark:via-gray-200 dark:to-primary bg-clip-text mt-2.5'>
                {"Hi, I'm Sumit"}
                {" - "}
                <span className='text-zinc-500' >Full Stack Web Developer.</span>
            </h1>
            <div>
            <TextGenerateEffect words={headingText} className={"text-base sm:text-lg font-semibold text-left text-zinc-400 dark:text-zinc-300 mt-5"} />
            </div>

        </div>

    )
}

export default HomeHeading
