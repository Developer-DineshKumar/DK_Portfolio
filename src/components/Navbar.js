import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = (props) => {
  const { togglemode, toggleClick, Darkmode } = props;
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={togglemode}>
      <div class={color ? "header header-bg" : "header"}>
        <Link to="/">
          <h1 className="title">DK</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Project">Projects</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <div onClick={toggleClick}>
              {Darkmode ? (
                <MdLightMode size={25} style={{ color: "#fff" }} />
              ) : (
                <MdDarkMode size={25} style={{ color: "#fff" }} />
              )}
            </div>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
