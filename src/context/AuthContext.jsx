import { getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import { useEffect } from "react";

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
