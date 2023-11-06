import React, { forwardRef } from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Experience = forwardRef((props, experienceRef) => {
  return (
    <section ref={experienceRef} id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.5,
            },
          }}
          viewport={{ once: false }}
          className="experience_frontend"
        >
          <h3>Software Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 0.5,
            },
          }}
          viewport={{ once: false }}
          className="experience_frontend"
        >
          <h3>Data Analysis</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>R Programming</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Excel Macros</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsFillPatchCheckFill className="experience_details-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Experience;
