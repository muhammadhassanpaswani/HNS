import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "@reach/router";
import "./Main.css";
import image1 from "../../images/images.png";
const Main = params => {
  return (
    <div className="container main">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="maintext text-white">
            <h1 className="title">
              Mocks & Test <br />
              For <span className="bold">ACCA</span> &
              <span className="bold"> CA</span>
            </h1>
            <div className="star-icon">
              <FaStar className="icon4" />
              <FaStar className="icon4" />
              <FaStar className="icon4" />
              <FaStar className="icon4" />
              <FaStar className="icon4" />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate consequuntur illo rem similique laboriosam fugit
              laudantium corrupti tenetur, modi nisi.
            </p>
            <Link to="" className="btn">
              ADD TO CART
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="img">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
