import React from "react";
//Css file
import "./Footer.css";
//files
import Profile from "./Profile";
import Youtube from "./youtube";

const Footer = () => {
  return (
    <div className="container footer ">
      <div className="row animated fadeInLeft">
        <div className="col-md-6 col-sm-12 d-flex align-items-center pl-5">
          <Profile />
        </div>

        <div className="col-md-4 col-sm-12"></div>
        <div className="col-md-2 youtube-1 col-sm-12 d-flex align-items-center justify-content-center">
          <Youtube />
        </div>
        <div className="col-sm-12">
          <h5 className="license">Copy right contained</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
