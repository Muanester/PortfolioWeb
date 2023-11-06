import React, { forwardRef } from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
import { motion } from "framer-motion";

const Services = forwardRef((props, servicesRef) => {
  return (
    <section ref={servicesRef} id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <motion.article
          initial={{ x: -300, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",

              duration: 0.8,
            },
          }}
          viewport={{ once: false }}
          className="service"
        >
          <div className="service_head">
            <h3>Data Analysis</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Data Cleaning: Cleaning and preprocessing raw data to remove
                inconsistencies, missing values, and outliers.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Data Visualization: Creating informative charts, graphs, and
                dashboards to present data insights.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Descriptive Analytics: Summarizing and interpreting data using
                statistics and visualizations.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Predictive Analytics: Building models to make predictions and
                forecasts based on historical data.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Prescriptive Analytics: Offering recommendations and
                decision-making support based on data analysis.
              </p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Data Mining: Identifying patterns, trends, and relationships in
                large datasets.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Time Series Analysis: Examining data collected over time to
                identify patterns and anomalies.
              </p>
            </li>
          </ul>
        </motion.article>

        <motion.article
          initial={{ x: 300, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",

              duration: 0.8,
            },
          }}
          viewport={{ once: false }}
          className="service"
        >
          <div className="service_head">
            <h3>Software Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Website Design: Creating visually appealing and user-friendly
                website layouts.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Front-End Development: Building the user interface using
                React.js, HTML, CSS, and JavaScript.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Back-End Development: Creating server-side logic, databases, and
                APIs.
              </p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>
                E-commerce Website Development: Building online stores with
                features like shopping carts and payment gateways.
              </p>
            </li>

            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Responsive Web Design: Ensuring websites are optimized for
                various devices and screen sizes.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Web Hosting and Domain Management: Setting up hosting and
                managing domain registration.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Website Maintenance and Support: Providing ongoing updates,
                security, and troubleshooting.
              </p>
            </li>
          </ul>
        </motion.article>
        {/* <motion.article
          initial={{ x: 300, opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",

              duration: 0.8,
            },
          }}
          viewport={{ once: false }}
          className="service"
        >
          <div className="service_head">
            <h3>Content Analysis</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </motion.article> */}
      </div>
    </section>
  );
});

export default Services;
