import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              <span className={styles.greeting}>{t('hero.greeting')}</span>
              <span className={styles.name}>{t('hero.name')}</span>
              <span className={styles.role}>{t('hero.role')}</span>
            </h1>
            
            <p className={styles.description}>
              {t('hero.description')}
            </p>
            
            <div className={styles.actions}>
              <button 
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className={styles.primaryBtn}
              >
                {t('hero.contact')}
              </button>
            </div>
          </div>
          
          <div className={styles.visual}>
            <div className={styles.avatar}>
              <span>A</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;