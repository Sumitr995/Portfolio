import React from 'react'

const HomeLinks = () => {
    return (
        <div className='w-full flex flex-wrap gap-3 items-center'>
            <a target='_blank' href="https://www.linkedin.com/in/Sumitr995/"><img className='cursor-pointer w-6 h-6' src="/svgs/linkedin.svg" alt="linkedin" /></a>
            <a target='_blank' href="https://github.com/Sumitr995"><img className='cursor-pointer w-6 h-6' src="/svgs/github-fill.svg" alt="github" /></a>
            <a target='_blank' href="https://x.com/SumitRa32164132"><img className='cursor-pointer w-6 h-6' src="/svgs/twitter.svg" alt="twitter" /></a>
            <a target='_blank' href="https://www.instagram.com/sumitr995/"><img className='cursor-pointer w-6 h-6' src="/svgs/instagram-line.svg" alt="instagram" /></a>
            <a target='_blank' href="https://wa.link/jh5buz"><img className='cursor-pointer w-6 h-6' src="/svgs/whatsapp-line.svg" alt="whatsapp" /></a>
            <a target='_blank' href="mailto:itzsumitr995@gmail.com"><img className='cursor-pointer w-6 h-6' src="/svgs/Email.svg" alt="Email" /></a>
        </div>
    )
}

export default HomeLinks
