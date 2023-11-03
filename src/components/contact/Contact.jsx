import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qfktdtm",
      "template_r8ivk5q",
      form.current,
      "oyq-sWvXe8eMajleC"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <motion.article
            initial={{ x: -200, opacity: 0 }}
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
            className="contact_option"
          >
            <MdOutlineMailOutline className="contact_option-icon" />
            <h4>Email</h4>
            <h5>stevenmutisya999@gmail.com</h5>
            <a href="mailto:stevenmutisya999@gmail.com" target="_blank">
              Send a message
            </a>
          </motion.article>
          <motion.article
            initial={{ x: -200, opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.7,
              },
            }}
            viewport={{ once: false }}
            className="contact_option"
          >
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Muanester</h5>
            <a href="http://facebook.com" target="_blank">
              Send a message
            </a>
          </motion.article>
          <motion.article
            initial={{ x: -200, opacity: 0 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.9,
              },
            }}
            viewport={{ once: false }}
            className="contact_option"
          >
            <BsWhatsapp className="contact_option-icon" />
            <h4>WhatsApp</h4>
            <h5>+254 712 290 063</h5>
            <a
              href="https://api.whatsapp.com/send?phone+254712290063"
              target="_blank"
            >
              Send a message
            </a>
          </motion.article>
        </div>

        <motion.form
          initial={{ rotate: 20, x: 300, opacity: 0 }}
          whileInView={{
            rotate: 0,
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          }}
          viewport={{ once: false }}
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
