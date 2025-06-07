// src/context/ThemeContext.js
"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'app-theme';
const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // ✅ CORREÇÃO: Verifique se `window` (e implicitamente `localStorage`) existe
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
      return storedTheme || 'light';
    }
    // Retorna um valor padrão para a renderização no servidor,
    // o tema real será carregado no cliente no useEffect
    return 'light';
  });

  useEffect(() => {
    // ✅ CORREÇÃO: Verifique se `window` existe antes de usar localStorage ou document
    // Este useEffect só roda no cliente após a hidratação, mas a verificação é uma boa prática
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_KEY, theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
    toggleTheme: () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};