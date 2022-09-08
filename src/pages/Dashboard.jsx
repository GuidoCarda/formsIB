import { getAuth, signOut } from "firebase/auth";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";

const DashBoard = () => {
  const [dashboardData, setDashboardData] = useState([]);

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

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "survey"));
    const surveyData = querySnapshot.docs.map((doc) => doc.data());
    setDashboardData(surveyData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen h-full flex flex-col bg-neutral-900 text-slate-200 py-2 px-6">
      <div className="absolute w-52 h-52 bg-purple-500 top-5 -right-20 rounded-full filter blur-2xl  opacity-10 "></div>
      <div className="absolute w-96 h-96 bg-teal-500 top-29 -left-40 rounded-full filter blur-2xl opacity-10  "></div>
      <div className="absolute w-96 h-96 bg-violet-500 -bottom-2 -right-20 rounded-full filter  blur-2xl opacity-10 "></div>
      <div className="w-full md:max-w-screen-xl border-2 border-white/20 mx-auto z-10">
        <nav className="flex py-4">
          <Link
            to="/"
            className="bg-neutral-800/60  text-white py-1 px-4 rounded-md "
          >
            home
          </Link>
          <button
            className="bg-indigo-900 text-white py-1 px-4 rounded-md ml-auto"
            onClick={handleSignOut}
          >
            Log out
          </button>
        </nav>
        <div className="mt-10">
          <h1 className="mb-6 text-4xl">Carreras</h1>
          <div className="grid md:grid-cols-4 gap-4 mb-16">
            <div className="h-20 bg-neutral-800 rounded-md flex items-center gap-4 p-4">
              <span className="bg-indigo-800 h-12 w-12 block rounded md"></span>
              <div>
                <h3 className="relative top-1 text-neutral-400">Turismo</h3>
                <p className="font-semibold">30</p>
              </div>
            </div>
            {Array(5)
              .fill("")
              .map((_, idx) => (
                <div
                  key={idx}
                  className="h-20 bg-neutral-800 rounded-md flex items-center gap-4 p-4"
                >
                  <span className="bg-indigo-800 h-12 w-12 block rounded md"></span>
                  <div>
                    <h3 className="relative top-1 text-neutral-400">Turismo</h3>
                    <p className="font-semibold">30</p>
                  </div>
                </div>
              ))}
          </div>
          <h1 className="mb-6 text-4xl">Más Jugados</h1>
          <section className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-neutral-800 rounded-md p-4">
              <div className="flex justify-between text-neutral-400 pb-2 mb-2">
                <span>Valorant</span>
                <span>prom edad</span>
                <span>total</span>
              </div>
              <ul className="flex flex-col gap-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <li key={i}>
                      <div className="flex justify-between">
                        <p>Valorant</p>
                        <p>20 años</p>
                        <p> 124</p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="bg-neutral-800 rounded-md p-4">
              <div className="flex justify-between text-neutral-400 pb-2 mb-2">
                <span>Nombre</span>
                <span>Edad</span>
                <span>Email</span>
                <span>Idea</span>
              </div>
              <ul className="flex flex-col gap-4">
                {dashboardData &&
                  dashboardData.map(({ fullName, age, email, gameIdea }, i) => (
                    <li>
                      <div key={i} className="flex justify-between">
                        <p>{fullName}</p>
                        <p>{age}</p>
                        <p>{email}</p>
                        <p>{gameIdea}</p>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
