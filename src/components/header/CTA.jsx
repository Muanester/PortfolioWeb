import React from "react";
import CV from "../../assets/cv.pdf";
import { motion } from "framer-motion";

import { fadeIn } from "../../assets/variants";

const CTA = () => {
  return (
    <motion.div className="cta">
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
