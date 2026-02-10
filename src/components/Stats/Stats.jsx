import React, { useState, useEffect } from 'react';
import { FaCode, FaProjectDiagram, FaUsers, FaCoffee } from 'react-icons/fa';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Stats.css';

const AnimatedStats = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    coffee: 0
  });

  const stats = [
    {
      id: 'experience',
      icon: <FaCode />,
      end: 5,
      suffix: '+',
      label: 'Years Experience',
      color: '#6366f1',
      duration: 2000
    },
    {
      id: 'projects',
      icon: <FaProjectDiagram />,
      end: 50,
      suffix: '+',
      label: 'Projects Completed',
      color: '#ec4899',
      duration: 2500
    },
    {
      id: 'clients',
      icon: <FaUsers />,
      end: 30,
      suffix: '+',
      label: 'Happy Clients',
      color: '#10b981',
      duration: 2200
    },
    {
      id: 'coffee',
      icon: <FaCoffee />,
      end: 500,
      suffix: '+',
      label: 'Cups of Coffee',
      color: '#f59e0b',
      duration: 3000
    }
  ];

  useEffect(() => {
    if (!isVisible) return;

    const animateCounters = () => {
      stats.forEach(stat => {
        const increment = stat.end / (stat.duration / 16);
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.end) {
            current = stat.end;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [stat.id]: Math.floor(current)
          }));
        }, 16);
      });
    };

    animateCounters();
  }, [isVisible]);

  return (
    <section className="stats-section">
      <div className="container">
        <div 
          ref={ref} 
          className={`stats-grid ${isVisible ? 'visible' : ''}`}
        >
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className={`stat-card ${isVisible ? 'fade-in-up' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--stat-color': stat.color
              }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3 className="stat-number">
                  {counters[stat.id]}{stat.suffix}
                </h3>
                <p className="stat-label">{stat.label}</p>
              </div>
              <div 
                className="stat-progress" 
                style={{ 
                  width: isVisible ? '100%' : '0%',
                  backgroundColor: stat.color
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;