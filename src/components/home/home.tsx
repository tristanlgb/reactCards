import React from 'react';
import {
  Card,
  Accordion,
  Badge,
  Row,
  Col,
  ListGroup,
} from 'react-bootstrap';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', width: '100vw', padding: '1rem' }}
    >
      <Card
        style={{ width: '95%', maxWidth: 1100, overflowY: 'auto' }}
        id="home"
        className={`${darkMode ? 'bg-dark text-light' : ''} shadow`}
      >
        <Card.Body>
          {/* Header */}
          <Row className="align-items-center g-4">
            <Col xs={12} md={4} className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6CTCje2D2Hi1ygPMdyUzNEztmh_LlC9KHg&s"
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{ maxHeight: 220, objectFit: 'cover' }}
              />
            </Col>
            <Col xs={12} md={8}>
              <Card.Title className="fs-2 mb-2">👋 Hello, I'm Tristan</Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                Full-Stack Developer (React + TypeScript, Express/NestJS, MongoDB)
              </Card.Subtitle>
              <p className="mb-3" style={{ lineHeight: 1.6 }}>
                I’m a <strong>full-stack developer</strong> trained at <strong>Coderhouse</strong> and I studied
                <strong> Communications</strong> at the <strong>University of Buenos Aires</strong>. I enjoy building clear,
                responsive UIs and solid, well-structured backends. I like clean architecture, DX, and shipping features that feel great to use.
              </p>

              {/* Quick badges */}
              <div className="d-flex flex-wrap gap-2">
                <Badge bg={darkMode ? 'light' : 'dark'} text={darkMode ? 'dark' : 'light'}>
                  React + TypeScript
                </Badge>
                <Badge bg="primary">NestJS</Badge>
                <Badge bg="success">Express.js</Badge>
                <Badge bg="warning" text="dark">
                  MongoDB
                </Badge>
                <Badge bg="info" text="dark">
                  REST APIs
                </Badge>
              </div>
            </Col>
          </Row>

          <hr className={darkMode ? 'border-secondary' : 'border-light'} />

          {/* Content */}
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="about">
              <Accordion.Header>🧑‍💻 About Me</Accordion.Header>
              <Accordion.Body>
                <p className="mb-3">
                  I focus on building maintainable codebases with clear separation of concerns,
                  reusable components, and predictable data flows. My background in Communications
                  helps me translate product requirements into straightforward user experiences
                  and explain technical trade-offs to non-technical stakeholders.
                </p>
                <Row>
                  <Col md={6} className="mb-3">
                    <h6 className="mb-2">What I care about</h6>
                    <ListGroup variant={darkMode ? 'dark' : undefined}>
                      <ListGroup.Item>Clean architecture &amp; readable code</ListGroup.Item>
                      <ListGroup.Item>Typing everything (hello, TypeScript 👋)</ListGroup.Item>
                      <ListGroup.Item>API design, DTOs &amp; validation</ListGroup.Item>
                      <ListGroup.Item>DX: good scripts, logs &amp; docs</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={6} className="mb-3">
                    <h6 className="mb-2">What I like to build</h6>
                    <ListGroup variant={darkMode ? 'dark' : undefined}>
                      <ListGroup.Item>React dashboards and forms</ListGroup.Item>
                      <ListGroup.Item>NestJS/Express REST APIs</ListGroup.Item>
                      <ListGroup.Item>Auth flows (JWT/Passport)</ListGroup.Item>
                      <ListGroup.Item>MongoDB/Mongoose data models</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="stack">
              <Accordion.Header>🧰 Tech Stack</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={6} className="mb-3">
                    <h6 className="mb-2">Frontend</h6>
                    <ListGroup variant={darkMode ? 'dark' : undefined}>
                      <ListGroup.Item>React + TypeScript (Vite/Next.js)</ListGroup.Item>
                      <ListGroup.Item>React Bootstrap / Tailwind</ListGroup.Item>
                      <ListGroup.Item>Hooks, Context, reusable components</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={6} className="mb-3">
                    <h6 className="mb-2">Backend</h6>
                    <ListGroup variant={darkMode ? 'dark' : undefined}>
                      <ListGroup.Item>NestJS / Express.js</ListGroup.Item>
                      <ListGroup.Item>MongoDB / Mongoose</ListGroup.Item>
                      <ListGroup.Item>Auth (JWT, Passport), DTOs, validation</ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="contact">
              <Accordion.Header>📬 Contact</Accordion.Header>
              <Accordion.Body className="text-center">
                <p className="mb-2">
                  Want to collaborate or review some code? I’m happy to chat.
                </p>
                <p className="mb-0">
                  <a href="mailto:tristan@example.com">tristan@example.com</a> ·{' '}
                  <a
                    href="https://github.com/tristanlgb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{' '}
                  ·{' '}
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;


