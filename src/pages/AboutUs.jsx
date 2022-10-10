import React from "react";

//Animations
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <main className="text-white py-10 px-4 min-h-screen grid place-content-center text-center ">
        <Link
          to="/"
          className="relative  mb-10 lg:-top-10 lg-mr-10 text-white p-1 rounded-md w-max flex gap-4 items-center hover:bg-neutral-800/20"
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
        <h1 className="text-4xl text-bold mb-6 ">Sobre Nosotros</h1>
        <p className="max-w-md mx-auto mb-10 text-neutral-300">
          Somos un grupo de estudiantes de segundo año de desarrollo de software
          en el Instituto Belgrano
        </p>
        <div className="grid md:grid-cols-3  gap-12">
          <div className="text-center flex flex-col items-center">
            <div className="h-40 w-40 mb-4 bg-gradient-to-tr from-indigo-500 to-indigo-400 rounded-md"></div>
            <h2 className="text-2xl">Guido Cardarelli</h2>
            <a
              className="text-neutral-400"
              href="https://www.instagram.com/guidocarda/"
              target="_blank"
            >
              @guidocarda
            </a>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="h-40 w-40 mb-4 bg-gradient-to-tr from-indigo-500 to-indigo-400 rounded-md"></div>
            <h2 className="text-2xl">Joaquin Vesco Aparicio</h2>
            <a
              className="text-neutral-400"
              href="https://www.instagram.com/joaco.vesapa/"
              target="_blank"
            >
              @joaco.vesapa
            </a>
          </div>
          <div className="text-center flex flex-col items-center">
            <div className="h-40 w-40 mb-4 bg-gradient-to-tr from-indigo-500 to-indigo-400 rounded-md"></div>
            <h2 className="text-2xl">Mateo Salguero</h2>
            <a
              href="https://www.instagram.com/mateesalguero/"
              className="text-neutral-400"
              target="_blank"
            >
              @mateesalguero
            </a>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default AboutUs;
