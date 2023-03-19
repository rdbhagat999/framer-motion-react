import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  initial: { opacity: 0 },
  final: { opacity: 1 },
};

const modal = {
  initial: { y: "-100vh", opacity: 0 },
  final: {
    y: "200px",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="initial"
          animate="final"
          exit="initial">
          <motion.div
            className="modal"
            variants={modal}>
            <p>Want to make another Pizza?</p>
            <Link to="/">
              <button onClick={() => setShowModal(false)}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
