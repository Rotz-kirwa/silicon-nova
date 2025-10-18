import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
    budgetRange: 'basic',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.projectDetails || formData.projectDetails.trim().length < 10) {
      newErrors.projectDetails = 'Please provide at least 10 characters describing your project';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Create WhatsApp message
    const budgetLabels = {
      basic: 'Basic (KES 10K-20K)',
      premium: 'Premium (KES 30K-50K)',
      enterprise: 'Enterprise (50K+)',
      custom: 'Custom Quote'
    };
    
    const message = `*New Project Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Budget Range:* ${budgetLabels[formData.budgetRange]}\n\n` +
      `*Project Details:*\n${formData.projectDetails}`;
    
    const whatsappNumber = '254762677591';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setSubmitMessage('Redirecting to WhatsApp...');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectDetails: '',
      budgetRange: 'basic',
    });
    setIsSubmitting(false);
    setTimeout(() => setSubmitMessage(''), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        required
        placeholder="Your full name"
      />

      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        placeholder="your.email@example.com"
      />

      <Input
        label="Phone (Optional)"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+254 762 677 591"
      />

      <Input
        label="Project Details"
        type="textarea"
        name="projectDetails"
        value={formData.projectDetails}
        onChange={handleChange}
        error={errors.projectDetails}
        required
        placeholder="Tell us about your project..."
      />

      <div className="input-wrapper">
        <label htmlFor="budgetRange" className="input-label">
          Budget Range <span className="required-indicator">*</span>
        </label>
        <select
          id="budgetRange"
          name="budgetRange"
          value={formData.budgetRange}
          onChange={handleChange}
          className="input"
        >
          <option value="basic">Basic (KES 10K-20K)</option>
          <option value="premium">Premium (KES 30K-50K)</option>
          <option value="enterprise">Enterprise (50K+)</option>
          <option value="custom">Custom Quote</option>
        </select>
      </div>

      <Button
        type="submit"
        loading={isSubmitting}
        disabled={isSubmitting}
        size="large"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>

      {submitMessage && (
        <div className="submit-message success">{submitMessage}</div>
      )}
    </form>
  );
};

export default ContactForm;
