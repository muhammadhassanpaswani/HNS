import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "@reach/router";
const Text = () => {
  return (
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
        <span className="bold"> Students</span> which is th part of 21 Centuary
        Curriculum. Good Luck Best Wishes For you!!
      </p>
      <Link to="" className="btn btn-0">
        Ready For Mocks
      </Link>
      <Link to="" className="btn btn-1">
        Ready For Mocks
      </Link>
    </div>
  );
};

export default Text;
