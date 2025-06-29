import React from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  GitBranch,
  Zap,
  Brain,
  Languages,
  Terminal,
  Cloud,
  Search,
  FileText,
  TestTube
} from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages' | 'soft';
  color: string;
}

export interface IDE {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export const getSkills = (t: (key: string) => string): Skill[] => {
  const skills = [
    // Frontend
    { 
      name: 'React', 
      level: 85, 
      icon: React.createElement(Code2), 
      category: 'frontend' as const, 
      color: '#61DAFB'
    },
    { 
      name: 'TypeScript', 
      level: 75, 
      icon: React.createElement(Code2), 
      category: 'frontend' as const, 
      color: '#3178C6'
    },
    { 
      name: 'CSS', 
      level: 50, 
      icon: React.createElement(Globe), 
      category: 'frontend' as const, 
      color: '#1572B6'
    },
    { 
      name: 'Vue.js', 
      level: 40, 
      icon: React.createElement(Code2), 
      category: 'frontend' as const, 
      color: '#4FC08D'
    },
    
    // Backend
    { 
      name: 'C#', 
      level: 90, 
      icon: React.createElement(Server), 
      category: 'backend' as const, 
      color: '#239120'
    },
    { 
      name: 'NUnit', 
      level: 75, 
      icon: React.createElement(TestTube), 
      category: 'backend' as const, 
      color: '#512BD4'
    },
    
    // Database
    { 
      name: 'MySQL', 
      level: 80, 
      icon: React.createElement(Database), 
      category: 'database' as const, 
      color: '#4479A1'
    },
    { 
      name: 'SQL Server', 
      level: 50, 
      icon: React.createElement(Database), 
      category: 'database' as const, 
      color: '#CC2927'
    },
    { 
      name: 'MongoDB', 
      level: 10, 
      icon: React.createElement(Database), 
      category: 'database' as const, 
      color: '#47A248'
    },
    
    // Tools
    { 
      name: 'Swagger', 
      level: 80, 
      icon: React.createElement(FileText), 
      category: 'tools' as const, 
      color: '#85EA2D'
    },
    { 
      name: 'Azure DevOps', 
      level: 80, 
      icon: React.createElement(Cloud), 
      category: 'tools' as const, 
      color: '#0078D4'
    },
    { 
      name: 'Docker', 
      level: 70, 
      icon: React.createElement(Zap), 
      category: 'tools' as const, 
      color: '#2496ED'
    },
    { 
      name: 'Git', 
      level: 70, 
      icon: React.createElement(GitBranch), 
      category: 'tools' as const, 
      color: '#F05032'
    },
    { 
      name: 'SVN', 
      level: 70, 
      icon: React.createElement(GitBranch), 
      category: 'tools' as const, 
      color: '#809CC9'
    },
    
    // Languages
    { 
      name: t('skills.languages.spanish'), 
      level: 100, 
      icon: React.createElement(Languages), 
      category: 'languages' as const, 
      color: '#FF6B35'
    },
    { 
      name: t('skills.languages.english'), 
      level: 75, 
      icon: React.createElement(Languages), 
      category: 'languages' as const, 
      color: '#1E40AF'
    },
    
    // Soft Skills
    { 
      name: t('skills.soft.research'), 
      level: 100, 
      icon: React.createElement(Search), 
      category: 'soft' as const, 
      color: '#8B5CF6'
    },
    { 
      name: t('skills.soft.problemSolving'), 
      level: 80, 
      icon: React.createElement(Brain), 
      category: 'soft' as const, 
      color: '#3B82F6'
    },
  ];

  // Ordenar por categoría y luego por porcentaje (descendente)
  return skills.sort((a, b) => {
    const categoryOrder = ['frontend', 'backend', 'database', 'tools', 'languages', 'soft'];
    const categoryA = categoryOrder.indexOf(a.category);
    const categoryB = categoryOrder.indexOf(b.category);
    
    if (categoryA !== categoryB) {
      return categoryA - categoryB;
    }
    
    return b.level - a.level;
  });
};

export const getIDEs = (): IDE[] => [
  { 
    name: 'Visual Studio Code', 
    icon: React.createElement(Terminal), 
    color: '#007ACC'
  },
  { 
    name: 'JetBrains Rider', 
    icon: React.createElement(Terminal), 
    color: '#000000'
  },
  { 
    name: 'Visual Studio', 
    icon: React.createElement(Terminal), 
    color: '#5C2D91'
  },
  { 
    name: 'DataGrip', 
    icon: React.createElement(Database), 
    color: '#22D88F'
  },
];

export const getCategories = (t: (key: string) => string) => [
  { id: 'all', name: t('skills.categories.all'), icon: React.createElement(Code2) },
  { id: 'frontend', name: t('skills.categories.frontend'), icon: React.createElement(Globe) },
  { id: 'backend', name: t('skills.categories.backend'), icon: React.createElement(Server) },
  { id: 'database', name: t('skills.categories.database'), icon: React.createElement(Database) },
  { id: 'tools', name: t('skills.categories.tools'), icon: React.createElement(Zap) },
  { id: 'languages', name: t('skills.categories.languages'), icon: React.createElement(Languages) },
  { id: 'soft', name: t('skills.categories.soft'), icon: React.createElement(Brain) },
];