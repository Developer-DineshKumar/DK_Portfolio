/* eslint-disable react/style-prop-object */
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CommonPage from "../components/CommonPage";
import EmailForm from "../components/EmailForm";
const Contact = (props) => {
  const { togglemode, toggleClick, Darkmode } = props;
  return (
    <div>
      <Navbar
        togglemode={togglemode}
        toggleClick={toggleClick}
        Darkmode={Darkmode}
      />
      <CommonPage
        heading="Contact"
        text="show my contact details below"
        togglemode={togglemode}
      />
      <EmailForm togglemode={togglemode} />

      <Footer
        togglemode={togglemode}
        toggleClick={toggleClick}
        Darkmode={Darkmode}
      />
    </div>
  );
};

export default Contact;
