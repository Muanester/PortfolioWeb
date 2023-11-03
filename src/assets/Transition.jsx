import { motion } from "framer-motion";
import "./Transition.css";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },

  animate: {
    x: "0%",
    width: "0%",
  },

  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const Transition = () => {
  return (
    <>
      <motion.div
        className="transition transition1"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: false }}
      ></motion.div>
      <motion.div
        className="transition transition2"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: false }}
      ></motion.div>
      <motion.div
        className="transition transition3"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: false }}
      ></motion.div>
    </>
  );
};

export default Transition;
