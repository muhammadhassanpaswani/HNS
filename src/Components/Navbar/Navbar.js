import React from "react";
//css file
import "./Navbar.css";
//files
import Logo from "./Logo";
import Navigation from "./Navigation";
import Loginbtn from "./Loginbtn";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <nav class="navbar navbar-expand-lg mt-2 animated fadeInLeft">
            <Logo />
            <Navigation />
          </nav>
        </div>
        <div className="col-lg-3 animated fadeInRight">
          <Loginbtn />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
