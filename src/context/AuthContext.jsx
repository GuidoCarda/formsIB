import React, { createContext, useState, useEffect } from "react";

//Firebase
import { getAuth } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authorizedUser, setAuthorizedUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    //Checkeo si en la sesion actual hay un usuario autentificado
    auth.onAuthStateChanged((user) => {
      setAuthorizedUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ authorizedUser, setAuthorizedUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
