import {React, useContext}from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import Dashboard from './Dashboard';

const useAuth = () => {
    const user = {isLogged: true}
    return user && user.isLogged
}

const ProtectedRoute = () => {
    const {auth} = useContext(AuthContext);
    const isAuth = useAuth();
    return isAuth && auth ? <Dashboard/> : <Navigate to="/admin"/>; 
  };

  export default ProtectedRoute;