import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/ThemeSwitcher.css';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`theme-switcher theme-switcher-${theme}`}>
      <p className="theme-label">
        Current theme: <strong>{theme}</strong>
      </p>
      <button
        className="theme-button"
        onClick={toggleTheme}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default ThemeSwitcher;