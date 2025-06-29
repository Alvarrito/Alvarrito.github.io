import React from 'react';
import styles from './Skills.module.css';

interface IDE {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface IDECardProps {
  ide: IDE;
  index: number;
  isVisible: boolean;
}

const IDECard: React.FC<IDECardProps> = ({ ide, index, isVisible }) => {
  return (
    <div
      className={`${styles.ideCard} ${isVisible ? styles.animate : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.ideHeader}>
        <div 
          className={styles.ideIcon}
          style={{ color: ide.color }}
        >
          {ide.icon}
        </div>
        <h3 className={styles.ideName}>{ide.name}</h3>
      </div>
    </div>
  );
};

export default IDECard;