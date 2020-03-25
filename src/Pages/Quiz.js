import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import BackgroundQuiz from "../Components/BackgroundQuiz/BackgroundQuiz.js";
import QuizSec from "../Components/QuizSec/QuizSec";
import images1 from "../images/i1.png";
import Text from "../Components/Text/Text.js";
const QuizSubject = [
  {
    id: 1,
    title: "F1",
    para: "We deliver you best Education",
    btn: "Quiz",
    image: { images1 },
  },
  {
    id: 2,
    title: "F2",
    para: "We deliver you best Education",
    btn: "Quiz",
    image: { images1 },
  },
  {
    id: 3,
    title: "F3",
    para: "We deliver you best Education",
    btn: "Quiz",
    image: { images1 },
  },
  {
    id: 4,
    title: "QM",
    para: "We deliver you best Education",
    btn: "Quiz",
    image: { images1 },
  },
  {
    id: 5,
    title: "FE",
    para: "We deliver you best Education",
    btn: "Quiz",
    image: { images1 },
  },
  {
    id: 6,
    title: "BCom",
    para: "We deliver you best Education",
    btn: "Quiz",
    image: { images1 },
  },
  {
    id: 7,
    title: "XI",
    para: "We deliver you best Education",
    btn: "Quiz",
    image: { images1 },
  },
  {
    id: 8,
    title: "XII",
    para: "We deliver you best Education",
    btn: "Quiz",
    image: { images1 },
  },
  {
    id: 9,
    title: "Matric",
    para: "We deliver you best Education",
    btn: "Quiz",
    image: { images1 },
  },
];
const Quiz = (params) => {
  return (
    <div>
      <BackgroundQuiz />
      <Navbar />
      <div className="mt-5 mb-0">
        <Text heading="Enjoy Your Quiz" />
      </div>
      <div className="container">
        <div className="row ">
          {QuizSubject.map((subject) => (
            <div className="col-lg-4 col-sm-5" key={subject.id}>
              <QuizSec subject={subject} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
