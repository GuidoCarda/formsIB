import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import postDoc from "../firebase/services";

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
    alert(data);
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
      Success
    </div>
  );
};

export default Feedback;
