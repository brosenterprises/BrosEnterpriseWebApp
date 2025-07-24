import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { lightResponsiveTheme, darkResponsiveTheme } from './theme/simpleResponsiveTheme';
import HardwareLayout from './components/Layout/HardwareLayout';
import Home from './pages/Home';
import Paints from './pages/Paints';
import Hardware from './pages/Hardware';
import SanitaryWare from './pages/SanitaryWare';
import Electricals from './pages/Electricals';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('hardwareDarkMode');
    return saved ? JSON.parse(saved) : false; // Default to light mode for hardware store
  });

  useEffect(() => {
    localStorage.setItem('hardwareDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const currentTheme = isDarkMode ? darkResponsiveTheme : lightResponsiveTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Router basename="/BrosEnterpriseWebApp">
        <HardwareLayout onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/paints" element={<Paints />} />
            <Route path="/hardware" element={<Hardware />} />
            <Route path="/sanitary" element={<SanitaryWare />} />
            <Route path="/electricals" element={<Electricals />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Redirect any other routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </HardwareLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
