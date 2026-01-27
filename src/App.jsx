import { Routes, Route } from "react-router-dom";
import Navbar from "./components/mycompo/NavCompo/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";
import Oneko from "@/components/mycompo/Oneko";
import { BlurFade } from "@/components/ui/blur-fade";

export default function App() {
  return (
    <>
      <Navbar />

      {/* Viewport pet */}
      <Oneko />
      <o-neko className="fixed z-99" speed="10"></o-neko>

      <BlurFade>
        <div className="w-screen pt-[10vh]">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/certificates' element={<Certificate />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BlurFade>
    </>
  );
}
