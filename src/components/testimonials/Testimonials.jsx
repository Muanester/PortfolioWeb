import React from "react";
import "./Testimonials.css";
import AVT1 from "../../assets/danport.jpg";
import AVT2 from "../../assets/moseport.jpg";
import AVT3 from "../../assets/nelport.jpg";
import AVT4 from "../../assets/shadport.jpg";

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <motion.div
        initial={{ rotate: -50, opacity: 0 }}
        whileInView={{
          rotate: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
          },
        }}
        viewport={{ once: false }}
      >
        <Swiper
          className="container testimonials_container"
          // install Swiper modules
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVT1} alt="" />
            </div>
            <h5 className="client_name">Daniel Kioko</h5>
            <small className="client_review">
              Working with Muanester on our website redesign was an exceptional
              experience. Their attention to detail, creativity, and technical
              expertise transformed our online presence. We now have a modern,
              responsive, and user-friendly website that has improved our
              business.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVT2} alt="" />
            </div>
            <h5 className="client_name">Moses Katua</h5>
            <small className="client_review">
              We hired Muanester to develop our e-commerce platform, and the
              results exceeded our expectations. Their ability to create a
              seamless shopping experience and integrate payment solutions was
              remarkable. Our sales have significantly increased, thanks to
              their work.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVT3} alt="" />
            </div>
            <h5 className="client_name">Nelson Mwosa</h5>
            <small className="client_review">
              We engaged Muanester for a data analysis project, and the results
              were insightful and actionable. Their expertise in predictive
              analytics helped us make data-driven decisions, ultimately
              improving our business strategy. We highly recommend their
              services.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVT4} alt="" />
            </div>
            <h5 className="client_name">Shadrack Kyalo</h5>
            <small className="client_review">
              We partnered with Muanester to analyze patient data for our health
              tech startup. Their proficiency in data mining and pattern
              recognition was invaluable. They provided us with actionable
              insights that guided our product development, leading to improved
              patient outcomes.
            </small>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;
