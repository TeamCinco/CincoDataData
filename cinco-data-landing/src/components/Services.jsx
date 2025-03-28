// src/components/Services.jsx - Enhanced with better card design and animations, plus image examples
import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap'; // Added Image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faTableList, faChartLine, faRobot } from '@fortawesome/free-solid-svg-icons';

// Import images
import excelImage from '../assets/excel-snippet.png';
import jsonImage from '../assets/json-snippet.png';

const serviceItems = [
  {
    icon: faDatabase,
    title: 'Data Scraping',
    description: 'Custom scraping solutions to extract valuable data from various online marketplaces and wholesaler websites.'
  },
  {
    icon: faTableList,
    title: 'Data Formatting',
    description: 'Receive your data in Excel files or any other format that works best for your business needs.'
  },
  {
    icon: faChartLine,
    title: 'Market Analysis',
    description: 'Comprehensive market analysis reports based on the collected data to help you stay ahead of competition.'
  },
  {
    icon: faRobot,
    title: 'Automated Services',
    description: 'Set up regular data collection services on a monthly basis or any custom time period that suits your needs.'
  }
];

const Services = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Initial check on load
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <section id="services" className="services py-5 bg-light">
      <Container>
        <div className="text-center mb-5 reveal">
          <h2 className="display-5 fw-bold">Our Services</h2>
          <p className="lead">Transforming raw data into actionable insights for online wholesalers</p>
        </div>
        <Row className="g-4 stagger-children">
          {serviceItems.map((service, index) => (
            <Col md={6} lg={3} key={index} className="mb-4 reveal" style={{ animationDelay: `${0.1 * index}s` }}>
              <Card className="service-card h-100 shadow-sm">
                <Card.Body className="text-center p-4">
                  <div className="icon-box mb-4">
                    <FontAwesomeIcon icon={service.icon} size="2x" />
                  </div>
                  <Card.Title className="fw-bold mb-3">{service.title}</Card.Title>
                  <Card.Text className="text-muted">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Added Row for Image Snippets */}
        <div className="text-center mt-5 pt-4 reveal">
          <h3 className="fw-bold mb-4">Delivered Your Way</h3>
        </div>
        <Row className="mt-4 justify-content-center align-items-center g-4 reveal">
          <Col md={5} className="text-center">
            <h4 className="text-muted fw-normal mb-3">Excel Format</h4>
            <Image src={excelImage} alt="Excel data snippet" fluid rounded shadow />
          </Col>
          <Col md={5} className="text-center">
            <h4 className="text-muted fw-normal mb-3">JSON Format</h4>
            <Image src={jsonImage} alt="JSON data snippet" fluid rounded shadow />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
