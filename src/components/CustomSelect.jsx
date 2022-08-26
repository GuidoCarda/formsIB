import { useField } from "formik";
import React, { forwardRef, useState } from "react";

const CustomSelect = forwardRef(
  ({ isOpen, handleToggle, handleSelectChange }, ref) => {
    const [userSelection, setUserSelection] = useState("");

    const handleSelection = (value) => {
      setUserSelection(value);
      handleSelectChange(value);
      handleToggle();
    };

    const carreras = [
      {
        id: 1,
        value: "Desarrollo de software",
      },
      {
        id: 2,
        value: "Turismo",
      },
      {
        id: 3,
        value: "Hoteleria",
      },
      {
        id: 4,
        value: "Seguridad laboral",
      },
      {
        id: 5,
        value: "Traductorado",
      },
      {
        id: 6,
        value: "Recursos Humanos",
      },
    ];

    return (
      <div ref={ref} className="relative mb-4">
        <button
          type="button"
          onClick={handleToggle}
          className="focus:outline-none focus:border-indigo-900 w-full h-10 bg-neutral-800 rounded-md border-neutral-800 border-2 flex items-center justify-between px-2 hover:cursor-pointer"
        >
          <span>{userSelection ? userSelection : "Selecciona tu carrera"}</span>
          <span>{isOpen ? "close" : "open"}</span>
        </button>

        {isOpen ? (
          <div className="absolute z-10 top-12 w-full bg-neutral-800 rounded-md border-neutral-800 border-2 flex flex-col gap-2 justify-center p-2 hover:cursor-pointer">
            {carreras.map((carrera) => (
              <button
                type="button"
                onClick={() => handleSelection(carrera.value)}
                className={`focus:outline-none focus:bg-neutral-700 text-left p-2 hover:bg-neutral-700 rounded-sm ${
                  userSelection === carrera.value
                    ? "bg-indigo-700 hover:bg-indigo-700"
                    : ""
                }`}
              >
                {carrera.value}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);

export default CustomSelect;
