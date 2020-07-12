import React, { useRef } from "react";
import { motion } from "framer-motion";
import useObserver from "./hooks/useObserver";
import { fadeInUp, fadeInContainerWithStagger } from "./animations/fadeIn";

export default function App() {
  const outerRef = useRef(null);
  const [inViewport] = useObserver(outerRef);

  return (
    <>
      <div id="previous-content"></div>
      <div ref={outerRef} id="outer-box">
        {inViewport && (
          <motion.div
            variants={fadeInContainerWithStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <h2>
                Sint dolor cupidatat proident laborum minim exercitation tempor
                nostrud enim excepteur ad magna.
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              Adipisicing dolore laboris cillum dolor amet veniam duis.
              Voluptate adipisicing et consectetur eu ullamco nulla. Magna velit
              incididunt deserunt deserunt velit occaecat. Elit nulla id irure
              ex cillum non. Proident et ipsum aliqua ipsum ad consectetur velit
              duis amet non proident.
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
}
