import React from "react";
import "./QuizAll.css";
import Logo from "../Navbar/Logo.js";

import { Link } from "@reach/router";
const QuizAll = (params) => {
  return (
    <div className="QuizAll ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-7 ">
            <div className="Logo animated fadeInDown">
              <Logo />
              <h1 className="qhead ">
                <span className="red">READY</span> FOR
                <span className="red"> QUIZ</span> ..
              </h1>
              <p className="qpara text-center">
                Lorem ipsum dolor sit amet{" "}
                <span className="red">consectetur adipisicing </span>elit. Vero,
                quam quibusdam nulla obcaecati{" "}
                <span className="red">quia porro id</span> laudantium quo.
                Quisquam aspernatur veritatis,{" "}
                <span className="red">officiis eum </span>molestias consequatur.
                Incidunt aspernatur{" "}
                <span className="red">reprehenderit corrupti</span> repellat.
              </p>
              <div className="d-flex justify-content-center ">
                <Link to="/register" className="Signup pl-5 pr-5  ">
                  Quiz Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-5 "></div>
        </div>
      </div>
    </div>
  );
};

export default QuizAll;
