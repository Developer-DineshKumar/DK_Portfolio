import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommonPage from "../components/CommonPage";
import Task from "../components/Task";

const Project = (props) => {
  const { togglemode, toggleClick, Darkmode } = props;
  return (
    <div>
      <Navbar
        togglemode={togglemode}
        toggleClick={toggleClick}
        Darkmode={Darkmode}
      />
      <CommonPage
        heading="PROJECTS."
        text="some of my recent projects"
        togglemode={togglemode}
        toggleClick={toggleClick}
        Darkmode={Darkmode}
      />
      <Task togglemode={togglemode} />
      <Footer togglemode={togglemode} />
    </div>
  );
};

export default Project;
