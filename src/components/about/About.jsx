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
              <small>3+ Years Freelance</small>
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
            Hello, I am a data analyst and web developer ready to bring my
            expertise to your projects. With a strong background in both fields,
            I offer a unique combination of analytical prowess and technical
            proficiency.
            <br />
            <br />
            Together, my skills as a data analyst and web developer make me a
            versatile and valuable asset for your projects. Whether you need
            data analysis, web development, or a combination of both, I am ready
            to leverage my expertise to meet your unique requirements.
          </motion.p>
        </div>
      </div>

      <div className="container about_more_details">
        <div>
          <p>
            As a data analyst, I excel in extracting valuable insights from
            complex datasets and translating them into actionable
            recommendations. I have a solid understanding of statistical
            analysis, data visualization, and machine learning techniques. My
            expertise lies in using tools such as R and Excel to analyze and
            interpret data, enabling businesses to make informed decisions and
            drive growth. Whether it's conducting exploratory data analysis,
            creating insightful reports, or developing predictive models, I am
            committed to delivering accurate and meaningful results that drive
            business success.
          </p>
          <p>
            Additionally, my proficiency as a web developer allows me to
            transform data-driven insights into visually appealing and
            user-friendly web applications. With a strong command of REACT.JS,
            HTML, CSS (& TAILWIND CSS), and JAVASCRIPT, I can build interactive
            and responsive websites that effectively communicate information and
            engage users. I am experienced in creating custom dashboards, data
            visualizations, and interactive charts. My attention to detail,
            clean coding practices, and adherence to industry standards ensure
            that the websites I develop are not only visually appealing but also
            optimized for performance and accessibility.
          </p>
        </div>

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
    </section>
  );
});

export default About;
