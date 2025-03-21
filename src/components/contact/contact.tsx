
import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <Card
        style={{ width: '90%', height: '90%', overflowY: 'auto' }}
        id="contact"
        className={darkMode ? 'bg-dark text-light' : ''}
      >
        <Card.Body>
          <Card.Title className="fs-2">📬 Contact Me</Card.Title>
          <Card.Subtitle className="mb-4 text-muted">I'd love to hear from you!</Card.Subtitle>

          {/* Contact Info */}
          <Row className="mb-4">
            <Col md={6}>
              <p><strong>Email:</strong> <a href="mailto:tristanlgb@hotmail.com">tristanlgb@hotmail.com</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/541150490152" target="_blank" rel="noopener noreferrer">+54 11 5049 0152</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/tristanlgb" target="_blank" rel="noopener noreferrer">tristanlgb</a></p>
            </Col>
            <Col md={6}>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tristanlenzberg" target="_blank" rel="noopener noreferrer">Tristan Lenzberg</a></p>
              <p><strong>TikTok:</strong> <a href="https://www.tiktok.com/@__2tristan" target="_blank" rel="noopener noreferrer">@__2tristan</a></p>
            </Col>
          </Row>

          <hr />

          {/* Contact Form */}
          <h5 className="mb-3">Send me a message</h5>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type your message here..." />
            </Form.Group>

            <Button variant={darkMode ? 'light' : 'primary'} type="submit">
              Send Message
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;
