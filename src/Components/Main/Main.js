import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "@reach/router";
import "./Main.css";
import image1 from "../../images/image1.png";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Main = params => {
  return (
    <div className="container main">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="maintext text-white">
            <h1 className="title">
              Mocks & Test <br />
              For <span className="bold"></span>
            </h1>
            <div className="star-icon">
              <FaStar className="icon4" />
              <FaStar className="icon4" />
              <FaStar className="icon4" />
              <FaStar className="icon4" />
              <FaStar className="icon4" />
            </div>
            <p className="para1">
              Lorem ipsum dolor, sit amet{" "}
              <span className="bold"> adipisicing elit.</span>
              Voluptate consequuntur illo rem{" "}
              <span className="bold"> adipisicing elit.</span> fugit laudantium
              corrupti <span className="bold">tenetur,</span> modi nisi.
            </p>
            <Link to="" className="btn">
              Ready For Mocks
            </Link>
          </div>
        </div>
        <div className="col-lg-3 ">
          <div className="img">
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="col-md-3 col-sm-12 d-flex align-items-center justify-content-center">
          <div className="social-icons">
            <FaFacebookF className="icons" />
            <FaTwitter className="icons" />
            <FaYoutube className="icons" />
            <AiFillInstagram className="icons" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
