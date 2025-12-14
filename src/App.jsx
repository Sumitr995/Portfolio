import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import Navbar from "./components/mycompo/Navbar";
import Home from "./pages/Home";
import Oneko from "@/components/mycompo/Oneko";


export default function App() {
  return (
    <div className="min-h-screen w-screen relative ">
      
        <Oneko />
        <o-neko speed="10"></o-neko>
        <Navbar />
        <Home />
    </div>
  );
}
