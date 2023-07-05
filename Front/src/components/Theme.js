import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // const colors = {
  //   light: {
  //     primary: '#007bff',
  //     secondary: '#6c757d',
  //     // Autres couleurs spécifiques au thème clair
  //   },
  //   dark: {
  //     primary: '#6c757d',
  //     secondary: '#343a40',
  //     // Autres couleurs spécifiques au thème sombre
  //   },
  // };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> 
      {children}
    </ThemeContext.Provider>
  );
};