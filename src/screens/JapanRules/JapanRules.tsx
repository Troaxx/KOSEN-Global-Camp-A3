import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { styles } from './styles';
import { JAPAN_RULES } from './constants';
import ScrollToTop from '../../components/ScrollToTop';
import BackButton from '../../components/BackButton';

const JapanRules: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const t = translations[language];

  const categories = [
    { id: 'all', name: t.all, icon: '📜' },
    { id: 'bowing', name: t.bowing, icon: '🙇' },
    { id: 'etiquette', name: t.etiquette, icon: '🎯' },
    { id: 'culture', name: t.culture, icon: '🎌' },
    { id: 'general', name: t.general, icon: '📋' },
  ];

  const filteredRules = selectedCategory === 'all' 
    ? JAPAN_RULES 
    : JAPAN_RULES.filter(rule => rule.category === selectedCategory);

  const getImportanceBadgeStyle = (importance: string) => {
    switch (importance) {
      case 'high':
        return { ...styles.importanceBadge, ...styles.importanceHigh };
      case 'medium':
        return { ...styles.importanceBadge, ...styles.importanceMedium };
      case 'low':
        return { ...styles.importanceBadge, ...styles.importanceLow };
      default:
        return styles.importanceBadge;
    }
  };

  const getRuleCardStyle = (ruleId: string) => {
    return hoveredCard === ruleId 
      ? { ...styles.ruleCard, ...styles.ruleCardHover }
      : styles.ruleCard;
  };

  return (
    <div style={styles.container}>
      <ScrollToTop />
      <header style={styles.header}>
        <BackButton />
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>{t.japanRulesTitle}</h1>
          <p style={styles.headerSubtitle}>{t.japanRulesSubtitle}</p>
        </div>
      </header>

      <main style={styles.content}>
        <div style={styles.categoryTabs}>
          {categories.map((category) => (
            <button
              key={category.id}
              style={{
                ...styles.categoryTab,
                ...(selectedCategory === category.id ? styles.categoryTabActive : {})
              }}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span style={styles.categoryIcon}>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div style={styles.rulesGrid}>
          {filteredRules.map((rule) => (
            <div
              key={rule.id}
              style={getRuleCardStyle(rule.id)}
              onMouseEnter={() => setHoveredCard(rule.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.ruleHeader}>
                <h3 style={styles.ruleTitle}>{rule.title}</h3>
                <span style={getImportanceBadgeStyle(rule.importance)}>
                  {rule.importance}
                </span>
              </div>
              <p style={styles.ruleDescription}>{rule.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default JapanRules;
