import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const phoneNumber = '254762677591';
  const message = 'Hello! I would like to discuss a project with Silicon Nova.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-widget"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppWidget;
