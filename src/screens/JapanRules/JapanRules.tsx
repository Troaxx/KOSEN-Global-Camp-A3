import React, { useState } from 'react';
import { styles } from './styles';
import { JAPAN_RULES } from './constants';
import ScrollToTop from '../../components/ScrollToTop';
import BackButton from '../../components/BackButton';

const JapanRules: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const categories = [
    { id: 'all', name: 'All', icon: '📜' },
    { id: 'bowing', name: 'Bowing', icon: '🙇' },
    { id: 'etiquette', name: 'Etiquette', icon: '🎯' },
    { id: 'culture', name: 'Culture', icon: '🎌' },
    { id: 'general', name: 'General', icon: '📋' },
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
          <h1 style={styles.headerTitle}>Japan Rules & Etiquette</h1>
          <p style={styles.headerSubtitle}>Essential cultural guidelines for respectful travel</p>
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
