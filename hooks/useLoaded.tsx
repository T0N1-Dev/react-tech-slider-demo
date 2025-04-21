import { useEffect, useState } from "react";

export const useLoaded = () => {
    
  const [loaded, setLoaded] = useState(false);

    // To prevent the component from loading before the css
  useEffect(() => {
    const handleLoad = () => setLoaded(true);

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return { loaded };
}