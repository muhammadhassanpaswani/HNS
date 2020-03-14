import React from "react";
import Home from "./Pages/Home.js";
import Login from "./Components/Login/Login.js";
import { Router } from "@reach/router";
import Register from "./Components/Register/Register.js";
function App() {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Register path="/register" />
    </Router>
  );
}

export default App;
