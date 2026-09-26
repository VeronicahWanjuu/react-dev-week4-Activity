import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Header.css';

const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className={`header header-${theme}`}>
      <h1 className="header-title">
        Task <span className="header-accent">Manager</span>
      </h1>
      <p className="header-subtitle">Manage your tasks with React hooks</p>
    </header>
  );
};

export default Header;