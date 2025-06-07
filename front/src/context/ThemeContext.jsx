"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import LocalStorageHelper from '@/utils/LocalStorageHelper';

// Instância do helper
const storage = new LocalStorageHelper();
const LOCAL_STORAGE_KEY = 'app-theme-name';

// --- DEFINIÇÃO DOS OBJETOS DE TEMA ---

const lightTheme = {
  name: 'light',
  colors: {
    primary: '#D5FF35',
    primaryVariant: '#C6EA3A',
    secondary: '#EDEFFF',
    secondaryVariant: '#D8DAEC',
    background: '#FFFFFF',
    surface: '#F5F5F7',
    error: '#FF3B30',
    onPrimary: '#0D0D0D',
    onSecondary: '#1C1C1E',
    onBackground: '#1C1C1E',
    onSurface: '#3C3C43',
    onError: '#FFFFFF'
  },
  typography: {
    fontFamily: 'SF Pro Display, Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '1.5',
    headingColor: '#1C1C1E',
    subheadingColor: '#6E6E73',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    cardPadding: '20px',
  },
  shadows: {
    small: '0 1px 3px rgba(0,0,0,0.05)',
    medium: '0 2px 8px rgba(0,0,0,0.08)',
  },
};

const darkTheme = {
  name: 'dark',
  colors: {
    primary: '#D5FF35',
    primaryVariant: '#B5E132',
    secondary: '#2C2C2E',
    secondaryVariant: '#3A3A3C',
    background: '#000000',
    surface: '#1C1C1E',
    error: '#FF453A',
    onPrimary: '#0D0D0D',
    onSecondary: '#FFFFFF',
    onBackground: '#F2F2F7',
    onSurface: '#C7C7CC',
    onError: '#000000'
  },
  typography: {
    fontFamily: 'SF Pro Display, Arial, sans-serif',
    fontSize: '16px',
    lineHeight: '1.5',
    headingColor: '#FFFFFF',
    subheadingColor: '#A9A9AB',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    cardPadding: '20px',
  },
  shadows: {
    small: '0 2px 5px rgba(0,0,0,0.6)',
    medium: '0 4px 12px rgba(0,0,0,0.8)',
  },
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

// --- CONTEXTO ---

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [currentThemeName, setCurrentThemeName] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedThemeName = storage.getItem(LOCAL_STORAGE_KEY);
      return storedThemeName && themes[storedThemeName] ? storedThemeName : 'light';
    }
    return 'light';
  });

  const theme = themes[currentThemeName] || lightTheme;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      storage.setItem(LOCAL_STORAGE_KEY, currentThemeName);
    }
  }, [currentThemeName]);

  const value = {
    currentThemeName,
    theme,
    setCurrentThemeName,
    toggleTheme: () => {
      setCurrentThemeName(prev => (prev === 'light' ? 'dark' : 'light'));
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
