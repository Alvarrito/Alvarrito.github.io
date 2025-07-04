import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageToggle from '../languageToggle/LanguageToggle';
import styles from './Header.module.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span>{t('hero.fullName')}</span>
        </div>
        
        <nav className={styles.nav}>
          <button onClick={() => scrollToSection('inicio')} className={styles.navLink}>
            {t('nav.home')}
          </button>
          <button onClick={() => scrollToSection('sobre-mi')} className={styles.navLink}>
            {t('nav.about')}
          </button>
          <button onClick={() => scrollToSection('formacion')} className={styles.navLink}>
            {t('nav.education')}
          </button>
          <button onClick={() => scrollToSection('experiencia')} className={styles.navLink}>
            {t('nav.experience')}
          </button>
          <button onClick={() => scrollToSection('habilidades')} className={styles.navLink}>
            {t('nav.skills')}
          </button>
          <button onClick={() => scrollToSection('conocimientos')} className={styles.navLink}>
            {t('nav.knowledge')}
          </button>
          <button onClick={() => scrollToSection('contacto')} className={styles.navLink}>
            {t('nav.contact')}
          </button>
        </nav>

        <div className={styles.languageSection}>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;