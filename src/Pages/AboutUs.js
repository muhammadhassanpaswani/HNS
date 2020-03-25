import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Background from "../Components/Background/Background";
import Text from "../Components/Text/Text.js";
const AboutUs = (params) => {
  return (
    <div>
      <Background />
      <Navbar />
      <div className="container mt-5">
        <Text heading="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
