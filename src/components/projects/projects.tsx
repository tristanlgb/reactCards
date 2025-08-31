import React, { useMemo, useState } from 'react';
import {
  Card,
  Row,
  Col,
  Badge,
  Button,
  Form,
  InputGroup
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface ProjectsProps {
  darkMode: boolean;
}

type Project = {
  title: string;
  description: string;
  demoLink?: string;
  codeLink: string;
  tags: string[];
};

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [q, setQ] = useState('');
  const [tag, setTag] = useState<'All' | string>('All');

  const projects: Project[] = [
    {
      title: 'Full Stack E-Commerce',
      description:
        'NestJS backend + MongoDB + React (Vite) with JWT & GitHub OAuth; clean DTOs/validation and role-based flows.',
      demoLink: 'https://proyecto-final-lenzberg.vercel.app/',
      codeLink: 'https://github.com/tristanlgb/ProyectoFinalBackend3_Lenzberg',
      tags: ['React', 'TypeScript', 'NestJS', 'MongoDB', 'Auth']
    },
    {
      title: 'Real-Time Chat App',
      description:
        'Socket.IO + Express + React with rooms, private messages, and basic auth; emphasis on event-driven patterns.',
      codeLink: 'https://github.com/tristanlgb/Entrega2-Backend1',
      tags: ['React', 'Express', 'Socket.IO']
    },
    {
      title: 'Portfolio Website',
      description:
        'React + Vite portfolio with responsive layout, dark mode, and Contact form (mailto/WhatsApp actions).',
      demoLink: 'https://react-cards-one-nu.vercel.app/',
      codeLink: 'https://github.com/tristanlgb/reactCards-main',
      tags: ['React', 'Vite', 'UI/UX']
    }
  ];

  const allTags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => set.add(t)));
    return ['All', ...Array.from(set).sort()];
  }, [projects]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return projects.filter(p => {
      const matchesText =
        !term ||
        p.title.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.tags.some(t => t.toLowerCase().includes(term));
      const matchesTag = tag === 'All' || p.tags.includes(tag);
      return matchesText && matchesTag;
    });
  }, [q, tag, projects]);

  const cardClass = `${darkMode ? 'bg-secondary text-light' : ''} h-100 shadow-sm`;
  const buttonClass = darkMode ? 'btn-outline-light' : 'btn-outline-dark';

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', width: '100vw', padding: '1rem' }}
    >
      <Card
        style={{ width: '95%', maxWidth: 1100, overflowY: 'auto' }}
        id="projects"
        className={`${darkMode ? 'bg-dark text-light' : ''} shadow`}
      >
        <Card.Body>
          <Card.Title className="fs-2">🚀 Featured Projects</Card.Title>
          <Card.Subtitle className="mb-4 text-muted">
            Real applications that showcase my skills.
          </Card.Subtitle>

          {/* Filters */}
          <Row className="g-3 mb-4">
            <Col md={8}>
              <InputGroup>
                <InputGroup.Text>Search</InputGroup.Text>
                <Form.Control
                  placeholder="Title, tech, description..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col md={4}>
              <Form.Select
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                aria-label="Filter by tech"
              >
                {allTags.map((t) => (
                  <option key={t} value={t}>
                    {t === 'All' ? 'All technologies' : t}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

          {/* Grid */}
          <Row xs={1} md={2} lg={3} className="g-4">
            {filtered.map((project, idx) => (
              <Col key={idx}>
                <Card className={cardClass}>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="mb-1">{project.title}</Card.Title>
                    <div className="mb-2 d-flex flex-wrap gap-1">
                      {project.tags.map((t) => (
                        <Badge
                          key={t}
                          bg={
                            t === 'NestJS'
                              ? 'primary'
                              : t === 'MongoDB'
                              ? 'success'
                              : t === 'Auth'
                              ? 'warning'
                              : darkMode
                              ? 'light'
                              : 'dark'
                          }
                          text={t === 'Auth' || t === 'MongoDB' ? 'dark' : undefined}
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <Card.Text className="flex-grow-1" style={{ lineHeight: 1.6 }}>
                      {project.description}
                    </Card.Text>
                    <div className="d-flex flex-wrap gap-2 mt-auto">
                      {project.demoLink ? (
                        <Button
                          as="a"
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonClass}
                        >
                          🌐 Live Demo
                        </Button>
                      ) : (
                        <Button disabled className={buttonClass}>
                          🌐 Live Demo (coming soon)
                        </Button>
                      )}
                      <Button
                        as="a"
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonClass}
                      >
                        💻 Code
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {filtered.length === 0 && (
              <Col>
                <Card className={cardClass}>
                  <Card.Body>
                    <Card.Title>No results</Card.Title>
                    <Card.Text>
                      Try clearing the search or choosing a different technology.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Projects;
