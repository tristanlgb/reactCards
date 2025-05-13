import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

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
              <Accordion.Header>🔐 Type Safety</Accordion.Header>
              <Accordion.Body>
                Prevents common bugs at compile time with static typing.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>📦 Better Code Structure</Accordion.Header>
              <Accordion.Body>
                Interfaces and types help organize code and ensure consistency.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>🛠 Developer Tooling</Accordion.Header>
              <Accordion.Body>
                Great autocompletion, refactoring tools, and IDE support.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>🌐 Ideal for Modern WebApps</Accordion.Header>
              <Accordion.Body>
                TypeScript is widely adopted in professional frontend and backend stacks.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
