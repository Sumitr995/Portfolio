import React from 'react'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HomeButtons = () => {
    return (
        <div className='h-auto md:h-10 my-7 sm:my-4 w-full flex flex-row flex-wrap items-center gap-3 sm:gap-5'>
            <Link to="/resume">
                <Button className="cursor-pointer" variant="outline">
                    Resume/CV
                </Button>
            </Link>
            <a href="https://wa.link/jh5buz" target='_blank'>
                <Button className={"cursor-pointer"} variant="default">Get in Touch</Button>
            </a>
        </div>
    )
}

export default HomeButtons
