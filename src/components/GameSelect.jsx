import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

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

function GameSelect() {
  const [selectedGames, setSelectedGames] = useState([]);

  const isSelected = (value) =>
    selectedGames.find((element) => element === value);

  const handleGameSelection = (game) => {
    if (selectedGames.includes(game)) {
      const filteredSelection = selectedGames.filter(
        (alreadySelectedGame) => alreadySelectedGame !== game
      );
      setSelectedGames(filteredSelection);
    } else {
      setSelectedGames([...selectedGames, game]);
    }
  };

  return (
    <>
      <label className="mb-3">Jugas alguno de estos juegos?</label>
      <RadioGroup
        className=" flex flex-wrap gap-4 accent-indigo-500"
        value={selectedGames}
        onChange={handleGameSelection}
      >
        {games.map((game) => (
          <RadioGroup.Option
            value={game.toLowerCase()}
            className="bg-neutral-900  rounded-md h-10 overflow-hidden"
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
