import React from "react";
import "./Login.css";
import imageCar3 from "../../images/download 3.svg";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { Link } from "@reach/router";
const Login = () => {
  return (
    <div className="Login container-fluid ">
      <div className="panel">
        <div className="row">
          <div className="col-7 liquid">
            <img
              src={imageCar3}
              alt=""
              className="imgcar animated fadeInLeft"
            />
            <div className="social-login animated fadeInleft">
              <FaFacebookF className="icon12" />
              <FaTwitter className="icon12" />
              <FaYoutube className="icon12" />
              <AiFillInstagram className="icon12" />
            </div>
          </div>
          <div className="col-5 form ">
            <div className="btn-Sign animated fadeInUp">
              <Link to="/register" className="Signup ">
                Sign Up
              </Link>
            </div>
            <form action="" className=" animated fadeInRight">
              <h1 className="login  ">
                Ready to <span className="bold-1">Sign In</span>
              </h1>

              <div className="form ">
                <input type="text" placeholder="Email" className="forminput" />
              </div>
              <div className="form">
                <input
                  type="password"
                  placeholder="Password"
                  className="forminput"
                />
              </div>
              <button type="submit" className="btn btn-login">
                Login
              </button>
              <h4 className="choice">OR</h4>
              <button type="submit" className="btn btn-login fb">
                Login with Facebook & Gmail
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
