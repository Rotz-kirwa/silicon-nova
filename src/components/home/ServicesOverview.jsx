import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { services } from '../../data/services';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <section id="services" className="services-overview">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>Comprehensive web solutions tailored to your business needs</p>
        </div>

        <div className="services-grid">
          {featuredServices.map((service, index) => (
            <Card
              key={service.id}
              hoverable
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.shortDescription}</p>
              <Link to={`/services#${service.id}`} className="service-link">
                Learn More →
              </Link>
            </Card>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/services">
            <button className="view-all-button">View All Services</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
