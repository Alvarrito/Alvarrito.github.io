import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Briefcase, Calendar, MapPin, Building } from 'lucide-react';
import styles from './Experience.module.css';

interface ExperienceItem {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

const Experience: React.FC = () => {
  const { t } = useLanguage();

  const experienceData: ExperienceItem[] = [
    {
      position: t('experience.job1.position'),
      company: t('experience.job1.company'),
      period: t('experience.job1.period'),
      location: t('experience.job1.location'),
      description: t('experience.job1.description'),
      technologies: ['React', 'C#', '.NET Framework', 'SQL Server', 'Azure DevOps', 'NUnit']
    },
    {
      position: t('experience.job2.position'),
      company: t('experience.job2.company'),
      period: t('experience.job2.period'),
      location: t('experience.job2.location'),
      description: t('experience.job2.description'),
      technologies: ['Vue.js', 'C#', '.NET', 'MySQL', 'NUnit', 'Git']
    }
  ];

  return (
    <section id="experiencia" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('experience.title')}</h2>
        </div>

        <div className={styles.timeline}>
          {experienceData.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineIcon}>
                <Briefcase />
              </div>
              
              <div className={styles.timelineContent}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.position}>{item.position}</h3>
                    <div className={styles.cardMeta}>
                      <div className={styles.metaItem}>
                        <Building size={16} />
                        <span>{item.company}</span>
                      </div>
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
                    <p className={styles.description}>{item.description}</p>
                    
                    <div className={styles.technologies}>
                      <h4 className={styles.techTitle}>{t('experience.technologies')}</h4>
                      <div className={styles.techList}>
                        {item.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Experience;