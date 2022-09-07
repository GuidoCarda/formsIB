import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";
import { useEffect } from "react";

const Admin = () => {
  //PRUEBA DE CONSULTAS DE DATOS
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [authError, setAuthError] = useState(null);

  //PRUEBA DE CONSULTAS
  /* const getDatos = async () => {
    try{
        const q = query(collection(db, "personas"));
        const docRes = await getDocs(q);

        console.log(docRes);
        // docRes.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        //   });

    }catch(e){
        console.log(e)
    } 
}*/
  //REDIRECCION DE PAGINA
  const navigate = useNavigate();

  //PRUEBA DE AUTENTICACIONES
  /* const authMail = getAuth();
const singIn = () => {
    signInWithEmailAndPassword(auth, email, psw)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      if (user.accessToken != null){
        navigate("/dashboard")
        console.log('Nueva pagina')
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
 */
  //UTILIZACION DE CONTEXTO
  const { authorizedUser, setAuthorizedUser } = useContext(AuthContext); //Se importa el contexto

  const auth = getAuth();
  const singIn = () => {
    signInWithEmailAndPassword(auth, email, psw)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.accessToken != null) {
          setAuthorizedUser(user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError({ errorCode, errorMessage });
      });
  };

  // Esto ejecuta cada vez que authorizedUser cambia. Al ejecutarse checkea si hay un usuario autorizado. Si lo hay redirije a la pag correspondiente
  useEffect(() => {
    if (authorizedUser) return navigate("/dashboard");
  }, [authorizedUser]);

  if (authError) {
    return (
      <div>
        {" "}
        <h1>Ups usuario no autorizado</h1> <p>{authError?.errorCode}</p>
        <p>{authError?.errorMessage}</p>
        <button
          className="bg-indigo-900 text-white p-3 rounded-md"
          onClick={() => setAuthError(null)}
        >
          {" "}
          Volver a intentarlo
        </button>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden min-h-screen h-full flex flex-col items-center justify-center bg-neutral-900 text-slate-200 py-2 px-6">
      <div className="absolute w-52 h-52 bg-purple-500 top-5 -right-20 rounded-full filter blur-2xl  opacity-10 "></div>
      <div className="absolute w-96 h-96 bg-teal-500 top-29 -left-40 rounded-full filter blur-2xl opacity-10  "></div>
      <div className="absolute w-96 h-96 bg-violet-500 -bottom-2 -right-20 rounded-full filter  blur-2xl opacity-10 "></div>
      <div className="w-full sm:w-[400px] px-4 py-2 flex flex-col text-sm text-neutral-300 mb-4 bg-indigo-900/20 border-2 border-indigo-900 rounded-md">
        <p>
          Tené en cuenta que por el momento solo podran inicar sesion usuarios
          con permisos de admistrador
        </p>
      </div>
      <form className=" w-full sm:w-[400px]  z-10 flex flex-col items-center justify-center focus:border-indigo-900 bg-neutral-800/60 filter backdrop-blur-md border-2 border-neutral-800 h-auto rounded-md  px-4 py-8">
        <div className="relative w-full flex flex-col mb-6">
          <label htmlFor="email">Email</label>
          <input
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="Email"
            className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-full px-2"
          />
        </div>
        <div className="relative w-full flex flex-col  mb-6">
          <label htmlFor="psw">Contraseña</label>
          <input
            onChange={(ev) => setPsw(ev.target.value)}
            type={"password"}
            placeholder="Contraseña"
            className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-full px-2"
          />
        </div>
        <button
          onClick={singIn}
          type="button"
          className="bg-indigo-700 w-full py-2 rounded-md mt-5 text-white font-bold"
        >
          Enviar
        </button>
      </form>
      <Link
        to="/"
        className="text-indigo-400 mt-4 text-sm hover:bg-indigo-700/20 hover:text-indigo-200 py-1 px-2 rounded-md"
      >
        volver a la pagina de formulario
      </Link>
    </div>
  );
};

export default Admin;
