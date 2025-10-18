import { FaStar } from 'react-icons/fa';
import Card from '../ui/Card';
import { testimonials } from '../../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Clients Say</h2>
          <p>Don't just take our word for it - hear from our satisfied clients</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} variant="elevated" className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="testimonial-author">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="author-avatar"
                  />
                )}
                <div className="author-info">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">
                    {testimonial.role} {testimonial.company && `at ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
