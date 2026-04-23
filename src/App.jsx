import { useState } from "react";
import Navbar from "./components/mycompo/Navbar/Navbar";
import Oneko from "@/components/mycompo/Oneko/Oneko";
import { BlurFade } from "@/components/ui/blur-fade";
import AppRoutes from "./AppRoutes";
import Preloader from "./components/other/Preloader";
// import UnderDevelopment from "./components/other/underDevelopment";

export default function App() {
  const [preloadDone, setPreloadDone] = useState(false);

  return (
    <>
      {!preloadDone && <Preloader onDone={() => setPreloadDone(true)} />}
      <Navbar />
      {/* Viewport pet */}
      {preloadDone && (
        <>
          <Oneko />
          <o-neko className="fixed z-99" speed="10"></o-neko>
        </>
      )}
      <BlurFade>
        <AppRoutes />
      </BlurFade>
      {/* <UnderDevelopment /> */}
    </>
  );
}
