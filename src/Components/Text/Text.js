import React from "react";
import "./Text.css";

const Text = ({ heading }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col ">
          <h1 className="heading  animated slideInUp">
            <span>{heading}</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Text;
