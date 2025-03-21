import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const cardClass = darkMode ? 'bg-secondary text-light' : '';

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <Card
        style={{ width: '90%', height: '90%', overflowY: 'auto' }}
        id="projects"
        className={darkMode ? 'bg-dark text-light' : ''}
      >
        <Card.Body>
          <Card.Title className="fs-2">🛠️ Projects</Card.Title>
          <Card.Subtitle className="mb-4 text-muted">Some featured work</Card.Subtitle>

          {/* Project Cards */}
          <Row className="mb-4">
            <Col md={3}>
              <Card className={cardClass}>
                <Card.Body>
                  <Card.Title>Project JS</Card.Title>
                  <Card.Text>
                    A frontend app built using vanilla JavaScript and Bootstrap.
                  </Card.Text>
                  <a
                    href="https://proyecto-final-lenzberg.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light mt-2"
                  >
                    Go to Ecommerce Example
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className={cardClass}>
                <Card.Body>
                  <Card.Title>Project TS</Card.Title>
                  <Card.Text>
                    A React + TypeScript dashboard with chart integrations.
                  </Card.Text>
                  <a
                    href="https://proyecto-final-lenzberg.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light mt-2"
                  >
                    Go to Ecommerce Example
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className={cardClass}>
                <Card.Body>
                  <Card.Title>Project Express</Card.Title>
                  <Card.Text>
                    RESTful API using Express.js and MongoDB for data storage.
                  </Card.Text>
                  <a
                    href="https://proyecto-final-lenzberg.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light mt-2"
                  >
                    Go to Ecommerce Example
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className={cardClass}>
                <Card.Body>
                  <Card.Title>Project NestJS</Card.Title>
                  <Card.Text>
                    A scalable backend with NestJS using decorators and modules.
                  </Card.Text>
                  <a
                    href="https://proyecto-final-lenzberg.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light mt-2"
                  >
                    Go to Ecommerce Example
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Google Maps Cards */}
          <Row>
            <Col md={6}>
              <Card className={`mb-3 ${cardClass}`}>
                <Card.Body>
                  <Card.Title>📍 Buenos Aires</Card.Title>
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <iframe
                      title="Buenos Aires Map"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13136.392788196!2d-58.4458569!3d-34.6075689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3f0c96ef9b%3A0x9b16fa5eacb02e92!2sBuenos%20Aires!5e0!3m2!1ses!2sar!4v1677321262241!5m2!1ses!2sar"
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className={`mb-3 ${cardClass}`}>
                <Card.Body>
                  <Card.Title>📍 Chacarita</Card.Title>
                  <div style={{ height: '200px', overflow: 'hidden' }}>
                    <iframe
                      title="Chacarita Map"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowFullScreen
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13130.715532149975!2d-58.4595272!3d-34.5895054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca7e4b3fc3fd%3A0x345b57e3f087e9e!2sChacarita%2C%20CABA!5e0!3m2!1ses!2sar!4v1677321263333!5m2!1ses!2sar"
                    ></iframe>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;

