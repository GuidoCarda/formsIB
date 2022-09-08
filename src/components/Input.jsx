import React from "react";
import { motion } from "framer-motion";

const Input = ({ label, register, errors, placeholder, validate, type }) => {
  // To Do: Implement Form validation to the component

  if (type === "textbox") {
    return (
      <div className="relative">
        <label className="inline-block mb-1 capitalize">{label}</label>
        <textarea
          placeholder="Un videojuego ambientado en xxx que se trate de xxx y que el objetivo sea xxx ... Vo me entende, algo asi. Iluminanos"
          {...register(label, { validate })}
          className="text-sm focus:outline-none focus:border-indigo-900  bg-neutral-900 border-2 border-neutral-800 rounded-md w-full p-2 resize-none mb-8"
          rows={3}
        />
        {errors[label] && (
          <span className=" absolute bottom-3 text-sm mt-2 left-0 text-red-500">
            {errors[label]?.message}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
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
    </div>
  );
};

export default Input;