import React from 'react'
import data from '@/Data/Data.json'
import Footer from '../Footer/Footer';

const Resume = () => {
    return <>
        <div className='flex w-full flex-col items-center py-16 dark:bg-zinc-950'>

            <div className='mb-10 text-center '>
                <h1 className='text-4xl font-bold text-zinc-500'>Resume</h1>
                <p className='text-zinc-400 mt-2'>My professional experience and skills</p>
            </div>

            <div className='w-[95%] md:w-[70%] lg:w-[60%] md:h-[105vh] md:min-h-screen h-[70vh] sm:h-[75vh] m-auto flex flex-col
                      rounded-2xl border border-zinc-700
                      bg-zinc-900/60 backdrop-blur-xl
                      shadow-[0_0_60px_rgba(0,0,0,0.6)]
                      overflow-hidden'>

                {/* Top bar like document viewer */}
                <div className='flex items-center justify-between gap-2 px-4 py-3 border-b border-zinc-700 bg-zinc-900'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-3 h-3 rounded-full bg-red-500'></div>
                        <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                        <div className='w-3 h-3 rounded-full bg-green-500'></div>

                        <span className='ml-4 text-sm text-zinc-400'>
                            ResumeSR3.10.pdf
                        </span>
                    </div>
                    <div className='ml-2 flex gap-4 items-center'>
                        <a href="/ResumeSR3.10.pdf" download className='text-sm text-zinc-400 hover:text-zinc-300'>
                            <img height={20} width={20} src="/svgs/download-2-line.svg" alt="Download" />
                        </a>
                        <a href={data.driveLink} target='_blank' rel="noopener noreferrer" className='text-sm text-zinc-400 hover:text-zinc-300'>
                            <img height={20} width={20} src="/svgs/external-link-fill.svg" alt="Open in new tab" />
                        </a>
                    </div>
                </div>

                {/* PDF */}
                <iframe
                    src="/ResumeSR3.10.pdf"
                    title="Resume"
                    className="w-full flex-1"
                />

            </div>

        </div>
        <Footer/>
    </>
}

export default Resume;