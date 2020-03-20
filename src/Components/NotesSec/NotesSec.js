import React from "react";
import { Card, Button } from "react-bootstrap";
import image3 from "../../images/acca.png";
import "./Notes.css";
const NotesSec = ({ subject }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col text-center">
          <Card
            className="card mt-5 animated zoomInLeft"
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" className="img-card" src={image3} />
            <Card.Body>
              <Card.Title className="card-title">{subject.title}</Card.Title>
              <Card.Text>{subject.para}</Card.Text>
              <Button variant="btn-12">{subject.btn}</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default NotesSec;
