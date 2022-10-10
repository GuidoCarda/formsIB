import React, { useState, useEffect, useContext } from "react";

//Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//Routing
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

//Animations
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Input from "../components/Input";

const Login = () => {
  //PRUEBA DE CONSULTAS DE DATOS
  const [authError, setAuthError] = useState(null);

  const defaultValues = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  //REDIRECCION DE PAGINA
  const navigate = useNavigate();

  //UTILIZACION DE CONTEXTO
  const { authorizedUser, setAuthorizedUser } = useContext(AuthContext); //Se importa el contexto

  const onSubmit = (userData) => {
    const { email, password } = userData;
    signIn(email, password);
  };

  const auth = getAuth();
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.accessToken != null) {
          setAuthorizedUser(user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError({ errorCode, errorMessage });
      });
  };

  // Esto ejecuta cada vez que authorizedUser cambia. Al ejecutarse checkea si hay un usuario autorizado. Si lo hay redirije a la pag correspondiente
  useEffect(() => {
    if (authorizedUser) return navigate("/dashboard");
  }, [authorizedUser]);

  if (authError) {
    return (
      <div className="min-h-screen grid place-content-center text-white">
        {" "}
        <div className="bg-neutral-800 min-w-[400px] px-4  py-6 rounded-md flex flex-col">
          <h1 className="text-2xl mb-6 ">Ups usuario no autorizado</h1>{" "}
          <div className="text-neutral-300">
            <p>{authError?.errorCode}</p>
            <p>{authError?.errorMessage}</p>
          </div>
          <button
            className="bg-indigo-900 text-white p-3 rounded-md mt-4"
            onClick={() => setAuthError(null)}
          >
            {" "}
            Volver a intentarlo
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative overflow-hidden min-h-screen h-full flex flex-col items-center justify-center bg-neutral-900 text-slate-200 py-2 px-6"
    >
      <div className="absolute w-52 h-52 bg-purple-500 top-5 -right-20 rounded-full filter blur-2xl  opacity-10 "></div>
      <div className="absolute w-96 h-96 bg-teal-500 top-29 -left-40 rounded-full filter blur-2xl opacity-10  "></div>
      <div className="absolute w-96 h-96 bg-violet-500 -bottom-2 -right-20 rounded-full filter  blur-2xl opacity-10 "></div>
      <div className="w-full sm:w-[400px] px-4 py-2 flex flex-col text-sm text-neutral-300 mb-4 bg-indigo-900/20 border-2 border-indigo-900 rounded-md">
        <p>
          Tené en cuenta que por el momento solo podran inicar sesion usuarios
          con permisos de admistrador
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" w-full sm:w-[400px]  z-10 flex flex-col items-center justify-center focus:border-indigo-900 bg-neutral-800/60 filter backdrop-blur-md border-2 border-neutral-800 h-auto rounded-md  px-4 py-8"
      >
        <Input
          label="email"
          type={"text"}
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
          label="contraseña"
          type={"password"}
          inputName="password"
          register={register}
          errors={errors}
          validate={{
            required: (v) => v.trim().length > 0 || "Campo requerido",
          }}
        />
        <button className="bg-indigo-700 w-full py-2 rounded-md mt-5 text-white font-bold">
          Enviar
        </button>
      </form>
      <Link
        to="/"
        className="text-indigo-400 mt-4 text-sm hover:bg-indigo-700/20 hover:text-indigo-200 py-1 px-2 rounded-md z-10"
      >
        volver a la pagina de formulario
      </Link>
    </motion.div>
  );
};

export default Login;
