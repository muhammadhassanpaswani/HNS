import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import BackgroundQuiz from "../Components/BackgroundQuiz/BackgroundQuiz.js";
import NotesSec from "../Components/NotesSec/NotesSec";
import images1 from "../images/i1.png";
import Text from "../Components/Text/Text.js";
const NotesSubject = [
  {
    id: 1,
    title: "F1",
    para: "We deliver you best Education",
    btn: "Notes",
    image: { images1 }
  },
  {
    id: 2,
    title: "F2",
    para: "We deliver you best Education",
    btn: "Notes",
    image: { images1 }
  },
  {
    id: 3,
    title: "F3",
    para: "We deliver you best Education",
    btn: "Notes",
    image: { images1 }
  },
  {
    id: 4,
    title: "QM",
    para: "We deliver you best Education",
    btn: "Notes",
    image: { images1 }
  },
  {
    id: 5,
    title: "FE",
    para: "We deliver you best Education",
    btn: "Notes",
    image: { images1 }
  },
  {
    id: 6,
    title: "BCom",
    para: "We deliver you best Education",
    btn: "Notes",
    image: { images1 }
  },
  {
    id: 7,
    title: "XI",
    para: "We deliver you best Education",
    btn: "Notes",
    image: { images1 }
  },
  {
    id: 8,
    title: "XII",
    para: "We deliver you best Education",
    btn: "Notes",
    image: { images1 }
  },
  {
    id: 9,
    title: "Matric",
    para: "We deliver you best Education",
    btn: "Notes",
    image: { images1 }
  }
];
const Notes = params => {
  return (
    <div>
      <BackgroundQuiz />
      <Navbar />

      <div className="container">
        <div className="row mt-5">
          <Text heading="Enjoy Your Notes" />
          {NotesSubject.map(subject => (
            <div className="col-lg-4 col-sm-5" key={subject.id}>
              <NotesSec subject={subject} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
