import React from 'react'
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HomeButtons = () => {
    return (
        <div className='h-20 w-full  flex items-center gap-5'>
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
