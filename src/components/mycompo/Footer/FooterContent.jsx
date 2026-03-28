import React from 'react'

import { Link } from 'react-router-dom';

const FooterContent = () => {

    const content = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Projects", link: "/projects" },
        { name: "Contact", link: "/contact" },
        { name: "Resume", link: "/resume" },
        { name: "Contact", link: "/contact" },
        { name: "Contact", link: "/contact" },
      ]

    return (
        <div className="m-2">
            <div className="text-sm text-zinc-500 font-bold mb-2">NAVIGATE</div>

            <div className="flex flex-wrap items-center w-full h-auto md:h-10 md:w-[80%] gap-x-3 gap-y-2 text-sm text-zinc-500">
                {content.map((item, index) => (
                    <Link
                        key={index}
                        to={item.link}
                        className="cursor-pointer text-zinc-500 hover:text-zinc-700 "
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FooterContent
