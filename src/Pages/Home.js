import React from "react";
//Components
import Navbar from "../Components/Navbar/Navbar";
import Background from "../Components/Background/Background";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
//Home Function
const Home = () => {
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
