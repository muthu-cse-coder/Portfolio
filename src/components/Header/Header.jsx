import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <a href="#home" className="logo-text gradient-text">
              Portfolio
            </a>
          </div>

          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a onClick={() => scrollToSection('home')} className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a onClick={() => scrollToSection('about')} className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a onClick={() => scrollToSection('skills')} className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a onClick={() => scrollToSection('projects')} className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a onClick={() => scrollToSection('contact')} className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item mobile-theme">
              <ThemeToggle />
            </li>
          </ul>

          <div className="nav-right">
            <ThemeToggle />
            <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;