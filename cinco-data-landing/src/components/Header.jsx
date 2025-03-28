// src/components/Header.jsx - Enhanced with animations and better responsiveness
import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      bg={scrolled ? "light" : "transparent"} 
      variant={scrolled ? "light" : "dark"}
      className={`transition-all ${scrolled ? 'scrolled shadow-sm' : ''}`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
          <span className={`fw-bold ${scrolled ? 'text-primary' : 'text-white'}`}>Cinco Data Inc</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="home" 
              spy={true} 
              smooth={true} 
              duration={500} 
              onClick={() => setExpanded(false)}
              className="px-3"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="services" 
              spy={true} 
              smooth={true} 
              duration={500} 
              onClick={() => setExpanded(false)}
              className="px-3"
            >
              Services
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="features" 
              spy={true} 
              smooth={true} 
              duration={500} 
              onClick={() => setExpanded(false)}
              className="px-3"
            >
              Features
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={500} 
              onClick={() => setExpanded(false)}
              className="px-3"
            >
              Contact
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="consultation" 
              spy={true} 
              smooth={true} 
              duration={500} 
              onClick={() => setExpanded(false)}
              className="btn btn-primary btn-sm ms-lg-3 mt-3 mt-lg-0 px-4"
            >
              Book Consultation
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;