import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

const containerVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    transition: { delay: 0.3, duration: 1.5 },
  },
  exit: {
    x: "-150vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="final"
      exit="exit"
      className="home container">
      <motion.h2 animate={{ fontSize: 50, x: 50, y: -50 }}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
