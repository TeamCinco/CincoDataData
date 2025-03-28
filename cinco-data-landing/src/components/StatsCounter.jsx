import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

// Simple hook to detect if element is in view (requires intersection-observer polyfill or modern browser)
const useInView = (ref, options) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target); // Stop observing once in view
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
};


const StatsCounter = () => {
  // Placeholder target numbers
  const stats = [
    { id: 1, label: 'Leads Found', value: 15200, prefix: '' },
    { id: 2, label: 'Deals Closed', value: 3850, prefix: '' },
    { id: 3, label: 'Revenue Generated', value: 1250000, prefix: '$' },
  ];

  return (
    <section className="stats-counter-section bg-light py-5">
      <Container>
        <Row className="text-center">
          {stats.map((stat) => (
            <Col key={stat.id} md={4} className="mb-4 mb-md-0">
              <div className="stat-item">
                <h2 className="display-5 fw-bold text-primary">
                  {stat.prefix}<Counter end={stat.value} />
                </h2>
                <p className="lead text-muted mb-0">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatsCounter;
