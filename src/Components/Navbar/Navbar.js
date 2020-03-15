import React from "react";

import "./Navbar.css";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Loginbtn from "./Loginbtn";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <nav class="navbar navbar-expand-lg mt-2 ">
            <Logo />
            <Navigation />
          </nav>
        </div>
        <div className="col-lg-3  ">
          <Loginbtn />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
