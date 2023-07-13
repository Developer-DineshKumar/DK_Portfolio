import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommonPage from "../components/CommonPage";
import AboutContent from "../components/AboutContent";

const About = (props) => {
  const { togglemode, toggleClick, Darkmode } = props;
  return (
    <div>
      <Navbar
        togglemode={togglemode}
        toggleClick={toggleClick}
        Darkmode={Darkmode}
      />
      <CommonPage
        heading="ABOUT."
        text="I am Fullstack Developer."
        togglemode={togglemode}
        toggleClick={toggleClick}
        Darkmode={Darkmode}
      />
      <AboutContent togglemode={togglemode} />

      <Footer
        togglemode={togglemode}
        toggleClick={toggleClick}
        Darkmode={Darkmode}
      />
    </div>
  );
};

export default About;
