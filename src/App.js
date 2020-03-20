import React from "react";
import Home from "./Pages/Home.js";
import Quiz from "./Pages/Quiz.js";
import Notes from "./Pages/Notes.js";
import ContactUs from "./Pages/ContactUs.js";
import AboutUs from "./Pages/AboutUs.js";
import Login from "./Components/Login/Login.js";
import QuizAll from "./Components/QuizAll/QuizAll.js";
import { Router } from "@reach/router";
import Register from "./Components/Register/Register.js";
function App() {
  return (
    <Router>
      <Home path="/" />
      <Login path="/login" />
      <Register path="/register" />
      <Quiz path="/quiz" />
      <Notes path="/notes" />
      <AboutUs path="/aboutus" />
      <ContactUs path="/contactus" />
      <QuizAll path="/HNSQUIZ" />
    </Router>
  );
}

export default App;
