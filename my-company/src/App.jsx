import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import Services from "./Services";
import Home from "./Home";
import {
  Route,
  Routes,
} from "react-router-dom";
// This is the main application component for the React app
function App() {
  
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <p>© 2023 My Company</p>
        </footer>
      </div>
    </>
  );
}

export default App;
