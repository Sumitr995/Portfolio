import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import Navbar from "./components/mycompo/Navbar";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen w-screen">
      <Navbar/>
      <Home/>
    </div>
  );
}
