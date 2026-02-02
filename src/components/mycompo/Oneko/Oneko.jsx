import { useEffect } from "react";

export default function Oneko() {
  useEffect(() => {
    // Prevent duplicate registration
    if (!customElements.get("o-neko")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "/oneko-element.js?define=o-neko";
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return null;
}
