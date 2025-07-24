import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import { darkTradingTheme, lightTradingTheme } from './theme/tradingTheme';
import TradingLayout from './components/Layout/TradingLayout';
import TradingLogin from './pages/TradingLogin';
import TradingDashboard from './pages/TradingDashboard';
import Users from './pages/Users';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

// Protected Route Component
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

// Public Route Component (redirect to dashboard if already logged in)
const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem('token');
  return !token ? <>{children}</> : <Navigate to="/dashboard" replace />;
};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('tradingDarkMode');
    return saved ? JSON.parse(saved) : true; // Default to dark mode for trading
  });

  useEffect(() => {
    localStorage.setItem('tradingDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkTradingTheme : lightTradingTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <TradingLogin />
              </PublicRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <TradingLayout onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}>
                  <TradingDashboard />
                </TradingLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/portfolio"
            element={
              <ProtectedRoute>
                <TradingLayout onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}>
                  <TradingDashboard />
                </TradingLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/trading"
            element={
              <ProtectedRoute>
                <TradingLayout onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}>
                  <TradingDashboard />
                </TradingLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <TradingLayout onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}>
                  <Users />
                </TradingLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <TradingLayout onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}>
                  <Analytics />
                </TradingLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <TradingLayout onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}>
                  <Settings />
                </TradingLayout>
              </ProtectedRoute>
            }
          />

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
