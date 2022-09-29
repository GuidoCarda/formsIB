import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import postDoc from "../firebase/services";

import { motion } from "framer-motion";

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
    // sets all values toLowerCase()
    postDoc(data, "feedback");
    setIsSubmitted(true);
    reset(defaultValues);
  };

  if (isSubmitted) return <RenderSuccessMessage />;

  return (
    <div className="text-white min-h-screen grid place-content-center">
      <div className="relative max-w-screen-sm mx-auto px-4 py-10 rounded-md">
        <p className="mb-4">
          Buenas! Si ingresaste a esta pagina es porque tuviste algun
          inconveniente con nuestra aplicacion o porque tenes algunas
          sujerencias que podrian sernos de gran utilidad
        </p>
        <p className="mb-4">
          A continuacion te dejamos un cruadro de texto para que nos dejes tus
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
          />
          <button
            className={`bg-indigo-700 w-full py-2 rounded-md mt-5 text-white font-bold 
            `}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

const RenderSuccessMessage = () => {
  return (
    <div className="min-h-screen grid place-content-center text-white">
      <div className="text-center p-4">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-32 w-32 mb-10 mx-auto flex items-center justify-center  rounded-full bg-green-400/80"
        >
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
        </motion.span>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl mb-6"
        >
          Tu mensaje fue enviado con exito
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-neutral-400"
        >
          Muhas gracias por dejarnos tu feedback
        </motion.p>
      </div>
    </div>
  );
};

export default Feedback;
