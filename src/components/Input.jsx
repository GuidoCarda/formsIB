import React from "react";
import { motion } from "framer-motion";

const Input = ({ label, register, errors, placeholder, validate, type }) => {
  // To Do: Implement Form validation to the component
  return (
    <motion.div className="relative">
      <label className="inline-block mb-1 capitalize">{label}</label>
      <input
        type={type ? type : "text"}
        {...register(label, { validate })}
        placeholder={placeholder}
        className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-8"
      />

      {errors[label] && (
        <span className=" absolute top-16 text-sm mt-2 left-0 text-red-500">
          {errors[label]?.message}
        </span>
      )}
    </motion.div>
  );
};

export default Input;
