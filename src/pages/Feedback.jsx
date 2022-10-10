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
      className="relative text-white min-h-screen h-full grid place-content-center overflow-hidden"
    >
      <div className="absolute w-52 h-52 bg-purple-500 top-5 -right-20 rounded-full filter blur-2xl  opacity-10 "></div>
      <div className="absolute w-96 h-96 bg-teal-500 top-29 -left-40 rounded-full filter blur-2xl opacity-10  "></div>
      <div className="absolute w-96 h-96 bg-violet-500 -bottom-20 -right-64 rounded-full filter  blur-2xl opacity-10 "></div>
      <div className="relative max-w-screen-sm mx-auto px-4 py-10 rounded-md">
        <p className="mb-4">
          Buenas! Si ingresaste a esta pagina es porque tuviste algún
          inconveniente con nuestra aplicación o porque tienes algunas
          sugerencias que podrían sernos de gran utilidad
        </p>
        <p className="mb-4">
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
