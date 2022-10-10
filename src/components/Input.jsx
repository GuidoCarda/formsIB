import React from "react";

const Input = ({
  label,
  inputName,
  register,
  errors,
  placeholder,
  validate,
  type,
}) => {
  // To Do: Implement Form validation to the component

  if (type === "textbox") {
    return (
      <div className="relative w-full">
        <label className="inline-block mb-1 capitalize">{label}</label>
        <textarea
          placeholder={placeholder}
          {...register(inputName, { validate })}
          className="text-sm focus:outline-none focus:border-indigo-900  bg-neutral-900 border-2 border-neutral-800 rounded-md w-full p-2 resize-none mb-8 scrollbar"
          rows={3}
        />
        {errors[inputName] && (
          <span className=" absolute bottom-3 text-sm mt-2 left-0 text-red-500">
            {errors[inputName]?.message}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <label className="inline-block mb-1 capitalize">{label}</label>

      <input
        type={type ? type : "text"}
        {...register(inputName, { validate })}
        placeholder={placeholder}
        className="focus:outline-none focus:border-indigo-900 autofill:!bg-neutral-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-8"
      />

      {errors[inputName] && (
        <span className=" absolute top-16 text-sm mt-2 left-0 text-red-500">
          {errors[inputName]?.message}
        </span>
      )}
    </div>
  );
};

export default Input;
