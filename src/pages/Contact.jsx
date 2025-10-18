import Layout from '../components/layout/Layout';
import ContactForm from '../components/contact/ContactForm';
import SocialLinks from '../components/contact/SocialLinks';
import Card from '../components/ui/Card';
import './Contact.css';

const Contact = () => {
  return (
    <Layout>
      <div className="contact-page">
        <div className="contact-hero">
          <h1>Get In Touch</h1>
          <p>Let's discuss your project and bring your ideas to life</p>
        </div>

        <div className="contact-content">
          <div className="contact-grid">
            <Card variant="elevated" className="contact-form-card">
              <h2>Send Us a Message</h2>
              <ContactForm />
            </Card>

            <div className="contact-info">
              <Card variant="elevated">
                <h3>Connect With Us</h3>
                <p className="contact-description">
                  Based in Kenya, serving clients globally. Reach out through any of these channels.
                </p>
                <div className="contact-details">
                  <p><strong>Email:</strong> infosilicon.nova@gmail.com</p>
                  <p><strong>Phone:</strong> +254 762 677 591</p>
                </div>
                <SocialLinks />
              </Card>

              <Card variant="elevated" className="location-card">
                <h3>Our Location</h3>
                <p className="location-text">
                  <strong>Silicon Nova</strong><br />
                  Nairobi, Kenya<br />
                  Serving clients globally
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
