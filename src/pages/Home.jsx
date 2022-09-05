import React, { useContext } from "react";
import CustomSelect from "../components/CustomSelect";
import GameSelect from "../components/GameSelect";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useForm } from "react-hook-form";
import Input from "../components/Input";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      nombre: "",
      email: "",
      edad: "",
      carreras: "",
      plays: false,
      gamesPlayed: "",
      gameIdea: "",
    },
  });

  const onSubmit = (data) => alert(JSON.stringify(data));

  // console.log(watch("nombre"));
  const plays = watch("plays");

  const postFormData = async (formData) => {
    try {
      const docRef = await addDoc(collection(db, "survey"), formData);
      console.log("documment written with ID " + docRef.id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen h-full flex items-center justify-center bg-neutral-900 text-slate-200 py-2">
      <div className="absolute w-52 h-52 bg-purple-500 top-5 -right-20 rounded-full filter blur-2xl  opacity-10 "></div>
      <div className="absolute w-96 h-96 bg-teal-500 top-29 -left-40 rounded-full filter blur-2xl opacity-10  "></div>
      <div className="absolute w-96 h-96 bg-violet-500 -bottom-2 -right-20 rounded-full filter  blur-2xl opacity-10 "></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full md:max-w-xl px-4 py-12 flex flex-col justify-center gap-2 relative z-10"
      >
        <Link to="/dashboard">dashboard</Link>
        <LayoutGroup>
          <motion.div layout>
            <p className="mb-4">
              Buenas! Somos un grupo de estudiantes de desarrollo de software y
              queriamos pedirte tu ayuda!
            </p>

            <Input
              label="nombre"
              register={register}
              errors={errors}
              placeholder="rosa melano"
              validate={{
                required: (v) => v.length > 0 || "Campo requerido",
              }}
            />

            <Input
              label="email"
              register={register}
              errors={errors}
              placeholder="rosa melano"
              validate={{
                required: (v) => v.length > 0 || "Campo requerido",
                isEmail: (v) =>
                  v.match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  ) || "No es un email valido",
              }}
            />

            <Input
              label="edad"
              register={register}
              errors={errors}
              type={"number"}
              placeholder="rosa melano"
              validate={{
                required: (v) => v.length > 0 || "Campo requerido",
                positive: (v) => parseInt(v) > 0 || "Debe ser mayor a 0",
                lessThanTen: (v) => parseInt(v) < 100 || "Ah sos re troll",
              }}
            />

            {/* <div className="relative">
          <label htmlFor="fullName">Nombre y apellido</label>
          <input
            {...register("fullName", { required: true })}
            placeholder="Rosa melano"
            className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-full px-2 "
          />

          {errors.fullName && (
            <span className=" text-sm mt-2 left-0 text-red-500">
              Este campo es requerido
            </span>
          )}
        </div>

        <div className="relative">
          <label htmlFor="email">Email ( Contacto ) </label>
          <input
            {...register("email", {
              required: true,
              pattern: { value: /^\S+@\S+$/i, message: "Mail invalido" },
            })}
            placeholder="rosamelano@gmail.com"
            className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-10"
          />

          {errors.email && (
            <span className="absolute top-16 text-sm mt-2 left-0 text-red-500">
              {errors?.email?.message
                ? errors?.email?.message
                : "Campo requerido"}
            </span>
          )}
        </div>

        <div className="relative">
          <label>Edad</label>
          <input
            {...register("age", {
              required: true,
              min: { value: 0, message: "Valor invalido" },
              max: { value: 100, message: "Ah sos re troll" },
            })}
            placeholder="20"
            className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-10"
          />

          {errors.age && (
            <span className=" absolute top-16 text-sm mt-2 left-0 text-red-500">
              {errors.age.message
                ? errors.age.message
                : "Este campo es requerido"}
            </span>
          )}
        </div> */}

            <div className="relative">
              <CustomSelect
                name={"carreras"}
                control={control}
                rules={{ required: true }}
              ></CustomSelect>

              {errors.carreras && (
                <span className=" absolute top-10 z-0 text-sm mt-2 left-0 text-red-500">
                  Este campo es requerido
                </span>
              )}
            </div>

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
                {/* <label htmlFor="gamesPlayed">Que juegos soles jugar?</label>
            <input
              {...register("gamesPlayed", { required: plays ? true : false })}
              className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-6"
            /> */}
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

            <div>
              <label htmlFor="gameIdea">Game idea</label>
              <textarea
                placeholder="Un videojuego ambientado en xxx que se trate de xxx y que el objetivo sea xxx ... Vo me entende, algo asi. Iluminanos"
                {...register("gameIdea", { required: true })}
                className="text-sm focus:outline-none focus:border-indigo-900  bg-neutral-900 border-2 border-neutral-800 rounded-md h-32 w-full p-2 resize-none "
              />
            </div>

            <button
              type="submit"
              className="bg-indigo-700 w-full py-2 rounded-md mt-5 text-white font-bold"
            >
              Enviar
            </button>
          </motion.div>
        </LayoutGroup>
      </form>
    </div>
  );
};

export default Home;
