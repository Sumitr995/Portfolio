import React from 'react'

const HomeHeading = () => {
    return (

        <div>
            <h1 className='text-[56px] font-bold text-transparent bg-linear-to-b from-gray-600 via-gray-700 to-primary dark:from-gray-300 dark:via-gray-200 dark:to-primary bg-clip-text mt-2.5'>
                {"Hi, I'm Sumit"}
                {" - "}
                <span className='text-zinc-500' >Full Stack Web Developer.</span>
            </h1>
            <p className='text-lg font-semibold text-justify text-zinc-400 dark:text-zinc-300 mt-5'>
                I build full-stack web applications with React and Node.js, focused on clean UI, secure authentication, and cloud-deployed systems that solve real problems end-to-end.</p>
        </div>

    )
}

export default HomeHeading
