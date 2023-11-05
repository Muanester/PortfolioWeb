import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { TbSettingsCode } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";

import { motion, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  /* ==== Scroll Progress ====*/
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  /* ==== Set Active Section ====*/
  const [activeSection, setActiveSection] = useState(null);

  // Create a ref for each section you want to track
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Set up an Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("href"));
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    // Observe the sections with the corresponding refs
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }
    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Cleanup when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  // Update the active section when it changes
  useEffect(() => {
    setActiveNav(activeSection ? activeSection : "#header");
    console.log(activeSection);
  }, [activeSection]);

  return (
    <nav>
      <div className="nav_anchor">
        <a
          onClick={() => setActiveNav("#header")}
          href="#header"
          className={activeNav === "#header" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          onClick={() => setActiveNav("#about")}
          href="#about"
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          onClick={() => setActiveNav("#experience")}
          href="#experience"
          className={activeNav === "#experience" ? "active" : ""}
        >
          <TbSettingsCode />
        </a>

        <a
          onClick={() => setActiveNav("#services")}
          href="#services"
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          onClick={() => setActiveNav("#portfolio")}
          href="#portfolio"
          className={activeNav === "#portfolio" ? "active" : ""}
        >
          <BsFillFolderSymlinkFill />
        </a>
        <a
          onClick={() => setActiveNav("#contact")}
          href="#contact"
          className={activeNav === "#contact" ? "active" : ""}
        >
          <LuPhoneCall />
        </a>
      </div>

      <motion.div className="progress-bar" style={{ scaleX }} />
    </nav>
  );
};

export default Navbar;
