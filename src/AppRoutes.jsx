import React from 'react'
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './Utils/ScrollToTop';
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import CertificateDetail from "./pages/CertificateDetail";
import Contact from "./pages/Contact";
import Resume from './components/mycompo/Resume/Resume';
import Work from './pages/Work';
import PageNotFound from './pages/PageNotFound';
import Anime from './components/other/Anime';
const AppRoutes = () => {
    return (
        <div className="w-full pt-[10vh]">
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/certificates' element={<Certificate />} />
                <Route path='/certificates/:id' element={<CertificateDetail />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/work' element={<Work />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
