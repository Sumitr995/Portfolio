import { useState } from "react";
import Navbar from "./components/Features/Navbar/Navbar";
import Oneko from "@/components/Features/Oneko/Oneko";
import { BlurFade } from "@/components/ui/blur-fade";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
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
      {preloadDone && (
        <ProgressiveBlur
          className="fixed z-40"
          position="bottom"
        />
      )}
      {/* <UnderDevelopment /> */}
    </>
  );
}
