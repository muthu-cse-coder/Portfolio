import React from 'react';
import { FaCode, FaLaptopCode, FaMobile, FaRocket } from 'react-icons/fa';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { personalInfo } from '../../data/personalinfo';
import profileImage from '../../assets/image/Muthuselvan.JPG';
import './About.css';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices"
    },
    {
      icon: <FaLaptopCode />,
      title: "Responsive Design",
      description: "Creating beautiful interfaces that work on all devices"
    },
    {
      icon: <FaMobile />,
      title: "Mobile First",
      description: "Optimized for mobile devices with progressive enhancement"
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description: "Fast loading times and optimized user experience"
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div 
          ref={ref} 
          className={`about-content ${isVisible ? 'fade-in-up' : ''}`}
        >
          <div className="about-text">
            <h3 className="gradient-text">Hi, I'm a Developer</h3>
            <p>{personalInfo.bio}</p>
            <p>
              I specialize in building modern web applications using cutting-edge 
              technologies. My passion lies in creating intuitive user experiences 
              and solving complex problems with elegant solutions.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h4>30+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="about-features">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-card ${isVisible ? 'scale-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;