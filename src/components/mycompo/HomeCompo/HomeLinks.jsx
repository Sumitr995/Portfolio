import React from 'react'

const HomeLinks = () => {
    return (
        <div className='h-15 w-full flex gap-2 items-center'>
            <a target='_blank' href="https://www.linkedin.com/in/sumit-rathod-5454ba286/"><img className='cursor-pointer' src="/svgs/linkedin.svg" alt="linkedin" /></a>
            <a target='_blank' href="https://github.com/Sumitr995"><img className='cursor-pointer' src="/svgs/github-fill.svg" alt="github" /></a>
            <a target='_blank' href="https://x.com/SumitRa32164132"><img className='cursor-pointer' src="/svgs/twitter.svg" alt="twitter" /></a>
            <a target='_blank' href="https://www.instagram.com/sumitr995/"><img className='cursor-pointer' src="/svgs/instagram-line.svg" alt="instagram" /></a>
            <a target='_blank' href="https://wa.link/jh5buz"><img className='cursor-pointer' src="/svgs/whatsapp-line.svg" alt="whatsapp" /></a>
            <a target='_blank' href="mailto:itzsumitr995@gmail.com"><img className='cursor-pointer' src="/svgs/Email.svg" alt="Email" /></a>
        </div>
    )
}

export default HomeLinks
