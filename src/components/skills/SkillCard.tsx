import React from 'react';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages' | 'soft';
  color: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
  isVisible: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, isVisible }) => {
  return (
    <div
      className={`${styles.skillCard} ${isVisible ? styles.animate : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.skillHeader}>
        <div 
          className={styles.skillIcon}
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
        <div className={styles.skillInfo}>
          <h3 className={styles.skillName}>{skill.name}</h3>
          <span className={styles.skillLevel}>{skill.level}%</span>
        </div>
      </div>
      
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            backgroundColor: skill.color,
            boxShadow: `0 0 10px ${skill.color}40`
          }}
        />
      </div>
    </div>
  );
};

export default SkillCard;