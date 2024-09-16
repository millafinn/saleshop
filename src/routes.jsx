import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Main from "./components/Main";

export function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}
