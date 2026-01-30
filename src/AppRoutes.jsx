import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";
const AppRoutes = () => {
    return (
        <div className="w-screen pt-[10vh]">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/certificates' element={<Certificate />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    )
}

export default AppRoutes
