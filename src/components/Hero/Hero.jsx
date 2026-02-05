import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaArrowDown } from 'react-icons/fa';
import { personalInfo } from '../../data/personalinfo';
import ParticleBackground from '../Particles/ParticleBackground';
import profileImage from '../../assets/image/Muthuselvan.JPG';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <ParticleBackground />
      
      <div className="hero-container">
        <div className="hero-content fade-in-up">
          <div className="hero-text">
            <h3 className="hero-greeting">Hello, I'm</h3>
            <h1 className="hero-name gradient-text">{personalInfo.name}</h1>
            <h2 className="hero-title">
              <span className="typing-text">{personalInfo.title}</span>
            </h2>
            <p className="hero-description">{personalInfo.tagline}</p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <a 
                href={personalInfo.resume} 
                className="btn btn-outline"
                download
              >
                <FaDownload /> Download CV
              </a>
            </div>

            <div className="hero-social">
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href={personalInfo.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="hero-image fade-in-right">
            <div className="image-container">
              <div className="image-glow"></div>
              <img src={profileImage} alt="Muthuselvan" className="profile-photo" />
            </div>
          </div>
        </div>

        <button 
          className="scroll-down"
          onClick={() => scrollToSection('about')}
          aria-label="Scroll down"
        >
          <FaArrowDown className="bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;