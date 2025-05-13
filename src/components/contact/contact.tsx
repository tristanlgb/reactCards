import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
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
             
            </Col>
          </Row>

          <hr />

          {/* CV Download */}
          <h5 className="mb-3">You can download my CV below:</h5>
          <Button
            variant={darkMode ? 'light' : 'primary'}
            href="https://drive.google.com/file/d/18ZKwFu92YkZlxEuvXmsq4x-Ic2dPG3ek/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;

