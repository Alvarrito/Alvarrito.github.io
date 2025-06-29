import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Layers, 
  Database, 
  Shield, 
  GitBranch, 
  Cpu,
  BookOpen,
  Code,
  Package
} from 'lucide-react';
import styles from './Knowledge.module.css';

interface KnowledgeItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  category: 'architecture' | 'patterns' | 'principles';
  color: string;
}

const Knowledge: React.FC = () => {
  const { t } = useLanguage();

  const knowledgeData: KnowledgeItem[] = [
    {
      name: t('knowledge.hexagonal.name'),
      description: t('knowledge.hexagonal.description'),
      icon: <Layers />,
      category: 'architecture',
      color: '#3b82f6'
    },
    {
      name: t('knowledge.microservices.name'),
      description: t('knowledge.microservices.description'),
      icon: <Cpu />,
      category: 'architecture',
      color: '#3b82f6'
    },
    {
      name: t('knowledge.ddd.name'),
      description: t('knowledge.ddd.description'),
      icon: <Database />,
      category: 'patterns',
      color: '#10b981'
    },
    {
      name: t('knowledge.cqrs.name'),
      description: t('knowledge.cqrs.description'),
      icon: <GitBranch />,
      category: 'patterns',
      color: '#10b981'
    },
    {
      name: t('knowledge.repository.name'),
      description: t('knowledge.repository.description'),
      icon: <Package />,
      category: 'patterns',
      color: '#10b981'
    },
    {
      name: t('knowledge.decorator.name'),
      description: t('knowledge.decorator.description'),
      icon: <Layers />,
      category: 'patterns',
      color: '#10b981'
    },
    {
      name: t('knowledge.restApi.name'),
      description: t('knowledge.restApi.description'),
      icon: <BookOpen />,
      category: 'patterns',
      color: '#10b981'
    },
    {
      name: t('knowledge.solid.name'),
      description: t('knowledge.solid.description'),
      icon: <Shield />,
      category: 'principles',
      color: '#f59e0b'
    },
    {
      name: t('knowledge.cleanCode.name'),
      description: t('knowledge.cleanCode.description'),
      icon: <Code />,
      category: 'principles',
      color: '#f59e0b'
    }
  ];

  const categories = [
    { id: 'architecture', name: t('knowledge.categories.architecture'), color: '#3b82f6' },
    { id: 'patterns', name: t('knowledge.categories.patterns'), color: '#10b981' },
    { id: 'principles', name: t('knowledge.categories.principles'), color: '#f59e0b' }
  ];

  return (
    <section id="conocimientos" className={styles.knowledge}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('knowledge.title')}</h2>
          <p className={styles.subtitle}>{t('knowledge.subtitle')}</p>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <div 
              key={category.id} 
              className={styles.categoryHeader}
              style={{ borderColor: category.color }}
            >
              <h3 style={{ color: category.color }}>{category.name}</h3>
            </div>
          ))}
        </div>

        <div className={styles.knowledgeGrid}>
          {knowledgeData.map((item, index) => (
            <div
              key={item.name}
              className={styles.knowledgeCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <div 
                  className={styles.cardIcon}
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className={styles.cardTitle}>{item.name}</h3>
              </div>
              
              <p className={styles.cardDescription}>{item.description}</p>
              
              <div 
                className={styles.categoryTag}
                style={{ 
                  backgroundColor: `${item.color}20`,
                  color: item.color,
                  borderColor: `${item.color}40`
                }}
              >
                {categories.find(cat => cat.id === item.category)?.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Knowledge;