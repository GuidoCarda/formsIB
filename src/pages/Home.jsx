import React, { useState, useEffect } from "react";

//Firebase
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

//Form handling
import { useForm } from "react-hook-form";

//Routing
import { Link } from "react-router-dom";

//Animations
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

//Components
import CustomSelect from "../components/CustomSelect";
import GameSelect from "../components/GameSelect";
import Input from "../components/Input";
import SubmissionState from "../components/SubmissionState";

const Home = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [studiesInIB, setStudiesInIB] = useState(null);

  useEffect(() => {
    const submissionState = window.localStorage.getItem("submitted");
    const userState = window.localStorage.getItem("studiesInIB");

    if (submissionState) {
      setSubmitted(true);
      return setStudiesInIB(true);
    }

    if (userState) {
      setStudiesInIB(userState);
    }
  }, []);

  const defaultValues = {
    name: "",
    email: "",
    age: "",
    carreras: "",
    plays: false,
    gamesPlayed: "",
    gameIdea: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    // sets all values toLowerCase()
    const parsedData = Object.fromEntries(
      Object.entries(data).map((values) => {
        if (typeof values[1] === "string")
          return [values[0], values[1].toLowerCase()];
        return values;
      })
    );

    setIsSubmitting(true);
    postFormData(parsedData);
  };

  const plays = watch("plays");

  const postFormData = async (formData) => {
    try {
      const docRef = await addDoc(collection(db, "survey"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      window.localStorage.setItem("submitted", "true");
      setTimeout(() => {
        setSubmitted(true);
        reset(defaultValues);
        console.log("documment written with ID " + docRef.id);
      }, 1000);
    } catch (e) {
      console.log(e);
      alert(e);
    }
  };

  const handleIntroScreenStates = (studies) => {
    studies ? setStudiesInIB(true) : setStudiesInIB(false);
    window.localStorage.setItem("studiesInIB", studies);
  };

  if (studiesInIB === null && !submitted)
    return <RenderIntroScreen handleIntroState={handleIntroScreenStates} />;

  if (submitted)
    return (
      <SubmissionState
        state={"success"}
        title={"Tu formulario fue enviado con exito"}
        info={"Muhas gracias por completar nuestro formulario"}
      />
    );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`relative overflow-hidden min-h-screen h-full flex items-center justify-center bg-neutral-900 text-slate-200 py-2`}
    >
      <div className="absolute w-52 h-52 bg-purple-500 top-5 -right-20 rounded-full filter blur-2xl  opacity-10 "></div>
      <div className="absolute w-96 h-96 bg-teal-500 top-29 -left-40 rounded-full filter blur-2xl opacity-10  "></div>
      <div className="absolute w-96 h-96 bg-violet-500 -bottom-2 -right-20 rounded-full filter  blur-2xl opacity-10 "></div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full md:max-w-xl px-4 py-12 flex flex-col justify-center gap-2 relative z-10"
      >
        <div className="flex gap-2 mb-6">
          <Link
            to="/about-us"
            className="bg-neutral-800 w-fit py-1 px-4 rounded-md hover:bg-indigo-800/20"
          >
            sobre nosotros
          </Link>
          <Link
            to="/dashboard"
            className="bg-indigo-900 w-fit py-1 px-4 rounded-md ml-auto hover:bg-indigo-800"
          >
            dashboard
          </Link>
        </div>
        <LayoutGroup>
          <motion.div layout>
            <p className="mb-4">
              Buenas! Somos un grupo de estudiantes de desarrollo de software y
              queriamos pedirte tu ayuda!
            </p>

            <Input
              label="nombre"
              inputName="name"
              register={register}
              errors={errors}
              validate={{
                required: (v) => v.trim().length > 0 || "Campo requerido",
              }}
            />

            <Input
              label="email"
              inputName="email"
              register={register}
              errors={errors}
              validate={{
                required: (v) => v.trim().length > 0 || "Campo requerido",
                isEmail: (v) =>
                  v
                    .trim()
                    .match(
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    ) || "No es un email valido",
              }}
            />

            <Input
              label="edad"
              inputName="age"
              register={register}
              errors={errors}
              type={"number"}
              validate={{
                required: (v) => v.trim().length > 0 || "Campo requerido",
                positive: (v) => parseInt(v) > 0 || "Debe ser mayor a 0",
                lessThanTen: (v) => parseInt(v) < 100 || "Ah sos re troll",
              }}
            />
            {studiesInIB && (
              <div className="relative">
                <label className="inline-block mb-1 capitalize">
                  Que carrera estas cursando?
                </label>
                <CustomSelect
                  name={"carreras"}
                  control={control}
                  rules={studiesInIB ? { required: true } : null}
                ></CustomSelect>

                {errors.carreras && (
                  <span className=" absolute -bottom-6 z-0 text-sm mt-2 left-0 text-red-500">
                    Campo es requerido
                  </span>
                )}
              </div>
            )}

            <div className="flex gap-4 h- accent-indigo-500 items-center">
              <label>Jugas algun video juego?</label>
              <input
                type="checkbox"
                {...register("plays")}
                className="w-4 h-4"
              />
            </div>
          </motion.div>

          <AnimatePresence>
            {plays && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
                className="relative"
              >
                <GameSelect
                  name="gamesPlayed"
                  control={control}
                  rules={plays && { required: true }}
                />
                {errors.gamesPlayed && (
                  <span className="absolute bottom-1 text-sm left-0 text-red-500">
                    Este campo es requerido
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div layout>
            <div className="text-left flex flex-col gap-2 my-4">
              <p>
                Como proyecto final de programacion debemos llevar a cabo el
                desarrollo de un videojuego y nos encontramos con que no tenemos
                ni idea de cual podria ser la tematica del mismo.
              </p>

              <p>
                Por eso necesitamos tu ayuda y desarrollamos este cuestionario
                para que nos puedas dejarnos tus ideas.
              </p>

              <p>Tene en cuenta que debe ser un videojuego en 3D.</p>
            </div>

            <Input
              label="idea"
              inputName="gameIdea"
              register={register}
              errors={errors}
              type={"textbox"}
              placeholder="Un videojuego ambientado en xxx que se trate de xxx y que el objetivo sea xxx ... Vo me entende, algo asi. Iluminanos"
              validate={{
                required: (v) => v.trim().length > 0 || "Campo requerido",
              }}
            />

            <button
              type="submit"
              className={`bg-indigo-700 w-full py-2 rounded-md mt-5 text-white font-bold ${
                isSubmitting ? "bg-indigo-700/40 text-white/40 cursor-wait" : ""
              }`}
              disabled={isSubmitting}
            >
              {!isSubmitting ? "Enviar" : "Enviando..."}
            </button>
            <div className="text-center mt-6">
              <span className="text-neutral-500 text-sm">
                ??Tuviste alg??n inconveniente o tenes alguna sugerencia sobre el
                cuestionario?
              </span>
              <Link
                to="/feedback"
                className="text-indigo-400 ml-2 mt-4 text-sm hover:bg-indigo-700/20 hover:text-indigo-200 py-1 px-2 rounded-md z-10"
              >
                dejanosla aca.
              </Link>
            </div>
          </motion.div>
        </LayoutGroup>
      </form>
    </motion.div>
  );
};

export default Home;

{
  /* <motion.button
  onClick={onClick}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
  className="bg-indigo-900 text-white py-1 px-4 place-self-center rounded-md mt-10"
>
  Volver al inicio
</motion.button> */
}

const RenderIntroScreen = ({ handleIntroState }) => {
  return (
    <motion.div
      className="fixed inset-0 z-20 grid place-items-center h-full w-full bg-neutral-900 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col bg-neutral-800 w-full md:w-96 px-4 py-6 rounded-md">
        <h2 className="text-2xl text-white">
          Cursas en el instituto belgrano?
        </h2>
        <div className="ml-auto">
          <button
            className="bg-neutral-700/50  text-white py-1 w-20 rounded-md"
            onClick={() => handleIntroState(false)}
          >
            No
          </button>
          <button
            className="bg-indigo-800 text-white py-1 w-20 place-self-center rounded-md mt-10 ml-3"
            onClick={() => handleIntroState(true)}
          >
            Si
          </button>
        </div>
      </div>
    </motion.div>
  );
};
