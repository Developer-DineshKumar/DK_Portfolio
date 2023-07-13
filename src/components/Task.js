/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./ProjectCardStyles.css";
import TaskData from "./TaskData";
import ProjectCard from "./ProjectCard";

const Task = (props) => {
  const { togglemode } = props;
  return (
    <div className={togglemode}>
      <div className="project-container">
        <h1 className="project-heading">Projects</h1>
        <div className="taskdata-container">
          {TaskData.map((value, index) => {
            return (
              <ProjectCard
                key={index}
                imgsrc={value.imgsrc}
                title={value.title}
                text={value.text}
                view={value.view}
                source={value.source}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Task;
