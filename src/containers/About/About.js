import React from "react";
import "../../App.scss";
import SocialMedia from "../../components/SocialMedia";
import { about } from "../../portfolio";
import { Fade } from "react-reveal";

function About() {
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="about-main" id="about">
        <div className="about-main">
          <div className="about-text-div">
            <div>
              <h1 className="about-text">
                {about.title}
              </h1>

              <p className="about-text-p subTitle">
                {about.subTitle}
              </p>

              <SocialMedia/>

            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default About;