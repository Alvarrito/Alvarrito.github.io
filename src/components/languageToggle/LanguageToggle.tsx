import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import esFlag from '../../assets/es.png';
import gbFlag from '../../assets/gb.png';
import styles from './LanguageToggle.module.css';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.languageToggle}>
      <button
        className={`${styles.flagBtn} ${language === 'es' ? styles.active : ''}`}
        onClick={() => setLanguage('es')}
        title="Español"
      >
        <img 
          src={esFlag} 
          alt="España" 
          className={styles.flagImage}
        />
      </button>
      <button
        className={`${styles.flagBtn} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
        title="English"
      >
        <img 
          src={gbFlag} 
          alt="Reino Unido" 
          className={styles.flagImage}
        />
      </button>
    </div>
  );
};

export default LanguageToggle;