import React from "react";
import "./Testimonials.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

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
            <h5 className="client_name">Muaneter Mun</h5>
            <small className="client_review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              repudiandae hic debitis modi, voluptatum magni quos numquam quidem
              iusto impedit temporibus. Tenetur est nemo deserunt nam. Eos
              soluta dolores nam.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVT2} alt="" />
            </div>
            <h5 className="client_name">Mun Muaneter</h5>
            <small className="client_review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              repudiandae hic debitis modi, voluptatum magni quos numquam quidem
              iusto impedit temporibus. Tenetur est nemo deserunt nam. Eos
              soluta dolores nam.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVT3} alt="" />
            </div>
            <h5 className="client_name">Mun Muaneter Mun</h5>
            <small className="client_review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              repudiandae hic debitis modi, voluptatum magni quos numquam quidem
              iusto impedit temporibus. Tenetur est nemo deserunt nam. Eos
              soluta dolores nam.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVT4} alt="" />
            </div>
            <h5 className="client_name">Muaneter Mun Muanester</h5>
            <small className="client_review">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              repudiandae hic debitis modi, voluptatum magni quos numquam quidem
              iusto impedit temporibus. Tenetur est nemo deserunt nam. Eos
              soluta dolores nam.
            </small>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;
