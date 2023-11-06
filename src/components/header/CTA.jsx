import React from "react";
import CV from "../../assets/Stephen_Mutisya-Resume.pdf";
import { motion } from "framer-motion";

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
