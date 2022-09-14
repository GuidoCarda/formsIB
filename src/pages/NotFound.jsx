import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid  min-h-screen place-content-center text-center">
      <h1 className="text-4xl text-white">Oh ops, algo salio mal</h1>
      <p className="text-md text-neutral-400 mt-4">
        Creo que tengo que buscar otra carrera
      </p>
      <Link
        to="/"
        className="text-white place-self-center mt-6 bg-indigo-900 w-fit py-1 px-4 rounded-md self-end mb-6 hover:bg-indigo-800"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
