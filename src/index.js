import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloPage from "./components/HelloPage";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/sdk-hello" element={<HelloPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
