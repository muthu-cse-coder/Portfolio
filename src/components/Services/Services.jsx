import React from 'react';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { servicesData } from '../../data/services';
import './Services.css';

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const handleContactClick = (serviceName) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Optional: Pre-fill contact form subject with service name
      setTimeout(() => {
        const subjectInput = document.querySelector('input[name="subject"]');
        if (subjectInput) {
          subjectInput.value = `Inquiry about ${serviceName}`;
          subjectInput.focus();
        }
      }, 500);
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Services I Offer</h2>
          <p>Professional solutions tailored to your needs</p>
        </div>

        <div 
          ref={ref} 
          className={`services-grid ${isVisible ? 'visible' : ''}`}
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className={`service-card ${service.popular ? 'popular' : ''} ${isVisible ? 'fade-in-up' : ''}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--service-color': service.color
                }}
              >
                {service.popular && (
                  <div className="popular-badge">
                    Most Popular
                  </div>
                )}

                <div className="service-icon" style={{ color: service.color }}>
                  <IconComponent />
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <FaCheck className="feature-check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="service-footer">
                  <div className="service-price">{service.price}</div>
                  <button 
                    className="service-btn"
                    onClick={() => handleContactClick(service.title)}
                  >
                    Get Started <FaArrowRight />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="services-cta">
          <h3>Need a Custom Solution?</h3>
          <p>I can create a tailored solution that perfectly fits your requirements</p>
          <button 
            className="cta-button"
            onClick={() => handleContactClick('Custom Solution')}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;