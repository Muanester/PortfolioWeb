import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
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
        className="container portfolio_container"
      >
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="http://github.com" className="btn" target="_blank">
              GitHub
            </a>
            <a
              href="http://github.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </motion.div>
    </section>
  );
};

export default Portfolio;
