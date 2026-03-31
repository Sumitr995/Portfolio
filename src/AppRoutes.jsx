import React from 'react'
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './components/other/ScrollToTop';
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";
import Resume from './components/mycompo/Resume/Resume';
import Work from './pages/Work';
import PageNotFound from './pages/PageNotFound';
const AppRoutes = () => {
    return (
        <div className="w-screen pt-[10vh]">
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/certificates' element={<Certificate />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/work' element={<Work />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
