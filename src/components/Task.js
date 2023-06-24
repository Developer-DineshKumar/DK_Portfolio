/* eslint-disable jsx-a11y/img-redundant-alt */
import "./ProjectCardStyles.css"
import TaskData from './TaskData';
import ProjectCard from "./ProjectCard";


import React from 'react'



const Task = () => {
  return (
    <div className="project-container">
        <h1 className="project-heading">Projects</h1>
        <div className="taskdata-container">
            {TaskData.map((value,index) => {
                return (
                    <ProjectCard 
                    key={index} 
                    imgsrc={value.imgsrc}
                    title={value.title}
                    text={value.text}
                    view={value.view}
                    source={value.source}
                    />
                )
            })}


        </div>
    </div>
  )
}

export default Task