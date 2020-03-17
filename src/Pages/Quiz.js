import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Background from "../Components/Background/Background";
import QuizSec from "../Components/QuizSec/QuizSec";
import images1 from "../images/i1.png";
const QuizSubject = [
  {
    id: 1,
    title: "F1",
    para: "We deliver you best Education",
    btn: "QUIZ",
    image: { images1 }
  },
  {
    id: 2,
    title: "F2",
    para: "We deliver you best Education",
    btn: "QUIZ",
    image: { images1 }
  },
  {
    id: 3,
    title: "F3",
    para: "We deliver you best Education",
    btn: "QUIZ",
    image: { images1 }
  },
  {
    id: 4,
    title: "QM",
    para: "We deliver you best Education",
    btn: "QUIZ",
    image: { images1 }
  },
  {
    id: 5,
    title: "FE",
    para: "We deliver you best Education",
    btn: "QUIZ",
    image: { images1 }
  },
  {
    id: 6,
    title: "BCom",
    para: "We deliver you best Education",
    btn: "QUIZ",
    image: { images1 }
  }
];
const Quiz = params => {
  return (
    <div>
      <Background />
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          {QuizSubject.map(subject => (
            <div className="col-4" key={subject.id}>
              <QuizSec subject={subject} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
