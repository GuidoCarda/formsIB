import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useController } from "react-hook-form";
import { useEffect } from "react";

const games = [
  "Valorant",
  "CSGO",
  "LOL",
  "WoW",
  "TFT",
  "Hearthstorm",
  "Souls",
  "GTA V",
  "Clash Royale",
  "Free Fire",
];

function GameSelect(props) {
  const [selectedGames, setSelectedGames] = useState([]);

  const {
    field: { value, onChange },
  } = useController(props);

  const isSelected = (value) =>
    selectedGames.find((element) => element === value);

  // handles selection and toggling of radio's
  const handleGameSelection = (game) => {
    if (isSelected(game)) {
      const filteredSelection = selectedGames.filter(
        (alreadySelectedGame) => alreadySelectedGame !== game
      );
      return setSelectedGames(filteredSelection);
    }

    setSelectedGames((currentValues) => [...currentValues, game]);
  };

  // updates the component value when the state changes
  useEffect(() => {
    onChange(selectedGames);
  }, [selectedGames]);

  return (
    <>
      <label className="inline-block my-3">Jugas alguno de estos juegos?</label>
      <RadioGroup
        className=" flex flex-wrap gap-4 accent-indigo-500 mb-8"
        value={selectedGames}
        onChange={handleGameSelection}
      >
        {games.map((game, idx) => (
          <RadioGroup.Option
            value={game.toLowerCase()}
            className="bg-neutral-900  rounded-md h-10 overflow-hidden"
            key={idx}
          >
            {
              <span
                className={`flex items-center border-2 border-neutral-800 transition-colors rounded-md h-full px-4 overflow-hidden  ${
                  selectedGames.includes(game.toLowerCase())
                    ? "bg-indigo-900 border-indigo-500 text-white"
                    : ""
                }`}
              >
                {game}
              </span>
            }
          </RadioGroup.Option>
        ))}
      </RadioGroup>
    </>
  );
}

export default GameSelect;
