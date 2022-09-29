import React from "react";

//Context
import AuthProvider from "./context/AuthContext";

//Routing
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";

//Pages
import Login from "./pages/Login";
import DashBoard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

//Animations
import { AnimatePresence } from "framer-motion";
import Feedback from "./pages/Feedback";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </AuthProvider>
  );
}

export default App;
