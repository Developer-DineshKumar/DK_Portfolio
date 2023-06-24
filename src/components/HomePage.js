import "./HomePageStyles.css"
import React from 'react'
import IntroImg from "../assets/nathan-riley-9q3I8XhesQI-unsplash.jpg"
import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
    <div className="home">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntoImg" />
        </div>
        <div className="content">
            <p>Hi, I am Dinesh Kumar</p>
            <h1>Fullstack Developer.</h1>
            <div>
            <Link to="/Project" className="btn">Projects</Link>
            <Link to="/Contact" className="btn-light">Contact</Link>
            </div>
         </div>
    </div>
    </>
  )
}

export default HomePage