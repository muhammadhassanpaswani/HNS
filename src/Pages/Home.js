import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Background from "../Components/Background/Background";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
const Home = (params) => {
  return (
    <div>
      <Background />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default Home;
