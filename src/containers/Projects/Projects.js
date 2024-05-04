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
import { SiKeras } from "react-icons/si";
import { SiSpacy } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";

function Projects() {

  const compas_system_repo = "https://github.com/danielpsnz/compas_system";
  const credit_approval_repo = "https://github.com/danielpsnz/credit_approval"
  const salaries_prediction = "https://github.com/danielpsnz/salaries_prediction"
  const coches_segunda_mano = "https://github.com/danielpsnz/coches_segunda_mano"
  const detector_anomalias = "https://github.com/danielpsnz/detector_anomalias"
  const credit_risk = "https://github.com/danielpsnz/credit_risk_NN"
  const absentism_at_work = "https://github.com/danielpsnz/absentism_at_work"
  const online_shopper = "https://github.com/danielpsnz/online_shopper_intention"

  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="heading-name">
          Recent <strong className="project-name">Projects</strong> <span className="wave" role="img" aria-labelledby="wave">⚗️</span>
        </h1>

        <Col md={4} className="project-card">
            <ProjectCard
              title="Online Shopper Intention"
              description="This project aims to enhance the online sales service of a retail company by developing a machine learning model to classify customers based on their probability of generating revenue through online purchases. Leveraging data gathered from Google Analytics, the project involves comprehensive data analysis, preprocessing, model building, optimization, and evaluation. The ultimate goal is to tailor specific actions for customers more likely to make purchases on the website, thereby optimizing marketing strategies and improving overall revenue generation."
              repoLink={online_shopper}
              languages={<div>
                <FaPython />
                <SiScikitlearn />
                </div>}
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              title="Absentism at Work"
              description="This project aims to address the absenteeism issue identified by the Human Resources department of a company. By developing a classification model, the objective is to accurately classify employees based on their absenteeism behavior, specifically whether they are absent for more than four hours per month. The model's insights will facilitate better workforce management, aid in future hiring decisions, and enable proactive measures to improve employee productivity and engagement."
              repoLink={absentism_at_work}
              languages={<div>
                <FaPython />
                <SiScikitlearn />
                </div>}
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              title="Anomalies Detector"
              description="This project aims to develop a robust anomaly detection model to address the rising concerns of credit card fraud within a prominent consumer finance company in Spain. By leveraging advanced data science techniques, the goal is to accurately identify fraudulent transactions and mitigate potential financial losses while safeguarding customer trust and loyalty."
              repoLink={detector_anomalias}
              languages={<div>
                <FaPython />
                <SiScikitlearn />
                </div>}
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              title="Credit Risk: a neural network analysis"
              description="This project centers on refining the credit risk model for credit card clients within a banking environment. Faced with challenges in their existing statistical models, the risk management department seeks to deploy more advanced methodologies, particularly neural networks, to enhance credit risk assessment accuracy and effectiveness."
              repoLink={credit_risk}
              languages={<div>
                <FaPython />
                <SiScikitlearn />
                </div>}
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              title="Vehicles Price Prediction"
              description="The primary objective of this project is to develop machine learning models capable of accurately predicting the prices of second-hand vehicles. These models will enable VALTEL to offer its customers real-time pricing information within its mobile app, enhancing the user experience and driving customer engagement. Additionally, the project aims to showcase my skills in data science, machine learning, and project management, serving as a valuable addition to my portfolio."
              repoLink={coches_segunda_mano}
              languages={<div>
                <FaPython />
                <SiScikitlearn />
                </div>}
            />
        </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              title="Salaries Prediction"
              description="The objective of this project is to develop a classification model to determine the financial feasibility of Spanish professionals relocating to another country for work. With the aim of earning more than 50,000 euros in the destination country, the model will predict whether individuals would surpass this income threshold. By leveraging a specifically curated dataset, our goal is to provide a data-driven decision-making tool to assist professionals in evaluating the economic viability of international career opportunities."
              repoLink={salaries_prediction}
              languages={<div>
                <FaPython />
                <SiScikitlearn />
                </div>}
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