import { useEffect, useState } from "react";

const useObserver = outerRef => {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const onChange = entries => {
      entries.forEach(entry => {
        if (entry.target === outerRef.current)
          setInViewport(entry.isIntersecting);
      });
    };
    const observer = new IntersectionObserver(onChange, { threshold: 0.5 });
    observer.observe(outerRef.current);
  }, [outerRef]);

  return [inViewport];
};

export default useObserver;
