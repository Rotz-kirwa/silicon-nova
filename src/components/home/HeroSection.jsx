import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';
import Button from '../ui/Button';
import './HeroSection.css';

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-headline">
          Transforming Ideas into{' '}
          <span className="text-gradient">Stunning Websites</span>
        </h1>

        <p className="hero-subheading">
          Premium web development services for businesses in Kenya and globally.
          We build fast, secure, and beautiful websites that drive results.
        </p>

        <div className="hero-actions">
          <Link to="/contact">
            <Button size="large">Get a Free Quote</Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="outline" size="large">
              View Our Work
            </Button>
          </Link>
        </div>


      </div>
    </section>
  );
};

export default HeroSection;
