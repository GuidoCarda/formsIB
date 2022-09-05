import React, { useContext, useState } from 'react'
import {useNavigate }from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../context/AuthContext';


const Admin = () => {
//PRUEBA DE CONSULTAS DE DATOS
const [email, setEmail] = useState('');
const [psw, setPsw] = useState('');


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

const navigate = useNavigate()

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
const {setAuth} = useContext(AuthContext); //Se importa el contexto


const authMail = getAuth();
const singIn = () => {
  signInWithEmailAndPassword(authMail, email, psw)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    if (user.accessToken != null){
      setAuth(true)
      navigate("/dashboard")
      console.log('Nueva pagina')
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}


  return (
    <div className="relative overflow-hidden min-h-screen h-full flex items-center justify-center bg-neutral-900 text-slate-200 py-2">
    <div className="absolute w-52 h-52 bg-purple-500 top-5 -right-20 rounded-full filter blur-2xl  opacity-10 "></div>
    <div className="absolute w-96 h-96 bg-teal-500 top-29 -left-40 rounded-full filter blur-2xl opacity-10  "></div>
    <div className="absolute w-96 h-96 bg-violet-500 -bottom-2 -right-20 rounded-full filter  blur-2xl opacity-10 "></div>
    <form
        className="focus:outline-none flex flex-col items-center justify-center focus:border-indigo-900 bg-neutral-800 border-2 border-neutral-800 h-auto rounded-md w-auto px-2 mb-"
    >
        <div className="relative">
          <label htmlFor="email">Email</label>
          <input
            onChange={(ev) => setEmail(ev.target.value)}
            placeholder="Email"
            className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-10"
          />
        </div>
        <div className="relative">
          <label htmlFor="psw">Contraseña</label>
          <input
            onChange={(ev) => setPsw(ev.target.value)}
            placeholder="Contraseña"
            className="focus:outline-none focus:border-indigo-900 bg-neutral-900 border-2 border-neutral-800 h-10 rounded-md w-full px-2 mb-10"
          />
        </div>
        <button
          onClick={singIn}
          type="button"
          className="bg-indigo-700 w-96 py-2 rounded-md mt-5 text-white font-bold"
        >
          Enviar
        </button>
    </form>


    </div>
  )
}

export default Admin