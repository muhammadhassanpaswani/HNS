import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const Image = () => {
  return (
    <div className="img">
      <div className="social-icons">
        <FaFacebookF className="icons" />
        <FaTwitter className="icons" />
        <FaYoutube className="icons" />
        <AiFillInstagram className="icons" />
      </div>
    </div>
  );
};
export default Image;
