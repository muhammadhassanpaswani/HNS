import React from "react";
import image2 from "../../images/logo.png";
const Profile = (params) => {
  return (
    <div className="footer-section1 d-flex align-items-round justify-content-end">
      <div className="created">
        <img src={image2} alt="" />
      </div>
      <p className="name">Muhammad Hassan Sabir</p>
    </div>
  );
};
export default Profile;
