import React from "react";

//Animations
import { motion } from "framer-motion";

const RepliesListItem = ({ replyData, i }) => {
  const { name, age, gameIdea, plays, gamesPlayed } = replyData;
  return (
    <motion.li
      className="border-b-2 border-white/5 last-of-type:border-0 pb-4 last-of-type:pb-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: i * 0.3 }}
    >
      <div className="flex flex-col  justify-between">
        <div className="flex items-center gap-2">
          <span className="block h-12 w-12 rounded-md bg-slate-500" />
          <div>
            <h4 className="capitalize  text-xl">{name}</h4>
            <span className="text-sm relative bottom-1.5 text-gray-400">
              {age} años
            </span>
          </div>
          {plays ? (
            <span className="py-1  px-4 ml-auto rounded-md bg-indigo-800/50 text-indigo-400 self-start">
              juega
            </span>
          ) : null}
        </div>
        <p className="text-slate-290 mt-4 first-letter:uppercase">{gameIdea}</p>
        {plays ? (
          <div className="mt-4">
            <span className="text-sm text-gray-400 ">Jugados: </span>

            <ul className="flex flex-wrap gap-2 mt-1">
              {plays &&
                gamesPlayed.map((game, idx) => (
                  <li
                    key={idx}
                    className="py-1 text-sm px-4 rounded-md bg-indigo-800/50 text-indigo-300"
                  >
                    {game}
                  </li>
                ))}
            </ul>
          </div>
        ) : null}
      </div>
    </motion.li>
  );
};

export default RepliesListItem;
