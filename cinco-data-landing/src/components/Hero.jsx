// src/components/Hero.jsx - Enhanced with animations and better design
import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Hero = () => {
  useEffect(() => {
    // Add animation class after component mounts
    const timer = setTimeout(() => {
      document.querySelector('.hero-content').classList.add('active');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero d-flex align-items-center" style={{ minHeight: '100vh' }}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="hero-content reveal">
              <h1 className="display-4 fw-bold mb-4 text-white">
                Data Scraping &
                <br />
                <span className="text-primary">Vending Services</span>
              </h1>
              <p className="lead mb-4 text-light">
                Specialized solutions for online wholesalers. Get your data delivered in
                Excel or any custom format on a monthly basis or any schedule you need.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Button
                  as={Link}
                  to="contact"
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  variant="primary" 
                  size="lg"
                  className="px-4 py-3"
                >
                  Get Started
                </Button>
                <Button 
                  as={Link} 
                  to="consultation" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  variant="outline-light" 
                  size="lg"
                  className="px-4 py-3"
                >
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="text-center text-lg-end slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="img-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Data Visualization" 
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
