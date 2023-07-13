import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";

const Home = (props) => {
  const { togglemode, toggleClick, Darkmode } = props;
  return (
    <div>
      <Navbar
        togglemode={togglemode}
        toggleClick={toggleClick}
        Darkmode={Darkmode}
      />
      <HomePage togglemode={togglemode} />
      <Footer togglemode={togglemode} />
    </div>
  );
};

export default Home;
