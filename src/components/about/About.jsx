import React, { forwardRef } from "react";
import "./About.css";
import MEImage from "../../assets/dom.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { motion } from "framer-motion";
import Transition from "../../assets/Transition";
import { fadeIn } from "../../assets/variants";

const About = forwardRef((props, aboutRef) => {
  return (
    <section ref={aboutRef} id="about">
      <Transition />
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="about_me"
        >
          <div className="about_me-image">
            <img src={MEImage} alt="About Image" />
          </div>
        </motion.div>
        <div className="about_content">
          <div className="about_cards">
            <motion.article
              initial={{ x: 300, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",

                  duration: 0.5,
                },
              }}
              viewport={{ once: false }}
              className="about_card"
            >
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </motion.article>
            <motion.article
              initial={{ x: 200, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",

                  duration: 0.8,
                },
              }}
              viewport={{ once: false }}
              className="about_card"
            >
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </motion.article>
            <motion.article
              initial={{ x: 50, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",

                  duration: 1.1,
                },
              }}
              viewport={{ once: false }}
              className="about_card"
            >
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </motion.article>
          </div>
          <motion.p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium adipisci, inventore molestiae cum error qui totam
            suscipit obcaecati saepe quos illo fugit omnis numquam nihil nobis
            exercitationem aut nulla voluptatum eum modi debitis reprehenderit
            incidunt et sequi. Sapiente saepe vero id quibusdam ipsam sed
            repudiandae modi, ipsum et voluptas aperiam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Accusantium, cupiditate! Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Officia nobis
            eaque dolore quidem ipsum deserunt. Nesciunt, nisi. Excepturi, totam
            soluta?
          </motion.p>
          <motion.a
            initial={{ y: 50, opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",

                duration: 0.5,
              },
            }}
            viewport={{ once: false }}
            href="#contact"
            className="btn btn-primary"
          >
            Let's Talk
          </motion.a>
        </div>
      </div>
    </section>
  );
});

export default About;
