import { useState } from 'react';
import { FaCheck, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="service-detail-card" id={service.id}>
      <div className="service-card-header">
        <div className="service-card-icon">{service.icon}</div>
        <h3>{service.title}</h3>
      </div>

      <p className="service-description">{service.description}</p>

      <button
        className="expand-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {isExpanded && (
        <div className="service-features">
          <h4>Features Include:</h4>
          <ul>
            {service.features.map((feature, index) => (
              <li key={index}>
                <FaCheck className="check-icon" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link to="/contact">
        <Button variant="primary" className="service-cta">
          Get Started
        </Button>
      </Link>
    </Card>
  );
};

export default ServiceCard;
