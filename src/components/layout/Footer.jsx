import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setMessage('Thank you for subscribing!');
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }, 1000);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-silicon">Silicon</span>
              <span className="logo-nova">Nova</span>
            </div>
            <p className="footer-tagline">
              Building Digital Experiences for Kenya and the World
            </p>
            <div className="social-links">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-link"
              >
                <FaTwitter />
              </a>
              <a
                href="https://wa.me/254762677591"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-link"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services#web-development">Web Development</Link></li>
              <li><Link to="/services#ecommerce">E-Commerce</Link></li>
              <li><Link to="/services#uiux">UI/UX Design</Link></li>
              <li><Link to="/services#maintenance">Maintenance</Link></li>
              <li><Link to="/services#seo">SEO Optimization</Link></li>
            </ul>
          </div>

          <div className="footer-section newsletter-section">
            <h3 className="footer-heading">Stay Updated</h3>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                className="newsletter-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {message && <p className="newsletter-message">{message}</p>}
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Silicon Nova. All rights reserved.
          </p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
