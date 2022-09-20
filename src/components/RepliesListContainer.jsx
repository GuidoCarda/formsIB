import React from "react";

//Animations
import { AnimatePresence } from "framer-motion";

//Components
import RepliesListItem from "./RepliesListItem";

const RepliesListContainer = ({ replies, loading }) => {
  //While fetching data
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full w-full rounded-md  animate-pulse">
        <h2 className="text-xl ">Cargando...</h2>
      </div>
    );
  }

  //If there's no data
  if (!loading && replies.length === 0) {
    return (
      <>
        <h2 className="text-xl">Lo sentimos!</h2>
        <p className="text-neutral-400">Aun no hay respuestas</p>
      </>
    );
  }

  return (
    <>
      <ul className="flex flex-col gap-4">
        {replies &&
          replies.map((reply, idx) => (
            <RepliesListItem replyData={reply} key={idx} i={idx} />
          ))}
      </ul>
    </>
  );
};

export default RepliesListContainer;
