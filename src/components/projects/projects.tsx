import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const cardClass = darkMode ? 'bg-secondary text-light' : '';
  const buttonClass = darkMode ? 'btn-outline-light' : 'btn-outline-dark';

  const projects = [
    {
      title: 'Full Stack E-Commerce',
      description: 'NestJS backend, MongoDB, and React frontend with JWT + OAuth authentication.',
      demoLink: 'https://proyecto-final-lenzberg.vercel.app/',
      codeLink: 'https://github.com/tristanlgb/ProyectoFinalBackend3_Lenzberg'
    },
    {
      title: 'Real-Time Chat App',
      description: 'Socket.IO + Express + React with chat room and private messages.',
      demoLink: '',
      codeLink: 'https://github.com/tristanlgb/Entrega2-Backend1'
    },
    {
      title: 'Portfolio Website',
      description: 'React + Vite project with professional presentation of projects and contact form.',
      demoLink: 'https://react-cards-one-nu.vercel.app/',
      codeLink: 'https://github.com/tristanlgb/reactCards-main'
    }
  ];

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', width: '100vw' }}>
      <Card style={{ width: '90%', overflowY: 'auto' }} id="projects" className={darkMode ? 'bg-dark text-light' : ''}>
        <Card.Body>
          <Card.Title className="fs-2">🚀 Featured Projects</Card.Title>
          <Card.Subtitle className="mb-4 text-muted">Real applications that showcase my skills.</Card.Subtitle>
          <Row>
            {projects.map((project, index) => (
              <Col md={4} className="mb-4" key={index}>
                <Card className={cardClass}>
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={`btn me-2 ${buttonClass}`}>
                        🌐 Live Demo
                      </a>
                    )}
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className={`btn mt-2 ${buttonClass}`}>
                      💻 Code
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;