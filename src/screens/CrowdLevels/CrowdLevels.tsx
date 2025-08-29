import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { styles } from './styles';
import { TOURIST_AREAS, CROWD_LEVEL_INFO } from './constants';
import { TouristArea } from '../../types';
import ScrollToTop from '../../components/ScrollToTop';
import BackButton from '../../components/BackButton';

const CrowdLevels: React.FC = () => {
  const { language } = useLanguage();
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  const t = translations[language];

  const locations = ['all', 'Tokyo', 'Kyoto', 'Osaka', 'Kumamoto'];

  const filteredAreas = selectedLocation === 'all' 
    ? TOURIST_AREAS 
    : TOURIST_AREAS.filter(area => area.location === selectedLocation);

  const handlePurchase = (area: TouristArea) => {
    if (area.currentPrice === 0) {
      alert(`Entry to ${area.name} is free! No ticket needed.`);
      return;
    }

    if (window.confirm(`Purchase entry to ${area.name} for ¥${area.currentPrice.toLocaleString()}?`)) {
      alert(`Ticket purchased for ${area.name}!\n\nEntry Price: ¥${area.currentPrice.toLocaleString()}\nCrowd Level: ${CROWD_LEVEL_INFO[area.currentCrowdLevel].label}\n\nIn a real app, this would process payment and provide a digital ticket.`);
    }
  };

  const getAreaCardStyle = (areaId: string) => {
    return hoveredCard === areaId 
      ? { ...styles.areaCard, ...styles.areaCardHover }
      : styles.areaCard;
  };

  const getCrowdBadgeStyle = (crowdLevel: TouristArea['currentCrowdLevel']) => {
    const crowdInfo = CROWD_LEVEL_INFO[crowdLevel];
    return {
      ...styles.crowdBadge,
      backgroundColor: crowdInfo.color,
    };
  };

  const getBuyButtonStyle = (areaId: string, price: number) => {
    if (price === 0) {
      return { ...styles.buyButton, ...styles.buyButtonDisabled };
    }
    return hoveredButton === areaId 
      ? { ...styles.buyButton, ...styles.buyButtonHover }
      : styles.buyButton;
  };

  return (
    <div style={styles.container}>
      <ScrollToTop />
      <header style={styles.header}>
        <BackButton />
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>{t.crowdLevelsTitle}</h1>
          <p style={styles.headerSubtitle}>{t.crowdLevelsSubtitle}</p>
        </div>
      </header>

      <main style={styles.content}>
        <div style={styles.filterSection}>
          <label style={styles.filterLabel} htmlFor="location-filter">
            {t.filterByLocation}:
          </label>
          <select
            id="location-filter"
            style={styles.filterSelect}
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location === 'all' ? t.allLocations : location}
              </option>
            ))}
          </select>
        </div>

        <div style={styles.legendBox}>
          <h3 style={styles.legendTitle}>{t.crowdLevelLegend}</h3>
          <div style={styles.legendGrid}>
            {Object.entries(CROWD_LEVEL_INFO).map(([level, info]) => (
              <div key={level} style={styles.legendItem}>
                <span style={styles.legendIcon}>{info.icon}</span>
                <span>{info.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.areasGrid}>
          {filteredAreas.map((area) => {
            const crowdInfo = CROWD_LEVEL_INFO[area.currentCrowdLevel];
            
            return (
              <div
                key={area.id}
                style={getAreaCardStyle(area.id)}
                onMouseEnter={() => setHoveredCard(area.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div style={styles.areaHeader}>
                  <div style={styles.areaInfo}>
                    <h3 style={styles.areaName}>{area.name}</h3>
                    <p style={styles.areaLocation}>📍 {area.location}</p>
                  </div>
                  <div style={getCrowdBadgeStyle(area.currentCrowdLevel)}>
                    {crowdInfo.icon} {crowdInfo.label}
                  </div>
                </div>
                
                <p style={styles.areaDescription}>{area.description}</p>
                
                <div style={styles.crowdInfo}>
                  <p style={styles.crowdDescription}>
                    {crowdInfo.description}
                  </p>
                </div>

                <div style={styles.priceSection}>
                  <div style={styles.priceInfo}>
                    {area.currentPrice === 0 ? (
                      <p style={styles.freeEntry}>{t.freeEntry}</p>
                    ) : (
                      <>
                        <p style={styles.priceLabel}>{t.entryPrice}:</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span style={styles.currentPrice}>
                            ¥{area.currentPrice.toLocaleString()}
                          </span>
                          {area.basePrice !== area.currentPrice && (
                            <span style={styles.basePrice}>
                              ¥{area.basePrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                  
                  <button
                    style={getBuyButtonStyle(area.id, area.currentPrice)}
                    onMouseEnter={() => setHoveredButton(area.id)}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => handlePurchase(area)}
                    disabled={area.currentPrice === 0}
                  >
                    {area.currentPrice === 0 ? t.freeEntry : t.buyTicket}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredAreas.length === 0 && (
          <div style={styles.noAreasMessage}>
            <p>{t.noAreasFound}</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default CrowdLevels;
