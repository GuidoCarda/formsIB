import React from "react";

//Handling component logic
import { Menu, Transition } from "@headlessui/react";

const Dropdown = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="bg-white/10  text-white py-1 px-2 rounded-md flex gap-4 items-center justify-between hover:outline-2 hover:outline-indigo-500 ">
        {({ open }) => (
          <>
            <span className="">Filtrar por</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`${open && "rotate-180"} w-4 h-4 transition-transform`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </>
        )}
      </Menu.Button>
      <Transition
        enter="transition duration-300 ease-out"
        enterFrom="transform scale-90 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-300 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          className={
            "absolute right-0 mt-2 p-1 w-48 origin-top-right rounded-md bg-neutral-700 filter backdrop-blur-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-none"
          }
        >
          {["fecha", "nombre", "juega", "no juega"].map((menuItem) => (
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && "bg-indigo-500"
                  } flex w-full px-2 py-1 rounded-sm `}
                  href=""
                >
                  {menuItem}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
