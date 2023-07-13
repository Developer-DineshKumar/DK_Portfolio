import "./FooterStyle.css";
import React from "react";
import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaGithub,
} from "react-icons/fa";

const Footer = (props) => {
  const { togglemode } = props;
  return (
    <div className={togglemode}>
      <div className="footer">
        <div className="footer-container">
          <div className="details-left">
            <div className="address">
              <FaHome
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <div>
                <p>D.No : 3-140, Near Anjeneyaswamy Temple</p>
                <p>Jagannadhapuram,Tdepalligudem.</p>
                <p>West Godavari District</p>
                <p> A.P-534145</p>
              </div>
            </div>
          </div>
          <div className="details-center">
            <div className="phone">
              <h4>
                <FaPhone
                  size={25}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                9398994199
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={25}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                kumar05dinesh@gmail.com
              </h4>
            </div>
          </div>
          <div className="details-right">
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/dinesh-kumar-nadakuduru-262270148/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={32}
                style={{ color: "#0A66C2", marginRight: "2rem" }}
              />
              <h4 style={{ color: "#0A66C2" }}>Linkedin</h4>
            </a>

            <a
              className="github"
              href="https://github.com/Developer-DineshKumar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={32}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <h4 style={{ color: "#fff" }}>Github</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
