
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
        className={darkMode ? 'bg-dark navbar-dark' : 'bg-primary navbar-light'}
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#">My React Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => handleScrollTo('home')}>Home</Nav.Link>
              <Nav.Link onClick={() => handleScrollTo('projects')}>Projects</Nav.Link>
              <Nav.Link onClick={() => handleScrollTo('hireme')}>Hire Me</Nav.Link>
              <Nav.Link onClick={() => handleScrollTo('contact')}>Contact</Nav.Link>
              <Form.Check
                type="switch"
                id="dark-mode-switch"
                label="Dark Mode"
                className="ms-3"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
