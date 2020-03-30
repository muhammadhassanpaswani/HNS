import React from "react";
//Files
import Stars from "./Stars.js";
//Link
import { Link } from "@reach/router";
//Text function
const Text = () => {
  return (
    <div className="maintext text-white">
      <h1 className="title ">
        Mocks & Test <br />
        For <span className="bold "></span>
      </h1>
      <Stars />
      <p className="para1 ">
        Free Online Learning For
        <span className="bold"> Students </span>
        We Deliver you Best Quality Notes of
        <span className="bold"> Students</span> which is the part of 21 Centuary
        Curriculum.Good Luck Best Wishes For you!!
      </p>
      <Link to="/quiz" className="btn btn-0 ">
        Ready For Mocks
      </Link>
      <Link to="" className="btn btn-1 ">
        Ready For Notes
      </Link>
    </div>
  );
};

export default Text;
