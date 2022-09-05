import { React, useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { authorizedUser } = useContext(AuthContext);
  const location = useLocation(); // permite volver a la pagina anterior en el historial

  // Outlet es un componente que nos permite renderizar los componentes de las rutas hijas

  return authorizedUser ? (
    <Outlet />
  ) : (
    <Navigate to="/admin" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
