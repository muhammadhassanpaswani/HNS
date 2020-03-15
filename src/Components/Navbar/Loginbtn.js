import React from "react";
import { GoSignIn, GoSignOut } from "react-icons/go";
import { Link } from "@reach/router";
const Loginbtn = () => {
  return (
    <div className="log-reg ">
      <h6 className="">
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
  );
};
export default Loginbtn;
