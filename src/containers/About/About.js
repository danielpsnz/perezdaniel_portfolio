import React from 'react';
import {Container} from "react-bootstrap";
import { Fade, Flip } from "react-reveal";

import image from "../../assets/images/programmer.svg"
import uniofyork from "../../assets/images/university-of-york-logo.png";
import imf from "../../assets/images/IMF_Smart_Education-logo.png"

import 'animate.css';
import "./About.scss";
import "../../App.scss";

function About() {
  return (
    <Container fluid className="about-section">
      <Fade bottom duration={2000} distance="20px">
      <section id='about'>
        <Container>
            <h1 className="heading-name">
              About <strong className="about-name">me</strong> <span className="wave" role="img" aria-labelledby="wave">🌟</span>
            </h1>
            
            <div className='about-description'>
            <p className="about-description-text">
            Graduated in Mathematics and Economics from the University of York. I have worked at the Ministry of Justice as a statistician for one year. I have completed the FMVA (Financial Modelling and Valuation Analyst) certification, allowing me to enhance my skills in PowerBI and Excel. I possess advanced knowledge in front-end development, as well as proficiency in R, SAS, Python, and Java. I am fluent in Spanish, English, and French.
            </p>

            <img className='about-img' src={image} alt="Header Img"/>
            </div>
        </Container>
      </section>
      </Fade>
      <Fade bottom duration={3000} distance="20px">
      <section id='skills'>
      <Container>
          <h1 className="heading-name">Main skills</h1>
        </Container>
      </section>
      </Fade>
      <Fade bottom duration={4000} distance="20px">
      <section id='education'>
        <Container>
          <h1 className="heading-name">Education</h1>
        </Container>

        <Container className="degree-card">
        <div>
          <Flip left duration={2000}>
            <div className="card-img">
            <img
                style={{
                  width: "150px",
                  height: "210px",
                  margin: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)",
                }}
                src={uniofyork}
                alt="university of york logo"
              />
            </div>
          </Flip>
        </div>

        <div className="card-body">
          <div className="body-header">
            <div className="body-header-title">
              <h2 className="card-title">University of York</h2>
              <h3 className="card-subtitle">Bachelor of Science in Mathematics and Economics</h3>
            </div>
            
            <div className="body-header-duration">
              <h3 className="duration">2019 - 2023</h3>
            </div>
          </div>
          
          <div className="body-content">
            <p className="content-list">Strong analytical skills to address and solve complex problems, advanced knowledge in economic theories and mathematical tools, as well as effective communication, teamwork, and leadership skills. Experience with Java and C++.</p>
            <a
              href="http://www.york.ac.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="visit-btn">
                <p className="btn">Visit Website</p>
              </div>
            </a>
          </div>
        </div>
        </Container>

        <Container className="degree-card">
        <div>
          <Flip left duration={2000}>
            <div className="card-img">
            <img
                style={{
                  padding: "35px 0px",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)",
                }}
                src={imf}
                alt="imf logo"
              />
            </div>
          </Flip>
        </div>

        <div className="card-body">
          <div className="body-header">
            <div className="body-header-title">
              <h2 className="card-title">IMF Business School</h2>
              <h3 className="card-subtitle">Master in Data Science and Business Analytics</h3>
            </div>
            
            <div className="body-header-duration">
              <h3 className="duration">2023 - 2024</h3>
            </div>
          </div>
          
          <div className="body-content">
            <p className="content-list">Proficiency in advanced data analysis, with outstanding skills in statistics, machine learning, data visualization and programming (Python, R)</p>
            <a
              href="https://www.imf-formacion.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="visit-btn">
                <p className="btn">Visit Website</p>
              </div>
            </a>
          </div>
        </div>
        </Container>

      </section>
      </Fade>
      <section id='certificates'>
        
      </section>

      <section id='experience'>
        
      </section>
    </Container>
              
  );
}

export default About;