import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TrackVisibility from 'react-on-screen';
import Tilt from "react-parallax-tilt";
import Particle from "../../components/Particle"

import headerImg from "../../assets/header-img.svg";
import myImg from "../../assets/my-img.png";
import divider from "../../assets/divider.png";
import 'animate.css';
import "./Home.scss";

import Type from "./Type";

function Home() {
  return (
      <div className='home'>
        <HelmetProvider>

        <Particle />

        <div className='container banner' id='home'>
          <Row className="aligh-items-center">
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I AM
                <strong className="main-name">DANIEL PÉREZ</strong>
              </h1>

              <div className='typing' style={{ textAlign: "left" }}>
                <div className='type'>
                <Type /> 
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} xl={5} className='gif'>
              <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <img className='header-img' src={headerImg} alt="Header Img"/>
              </div>}
              </TrackVisibility>
            </Col>

          </Row>
        </div>

        <section className="banner" id="home">
          <Container fluid className="home-about-section">
          <Row className='row'>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>

          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            Have you ever wondered how to unlock the power of <span className="purple"> data </span>
            to make strategic decisions and gain valuable insights?
            </h1>
            <p className="home-about-body">
            In my data science portfolio, I invite you to explore a collection of projects 
            that demonstrate my proficiency in leveraging cutting-edge techniques to extract 
            meaningful patterns from complex datasets. 
              <br />
              <br />With a solid foundation in machine learning, statistical analysis, and 
              programming languages such as Python and R, I have successfully designed and 
              implemented predictive models that have driven informed decision-making. 
              <i>
                <b className="purple"> My experience spans across diverse domains, including finance, 
                pure mathematics, and economics, highlighting my adaptability and versatility. </b>
              </i>
              <br />
              <br />
              Join me on a journey through the realm of data science, where I pose questions, 
              explore answers, and transform raw information into actionable intelligence. &nbsp;
            </p>
          </Col>
          </Row>

          <Row>
            <img src={divider} className="divider" alt="divider" />
          </Row>

          </Container>
      
          

        </section>
      
        </HelmetProvider>
    </div>
  );
}

export default Home;