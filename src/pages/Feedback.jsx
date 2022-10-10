import React, { useState } from "react";

//Services
import postDoc from "../firebase/services";

//Form handling
import { useForm } from "react-hook-form";

//Animations
import { motion } from "framer-motion";

//Components
import Input from "../components/Input";
import SubmissionState from "../components/SubmissionState";
import { Link } from "react-router-dom";

const Feedback = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const defaultValues = {
    userFeedback: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    postDoc(data, "feedback");
    setIsSubmitted(true);
    reset(defaultValues);
  };

  if (isSubmitted)
    return (
      <SubmissionState
        state={"success"}
        title={"Tu mensaje fue enviado con exito"}
        info={"Muchas gracias por dejarnos tu feedback"}
      />
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative text-white min-h-screen h-full flex md:items-center overflow-hidden"
    >
      <div className="absolute w-52 h-52 bg-purple-500 top-5 -right-20 rounded-full filter blur-2xl  opacity-10 "></div>
      <div className="absolute w-96 h-96 bg-teal-500 top-29 -left-40 rounded-full filter blur-2xl opacity-10  "></div>
      <div className="absolute w-96 h-96 bg-violet-500 -bottom-20 -right-64 rounded-full filter  blur-2xl opacity-10 "></div>

      <div className="relative max-w-screen-sm mx-auto px-4 py-10 rounded-md">
        <Link
          to="/"
          className="relative mb-10  text-white p-1 rounded-md w-max flex gap-4 items-center hover:bg-neutral-800/20"
        >
          <span className=" w-10 h-10 bg-neutral-800/60 rounded-md p-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" w-6 h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </span>

          <span>volver</span>
        </Link>
        <p className="mb-4">
          Buenas! Si ingresaste a esta pagina es porque tuviste algún
          inconveniente con nuestra aplicación o porque tienes algunas
          sugerencias que podrían sernos de gran utilidad
        </p>
        <p className="mb-10">
          A continuación te dejamos un cuadro de texto para que nos dejes tus
          sugerencias/problemas
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Feedback"
            type={"textbox"}
            inputName="userFeedback"
            register={register}
            errors={errors}
            validate={{
              required: (v) => v.trim().length > 0 || "Campo requerido",
            }}
            placeholder=""
          />
          <button
            className={`bg-indigo-700 w-full py-2 rounded-md mt-5 text-white font-bold 
            `}
          >
            Enviar
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Feedback;
