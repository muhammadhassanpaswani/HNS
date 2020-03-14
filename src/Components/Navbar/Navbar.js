import React from "react";
import { Link } from "@reach/router";
import "./Navbar.css";
import { FaHome, FaChessQueen } from "react-icons/fa";
import { IoIosPaper, IoMdContact } from "react-icons/io";
import { GoBriefcase, GoSignIn, GoSignOut } from "react-icons/go";

const Navbar = params => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <nav class="navbar navbar-expand-lg mt-2">
            <Link class="navbar-brand mt-3" to="">
              <h1>
                HNS <span className="red">Education</span>{" "}
              </h1>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse  " id="navbarNav">
              <ul class="navbar-nav nav-ul">
                <li class="nav-item active">
                  <Link class="nav-link" to="">
                    <FaHome className="nav-icons" />
                    <br />
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="">
                    <FaChessQueen className="nav-icons" />
                    <br />
                    Quiz
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="">
                    <IoIosPaper className="nav-icons" />
                    <br />
                    Notes
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="">
                    <GoBriefcase className="nav-icons" />
                    <br />
                    About Us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="">
                    <IoMdContact className="nav-icons" />
                    <br />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-3 log-reg">
          <br />
          <h6>
            <Link className="" to="/login">
              <GoSignIn className="nav-icons-1 " />
              Sign In{" "}
            </Link>
            <Link to="/register">
              <span className="space">
                <GoSignOut className="nav-icons-1 " /> Sign Up
              </span>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
