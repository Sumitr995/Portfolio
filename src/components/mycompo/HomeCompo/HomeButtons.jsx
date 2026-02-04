import React from 'react'
import { Button } from '@/components/ui/button';

const HomeButtons = () => {
    return (
        <div className='w-full flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5'>
            <a target='_blank' href="https://drive.google.com/file/d/1sJXYs4DiU2djeXw86WO_zwCSwvvZbN1_/view">
                <Button className={"cursor-pointer"} variant="outline">Resume/CV</Button>
            </a>
            <a href="https://wa.link/jh5buz" target='_blank'>
                <Button className={"cursor-pointer"} variant="default">Get in Touch</Button>
            </a>
        </div>
    )
}

export default HomeButtons
