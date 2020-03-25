import React from "react";
import "./NotesAll.css";

import imagecharact from "../../images/character.png";
import { Link } from "@reach/router";
const NotesAll = params => {
  return (
    <div className="NotesAll ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5">
            <div className="LogoNotes">
              {" "}
              <Link to="/">
                <div className="Logonote mt-3 animated bounceInLeft">
                  HNS <span className="blue">EDUCATION</span>..
                </div>
              </Link>
              <h1 className="noteshead animated bounceInRight ">
                Get your Notes
              </h1>
              <p className="parahead animated zoomInLeft">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum earum doloribus fugit necessitatibus doloremque,
                atque quasi ad cumque quas vitae!
              </p>
              <Link to="/" className="btn btn-notes animated zoomInRight ">
                HERE IS YOUR NOTE
              </Link>
            </div>
          </div>
          <div className="col-lg-5 ml-5 animated zoomInUp">
            <img src={imagecharact} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesAll;
