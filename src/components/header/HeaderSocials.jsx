import { motion } from "framer-motion";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
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
      className="header_socials"
    >
      <a href="https://linkedin.com" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="blank">
        <BsGithub />
      </a>
      <a href="https://x.com" target="blank">
        <FaXTwitter />
      </a>
    </motion.div>
  );
};

export default HeaderSocials;
