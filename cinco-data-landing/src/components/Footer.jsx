// src/components/Footer.jsx - Enhanced with better styling
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row className="mb-5">
          <Col lg={4} className="mb-4 mb-lg-0">
            <h4 className="fw-bold mb-4">Cinco Data Inc</h4>
            <p className="text-light mb-4">
              Providing comprehensive data scraping and vending services for online wholesalers.
              Transform your business with actionable data insights.
            </p>
            <div className="social-icons d-flex gap-3">
              <a href="#" className="text-white fs-5 social-icon">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-white fs-5 social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-white fs-5 social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="text-white fs-5 social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
          <Col md={4} lg={2} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <Link 
                  to="home" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className="text-light text-decoration-none footer-link"
                >
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="services" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className="text-light text-decoration-none footer-link"
                >
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="features" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className="text-light text-decoration-none footer-link"
                >
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  duration={500} 
                  className="text-light text-decoration-none footer-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4} lg={3} className="mb-4 mb-md-0">
            <h5 className="fw-bold mb-4">Services</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">
                <span className="text-light footer-link">Data Scraping</span>
              </li>
              <li className="mb-2">
                <span className="text-light footer-link">Data Formatting</span>
              </li>
              <li className="mb-2">
                <span className="text-light footer-link">Market Analysis</span>
              </li>
              <li className="mb-2">
                <span className="text-light footer-link">Custom Solutions</span>
              </li>
            </ul>
          </Col>
          <Col md={4} lg={3}>
            <h5 className="fw-bold mb-4">Contact Us</h5>
            <address className="mb-0">
              <p className="mb-3 footer-contact">
                <FontAwesomeIcon icon={faLocationDot} className="me-2 text-primary" />
                123 Data Street, Suite 456<br />
                San Francisco, CA 94105
              </p>
              <p className="mb-3 footer-contact">
                <FontAwesomeIcon icon={faPhone} className="me-2 text-primary" />
                <a href="tel:+15551234567" className="text-light text-decoration-none">(555) 123-4567</a>
              </p>
              <p className="mb-3 footer-contact">
                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-primary" />
                <a href="mailto:cincodatainc@gmail.com" className="text-light text-decoration-none">cincodatainc@gmail.com</a>
              </p>
            </address>
          </Col>
        </Row>
        <hr className="my-4 bg-secondary" />
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0 text-light">&copy; {currentYear} Cinco Data Inc. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3">
                <a href="#" className="text-light text-decoration-none footer-link">Privacy Policy</a>
              </li>
              <li className="list-inline-item me-3">
                <a href="#" className="text-light text-decoration-none footer-link">Terms of Service</a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-light text-decoration-none footer-link">Cookie Policy</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;