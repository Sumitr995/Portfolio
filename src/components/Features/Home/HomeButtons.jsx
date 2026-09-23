import React from 'react'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { WithClickSound } from '@/components/ui/click-sound';

const HomeButtons = () => {
    return (
        <div className='h-auto md:h-10 my-7 sm:my-4 w-auto flex flex-row flex-wrap items-center gap-3 sm:gap-5'>
            <Link to="/resume">
                <WithClickSound>
                    <Button className="cursor-pointer" variant="outline">
                        Resume/CV
                    </Button>
                </WithClickSound>
            </Link>
            <a href="https://wa.link/jh5buz" target='_blank'>
                <WithClickSound>
                    <Button className={"cursor-pointer"} variant="default">Get in Touch</Button>
                </WithClickSound>
            </a>
        </div>
    )
}

export default HomeButtons
