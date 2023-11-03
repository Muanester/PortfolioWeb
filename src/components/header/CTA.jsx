import React from "react";
import CV from "../../assets/cv.pdf";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 1.5,
        },
      }}
      viewport={{ once: false }}
      className="cta"
    >
      <a href={CV} download={true} className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </motion.div>
  );
};

export default CTA;
