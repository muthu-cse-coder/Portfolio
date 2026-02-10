import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaClock, FaCheck } from 'react-icons/fa';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { timelineData } from '../../data/timeline';
import './Timeline.css';

const Timeline = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('experience');

  const currentData = timelineData[activeTab];

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <div className="section-title">
          <h2>My Journey</h2>
          <p>Education and professional experience timeline</p>
        </div>

        <div className="timeline-tabs">
          <button
            className={`timeline-tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <FaBriefcase /> Experience
          </button>
          <button
            className={`timeline-tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <FaGraduationCap /> Education
          </button>
        </div>

        <div 
          ref={ref} 
          className={`timeline-container ${isVisible ? 'visible' : ''}`}
        >
          <div className="timeline-line"></div>
          
          {currentData.map((item, index) => (
            <div 
              key={item.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {item.icon === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
                </div>

                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3>{item.title}</h3>
                    <span className="timeline-type">{item.type}</span>
                  </div>

                  <div className="timeline-meta">
                    <h4>{item.company || item.institution}</h4>
                    <div className="timeline-info">
                      <span className="timeline-location">
                        <FaMapMarkerAlt /> {item.location}
                      </span>
                      <span className="timeline-period">
                        <FaClock /> {item.period}
                      </span>
                    </div>
                  </div>

                  <p className="timeline-description">{item.description}</p>

                  {item.achievements && item.achievements.length > 0 && (
                    <div className="timeline-achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx}>
                            <FaCheck className="check-icon" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="timeline-technologies">
                      {item.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;