import React from 'react';
import {
  Card,
  Accordion,
  Row,
  Col,
  ListGroup,
  Badge
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface HireMeProps {
  darkMode: boolean;
}

const HireMe: React.FC<HireMeProps> = ({ darkMode }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', width: '100vw', padding: '1rem' }}
    >
      <Card
        style={{ width: '95%', maxWidth: 1000, overflowY: 'auto' }}
        id="hireme"
        className={`${darkMode ? 'bg-dark text-light' : ''} shadow`}
      >
        <Card.Body>
          {/* Header */}
          <Card.Title className="fs-2 mb-2">🚀 Hire Me</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">
            Why I’m a strong full-stack developer
          </Card.Subtitle>

          <p className="mb-4" style={{ lineHeight: 1.6 }}>
            Hi! I’m <strong>Tristan Lenzberg</strong>, a passionate Full Stack Developer based in <strong>Buenos Aires</strong>.  
            I studied <strong>Communications</strong> at the <strong>University of Buenos Aires</strong> and trained as a <strong>Full Stack Developer at Coderhouse</strong>.  
            My background helps me combine technical skills with strong communication abilities to deliver scalable, user-friendly apps.
          </p>

          {/* Quick stack badges */}
          <div className="d-flex flex-wrap gap-2 mb-4">
            <Badge bg={darkMode ? 'light' : 'dark'} text={darkMode ? 'dark' : 'light'}>
              React + TypeScript
            </Badge>
            <Badge bg="primary">NestJS</Badge>
            <Badge bg="success">Express.js</Badge>
            <Badge bg="warning" text="dark">
              MongoDB
            </Badge>
            <Badge bg="info" text="dark">
              APIs & Auth
            </Badge>
          </div>

          {/* Accordion Sections */}
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="about">
              <Accordion.Header>🧑‍💻 About Me</Accordion.Header>
              <Accordion.Body>
                I specialize in crafting modern, scalable web applications.  
                On the frontend, I use <strong>React + TypeScript</strong> with a focus on clean UI, reusability, and responsive design.  
                On the backend, I rely on <strong>NestJS/Express</strong> and <strong>MongoDB</strong> for robust, maintainable APIs.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="strengths">
              <Accordion.Header>💡 Strengths</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col md={6}>
                    <h6 className="mb-2">Technical</h6>
                    <ListGroup variant={darkMode ? 'dark' : undefined}>
                      <ListGroup.Item>Clean architecture & scalable code</ListGroup.Item>
                      <ListGroup.Item>Strong TypeScript typing & DTOs</ListGroup.Item>
                      <ListGroup.Item>REST API design & validation</ListGroup.Item>
                      <ListGroup.Item>Authentication (JWT, Passport)</ListGroup.Item>
                    </ListGroup>
                  </Col>
                  <Col md={6}>
                    <h6 className="mb-2">Professional</h6>
                    <ListGroup variant={darkMode ? 'dark' : undefined}>
                      <ListGroup.Item>Clear communication skills</ListGroup.Item>
                      <ListGroup.Item>Team collaboration & code reviews</ListGroup.Item>
                      <ListGroup.Item>Problem-solving mindset</ListGroup.Item>
                      <ListGroup.Item>Continuous learner</ListGroup.Item>
                    </ListGroup>
                  </Col>

