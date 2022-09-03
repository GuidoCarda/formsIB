import React from "react";

const Input = ({ label, register, errors, placeholder, validation }) => {
  console.log(label);
  console.log(errors);
  console.log(errors[label]);

  // To Do: Implement Form validation to the component
  return (
    <div className="relative">
      <label className="capitaliz">{label}</label>
      <input
        {...register(label, { required: true })}
        placeholder={placeholder}
        className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-10"
      />

      {errors[label] && (
        <span className=" absolute top-16 text-sm mt-2 left-0 text-red-500">
          Este campo es requerido
        </span>
      )}
    </div>
  );
};

export default Input;
