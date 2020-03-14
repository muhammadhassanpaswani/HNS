import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "@reach/router";
import "./Main.css";
import image1 from "../../images/download3.svg";
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
              FREE ONLINE LEARNING For
              <span className="bold"> Students </span>
              We Deliver you Best QUALITY Notes of
              <span className="bold"> Students</span> which is th part of 21
              Centuary Curriculum. Good Luck Best Wishes For you!!
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
