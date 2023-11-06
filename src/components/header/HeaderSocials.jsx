import { motion } from "framer-motion";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const HeaderSocials = () => {
  return (
    <motion.div className="header_socials">
      <a href="https://www.linkedin.com/in/stephen-mutisya/" target="blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Muanester" target="blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/Muanester" target="blank">
        <FaXTwitter />
      </a>
    </motion.div>
  );
};

export default HeaderSocials;
