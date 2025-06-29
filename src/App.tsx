import React from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Knowledge from './components/knowledge/Knowledge';
import Contact from './components/contact/Contact';
import styles from './App.module.css';
import Experience from './components/experience/Experience';

const AppContent: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Knowledge />
        <Contact />
      </main>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;