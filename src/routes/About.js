import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommonPage from '../components/CommonPage'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <CommonPage heading="ABOUT." text="I am Fullstack Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About