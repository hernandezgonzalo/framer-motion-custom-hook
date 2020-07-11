import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import { motion } from "framer-motion";

export default function App() {
  const outerRef = useRef(null);
  const [inViewport, setInViewport] = useState(true);

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

  // Framer motion animations
  const fadeInContainerWithStagger = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.25,
        type: "tween",
        ease: "easeIn",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },
  };

  return (
    <>
      <div id="previous-content">Scroll down </div>
      <div ref={outerRef} id="outer-box">
        {inViewport && (
          <motion.div
            variants={fadeInContainerWithStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <h2>Una zoonosis emergente</h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              Una zoonosis es una enfermedad infecciosa transmitida de un
              animal...
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
}
