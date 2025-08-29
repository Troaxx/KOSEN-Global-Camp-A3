import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { styles } from './styles';
import { LOCATIONS } from './constants';
import ScrollToTop from '../../components/ScrollToTop';
import BackButton from '../../components/BackButton';

const JapanGuide: React.FC = () => {
  const { language } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState<string>('kumamoto');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const t = translations[language];
  const currentLocation = LOCATIONS.find(loc => loc.id === selectedLocation);

  const getCategoryIcon = (category: string): string => {
    const iconMap: { [key: string]: string } = {
      'Paper': '📰',
      'Plastic': '🥤',
      'Burnable': '🔥',
      'Hard Plastic': '🪑',
      'Metal': '🥫',
      'Glass': '🍶',
      'Non-burnable': '🚫',
      'Recyclable': '♻️',
      'Oversized': '🛋️',
      'General Waste': '🗑️',
      'Plastic Containers': '📦',
      'Cans & Bottles': '🍺',
      'PET Bottles': '🥤',
      'Large Items': '🛋️',
    };
    return iconMap[category] || '📋';
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
          <h1 style={styles.headerTitle}>{t.japanGuideTitle}</h1>
          <p style={styles.headerSubtitle}>{t.japanGuideSubtitle}</p>
        </div>
      </header>

      <main style={styles.content}>
        <div style={styles.locationSelector}>
          <label style={styles.locationLabel} htmlFor="location-select">
            {t.selectLocation}:
          </label>
          <select
            id="location-select"
            style={styles.locationSelect}
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {LOCATIONS.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}, {location.prefecture}
              </option>
            ))}
          </select>
        </div>

        {selectedLocation === 'kumamoto' && (
          <div style={styles.currentLocation}>
            <h3 style={styles.currentLocationTitle}>📍 {t.currentLocation}</h3>
            <p style={styles.currentLocationText}>{t.youAreIn} Kumamoto</p>
          </div>
        )}

        {currentLocation && (
          <div style={styles.rulesGrid}>
            {currentLocation.recyclingRules.map((rule, index) => (
              <div
                key={`${rule.category}-${index}`}
                style={getRuleCardStyle(`${rule.category}-${index}`)}
                onMouseEnter={() => setHoveredCard(`${rule.category}-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.ruleHeader}>
                  <span style={styles.categoryIcon}>
                    {getCategoryIcon(rule.category)}
                  </span>
                  <h3 style={styles.ruleTitle}>{rule.category}</h3>
                </div>
                <p style={styles.ruleDescription}>{rule.description}</p>
                
                <div style={styles.examplesSection}>
                  <h4 style={styles.examplesTitle}>Examples:</h4>
                  <div style={styles.examplesList}>
                    {rule.examples.map((example, exampleIndex) => (
                      <span
                        key={exampleIndex}
                        style={styles.exampleTag}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!currentLocation && (
          <div style={styles.noRulesMessage}>
            <p>No recycling rules found for the selected location.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default JapanGuide;
