import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { CgFolder } from "react-icons/cg";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img className="card-img" variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-text" style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className="card-button" variant="primary" href={props.ghLink} target="_blank">
          <CgWebsite /> &nbsp;
        </Button>
        <Button className="card-button" variant="primary" href={props.repoLink} target="_blank">
          <CgFolder /> &nbsp;
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;