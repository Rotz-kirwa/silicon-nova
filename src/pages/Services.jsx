import Layout from '../components/layout/Layout';
import ServiceCard from '../components/services/ServiceCard';
import PricingTiers from '../components/services/PricingTiers';
import FAQ from '../components/services/FAQ';
import { services } from '../data/services';
import './Services.css';

const Services = () => {
  return (
    <Layout>
      <div className="services-page">
        <div className="services-hero">
          <h1>Our Services</h1>
          <p>Comprehensive web solutions tailored to your business needs</p>
        </div>

        <div className="services-content">
          {services.map((service) => (
            <div key={service.id}>
              <ServiceCard service={service} />
              <PricingTiers pricing={service.pricing} />
            </div>
          ))}

          <FAQ />
        </div>
      </div>
    </Layout>
  );
};

export default Services;
