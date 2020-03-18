import React from "react";
import { Link } from "@reach/router";
const Logo = params => {
  return (
    <React.Fragment>
      <Link class="navbar-brand mt-3 animated fadeInDown" to="/">
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
        <span class="navbar-toggler-icon icon-toggle"></span>
      </button>
    </React.Fragment>
  );
};
export default Logo;
