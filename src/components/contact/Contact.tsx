import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contacto" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('contact.title')}</h2>
          <p className={styles.subtitle}>{t('contact.construction')}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;