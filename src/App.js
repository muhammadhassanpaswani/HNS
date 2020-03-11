import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Background from "./Components/Background/Background";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
