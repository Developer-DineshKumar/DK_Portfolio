import "./Profile.css";
import React from "react";
import Profilepic from "../assets/Profile.jpg";
import Resume from "../assets/Dinesh Kumar Resume (3).pdf";

const Profile = (props) => {
  const { togglemode } = props;
  return (
    <div className={togglemode}>
      <div className="profile-container">
        <div className="details">
          <p>Name: Nadakuduru Dinesh Kumar </p>
          <p>Education: B.tech</p>
          <button className="btn-light">
            <a href={Resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </button>
        </div>
        <div>
          <img src={Profilepic} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
