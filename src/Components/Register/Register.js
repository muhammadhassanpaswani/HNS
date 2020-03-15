import React from "react";
import "./Register.css";
import imageCar3 from "../../images/img1.webp";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "@reach/router";
const Register = () => {
  return (
    <div className="Login container-fluid">
      <div className="panel">
        <div className="row">
          <div className="col-7 liquid">
            <img src={imageCar3} alt="" className="img-3" />
            <div className="social-login">
              <FaFacebookF className="icon12" />
              <FaTwitter className="icon12" />
              <FaYoutube className="icon12" />
              <AiFillInstagram className="icon12" />
            </div>
          </div>
          <div className="col-5 form">
            <div className="btn-Sign">
              <Link to="/login" className="Signup">
                Sign In
              </Link>
            </div>
            <form action="" className="form-reg">
              <h1 className="login reg">
                Ready to <span className="bold-1">Sign Up</span>
              </h1>

              <span className="form">
                <input type="text" placeholder="Name" className="reg-input" />
              </span>
              <span className="form ml-2">
                <input type="text" placeholder="S/o" className="reg-input" />
              </span>
              <div className="form">
                <input
                  type="text"
                  placeholder="Email"
                  className="reg-1-input"
                />
              </div>
              <div className="form">
                <input
                  type="password"
                  placeholder="Password"
                  className="reg-1-input"
                />
              </div>
              <button type="submit" className="btn btn-login btn-register">
                Login
              </button>
              <h4 className="choice choose">OR</h4>
              <button type="submit" className="btn btn-login fb fb-1">
                Login with Facebook & Gmail
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
