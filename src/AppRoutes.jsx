import React, { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom";
import ScrollToTop from './Utils/ScrollToTop';
import Preloader from './components/other/Preloader';

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Project"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const Certificate = lazy(() => import("./pages/Certificate"));
const CertificateDetail = lazy(() => import("./pages/CertificateDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import('./components/Features/Resume/Resume'));
const Work = lazy(() => import('./pages/Work'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Share = lazy(() => import("./pages/Share"));

const AppRoutes = () => {
    return (
        <div className="w-full pt-[10vh]">
            <ScrollToTop />
            <Suspense fallback={<Preloader />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/share' element={<Share />} />
                    <Route path='/share/:id' element={<Share />} />
                    <Route path='/projects' element={<Project />} />
                    <Route path='/projects/:id' element={<ProjectDetail />} />
                    <Route path='/certificates' element={<Certificate />} />
                    <Route path='/certificates/:id' element={<CertificateDetail />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/resume' element={<Resume />} />
                    <Route path='/work' element={<Work />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default AppRoutes;
