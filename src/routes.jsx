import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import Details from "./components/Details";

export function AppRoutes() {
  
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/details/:id" element={<Details />} /> {/* Adiciona o parâmetro :id */}
    </Routes>
  );
}
