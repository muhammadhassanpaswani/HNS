import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Background from "../Components/Background/Background";
import Contactme from "../Components/Contactme/Contactme";

const ContactUs = params => {
  return (
    <div>
      <Background />
      <Navbar />
      <Contactme />
    </div>
  );
};

export default ContactUs;
