import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = ({ size = 'medium' }) => {
  const socialPlatforms = [
    { name: 'Instagram', icon: FaInstagram, url: 'https://instagram.com', color: '#E4405F' },
    { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com', color: '#0077B5' },
    { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com', color: '#1DA1F2' },
    { name: 'WhatsApp', icon: FaWhatsapp, url: 'https://wa.me/254762677591', color: '#25D366' },
  ];

  const contactMethods = [
    { name: 'Email', icon: FaEnvelope, url: 'mailto:infosilicon.nova@gmail.com', label: 'infosilicon.nova@gmail.com' },
    { name: 'Phone', icon: FaPhone, url: 'tel:+254762677591', label: '+254 762 677 591' },
  ];

  return (
    <div className="social-links-container">
      <div className="social-platforms">
        {socialPlatforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-icon ${size}`}
              aria-label={platform.name}
              style={{ '--hover-color': platform.color }}
            >
              <Icon />
            </a>
          );
        })}
      </div>

      <div className="contact-methods">
        {contactMethods.map((method) => {
          const Icon = method.icon;
          return (
            <a
              key={method.name}
              href={method.url}
              className="contact-method"
            >
              <Icon className="contact-icon" />
              <span>{method.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
