import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Background from "../Components/Background/Background";
import Contactme from "../Components/Contactme/Contactme";
import Text from "../Components/Text/Text.js";
const ContactUs = (params) => {
  return (
    <div>
      <Background />
      <Navbar />
      <div className="container mt-5">
        <Text heading="Contact Us" />
        <Contactme />
      </div>
    </div>
  );
};

export default ContactUs;
