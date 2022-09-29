import React from "react";

const AboutUs = () => {
  return (
    <div className="text-white py-10 px-4 sm:p-0 min-h-screen grid place-content-center text-center">
      <h1 className="text-4xl text-bold mb-6 ">Sobre Nosotros</h1>
      <p className="max-w-md mx-auto mb-10 text-neutral-300">
        Somos un grupo de estudiantes de segundo año de desarrollo de software
        en el Instituto Belgrano
      </p>
      <div className="grid md:grid-cols-3  gap-12">
        <div className="text-center flex flex-col items-center">
          <div className="h-40 w-40 mb-4 bg-gradient-to-tr from-indigo-500 to-indigo-400 rounded-md"></div>
          <h2 className="text-2xl">Guido Cardarelli</h2>
          <span className="text-neutral-400">@guidocarda</span>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-40 w-40 mb-4 bg-gradient-to-tr from-indigo-500 to-indigo-400 rounded-md"></div>
          <h2 className="text-2xl">Joaquin Vesco Aparicio</h2>
          <span className="text-neutral-400">@joacovesapa</span>
        </div>
        <div className="text-center flex flex-col items-center">
          <div className="h-40 w-40 mb-4 bg-gradient-to-tr from-indigo-500 to-indigo-400 rounded-md"></div>
          <h2 className="text-2xl">Mateo Salguero</h2>
          <span className="text-neutral-400">@matesalguero</span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
