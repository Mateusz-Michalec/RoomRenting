import { useEffect, useState } from "react";

const getIsDesktop = () => window.innerWidth >= 962;

export default function useIsMobile() {
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);

  useEffect(() => {
    const onResize = () => setIsDesktop(getIsDesktop);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isDesktop;
}
