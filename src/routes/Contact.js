/* eslint-disable react/style-prop-object */
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CommonPage from '../components/CommonPage'
import Profile from '../components/Profile'
const Contact = () => {
  return (
    <div>
      <Navbar/>
      <CommonPage heading="Contact" text="show my contact deatails below"/>
      <Profile/>
      <Footer/>
    </div>
  )
}

export default Contact