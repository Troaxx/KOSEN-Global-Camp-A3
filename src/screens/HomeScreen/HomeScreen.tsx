import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { styles } from './styles';
import ScrollToTop from '../../components/ScrollToTop';

const HomeScreen: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const t = translations[language];

  const handleMenuClick = (route: string) => {
    navigate(route);
  };

  const getMenuItemStyle = (itemId: string, isEmergency: boolean = false) => {
    const baseStyle = isEmergency ? styles.emergencyButton : styles.menuItem;
    const hoverStyle = isEmergency ? styles.emergencyButtonHover : styles.menuItemHover;
    
    return hoveredItem === itemId 
      ? { ...baseStyle, ...hoverStyle }
      : baseStyle;
  };

  return (
    <div style={styles.container}>
      <ScrollToTop />
      <header style={styles.header}>
        <div style={styles.headerTop}>
          <div style={styles.logoContainer}>
            <img 
              src="/assets/hellojapan_logo.png" 
              alt="Hello Japan Logo" 
              style={styles.headerLogo}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <div style={styles.titleContainer}>
              <h1 style={styles.headerTitle}>{t.appTitle}</h1>
              <p style={styles.headerSubtitle}>{t.appSubtitle}</p>
            </div>
          </div>
        </div>
      </header>

      <main style={styles.content}>
        <div style={styles.locationSection}>
          <div style={styles.locationHeader}>
            <h2 style={styles.locationTitle}>📍 {t.myLocation}</h2>
            <button style={styles.refreshButton}>🔄</button>
          </div>
          <div style={styles.locationInfo}>
            <span style={styles.locationName}>Kumamoto</span>
            <span style={styles.locationSubtext}>{t.locationSubtext}</span>
          </div>
          <div style={styles.weatherInfo}>
            <span style={styles.weather}>🌤️ 23°C</span>
            <span style={styles.airQuality}>🟢 {t.goodAirQuality}</span>
          </div>
        </div>

        <div style={styles.quickActions}>
          <h3 style={styles.sectionTitle}>{t.quickAccess}</h3>
          <div style={styles.menuGrid}>
            {[
              {
                id: 'japan-rules',
                title: t.japanRules,
                subtitle: t.japanRulesSubtitle,
                route: '/japan-rules',
                icon: '🎌'
              },
              {
                id: 'japan-guide',
                title: t.japanGuide,
                subtitle: t.japanGuideSubtitle,
                route: '/japan-guide',
                icon: '♻️'
              },
              {
                id: 'voice-guide',
                title: t.voiceGuide,
                subtitle: t.voiceGuideSubtitle,
                route: '/voice-guide',
                icon: '🎤'
              },
              {
                id: 'crowd-levels',
                title: t.touristAreas,
                subtitle: t.crowdLevelsSubtitle,
                route: '/crowd-levels',
                icon: '🏯'
              },
              {
                id: 'emergency',
                title: t.emergency,
                subtitle: t.emergencyTitle,
                route: '/emergency',
                icon: '🆘'
              }
            ].map((item) => (
              <button
                key={item.id}
                style={getMenuItemStyle(item.id, item.id === 'emergency')}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleMenuClick(item.route)}
                aria-label={`Navigate to ${item.title}`}
              >
                <div style={styles.menuItemContent}>
                  <span style={styles.menuIcon}>{item.icon}</span>
                  <div style={styles.menuText}>
                    <h3 style={styles.menuTitle}>{item.title}</h3>
                    <p style={styles.menuSubtitle}>{item.subtitle}</p>
                  </div>
                  <span style={styles.menuArrow}>→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeScreen;
