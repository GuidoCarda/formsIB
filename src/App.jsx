import React from "react";

//Context
import AuthProvider from "./context/AuthContext";

//Routing
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";

//Pages
import Admin from "./pages/Admin";
import DashBoard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

//Animations
import { AnimatePresence } from "framer-motion";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/feedback" element={<Feedback />} />
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
