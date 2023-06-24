import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommonPage from '../components/CommonPage'
import Task from '../components/Task'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <CommonPage heading="PROJECTS." text="some of my recent projects"/>
      <Task/>
      <Footer/>

    </div>
  )
}

export default Project