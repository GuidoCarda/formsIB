import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const auth = getAuth();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <Link to="/">home</Link>
      DashBoard
      <button
        className="bg-indigo-900 text-white py-2 px-6"
        onClick={handleSignOut}
      >
        Log out
      </button>
    </div>
  );
};

export default DashBoard;
