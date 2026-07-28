import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStrip from './components/ImpactStrip';
import SelectedWork from './components/SelectedWork';
import WorkingMethod from './components/WorkingMethod';
import Leadership from './components/Leadership';
import Capabilities from './components/Capabilities';
import Recognition from './components/Recognition';
import About from './components/About';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main style={{ flex: 1 }}>
        <Hero isDarkMode={theme === 'dark'} />
        <ImpactStrip />
        <SelectedWork />
        <WorkingMethod />
        <Leadership />
        <Capabilities />
        <Recognition />
        <About />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
