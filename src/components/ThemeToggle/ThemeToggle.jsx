// import React, { useContext } from "react";
// import { ThemeContext } from "../../context/ThemeContext";
// import "./ThemeToggle.css"; // optional for styling

// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button className="theme-toggle-btn" onClick={toggleTheme}>
//       {theme === "light" ? "🌙 Dark" : "☀️ Light"}
//     </button>
//   );
// };

// export default ThemeToggle;
import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <div className="toggle-track">
        <div className={`toggle-thumb ${theme === 'dark' ? 'dark' : 'light'}`}>
          {theme === 'light' ? (
            <FaSun className="toggle-icon" />
          ) : (
            <FaMoon className="toggle-icon" />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;