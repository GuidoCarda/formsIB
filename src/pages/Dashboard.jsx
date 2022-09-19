import React, { useState, useEffect } from "react";

//Firebase
import { collection, getDocs, query } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { db } from "../firebase/firebase";

//Routing
import { Link } from "react-router-dom";

//Animations
import { motion } from "framer-motion";

//Components
import RepliesListContainer from "../components/RepliesListContainer";

//Placeholder data
import { carreras } from "../components/CustomSelect";
import Dropdown from "../components/Dropdown";

const placeholderData = [
  {
    name: "guido",
    age: 21,
    email: "guidocarda@hotmail.com",
    gameIdea:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque ante, maximus eget diam vel, gravida fermentum felis. Nulla at quam auctor, volutpat dui et, dignissim lorem. Vivamus in justo sed justo semper laoreet. Nullam consectetur quam at sollicitudin dignissim. ",
    plays: true,
    gamesPlayed: ["valorant", "csgo"],
  },
  {
    name: "Joanco",
    age: 21,
    email: "guidocarda@hotmail.com",
    gameIdea:
      "Nam luctus eu erat vitae cursus. Proin maximus sagittis mi scelerisque dignissim. Ut vitae pulvinar nulla, at molestie dui. Nam vulputate felis magna, eget viverra nulla sollicitudin et. Nullam pulvinar massa erat, mollis ultricies nisl aliquet ut. Maecenas luctus aliquet tristique. Vestibulum nec blandit orci. Curabitur nec euismod dolor. Donec vel est quis leo vulputate finibus. Vestibulum sed tincidunt lacus. Donec ullamcorper diam ligula. Nulla ut urna non enim cursus pellentesque a non erat.",
    plays: false,
    gamesPlayed: "",
  },
  {
    name: "Sorento",
    age: 21,
    email: "guidocarda@hotmail.com",
    gameIdea:
      "Eget viverra nulla sollicitudin et. Nullam pulvinar massa erat, mollis ultricies nisl aliquet ut. Maecenas luctus aliquet tristique. Vestibulum nec blandit orci. Curabitur nec euismod dolor. Donec vel est quis leo vulputate finibus. Vestibulum sed tincidunt lacus. Donec ullamcorper diam ligula. Nulla ut urna non enim cursus pellentesque a non erat.",
    plays: false,
    gamesPlayed: "",
  },
  {
    name: "guido",
    age: 21,
    email: "guidocarda@hotmail.com",
    gameIdea:
      "Eget viverra nulla sollicitudin et. Nullam pulvinar massa erat, mollis ultricies nisl aliquet ut. Maecenas luctus aliquet tristique. Vestibulum nec blandit orci. Curabitur nec euismod dolor. Donec vel est quis leo vulputate finibus. Vestibulum sed tincidunt lacus. Donec ullamcorper diam ligula. Nulla ut urna non enim cursus pellentesque a non erat.",
    plays: true,
    gamesPlayed: ["valorant", "csgo", "souls"],
  },
];

