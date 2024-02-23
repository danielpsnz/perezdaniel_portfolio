import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../App.scss";

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
                <form id="contact-form" action="contact_send.php" method="post" onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={formData.name} onChange={handleChange} required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                        <label htmlFor="exampleInputEmail1">Email:</label>
                        <input type="text" id="email" value={formData.email} onChange={handleChange} required />
                    </Col>
                    <Col size={12} className="px-1">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" value={formData.message} onChange={handleChange} required />
                    </Col>
                    <button type="submit" className="btn btn-primary">Send</button>
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