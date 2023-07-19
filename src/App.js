import React from "react";
import "./App.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Project from "./routes/Project";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./components/Navbar.js";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [Darkmode, setIsDarkmode] = useState(false);

  const toggleClick = () => {
    setIsDarkmode(!Darkmode);
  };

  const togglemode = Darkmode ? "lightmode" : "darkmode";

  return (
    <div>
      <>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                togglemode={togglemode}
                toggleClick={toggleClick}
                Darkmode={Darkmode}
              />
            }
          />
          <Route
            path="/Project"
            element={
              <Project
                togglemode={togglemode}
                toggleClick={toggleClick}
                Darkmode={Darkmode}
              />
            }
          />
          <Route
            path="/About"
            element={
              <About
                togglemode={togglemode}
                toggleClick={toggleClick}
                Darkmode={Darkmode}
              />
            }
          />
          <Route
            path="/Contact"
            element={
              <Contact
                togglemode={togglemode}
                toggleClick={toggleClick}
                Darkmode={Darkmode}
              />
            }
          />
        </Routes>
      </>
    </div>
  );
}

export default App;
