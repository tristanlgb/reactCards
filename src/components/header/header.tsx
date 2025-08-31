import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Form } from 'react-bootstrap';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const handleScrollTo = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <Navbar
        expand="lg"
        sticky="top"
        className={`shadow-sm ${darkMode ? 'bg-dark navbar-dark' : 'bg-primary navbar-light'}`}
      >
        <Container>
          {/* Branding */}
          <Navbar.Brand
            onClick={() => handleScrollTo('home')}
            style={{ cursor: 'pointer', fontWeight: 600 }}
          >
            Tristan Lenzberg · Portfolio
          </Navbar.Brand>

          {/* Toggle for mobile */}
          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto align-items-center">
              <Nav.Link onClick={() => handleScrollTo('home')}>🏠 Home</Nav.Link>
              <Nav.Link onClick={() => handleScrollTo('projects')}>📂 Projects</Nav.Link>
              <Nav.Link onClick={() => handleScrollTo('hireme')}>🚀 Hire Me</Nav.Link>
              <Nav.Link onClick={() => handleScrollTo('contact')}>📬 Contact</Nav.Link>

              {/* Dark Mode Switch */}
              <Form.Check
                type="switch"
                id="dark-mode-switch"
                label="🌙"
                className="ms-3"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                style={{ cursor: 'pointer' }}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

