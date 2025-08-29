import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { styles } from './styles';
import { LANGUAGES, FONT_SIZES, VOICE_SPEEDS } from './constants';
import ScrollToTop from '../../components/ScrollToTop';
import BackButton from '../../components/BackButton';

const Settings: React.FC = () => {
  const {
    language,
    setLanguage,
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    voiceSpeed,
    setVoiceSpeed,
  } = useLanguage();

  const t = translations[language];

  const getLanguageButtonStyle = (langCode: string) => {
    return language === langCode
      ? { ...styles.languageButton, ...styles.languageButtonActive }
      : styles.languageButton;
  };

  const getToggleSwitchStyle = (isActive: boolean) => {
    return isActive
      ? { ...styles.toggleSwitch, ...styles.toggleSwitchActive }
      : styles.toggleSwitch;
  };

  const getToggleKnobStyle = (isActive: boolean) => {
    return isActive
      ? { ...styles.toggleKnob, ...styles.toggleKnobActive }
      : styles.toggleKnob;
  };

  const getOptionButtonStyle = (currentValue: string, targetValue: string) => {
    return currentValue === targetValue
      ? { ...styles.optionButton, ...styles.optionButtonActive }
      : styles.optionButton;
  };

  const getDemoTextStyle = () => {
    let style = { ...styles.demoText };
    
    if (fontSize === 'small') style = { ...style, ...styles.demoTextSmall };
    else if (fontSize === 'large') style = { ...style, ...styles.demoTextLarge };
    else style = { ...style, ...styles.demoTextMedium };
    
    if (highContrast) {
      style = { ...style, ...styles.highContrastModeLight };
    }
    
    return style;
  };

  const getContainerStyle = () => {
    return highContrast
      ? { ...styles.container, ...styles.highContrastMode }
      : styles.container;
  };

  return (
    <div style={getContainerStyle()}>
      <ScrollToTop />
      <header style={styles.header}>
        <BackButton />
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>⚙️ {t.settingsTitle}</h1>
          <p style={styles.headerSubtitle}>Customize your experience</p>
        </div>
      </header>

      <main style={styles.content}>
        {/* Language Selection */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionIcon}>🌐</span>
            {t.language}
          </h2>
          <div style={styles.languageGrid}>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                style={getLanguageButtonStyle(lang.code)}
                onClick={() => setLanguage(lang.code as any)}
                aria-label={`Select ${lang.name}`}
              >
                <span style={styles.languageFlag}>{lang.flag}</span>
                <span style={styles.languageName}>{lang.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Accessibility Settings */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionIcon}>♿</span>
            {t.accessibility}
          </h2>

          {/* Font Size */}
          <div style={styles.settingItem}>
            <label style={styles.settingLabel}>{t.fontSize}</label>
            <div style={styles.optionButtons}>
              {FONT_SIZES.map((size) => (
                <button
                  key={size.value}
                  style={getOptionButtonStyle(fontSize, size.value)}
                  onClick={() => setFontSize(size.value as any)}
                >
                  <span style={styles.optionIcon}>{size.icon}</span>
                  {t[size.value as keyof typeof t] as string}
                </button>
              ))}
            </div>
            <div style={getDemoTextStyle()}>
              Sample text: こんにちは Hello 안녕하세요 你好
            </div>
          </div>

          {/* High Contrast */}
          <div style={styles.settingItem}>
            <div style={styles.toggleRow}>
              <label style={styles.settingLabel}>{t.highContrast}</label>
              <button
                style={getToggleSwitchStyle(highContrast)}
                onClick={() => setHighContrast(!highContrast)}
                aria-label={`${highContrast ? t.disabled : t.enabled} high contrast`}
              >
                <div style={getToggleKnobStyle(highContrast)}></div>
              </button>
            </div>
            <p style={{ fontSize: '12px', color: '#6B7280', margin: '8px 0 0 0' }}>
              {highContrast ? t.enabled : t.disabled}
            </p>
          </div>

          {/* Voice Speed */}
          <div style={styles.settingItem}>
            <label style={styles.settingLabel}>{t.voiceSpeed}</label>
            <div style={styles.optionButtons}>
              {VOICE_SPEEDS.map((speed) => (
                <button
                  key={speed.value}
                  style={getOptionButtonStyle(voiceSpeed, speed.value)}
                  onClick={() => setVoiceSpeed(speed.value as any)}
                >
                  <span style={styles.optionIcon}>{speed.icon}</span>
                  {t[speed.value as keyof typeof t] as string}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* App Info */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            <span style={styles.sectionIcon}>ℹ️</span>
            App Information
          </h2>
          <p style={{ fontSize: '14px', color: '#6B7280', margin: '0' }}>
            Japan Travel Guide v1.0<br />
            Developed for the Japanese Government<br />
            Promoting respectful and sustainable tourism
          </p>
        </div>
      </main>
    </div>
  );
};

export default Settings;
