import React from 'react'
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import { AnimatedThemeToggler } from '../ui/animated-theme-toggler';

const Navbar = () => {
    return (
        <div className='flex justify-around items-center fixed dark:bg-black  backdrop-blur-xl w-screen '>
            <div
                className="w-10 h-10 rounded-xl bg-amber-100
             bg-[url('/Profile-pic.png')] border-2 border-black
             bg-cover bg-center bg-no-repeat dark:border-zinc-500 hover:scale-95 "
            ></div>
            <div className='flex items-center px-2.5 border border-zinc-500 rounded-4xl my-2.5 '>
                <Tabs defaultValue="tab-1">
                    <TabsList variant='underline'>
                        <TabsTab value="tab-1">Portfolio</TabsTab>
                        <TabsTab value="tab-2">About</TabsTab>
                        <TabsTab value="tab-3">Projects</TabsTab>
                        <TabsTab value="tab-4">Certificate</TabsTab>
                        <TabsTab value="tab-5">Contact</TabsTab>
                        <AnimatedThemeToggler duration={1000} className={" px-2.5 cursor-pointer "} />
                    </TabsList>
                </Tabs>
            </div>
        </div>
    )
};

export default Navbar
