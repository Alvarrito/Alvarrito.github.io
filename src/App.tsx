import React from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import styles from './App.module.css';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        
        {/* Secciones placeholder */}
        <section id="sobre-mi" className={styles.section}>
          <div className={styles.container}>
            <h2>{t('section.about.title')}</h2>
            <p>{t('section.about.placeholder')}</p>
          </div>
        </section>
        
        <section id="habilidades" className={styles.section}>
          <div className={styles.container}>
            <h2>{t('section.skills.title')}</h2>
            <p>{t('section.skills.placeholder')}</p>
          </div>
        </section>
        
        <section id="proyectos" className={styles.section}>
          <div className={styles.container}>
            <h2>{t('section.projects.title')}</h2>
            <p>{t('section.projects.placeholder')}</p>
          </div>
        </section>
        
        <section id="contacto" className={styles.section}>
          <div className={styles.container}>
            <h2>{t('section.contact.title')}</h2>
            <p>{t('section.contact.placeholder')}</p>
          </div>
        </section>
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