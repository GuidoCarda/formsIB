import React, { useEffect, useRef, useState } from "react";
import { Field, Formik, useFormik } from "formik";
import CustomSelect from "../components/CustomSelect";

// const useClickOutside = (handler) => {
//   const domNode = useRef();
// };

const handler = () => {
  console.log("Click");
};

const Home = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleSelectToggle = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 15) {
      errors.lastName = "Must be 15 characters or less";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      age: "",
      email: "",
      degree: "",
      gameIdea: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="relative overflow-hidden min-h-screen h-full flex items-center justify-center bg-neutral-900 text-slate-200">
      <div className="absolute w-96 h-96 bg-purple-800 top-5 -right-52 rounded-full filter blur-3xl opacity-20   "></div>
      <div className="absolute w-96 h-96 bg-teal-800 top-29 -left-40 rounded-full filter blur-3xl opacity-10  "></div>
      <div className="absolute w-96 h-96 bg-sky-800 -bottom-2 -right-20 rounded-full filter  blur-3xl opacity-10 "></div>
      <form
        onSubmit={formik.handleSubmit}
        className="h-full md:max-w-xl px-4 py-12 flex flex-col justify-center gap-2 relative z-10"
      >
        <p>
          Buenas! Somos un grupo de estudiantes de desarrollo de software y
          queriamos pedirte tu ayuda!{" "}
        </p>
        <label htmlFor="fullName">Nombre</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          {...formik.getFieldProps("fullName")}
          className="focus:outline-none focus:border-indigo-900 bg-white/5 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-6"
        />

        {formik.touched.fullName && formik.errors.fullName ? (
          <div> {formik.errors.fullName}</div>
        ) : null}

        <label htmlFor="age">Edad</label>
        <input
          id="age"
          name="age"
          type="text"
          pattern="[0-9]*"
          min={0}
          max={100}
          {...formik.getFieldProps("age")}
          className="focus:outline-none focus:border-indigo-900 bg-white/5 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-6"
        />

        {formik.touched.age && formik.errors.age ? (
          <div>{formik.errors.age}</div>
        ) : null}
        <label htmlFor="email" className="">
          Carrera
        </label>
        <input
          id="email"
          name="email"
          type="email"
          {...formik.getFieldProps("email")}
          className="focus:outline-none focus:border-indigo-900 bg-white/5 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-6"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        {/* <CustomSelect
          ref={menuRef}
          isOpen={isOpen}
          handleToggle={handleSelectToggle}
          {...formik.getFieldProps("degree")}
        ></CustomSelect> */}

        {formik.touched.degree && formik.errors.degree ? (
          <div className="absolute bottom-0 text-red-600 text-sm">
            {formik.errors.degree}
          </div>
        ) : null}

        <div className="relative">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps("email")}
            className="focus:outline-none focus:border-indigo-900 bg-white/5 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-6"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="absolute bottom-0 text-red-600 text-sm">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="text-left flex flex-col gap-2 my-4">
          <p>
            Como proyecto final de programacion debemos llevar a cabo el
            desarrollo de un videojuego y nos encontramos con que no tenemos ni
            idea de cual podria ser la tematica del mismo.
          </p>

          <p>
            Por eso necesitamos tu ayuda y desarrollamos este cuestionario para
            que nos puedas dejarnos tus ideas.
          </p>

          <p>Tene en cuenta que debe ser un videojuego en 3D.</p>
        </div>

        <label htmlFor="gameIdea" className="inline-block ">
          Game idea
        </label>
        <textarea
          id="gameIdea"
          name="gameIdea"
          type="gameIdea"
          {...formik.getFieldProps("gameIdea")}
          className="focus:outline-none focus:border-indigo-900  bg-white/5 border-2 border-neutral-800 rounded-md h-28 w-full p-2 resize-none"
        />
        {formik.touched.gameIdea && formik.errors.gameIdea ? (
          <div>{formik.errors.gameIdea}</div>
        ) : null}

        <button
          type="submit"
          className="bg-indigo-700 w-full py-2 rounded-md mt-5 text-white font-bold"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Home;
