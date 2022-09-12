import React from "react";
import RepliesListItem from "./RepliesListItem";

const RepliesListContainer = ({ replies, loading }) => {
  if (loading) {
    return (
      <>
        <h2 className="text-xl text-center">Cargando...!</h2>
      </>
    );
  }

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
            <RepliesListItem replyData={reply} idx={idx} />
          ))}
      </ul>
    </>
  );
};

export default RepliesListContainer;
