import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';
import { LOCATIONS } from './constants';
import { Location } from '../../types';

const JapanGuide: React.FC = () => {
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<string>('kumamoto');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredBack, setHoveredBack] = useState(false);

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

  const getBackButtonStyle = () => {
    return hoveredBack 
      ? { ...styles.backButton, ...styles.backButtonHover }
      : styles.backButton;
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <button
          style={getBackButtonStyle()}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
          onClick={() => navigate('/')}
        >
          ←
        </button>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>Japan Recycling Guide</h1>
          <p style={styles.headerSubtitle}>Location-specific waste sorting rules</p>
        </div>
      </header>

      <main style={styles.content}>
        <div style={styles.locationSelector}>
          <label style={styles.locationLabel} htmlFor="location-select">
            Select Location:
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
            <h3 style={styles.currentLocationTitle}>📍 Current Location</h3>
            <p style={styles.currentLocationText}>You are currently in Kumamoto</p>
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