const DashBoard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dropdownVal, setDropdownVal] = useState(null);
  const [filterQuery, setFilterQuery] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    sortBy(dropdownVal);
  }, [dropdownVal]);

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

  const handleFiltering = (query) => {
    const dataCopy = [...dashboardData];
    if (query === "juega") return dataCopy.filter((v) => v.plays);
    if (query === "no-juega") return dataCopy.filter((v) => !v.plays);
    return null;
  };

  const filteredData = handleFiltering(filterQuery);

  const handleDropdownClick = (value) => {
    setDropdownVal(value);
  };

  const sortBy = (condition) => {
    const dataCopy = [...dashboardData];

    if (condition === "fecha") {
      dataCopy.sort(
        (replyA, replyB) => replyA.createdAt.seconds - replyB.createdAt.seconds
      );
    }
    if (condition == "nombre") {
      dataCopy.sort((replyA, replyB) => replyA.name.localeCompare(replyB.name));
    }
    setDashboardData(dataCopy);
  };

  const handleFilterClick = (e) => {
    const value = e.target.value;
    if (filterQuery === value) {
      e.target.checked = false;
      return setFilterQuery(null);
    }
    setFilterQuery(value);
  };

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "survey"));
    const surveyData = querySnapshot.docs.map((doc) => doc.data());
    setDashboardData(surveyData);
    setLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative overflow-hidden min-h-screen flex flex-col bg-neutral-900 text-slate-200 py-2 px-6"
    >
      <div className="absolute w-52 h-52 bg-purple-500 top-5 -right-20 rounded-full filter blur-2xl  opacity-10 "></div>
      <div className="absolute w-96 h-96 bg-teal-500 top-29 -left-40 rounded-full filter blur-2xl opacity-10  "></div>
      <div className="absolute w-96 h-96 bg-violet-500 -bottom-2 -right-20 rounded-full filter  blur-2xl opacity-10 "></div>
      <div className="w-full md:max-w-screen-xl mx-auto z-10">
        <nav className="flex py-4">
          <Link
            to="/"
            className="bg-neutral-800/60  text-white py-1 px-4 rounded-md"
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
            {carreras.map((carrera) => (
              <div
                key={carrera.id}
                className="h-20 bg-neutral-800 rounded-md flex items-center gap-4 p-4"
              >
                <span className="bg-indigo-800 h-12 w-12 block rounded md"></span>
                <div>
                  <h3 className="relative top-1 text-neutral-400">
                    {carrera.name}
                  </h3>
                  <p className="font-semibold">30</p>
                </div>
              </div>
            ))}
          </div>

          {/* replies */}
          <section className="relative my-4 grid gap-y-4  grid-cols-1 md:grid-cols-4 md:gap-4">
            <div className="mb-6 col-span-full order-1 md:col-span-3 md:order-none flex flex-wrap justify-between items-center">
              <h1 className="text-4xl">Ideas</h1>

              <Dropdown
                handleDropdownClick={handleDropdownClick}
                label="ordenar por"
                menuItems={["fecha", "nombre"]}
              />
            </div>

            <div className="bg-neutral-800 order-3 rounded-md md:order-none p-4 md:col-span-3">
              <RepliesListContainer
                replies={filteredData ? filteredData : dashboardData}
                loading={loading}
              />
            </div>

            <div className="bg-neutral-800 order-2 rounded-md md:order-none w-full p-4 h-min ">
              <h2 className="text-2xl mb-4">Resumen</h2>
              {dashboardData.lenght !== 0 && !loading && (
                <>
                  <p>{dashboardData.length} respuestas</p>
                  <p>
                    {dashboardData.filter((value) => value.plays).length} juegan
                    videojuegos
                  </p>
                </>
              )}
              <p className="text-neutral-400 w-full mt-2">filtrar por:</p>
              {(!loading || dashboardData.lenght === 0) && (
                <div className="flex flex-wrap rounded-md mt-2 ">
                  <div className="flex flex-col flex-grow gap-2  ">
                    <div className="flex w-full items-center gap-2 border-white/5 bg-white/5 rounded-md h-10 ">
                      <input
                        type={"radio"}
                        id="juega"
                        name="juega"
                        value="juega"
                        className="w-4 h-4 p-2 ml-2 accent-indigo-500"
                        onClick={handleFilterClick}
                      />
                      <label
                        htmlFor="juega"
                        className="w-full h-full flex items-center"
                      >
                        Juega
                      </label>
                    </div>
                    <div className="flex w-full items-center gap-2 border-white/5 bg-white/5 rounded-md h-10 ">
                      <input
                        type={"radio"}
                        id="no-juega"
                        value="no-juega"
                        name="juega"
                        className="w-4 h-4 ml-2 accent-indigo-500"
                        onClick={handleFilterClick}
                      />
                      <label
                        htmlFor="no-juega"
                        className="w-full h-full flex items-center"
                      >
                        no juega
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default DashBoard;
