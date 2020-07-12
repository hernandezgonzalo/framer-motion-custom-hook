import { useEffect, useState } from "react";

const useObserver = (outerRef) => {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const onChange = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === outerRef.current) {
          if (entry.isIntersecting) {
            setInViewport(true);
          } else {
            setInViewport(false);
          }
        }
      });
    };
    const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    observer.observe(outerRef.current);
  }, [outerRef]);

  return [inViewport];
};

export default useObserver;
