import { useEffect, useState } from "react";

export default function useIsMobile() {
  const getIsDesktop = () => window.innerWidth >= 962;

  const [isDesktop, setIsDesktop] = useState(getIsDesktop);

  useEffect(() => {
    const onResize = () => setIsDesktop(getIsDesktop);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isDesktop;
}
