import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import compas_system from "../../assets/projects/compas_system/compas_system.pdf"
import compas_system_img from "../../assets/projects/compas_system/compas_system.jpeg";
import "../../App.scss";

function Projects() {

  const compas_system_repo = "https://github.com/danielpsnz/compas_system.git";

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="heading-name">
          Recent <strong className="project-name">Projects</strong> <span className="wave" role="img" aria-labelledby="wave">⚗️</span>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compas_system_img}
              title="Compas System"
              description="This project involves loading data and conducting an exploratory analysis to assess its quality, 
              focusing on integrity, validity, and timeliness. Subsequent steps include evaluating the suitability 
              of specific fields for assessing COMPAS system risk estimates, generating a contingency table based on a 
              threshold of 7 for preventive measures against recidivism, and examining potential biases in risk assignments 
              by gender and race through graphical representations. The final analysis determines the system's predictive 
              capacity for general crimes versus violent offenses."
              ghLink={compas_system}
              repoLink={compas_system_repo}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;