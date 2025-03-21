
import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

interface HireMeProps {
  darkMode: boolean;
}

const HireMe: React.FC<HireMeProps> = ({ darkMode }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', width: '100vw' }}
    >
      <Card
        style={{ width: '90%', height: '90%', overflowY: 'auto' }}
        id="hireme"
        className={darkMode ? 'bg-dark text-light' : ''}
      >
        <Card.Body>
          <Card.Title className="fs-2">🚀 Hire Me</Card.Title>
          <Card.Subtitle className="mb-3 text-muted">Why I'm a strong full stack developer</Card.Subtitle>

          <Card.Text>
            Hi! I'm <strong>Tristan Lenzberg</strong>, a passionate Full Stack Developer based in <strong>Buenos Aires</strong>.
            I specialize in crafting modern, scalable web applications using powerful technologies like <strong>React</strong>,
            <strong> TypeScript</strong>, and <strong>Vite</strong> on the frontend — combined with robust, maintainable
            backends using <strong>NestJS</strong>.

            <br /><br />
            My focus on clean architecture, reusable components, and performance-driven design ensures that I build apps
            that not only work great but are easy to scale and maintain. Whether it's designing intuitive UI/UX,
            implementing secure APIs, or integrating with cloud services, I bring a balanced mix of frontend and backend skills.

            <br /><br />
            I'm committed to writing quality code, collaborating with teams, and continuously learning to stay at the forefront
            of web development. If you're looking for someone technically strong, detail-oriented, and passionate — let's build something amazing.
          </Card.Text>

      
        </Card.Body>
      </Card>
    </div>
  );
};

export default HireMe;
