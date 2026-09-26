import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import ThemeSwitcher from './components/ThemeSwitcher';
import TaskManager from './components/TaskManager';
import './styles/App.css';

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-${theme}`}>
      <Header />
      <ThemeSwitcher />
      <TaskManager />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;