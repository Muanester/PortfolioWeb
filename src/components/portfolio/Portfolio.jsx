import React, { forwardRef } from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio-port.JPG";
import IMG2 from "../../assets/portfolio-furn.JPG";
import IMG3 from "../../assets/portfolio-vogue.JPG";
import IMG4 from "../../assets/portfolio-tesla.JPG";
import IMG5 from "../../assets/portfolio-disney.jpeg";
import IMG6 from "../../assets/portfolio-dashboard.jpeg";
import { motion } from "framer-motion";

const Portfolio = forwardRef((props, portfolioRef) => {
  return (
    <section ref={portfolioRef} id="portfolio">
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
          <h3>My Personal Portfolio Website</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Muanester/PortfolioWeb"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://muanester.github.io/PortfolioWeb/"
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
          <h3>Furniture Webstore With Database</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Muanester/F-Finesse-Design-Upgrade"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://muanester.github.io/F-Finesse-Design-Upgrade/"
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
          <h3>Online Shopping Web With Payment Intergration</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Muanester/Vogue-Trends"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://muanester.github.io/Vogue-Trends/"
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
          <h3>A Tesla Clone Website</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Muanester/React.js-tesla-clone-website"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://muanester.github.io/React.js-tesla-clone-website/"
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
          <h3>A Disney Plus Clone Website </h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Muanester/React.js-disney-plus-web-clone"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://github.com/Muanester/React.js-disney-plus-web-clone"
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
          <h3>An Interactive & Premium Admin Dashboard</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/Muanester/Admin_dashboard"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://github.com/Muanester/Admin_dashboard"
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
});

export default Portfolio;
