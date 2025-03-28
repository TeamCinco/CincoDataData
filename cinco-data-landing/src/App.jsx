// src/App.jsx
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import StatsCounter from './components/StatsCounter'; // Import the new component
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import Consultation from './components/Consultation';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  useEffect(() => {
    // Function to handle scroll animations
    const handleScrollAnimations = () => {
      const elements = document.querySelectorAll('.reveal');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    // Add event listener
    window.addEventListener('scroll', handleScrollAnimations);
    // Check on initial load
    setTimeout(() => {
      handleScrollAnimations();
    }, 300);
    
    // Clean up
    return () => window.removeEventListener('scroll', handleScrollAnimations);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Services />
          <StatsCounter /> {/* Add the new component here */}
          <Features />
          <ContactForm />
          <Consultation />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
