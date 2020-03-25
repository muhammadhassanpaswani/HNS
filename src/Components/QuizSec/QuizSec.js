import React from "react";
import { Card, Button } from "react-bootstrap";
import image3 from "../../images/acca.png";
import "./QuizSec.css";
import { Link } from "@reach/router";

const QuizSec = ({ subject }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 text-center">
          <Card
            className="card mt-5 animated rollIn"
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" className="img-card" src={image3} />
            <Card.Body>
              <Card.Title className="card-title">{subject.title}</Card.Title>
              <Card.Text>{subject.para}</Card.Text>
              <Link to="/HNSQUIZ" className="">
                <Button variant="btn-12">{subject.btn}</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default QuizSec;
