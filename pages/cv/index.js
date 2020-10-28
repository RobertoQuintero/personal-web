import { motion } from "framer-motion";
import React from "react";

const Cv = () => {
  return (
    <>
      <main>
        <motion.div
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
          style={{ height: "100%" }}
        >
          <object
            data="cv.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
          ></object>
        </motion.div>
      </main>
      <style jsx>
        {`
          main {
            padding: 0;
            padding-top: 100px;
            width: 100%;
            height: 100vh;
          }
        `}
      </style>
    </>
  );
};

export default Cv;
