import React from "react";
//Icons
import { FaHome, FaChessQueen } from "react-icons/fa";
import { IoIosPaper, IoMdContact } from "react-icons/io";
import { GoBriefcase } from "react-icons/go";
//Link
import { Link } from "@reach/router";
//Navigation function
const Navigation = () => {
  return (
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav nav-ul">
        <li class="nav-item active">
          <Link class="nav-link" to="/">
            <FaHome className="nav-icons" />
            <br />
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/quiz">
            <FaChessQueen className="nav-icons" />
            <br />
            Quiz
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/notes">
            <IoIosPaper className="nav-icons" />
            <br />
            Notes
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/aboutus">
            <GoBriefcase className="nav-icons" />
            <br />
            About Us
          </Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contactus">
            <IoMdContact className="nav-icons" />
            <br />
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Navigation;
