import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './About.module.css';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="sobre-mi" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('about.title')}</h2>
          <p className={styles.subtitle}>{t('about.construction')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;