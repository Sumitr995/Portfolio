import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";
import { AnimatedThemeToggler } from '../../ui/animated-theme-toggler';



const Navlists = () => {
    const navigate = useNavigate()
    return (
        <div className='items-center hidden md:flex px-2.5 border border-zinc-500/70 rounded-4xl my-2.5 bg-white/70 dark:bg-zinc-950/30'>
            <Tabs defaultValue="tab-1">
                <TabsList variant='underline'>
                    <TabsTab onClick={() => navigate('/')} value="tab-1">Portfolio</TabsTab>
                    <TabsTab onClick={() => navigate('/about')} value="tab-2">About</TabsTab>
                    <TabsTab onClick={() => navigate('/projects')} value="tab-3">Projects</TabsTab>
                    <TabsTab onClick={() => navigate('/certificates')} value="tab-4">Certificate</TabsTab>
                    <TabsTab onClick={() => navigate('/contact')} value="tab-5">Contact</TabsTab>
                    <AnimatedThemeToggler duration={1000} className={" px-2.5 cursor-pointer "} />
                </TabsList>
            </Tabs>
        </div>
    )
}

export default Navlists
