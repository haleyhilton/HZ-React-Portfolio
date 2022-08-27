import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//external link icon
import { BiLinkExternal } from "react-icons/bi";

function ProjectCard (props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.image_url} alt={props.title} />
      <Card.Body>
        <Card.Title><h4>{props.title}</h4></Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="light" href={props.repo_url} target="_blank">
          <BiLinkExternal /> View Repo
        </Button>  
        
        <Button variant="light" href={props.deployed_url} target="_blank">
          <BiLinkExternal /> View App
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;