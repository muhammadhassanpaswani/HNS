import React from "react";
import Image from "./Image.js";
import Text from "./Text.js";
import "./Main.css";
import SocialIcon from "./SocialIcon.js";

const Main = () => {
  return (
    <div className="container main">
      <div className="row animated zoomInUp">
        <div className="col-lg-6 col-md-12 col-sm-12 ">
          <Text />
        </div>
        <div className="col-lg-3">
          <Image />
        </div>
        <div className="col-md-3  d-flex align-items-center justify-content-center ">
          <SocialIcon />
        </div>
      </div>
    </div>
  );
};
export default Main;
