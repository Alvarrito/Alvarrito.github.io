import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { GraduationCap, Calendar, MapPin, Award, Languages } from 'lucide-react';
import styles from './Education.module.css';

interface EducationItem {
  title: string;
  specialization?: string;
  institution: string;
  period: string;
  location: string;
  description?: string;
  type: 'degree' | 'certification' | 'course';
}

const Education: React.FC = () => {
  const { t } = useLanguage();

  const educationData: EducationItem[] = [
    {
      title: t('education.degree.title'),
      specialization: t('education.degree.specialization'),
      institution: t('education.degree.institution'),
      period: t('education.degree.period'),
      location: t('education.degree.location'),
      type: 'degree'
    },
    {
      title: t('education.certification1.title'),
      institution: t('education.certification1.institution'),
      period: t('education.certification1.period'),
      location: t('education.certification1.location'),
      type: 'certification'
    },
    {
      title: t('education.certification2.title'),
      institution: t('education.certification2.institution'),
      period: t('education.certification2.period'),
      location: t('education.certification2.location'),
      type: 'certification'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'degree':
        return <GraduationCap />;
      case 'certification':
        return <Languages />;
      default:
        return <GraduationCap />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'degree':
        return '#3b82f6';
      case 'certification':
        return '#10b981';
      default:
        return '#3b82f6';
    }
  };

  return (
    <section id="formacion" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('education.title')}</h2>
          <p className={styles.subtitle}>{t('education.subtitle')}</p>
        </div>

        <div className={styles.timeline}>
          {educationData.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div 
                className={styles.timelineIcon}
                style={{ backgroundColor: getTypeColor(item.type) }}
              >
                {getIcon(item.type)}
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>
                      {item.title}
                      {item.specialization && (
                        <span style={{ 
                          display: 'block', 
                          fontSize: '1rem', 
                          fontWeight: '500', 
                          color: '#94a3b8',
                          marginTop: '0.5rem'
                        }}>
                          {item.specialization}
                        </span>
                      )}
                    </h3>
                    <div className={styles.cardMeta}>
                      <div className={styles.metaItem}>
                        <Calendar size={16} />
                        <span>{item.period}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.cardBody}>
                    <h4 className={styles.institution}>{item.institution}</h4>
                    {item.description && (
                      <p className={styles.description}>{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;