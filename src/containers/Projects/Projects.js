import React from "react";
import { Container, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import "./Project.scss";
import "../../dark-mode.scss";

import { FaPython } from "react-icons/fa6";
import { SiRstudio } from "react-icons/si";
import { SiPowerbi } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiApachehadoop } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";

function Projects() {

  const compas_system_repo = "https://github.com/danielpsnz/compas_system";
  const credit_approval_repo = "https://github.com/danielpsnz/credit_approval"
  const salaries_prediction = "https://github.com/danielpsnz/salaries_prediction"

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="heading-name">
          Recent <strong className="project-name">Projects</strong> <span className="wave" role="img" aria-labelledby="wave">⚗️</span>
        </h1>

        <Col md={4} className="project-card">
            <ProjectCard
              title="Salaries Prediction"
              description="The objective of this project is to analyze the Salaries.csv dataset, which contains salary information for 397 university professors in the USA over nine months during 2008 and 2009. The dataset includes variables such as professor rank, discipline, years since obtaining a PhD, years of service, gender, and salary. The primary goal is to implement a regularized linear model to predict professor salaries based on these variables. Through thorough data exploration and statistical analysis, insights will be gained into the factors influencing salary variations among university professors."
              repoLink={salaries_prediction}
              languages={<SiRstudio />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              repoLink={compas_system_repo}
              title="Compas System"
              description="This project involves loading data and conducting an exploratory analysis to assess its quality, 
              focusing on integrity, validity, and timeliness. Subsequent steps include evaluating the suitability 
              of specific fields for assessing COMPAS system risk estimates, generating a contingency table based on a 
              threshold of 7 for preventive measures against recidivism, and examining potential biases in risk assignments 
              by gender and race through graphical representations. The final analysis determines the system's predictive 
              capacity for general crimes versus violent offenses."
              languages={<FaPython />}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Credit Approval"
              description="The project involves several key activities. First, the dataset for credit approval is loaded, and a visual inspection is conducted to understand the distribution of credit approval based on each attribute, identifying variables crucial for data separation. Next, the dataset is prepared, and missing values are imputed using the missForest library. The dataset is then divided into training and test sets. Subsequently, Ridge and Lasso regularized logistic regression models are trained on the training set, with the goal of selecting the model with the best AUC, and metrics are calculated on the test set. The project also aims to reveal the factor by which predictor variables influence the odds ratio when increased by one unit. Finally, the profitability of applying the model is assessed based on gaining 100e for every true positive and losing 20e for every false positive."
              repoLink={credit_approval_repo}
              languages={<SiRstudio />}
            />
          </Col>

      </Container>
    </Container>
  );
}

export default Projects;