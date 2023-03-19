import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  initial: { x: "100vw", opacity: 0 },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      mass: 0.5,
      damping: 25,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    x: "-150vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const childVariants = {
  initial: { opacity: 0 },
  final: {
    opacity: 1,
  },
};

const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="final"
      exit="exit"
      className="container order">
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping) => (
        <motion.div
          variants={childVariants}
          key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
