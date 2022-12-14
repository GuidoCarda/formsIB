import React from "react";

//Conponent logic handling and animations
import { Listbox, Transition } from "@headlessui/react";

//Form handling
import { useController } from "react-hook-form";

export const carreras = [
  { id: 1, name: "Desarrollo de software" },
  { id: 2, name: "Turismo" },
  { id: 3, name: "Hoteleria" },
  { id: 4, name: "Seguridad laboral" },
  { id: 5, name: "Traductorado" },
  { id: 6, name: "Recursos Humanos" },
];

const CustomSelect = (props) => {
  const {
    field: { value, onChange },
  } = useController(props);

  // console.log(value);

  return (
    <Listbox
      className="relative mb-10 z-10"
      value={value}
      onChange={onChange}
      as="div"
    >
      <Listbox.Button className="focus:outline-none focus:border-indigo-900 w-full h-10 bg-neutral-900 text-neutral-200  rounded-md border-neutral-800 border-2 flex items-center justify-between px-2 hover:cursor-pointer">
        {value ? value : "Selecciona tu carrera!"}
      </Listbox.Button>
      <Transition
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-90 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-300 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Listbox.Options className="outline-indigo-600 absolute  mt-2  w-full bg-neutral-800 rounded-md border-neutral-800 border-2 flex flex-col gap-2 justify-center p-2 hover:cursor-pointer">
          {carreras.map((carrera) => (
            <Listbox.Option
              className={({ active }) =>
                `relative cursor-default select-none text-left p-2 rounded-sm ${
                  active ? "bg-neutral-700 text-gray-300" : "text-gray-300"
                } ${
                  value === carrera.name
                    ? "bg-indigo-300 text-indigo-800 font-bold"
                    : ""
                }`
              }
              key={carrera.id}
              value={carrera.name}
            >
              {carrera.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default CustomSelect;
