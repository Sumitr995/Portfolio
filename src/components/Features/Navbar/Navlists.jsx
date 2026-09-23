import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTab } from "@/components/ui/tabs";
import { AnimatedThemeToggler } from '../../ui/animated-theme-toggler';
import { WithClickSound } from "@/components/ui/click-sound"

const Navlists = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const activeTab = (() => {
        if (pathname === '/') return 'tab-1'
        if (pathname.startsWith('/work')) return 'tab-2'
        if (pathname.startsWith('/projects')) return 'tab-3'
        if (pathname.startsWith('/about')) return 'tab-4'
        if (pathname.startsWith('/contact')) return 'tab-5'
        return 'tab-1'
    })()

    return (
        <div className='items-center hidden sm:flex px-2.5 border border-zinc-500/70 rounded-4xl my-2.5 bg-white/70 dark:bg-zinc-950/30'>
            <Tabs value={activeTab}>
                <TabsList variant='underline'>
                    <WithClickSound>
                        <TabsTab onClick={() => navigate('/')} value="tab-1">Portfolio</TabsTab>
                    </WithClickSound>
                    <WithClickSound>
                        <TabsTab onClick={() => navigate('/work')} value="tab-2">Work</TabsTab>
                    </WithClickSound>
                    <WithClickSound>
                        <TabsTab onClick={() => navigate('/projects')} value="tab-3">Projects</TabsTab>
                    </WithClickSound>
                    <WithClickSound>
                        <TabsTab onClick={() => navigate('/about')} value="tab-4">About</TabsTab>
                    </WithClickSound>
                    <WithClickSound>
                        <TabsTab onClick={() => navigate('/contact')} value="tab-5">Contact</TabsTab>
                    </WithClickSound>
                    <div className="ml-1 flex items-center">
                        <AnimatedThemeToggler origin="top-right" duration={1000} className="px-2.5 cursor-pointer" />
                    </div>
                </TabsList>
            </Tabs>
        </div>
    )
}

export default Navlists
