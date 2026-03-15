import React from 'react'

import x from "/svgs/twitter.svg"
import linkedin from "/svgs/linkedin.svg"
import github from "/svgs/github-fill.svg"
import linktree from "/svgs/linktree.svg"
import instagram from "/svgs/instagram-line.svg"
import gcp from "/svgs/GCP-black.svg"
import whatsapp from "/svgs/whatsapp-line.svg"
import mail from "/svgs/Email.svg"

const FooterConnect = () => {


    const Connect = [
        { src: x, link: "https://x.com/SumitR_995" },
        { src: linkedin, link: "https://www.linkedin.com/in/Sumitr995" },
        { src: github, link: "https://github.com/Sumitr995" },
        // { src: youtube, link: "#" },
        { src: whatsapp, link: "https://wa.me/918779374948" },
        { src: mail, link: "mailto:itzsumitr995@gmail.com" },
        { src: linktree, link: "https://linktr.ee/Sumit_995" },
        { src: instagram, link: "https://www.instagram.com/sumitr995" },
        { src: gcp, link: "https://www.skills.google/public_profiles/2a52f481-e269-404f-babc-9279827a6585" }
    ];


    return (
        <div className="p-2">

            <h2 className="text-zinc-500  text-sm mb-2 font-bold">
                CONNECT
            </h2>

            <div className="grid grid-cols-4 gap-4 w-fit">
                {Connect.map((icon, index) => (
                    <a
                        key={index}
                        href={icon.link}
                        target='_blank'
                        className="w-8 h-8 flex items-center justify-center
                       border border-zinc-600 hover:border-zinc-700 hover:bg-zinc-300 rounded-sm
                       dark:hover:border-zinc-500 cursor-pointer dark:hover:bg-zinc-600
                       transition-all duration-300"
                    >
                        <img
                            src={icon.src}
                            alt="social"
                            className="w-4 h-4 opacity-70 hover:opacity-100"
                        />
                    </a>
                ))}
            </div>

        </div>
    )
}

export default FooterConnect
