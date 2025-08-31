import React, { useState } from 'react';
import {
  Card,
  Accordion,
  Row,
  Col,
  ListGroup,
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const emailTo = 'tristanlgb@hotmail.com';
  const waNumber = '541150490152'; // Argentina number without "+" for wa.me
  const githubUrl = 'https://github.com/tristanlgb';
  const linkedinUrl = 'https://www.linkedin.com/in/tristanlenzberg';
  const cvUrl = 'https://drive.google.com/file/d/18ZKwFu92YkZlxEuvXmsq4x-Ic2dPG3ek/view?usp=drivesdk';

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name || 'Someone'}`);
    const body = encodeURIComponent(
      `Hi Tristan,\n\n${msg || '(message)'}\n\nFrom: ${name || '(no name)'}\nEmail: ${email || '(no email)'}`
    );
    window.open(`mailto:${emailTo}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola Tristan! Soy ${name || 'un contacto'} – te escribo desde tu portfolio.\n\n${msg || ''}`
    );
    window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', width: '100vw', padding: '1rem' }}
    >
      <Card
        style={{ width: '95%', maxWidth: 1000, overflowY: 'auto' }}
        id="contact"
        className={`${darkMode ? 'bg-dark text-light' : ''} shadow`}
      >
        <Card.Body>
          <Card.Title className="fs-2">📬 Contact Me</Card.Title>
          <Card.Subtitle className="mb-4 text-muted">
            I’d love to hear from you!
          </Card.Subtitle>

          <Accordion alwaysOpen>
            {/* Contact Info */}
            <Accordion.Item eventKey="info">
              <Accordion.Header>👤 Contact Info</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={6} className="mb-3">
                    <ListGroup variant={darkMode ? 'dark' : undefined}>
                      <ListGroup.Item>
                        <strong>Email:</strong>{' '}
                        <a href={`mailto:${emailTo}`}>{emailTo}</a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>WhatsApp:</strong>{' '}
                        <a
                          href={`https://wa.me/${waNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +54 11 5049 0152
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={6} className="mb-3">
                    <ListGroup variant={darkMode ? 'dark' : undefined}>
                      <ListGroup.Item>
                        <strong>GitHub:</strong>{' '}
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                          tristanlgb
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>LinkedIn:</strong>{' '}
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                          Tristan Lenzberg
                        </a>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            {/* Quick Actions */}
            <Accordion.Item eventKey="actions">
              <Accordion.Header>⚡ Quick Actions</Accordion.Header>
              <Accordion.Body className="d-flex flex-wrap gap-2">
                <Button
                  variant={darkMode ? 'light' : 'primary'}
                  onClick={() => window.open(`mailto:${emailTo}`, '_blank')}
                >
                  Send Email
                </Button>
                <Button variant="success" onClick={handleWhatsApp}>
                  Open WhatsApp
                </Button>
                <Button
                  variant={darkMode ? 'outline-light' : 'outline-primary'}
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </Button>
              </Accordion.Body>
            </Accordion.Item>

            {/* Message Me */}
            <Accordion.Item eventKey="form">
              <Accordion.Header>✍️ Message Me</Accordion.Header>
              <Accordion.Body>
                <Form onSubmit={handleEmailSubmit}>
                  <Row className="g-3">
                    <Col md={6}>
                      <Form.Group controlId="contactName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="contactEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    <Col xs={12}>
                      <Form.Group controlId="contactMsg">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Tell me about your project or idea..."
                          value={msg}
                          onChange={(e) => setMsg(e.target.value)}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col xs={12} className="d-flex gap-2">
                      <Button type="submit" variant={darkMode ? 'light' : 'primary'}>
                        Send via Email
                      </Button>
                      <Button type="button" variant="success" onClick={handleWhatsApp}>
                        Send via WhatsApp
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>

            {/* CV */}
            <Accordion.Item eventKey="cv">
              <Accordion.Header>📄 CV / Resume</Accordion.Header>
              <Accordion.Body>
                <p className="mb-3">
                  You can download my latest CV here:
                </p>
                <Button
                  variant={darkMode ? 'light' : 'primary'}
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Contact;


