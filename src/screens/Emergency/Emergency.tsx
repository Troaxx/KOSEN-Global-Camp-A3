import React, { useState } from 'react';
import { styles } from './styles';
import { EMERGENCY_CONTACTS, EMERGENCY_PHRASES, SAFETY_TIPS } from './constants';

const Emergency: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredPhrase, setHoveredPhrase] = useState<string | null>(null);
  const [hoveredTip, setHoveredTip] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const handleCall = (number: string, name: string) => {
    // In a real app, this would initiate a phone call
    if (window.confirm(`Call ${name} at ${number}?`)) {
      // For web demo, we'll just show an alert
      alert(`Calling ${name} at ${number}...\n\nIn a real mobile app, this would dial the number automatically.`);
    }
  };

  const getEmergencyIcon = (id: string): string => {
    const iconMap: { [key: string]: string } = {
      'police': '👮',
      'fire-ambulance': '🚑',
      'visitor-hotline': '📞',
      'medical-info': '🏥',
    };
    return iconMap[id] || '📞';
  };

  const getEmergencyCardStyle = (contactId: string) => {
    return hoveredCard === contactId 
      ? { ...styles.emergencyCard, ...styles.emergencyCardHover }
      : styles.emergencyCard;
  };

  const getPhraseCardStyle = (phraseId: string) => {
    return hoveredPhrase === phraseId 
      ? { ...styles.phraseCard, ...styles.phraseCardHover }
      : styles.phraseCard;
  };

  const getTipCardStyle = (tipId: string) => {
    return hoveredTip === tipId 
      ? { ...styles.tipCard, ...styles.tipCardHover }
      : styles.tipCard;
  };

  const getCallButtonStyle = (contactId: string) => {
    return hoveredButton === contactId 
      ? { ...styles.callButton, ...styles.callButtonHover }
      : styles.callButton;
  };



  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>🆘 Emergency Contacts</h1>
        <p style={styles.headerSubtitle}>Quick access to essential emergency numbers</p>
      </header>

      <main style={styles.content}>
        <div style={styles.warningBox}>
          <h2 style={styles.warningTitle}>🆘 Emergency Only</h2>
          <p style={styles.warningText}>
            Use these numbers only for genuine emergencies. For non-urgent matters, 
            consult local information or your accommodation staff.
          </p>
        </div>

        <div style={styles.emergencyGrid}>
          {EMERGENCY_CONTACTS.map((contact) => (
            <div
              key={contact.id}
              style={getEmergencyCardStyle(contact.id)}
              onMouseEnter={() => setHoveredCard(contact.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.emergencyHeader}>
                <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                  <span style={styles.emergencyIcon}>
                    {getEmergencyIcon(contact.id)}
                  </span>
                  <div style={styles.emergencyInfo}>
                    <h3 style={styles.emergencyName}>{contact.name}</h3>
                    <p style={styles.emergencyNumber}>{contact.number}</p>
                  </div>
                </div>
                <button
                  style={getCallButtonStyle(contact.id)}
                  onMouseEnter={() => setHoveredButton(contact.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => handleCall(contact.number, contact.name)}
                >
                  📲 CALL
                </button>
              </div>
              <p style={styles.emergencyDescription}>{contact.description}</p>
            </div>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>Emergency Phrases</h2>
        <div style={styles.phrasesGrid}>
          {EMERGENCY_PHRASES.map((phrase) => (
            <div
              key={phrase.id}
              style={getPhraseCardStyle(phrase.id)}
              onMouseEnter={() => setHoveredPhrase(phrase.id)}
              onMouseLeave={() => setHoveredPhrase(null)}
            >
              <p style={styles.phraseEnglish}>{phrase.english}</p>
              <p style={styles.phraseJapanese}>{phrase.japanese}</p>
              <p style={styles.phraseRomaji}>{phrase.romaji}</p>
            </div>
          ))}
        </div>

        <h2 style={styles.sectionTitle}>Safety Tips</h2>
        <div style={styles.tipsGrid}>
          {SAFETY_TIPS.map((tip) => (
            <div
              key={tip.id}
              style={getTipCardStyle(tip.id)}
              onMouseEnter={() => setHoveredTip(tip.id)}
              onMouseLeave={() => setHoveredTip(null)}
            >
              <div style={styles.tipHeader}>
                <span style={styles.tipIcon}>{tip.icon}</span>
                <h3 style={styles.tipTitle}>{tip.title}</h3>
              </div>
              <p style={styles.tipDescription}>{tip.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Emergency;
