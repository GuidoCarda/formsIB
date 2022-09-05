import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState(false);

  const data = {auth, setAuth};

  return (
    <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider

