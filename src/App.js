import React from "react";
import Home from "./Pages/Home.js";
import { Router } from "@reach/router";
function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default App;
