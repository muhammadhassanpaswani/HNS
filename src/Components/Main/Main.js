import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "@reach/router";
import image1 from "../../images/images.png";
const Main = params => {
  return (
    <div className="container main">
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12">
          <div className="maintext text-white">
            <h4>$Free</h4>
            <h1>
              Mocks & Test <br />
              For ACCA & CA
            </h1>
            <div className="star-icon">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
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
        <div className="col-lg-7 col-md-12 col-sm-12">
          <div className="img">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
