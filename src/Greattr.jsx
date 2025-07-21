import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UseExample } from "./hooks/UseExample";
import { About } from "./hooks/About";

const Greattr = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<UseExample />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);

export default Greattr; // ✅ default export
