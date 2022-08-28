import { Listbox } from "@headlessui/react";
import { useField } from "formik";
import React, { useState } from "react";

const carreras = [
  { id: 1, name: "Desarrollo de software" },
  { id: 2, name: "Turismo" },
  { id: 3, name: "Hoteleria" },
  { id: 4, name: "Seguridad laboral" },
  { id: 5, name: "Traductorado" },
  { id: 6, name: "Recursos Humanos" },
];
const CustomSelect = ({ name, value, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(carreras[0]);

  console.log(value);
  return (
    <Listbox
      className="relative "
      value={selectedOption.name}
      onChange={setSelectedOption}
      as="div"
      type="text"
      name={name}
    >
      <Listbox.Button className="focus:outline-none mb-4 focus:border-indigo-900 w-full h-10 bg-neutral-800 rounded-md border-neutral-800 border-2 flex items-center justify-between px-2 hover:cursor-pointer">
        {selectedOption.name}
      </Listbox.Button>
      <Listbox.Options className="absolute z-10 top-12 w-full bg-neutral-800 rounded-md border-neutral-800 border-2 flex flex-col gap-2 justify-center p-2 hover:cursor-pointer">
        {carreras.map((carrera) => (
          <Listbox.Option
            className={`focus:outline-none focus:bg-neutral-700 text-left p-2 hover:bg-neutral-700 rounded-sm ${
              selectedOption.name === carrera.name
                ? "bg-indigo-700 hover:bg-indigo-700"
                : ""
            }`}
            key={carrera.id}
            value={carrera}
          >
            {carrera.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default CustomSelect;
