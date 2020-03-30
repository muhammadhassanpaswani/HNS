import React from "react";
//Css file
import "./Background.css";
//Background file
const Background = () => {
  return (
    <div>
      <div className="open">
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <div className="background">
        <div className="triangle"></div>
        <div className="bg-text">
          <h1>hms</h1>
          <div className="background-red"></div>
        </div>
      </div>
    </div>
  );
};
export default Background;
