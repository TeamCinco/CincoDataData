// src/components/Features.jsx - Enhanced with better UI and animations
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel, faCalendarAlt, faBoltLightning, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faFileExcel,
    title: 'Flexible Formats',
    description: 'Receive your data in Excel, CSV, JSON, or any other format you prefer. We adapt to your workflow.'
  },
  {
    icon: faCalendarAlt, 
    title: 'Custom Schedules',
    description: 'Schedule data deliveries on a monthly basis or any custom time period that works for your business.'
  },
  {
    icon: faBoltLightning,
    title: 'Fast Turnaround',
    description: 'Quick turnaround times to ensure you always have the most up-to-date data for your decision-making.'
  },
  {
    icon: faShieldHalved,
    title: 'Secure & Compliant',
    description: 'All our data collection methods comply with website terms of service and data protection regulations.'
  }
];

const Features = () => {
  return (
    <section id="features" className="features py-5">
      <Container>
        <div className="text-center mb-5 reveal">
          <h2 className="display-5 fw-bold">Why Choose Cinco Data</h2>
          <p className="lead">We deliver more than just data - we provide competitive advantage</p>
        </div>
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={6} key={index} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="feature-item d-flex align-items-start mb-4">
                <div className="feature-icon me-4">
                  <FontAwesomeIcon icon={feature.icon} size="lg" className="text-primary" />
                </div>
                <div>
                  <h4 className="fw-bold mb-2">{feature.title}</h4>
                  <p className="text-muted mb-0">{feature.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-5 align-items-center">
          <Col md={6} className="order-md-2 reveal" style={{ transitionDelay: "0.2s" }}>
            <div className="img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Data visualization" 
                className="img-fluid rounded"
              />
            </div>
          </Col>
          <Col md={6} className="d-flex flex-column justify-content-center order-md-1 reveal" style={{ transitionDelay: "0.1s" }}>
            <h3 className="fw-bold mb-4">Custom Data Solutions for Online Wholesalers</h3>
            <p className="text-muted">
              At Cinco Data Inc, we understand the unique challenges facing online wholesalers. 
              Our tailored data scraping and vending services provide you with the specific 
              insights you need to optimize pricing, identify trends, and stay ahead of competitors.
            </p>
            <p className="text-muted">
              Whether you need one-time data collection or ongoing monitoring, we've got you covered 
              with flexible schedules and formats that integrate seamlessly with your existing systems.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;