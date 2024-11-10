import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import Details from "./components/Details";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contato from "./components/Contact/Contato";

export function AppRoutes() {
  
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/details/:id" element={<Details />} /> {/* Adiciona o parâmetro :id */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contato />} />
    </Routes>
  );
}
