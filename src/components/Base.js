import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  initial: { x: "100vw", opacity: 0 },
  final: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, delay: 0.3 },
  },
  exit: {
    x: "-150vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const nextVariants = {
  initial: { x: "-100vw", opacity: 0 },
  final: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 50, delay: 0.3 },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="final"
      exit="exit"
      className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                originX: 0,
              }}
              key={base}
              onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          variants={nextVariants}
          className="next">
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
