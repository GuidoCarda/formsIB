import React from "react";

//Animations
import { motion } from "framer-motion";

const SubmissionState = ({ state, title, info }) => {
  return (
    <motion.div className="fixed inset-0 z-20 grid place-items-center h-full w-full bg-neutral-900 text-white ">
      <div className="text-center p-4">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={`h-32 w-32 mb-10 mx-auto flex items-center justify-center  rounded-full ${
            state === "success" ? "bg-green-400/80" : "bg-red-400/80"
          } `}
        >
          {state === "success" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          )}

          {state === "error" && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl mb-6"
        >
          {title}
          {/* Tu mensaje fue enviado con exito */}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-neutral-400"
        >
          {info}
          {/* Muhas gracias por completar el formulario */}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default SubmissionState;
