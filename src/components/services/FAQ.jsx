import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Typically, a basic website takes 2-4 weeks, while more complex projects can take 6-12 weeks. The timeline depends on the scope, features, and your feedback response time.',
    },
    {
      question: 'Do you provide website maintenance after launch?',
      answer: 'Yes! We offer ongoing maintenance packages that include security updates, content updates, performance monitoring, and technical support.',
    },
    {
      question: 'Can you help with SEO and digital marketing?',
      answer: 'Absolutely. We provide comprehensive SEO services including keyword research, on-page optimization, content strategy, and ongoing performance tracking.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept M-Pesa, bank transfers, PayPal, and credit/debit cards. We typically work with a 50% upfront deposit and 50% upon completion.',
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Yes, all our websites are built with a mobile-first approach, ensuring they look and work perfectly on all devices and screen sizes.',
    },
    {
      question: 'Do I own the website after it\'s built?',
      answer: 'Yes, you own all rights to your website, including the code, design, and content. We provide full documentation and training.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h3 className="faq-title">Frequently Asked Questions</h3>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
