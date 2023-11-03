import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/dom.jpeg";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.9,
            },
          }}
          viewport={{ once: false }}
        >
          Stephen Mutisya
        </motion.h1>
        <motion.h5 whileInView={{ bounce: 0.4 }} className="text-light">
          Data Analyst & Software Developer
        </motion.h5>

        <CTA />

        <HeaderSocials />

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: -360,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          }}
          viewport={{ once: true }}
          className="me"
        >
          <motion.img src={ME} alt="" />
        </motion.div>

        <motion.a
          initial={{ rotate: 90, x: 100, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            rotate: 90,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.1,
            },
          }}
          viewport={{ once: false }}
          href="#contact"
          className="scroll_down"
        >
          Scroll Down
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;
