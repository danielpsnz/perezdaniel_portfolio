import { useState } from 'react';
import emailjs from '@emailjs/browser';

import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/images/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Contact.scss";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        'service_mwpasdf',
        'template_bfkgc7o',
        e.target,
        '_73rUp0TBGrThRUP5'
      )
      .then(
        (result) => {
          setStateMessage('Message sent!');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage('Something went wrong, please try again later');
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );
    
    // Clears the form after sending the email
    e.target.reset();
  };

    return (
      <section className="contact" id="connect">
          <Container>
            <Row className="align-items-center">
                <Col size={12} md={6}>
                <TrackVisibility>
                    {({ isVisible }) =>
                    <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
                    }
                </TrackVisibility>
                </Col>

                <Col size={12} md={6}>
                  <TrackVisibility>
                    {({ isVisible }) =>
                      <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <h2>Do not hesitate to contact with me!</h2>
                      <form id="contact-form" onSubmit={sendEmail} accept-charset="UTF-8">
                        <Row>
                          <Col size={12} sm={6} className="px-1">
                              <label for="name">Name:</label>
                              <input type="text" id="name" name="user_name" />
                          </Col>
                          <Col size={12} sm={6} className="px-1">
                              <label for="exampleInputEmail1">Email:</label>
                              <input type="email" id="email" name="user_email" />
                          </Col>
                          <Col size={12} className="px-1">
                              <label for="message">Message:</label>
                              <input name="message" type="text" id="message" />
                          </Col>
                          <input type="submit" className="btn btn-primary" value="Send" disabled={isSubmitting} />
                          {stateMessage && <p>{stateMessage}</p>}
                        </Row>
                      </form>
                    </div>}
                  </TrackVisibility>
                </Col>
              </Row>
          </Container>
      </section>
    );
}

export default Contact; 