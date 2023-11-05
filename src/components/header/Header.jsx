import React, { forwardRef } from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/dom.jpeg";
import HeaderSocials from "./HeaderSocials";
import { motion } from "framer-motion";

const Header = forwardRef(() => {
  return (
    <motion.header
      initial={{ x: 300, opacity: 0 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 1.5,
        },
      }}
      viewport={{ once: false }}
      id="header"
      className="thishead"
    >
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <motion.h1>Stephen Mutisya</motion.h1>
        <motion.h5 className="text-light">
          Data Analyst & Software Developer
        </motion.h5>

        <CTA />

        <HeaderSocials />

        <motion.div className="me">
          <motion.div
            initial={{ rotate: 0 }}
            // animate={rotatingDiv}
            whileInView={{
              rotate: 360,
              transitionDelay: 1,
              transition: { duration: 100 },
            }}
            transition={{ duration: 2, ease: "linear" }}
            className="splash-me"
          ></motion.div>
          <motion.img src={ME} alt="" />
        </motion.div>

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </motion.header>
  );
});

export default Header;

// initial={{ x: 300, opacity: 0 }}
// whileInView={{
//   opacity: 1,
//   x: 0,
//   rotate: -360,
//   transition: {
//     type: "spring",
//     bounce: 0.4,
//     duration: 1.5,
//   },
// }}
// viewport={{ once: true }}
