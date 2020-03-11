import React from "react";
import image2 from "../../images/images.jpg";
import { FaFacebookF, FaTwitter, FaYoutube, FaPlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
          <div className="footer-section1 d-flex align-items-round justify-content-end">
            <div className="created">
              <img src={image2} alt="" />
            </div>
            <p className="ml-3">Muhammad Hassan Sabir</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
          <div className="social-icons">
            <FaFacebookF className="social-icons" />
            <FaTwitter className="social-icons" />
            <FaYoutube className="social-icons" />
          </div>
        </div>
        <div className="col-md-3 col-sm-12"></div>
        <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
          <div className="youtube d-flex align-items-center text-white mr-5">
            <div className="play d-flex align-items-center justify-content-center">
              <FaPlay className="social-icons" />
              <h5>watch now</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
