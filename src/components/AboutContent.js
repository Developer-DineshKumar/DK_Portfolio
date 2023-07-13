import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import pic1 from "../assets/e1e1b3133ff2d767df3818328b85447e3b0555f0.webp";
import pic2 from "../assets/MERN1.png";
import pic3 from "../assets/py.jpg";

import React from "react";
import Profile from "../components/Profile";

const AboutContent = (props) => {
  const { togglemode } = props;
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I am Fullstack Developer. I create secure responsive applications for
          my clients.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div>
        <Profile togglemode={togglemode} />
      </div>
      <div className="right">
        <h1>Skills</h1>
        <div className="image-container">
          <img src={pic1} className="pic" alt="img" />
          <img src={pic2} className="pic" alt="img" />
          <img src={pic3} className="pic" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
