import { useEffect, useState, useRef } from "react";

// Elements animate only once. When all elements are showed already, observer disconnect.
export function useInView(refs, entriesLength, searchParam) {
  const [elements, setElements] = useState({});
  const triggeredCount = useRef(0);

  // Set proper triggerCount when ScrollToTop is launched
  const visibleCount = Object.keys(elements).length;
  if (visibleCount !== triggeredCount.current)
    triggeredCount.current = visibleCount;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (triggeredCount.current < entriesLength)
          entries.forEach((entry) => {
            const element = entry.target.id;
            if (entry.isIntersecting) {
              triggeredCount.current = triggeredCount.current + 1;
              setElements((prev) => {
                return {
                  ...prev,
                  [element]: true,
                };
              });
            }
          });
        else return () => observer.disconnect();
      },
      { rootMargin: "-50px" }
    );

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [searchParam]);

  return elements;
}
