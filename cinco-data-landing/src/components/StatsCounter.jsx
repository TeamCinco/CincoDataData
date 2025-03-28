import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// Helper function to format numbers with K/M suffixes
const formatNumber = (num) => {
  if (num >= 1000000) {
    // Use toFixed(1) for millions for consistency, e.g., 1.3M
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  }
  return num.toString(); // Keep numbers below 1000 as they are
};

const Counter = ({ end, duration = 100 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  // Removed 'once: true' to allow re-triggering
  const isInView = useInView(ref, { amount: 0.1 });

  // Effect to reset count when out of view
  useEffect(() => {
    if (!isInView) {
      setCount(0); // Reset count when not in view
    }
  }, [isInView]);

  // Effect to start counting when in view
  useEffect(() => {
    if (!isInView || end === 0) return; // Added check for end === 0

    let start = 0;
    // Prevent division by zero or negative increment time
    const incrementTime = Math.max(1, Math.floor(duration / end));

    const timer = setInterval(() => {
      // Increment logic adjusted slightly for smoother animation with formatting
      start = Math.min(end, start + Math.ceil(end / (duration / incrementTime)));
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  // Use formatNumber in the return statement
  return <span ref={ref}>{formatNumber(count)}</span>;
};

// Simple hook to detect if element is in view (requires intersection-observer polyfill or modern browser)
const useInView = (ref, options) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update state based on intersection status (entering or leaving)
      setIsInView(entry.isIntersecting);
    }, options);

    const currentRef = ref.current; // Capture ref value
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use captured value in cleanup
      }
    };
  }, [ref, options]);

  return isInView;
};


const StatsCounter = () => {
  // Placeholder target numbers (using values from the reverted file content)
  const stats = [
    { id: 1, label: 'Leads Found', value: 200, prefix: '' },
    { id: 2, label: 'Deals Closed', value: 3, prefix: '' },
    { id: 3, label: 'Revenue Generated', value: 60000, prefix: '$' },
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
