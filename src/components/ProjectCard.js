/* eslint-disable jsx-a11y/img-redundant-alt */
import "./ProjectCardStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="details">
        <p>{props.text}</p>
        <div className="btns">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
