import React from 'react'
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs"
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler'

const Navbar = () => {
    return (
        <div className='flex justify-around items-center'>
            <div className='' >Sumit</div>
            <div className='flex items-center px-2.5 border border-zinc-500 rounded-4xl my-2.5 '>
                <Tabs defaultValue="tab-1">
                    <TabsList variant='underline'>
                        <TabsTab value="tab-1">Portfolio</TabsTab>
                        <TabsTab value="tab-2">About</TabsTab>
                        <TabsTab value="tab-3">Projects</TabsTab>
                        <TabsTab value="tab-4">Certificate</TabsTab>
                        <TabsTab value="tab-5">Contact</TabsTab>
                    </TabsList>
                </Tabs>
            </div>
                        <AnimatedThemeToggler duration={1000} className={" px-2.5 cursor-pointer "}/>
        </div>
    )
}

    // padding-left: 10px;
    // border-radius: 20px;
    // padding-right: 10px;
    // border: 2px solid gray;

export default Navbar
