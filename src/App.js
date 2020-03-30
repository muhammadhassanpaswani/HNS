import React from "react";
//Pages
import Home from "./Pages/Home.js";
import Quiz from "./Pages/Quiz.js";
import Notes from "./Pages/Notes.js";
import ContactUs from "./Pages/ContactUs.js";
import AboutUs from "./Pages/AboutUs.js";
//Components
import Login from "./Components/Login/Login.js";
import QuizAll from "./Components/QuizAll/QuizAll.js";
import NotesAll from "./Components/NotesAll/NotesAll.js";
import Register from "./Components/Register/Register.js";
//Router
import { Router } from "@reach/router";
// App function
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
      <NotesAll path="/HNSNOTES" />
    </Router>
  );
}

export default App;
