import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SkillCard from './SkillCard';
import IDECard from './IDECard';
import { getSkills, getCategories, getIDEs } from './skillsData';
import styles from './Skills.module.css';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = getSkills(t);
  const categories = getCategories(t);
  const ides = getIDEs();

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="habilidades" className={styles.skills} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('skills.title')}</h2>
          <p className={styles.subtitle}>{t('skills.subtitle')}</p>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${styles.categoryBtn} ${
                activeCategory === category.id ? styles.active : ''
              }`}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span className={styles.categoryName}>{category.name}</span>
            </button>
          ))}
        </div>

        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        <div className={styles.ideSection}>
          <h3 className={styles.ideTitle}>{t('skills.ides.title')}</h3>
          <div className={styles.ideGrid}>
            {ides.map((ide, index) => (
              <IDECard
                key={ide.name}
                ide={ide}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>3+</div>
            <div className={styles.statLabel}>{t('skills.stats.experience')}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>18+</div>
            <div className={styles.statLabel}>{t('skills.stats.technologies')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;