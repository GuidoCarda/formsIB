import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

function GameSelect() {
  const [plan, setPlan] = useState("startup");

  return (
    <RadioGroup
      className=" flex gap-4 accent-indigo-500"
      value={plan}
      onChange={setPlan}
    >
      <RadioGroup.Option
        value="valorant"
        className=" bg-neutral-800 border-2 border-neutral-900 rounded-md  overflow-hidden "
      >
        {({ checked }) => (
          <span
            className={`flex items-center h-full px-4 ${
              checked ? "bg-indigo-800 text-white" : ""
            }`}
          >
            Valorant
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option
        className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 rounded-md  "
        value="lol"
      >
        {({ checked }) => (
          <span
            className={`flex items-center h-full px-4 ${
              checked ? "bg-indigo-800 text-white" : ""
            }`}
          >
            Lol
          </span>
        )}
      </RadioGroup.Option>

      <RadioGroup.Option
        className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800  rounded-md  "
        value="dota"
      >
        {({ checked }) => (
          <span
            className={`flex items-center h-full px-4 ${
              checked ? "bg-indigo-800 text-white" : ""
            }`}
          >
            Dota
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option
        className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 rounded-md  "
        value="nfs"
      >
        {({ checked }) => (
          <span
            className={`flex items-center h-full px-4 ${
              checked ? "bg-indigo-800 text-white" : ""
            }`}
          >
            NFS
          </span>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option
        className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-auto "
        value="ashe"
      >
        {({ checked }) => (
          <span
            className={`flex items-center h-full px-4 ${
              checked ? "bg-indigo-800 text-white" : ""
            }`}
          >
            Ashe
          </span>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}

export default GameSelect;
