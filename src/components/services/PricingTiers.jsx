import { FaCheck } from 'react-icons/fa';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import './PricingTiers.css';

const PricingTiers = ({ pricing }) => {
  const tiers = [
    { name: 'Basic', data: pricing.basic, popular: false },
    { name: 'Premium', data: pricing.premium, popular: true },
    { name: 'Enterprise', data: pricing.enterprise, popular: false },
  ];

  return (
    <div className="pricing-tiers">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          variant="elevated"
          className={`pricing-card ${tier.popular ? 'popular' : ''}`}
        >
          {tier.popular && <div className="popular-badge">Most Popular</div>}
          
          <h4 className="tier-name">{tier.name}</h4>
          
          <div className="tier-price">
            {typeof tier.data === 'string' ? (
              <span className="custom-price">{tier.data}</span>
            ) : (
              <>
                <span className="currency">KES</span>
                <span className="amount">
                  {tier.data.min.toLocaleString()} - {tier.data.max.toLocaleString()}
                </span>
              </>
            )}
          </div>

          {tier.data.features && (
            <ul className="tier-features">
              {tier.data.features.map((feature, index) => (
                <li key={index}>
                  <FaCheck className="feature-check" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          <Link to="/contact">
            <Button
              variant={tier.popular ? 'primary' : 'outline'}
              className="tier-button"
            >
              Get Started
            </Button>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default PricingTiers;
