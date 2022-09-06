import React from 'react';
import '../../styles/Project.css';
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projectData from './ProjectData';



function Project() {
  return (
    <Container fluid className="project-section">
      <Container>
        {/* <h1 className="project-heading text-center">
          Recent Work
        </h1> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
               {projectData.map(project => (
                 <Col md={4} className="project-card" key={project.id}>
                <ProjectCard
                image_url={project.image_url}
              title={project.title}
              description={project.description}
              repo_url={project.repo_url}
              deployed_url={project.deployed_url}
                />
          </Col>
 ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Project;