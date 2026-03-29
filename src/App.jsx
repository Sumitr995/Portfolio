import Navbar from "./components/mycompo/Navbar/Navbar";
import Oneko from "@/components/mycompo/Oneko/Oneko";
import { BlurFade } from "@/components/ui/blur-fade";
import AppRoutes from "./AppRoutes";
// import UnderDevelopment from "./components/other/underDevelopment";

export default function App() {
  return (
    <>
      <Navbar />
      {/* Viewport pet */}
      <Oneko />
      <o-neko className="fixed z-99" speed="10"></o-neko>
      <BlurFade>
        <AppRoutes />
      </BlurFade>
      {/* <UnderDevelopment /> */}
    </>
  );
}
