import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthContext";
import Admin from "./pages/Admin";
import DashBoard from "./pages/Dashboard";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin/>}/>
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<DashBoard/>}/>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
