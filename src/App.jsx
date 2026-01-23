import { Routes, Route } from "react-router-dom";
import ClickSpark from './components/ui/ClickSpark';
import Navbar from "./components/mycompo/NavCompo/Navbar";
import Home from "./pages/Home";
import Oneko from "@/components/mycompo/Oneko";
import About from "./pages/About";
import Project from "./pages/Project";
import Certificate from "./pages/Certificate";
import Contact from "./pages/Contact";
import { BlurFade } from "@/components/ui/blur-fade"



export default function App() {
  return (
      <BlurFade>
        <div className="min-h-screen w-screen overflow-hidden">
          {/* Cat Animation */}
          <Oneko />
          <o-neko class="fixed z-99" speed="10"></o-neko>
          {/* Pages */}
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/certificates' element={<Certificate />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BlurFade>
  );
}
