import React from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <Card
        style={{ width: '90%', height: '90%', overflowY: 'auto' }}
        id="home"
        className={darkMode ? 'bg-dark text-light' : ''}
      >
        <Card.Body>
          <Card.Title className="fs-2 mb-3">👋 Hello, I'm Tristan</Card.Title>
          <Card.Subtitle className="mb-4 text-muted">
            This is an example portfolio app using React and TypeScript.
          </Card.Subtitle>

          <div className="text-center mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6CTCje2D2Hi1ygPMdyUzNEztmh_LlC9KHg&s"
              alt="Profile"
              className="img-fluid rounded"
              style={{ maxHeight: '300px' }}
            />
          </div>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>✈️ Proyecto API de Tickets de Avión</Accordion.Header>
              <Accordion.Body className="text-center">
                <Button
                  variant="primary"
                  href="https://tu-proyecto.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IR AL PROYECTO API DE TICKETS DE AVION
                </Button>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;

