import React from "react";
import "./Footer.css";
import image2 from "../../images/logo.png";
import { FaPlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
          <div className="footer-section1 d-flex align-items-round justify-content-end">
            <div className="created">
              <img src={image2} alt="" />
            </div>
            <p className="name">Muhammad Hassan Sabir</p>
          </div>
        </div>

        <div className="col-md-3 col-sm-12"></div>
        <div className="col-md-3 youtube-1 col-sm-12 d-flex align-items-center justify-content-center">
          <div className="youtube d-flex align-items-center text-white mr-5">
            <div className="play d-flex align-items-center justify-content-center">
              <FaPlay className="icon-23" />
              <h5 className="watch">Watch now</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
