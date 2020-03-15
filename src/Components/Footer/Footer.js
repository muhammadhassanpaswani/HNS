import React from "react";
import "./Footer.css";

import Profile from "./Profile";
import Youtube from "./youtube";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
          <Profile />
        </div>

        <div className="col-md-5 col-sm-12"></div>
        <div className="col-md-3 youtube-1 col-sm-12 d-flex align-items-center justify-content-center">
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
