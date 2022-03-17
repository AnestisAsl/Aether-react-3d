import React from "react";
import Home from "./home";
import "./styles/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charts from "./charts";
import About from "./about";
import ErrorPage from "./404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Charts" element={<Charts />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
