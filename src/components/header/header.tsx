import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { BsMenuButton } from 'react-icons/bs'; // Add react-icons for menu icon


const Header: React.FC = () => {
  const handleScrollTo = (section: string) => {
    // Logic for scrolling to different sections
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">My React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => handleScrollTo('home')}>Home</Nav.Link>
              <Nav.Link onClick={() => handleScrollTo('projects')}>Projects</Nav.Link>
              <Nav.Link onClick={() => handleScrollTo('hireme')}>Hire Me</Nav.Link>
              <Nav.Link onClick={() => handleScrollTo('contact')}>Contact</Nav.Link>
            </Nav>
            <Button variant="outline-light" className="d-lg-none">
              <BsMenuButton />
            </Button>
            <NavDropdown title="Menu" id="basic-nav-dropdown" className="d-none d-lg-block">
              <NavDropdown.Item onClick={() => handleScrollTo('home')}>Home</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollTo('projects')}>Projects</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollTo('hire-me')}>Hire Me</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleScrollTo('contact')}>Contact</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
