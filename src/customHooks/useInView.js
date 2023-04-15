import { useEffect, useState } from "react";

export function useInView(refs) {
  const [elements, setElements] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target.id;
          if (entry.isIntersecting)
            setElements((prev) => {
              return {
                ...prev,
                [element]: true,
              };
            });
          else {
            setElements((prev) => {
              return {
                ...prev,
                [element]: false,
              };
            });
          }
        });
      },
      { rootMargin: "-100px" }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return elements;
}
