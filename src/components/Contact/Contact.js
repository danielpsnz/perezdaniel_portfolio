import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/images/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "./Contact.scss";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/3dcc2530-d25b-11ee-a1c1-7755cb567bfd";

const Contact = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
  });

  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      // Use formData in your form submission logic
      console.log(formData);

      setConfirmationMessage("¡Thank you! Your message has been sent.");
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
                {confirmationMessage && (
                                        <div className="confirmation-message">
                                            {confirmationMessage}
                                        </div>
                                    )}
                <form id="contact-form" action={FORM_ENDPOINT} onSubmit={handleSubmit} method="post" accept-charset="UTF-8">
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                        <label for="name">Name:</label>
                        <input type="text" id="name" value={formData.name} onChange={handleChange} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <label for="exampleInputEmail1">Email:</label>
                        <input type="text" id="email" value={formData.email} onChange={handleChange} required />
                    </Col>
                    <Col size={12} className="px-1">
                        <label for="message">Message:</label>
                        <input name="_gotcha" type="text" id="message" value={formData.message} onChange={handleChange} required />
                    </Col>
                    <button type="submit" value="Download CTA" className="btn btn-primary">Send</button>
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