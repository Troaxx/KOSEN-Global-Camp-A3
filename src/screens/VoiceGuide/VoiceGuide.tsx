import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';
import { VOICE_PHRASES } from './constants';
import { VoicePhrase } from '../../types';

const VoiceGuide: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [hoveredBack, setHoveredBack] = useState(false);
  const [playingPhrase, setPlayingPhrase] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All', icon: '🎤' },
    { id: 'greeting', name: 'Greeting', icon: '👋' },
    { id: 'help', name: 'Help', icon: '🆘' },
    { id: 'direction', name: 'Direction', icon: '🧭' },
    { id: 'emergency', name: 'Emergency', icon: '🚨' },
    { id: 'courtesy', name: 'Courtesy', icon: '🙏' },
  ];

  const filteredPhrases = selectedCategory === 'all' 
    ? VOICE_PHRASES 
    : VOICE_PHRASES.filter(phrase => phrase.category === selectedCategory);

  const handlePlayPhrase = (phraseId: string, phrase: VoicePhrase) => {
    setPlayingPhrase(phraseId);
    
    // In a real app, this would use text-to-speech API
    // For demo purposes, we'll simulate audio playback
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(phrase.japanese);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.8;
      utterance.onend = () => setPlayingPhrase(null);
      speechSynthesis.speak(utterance);
    } else {
      // Fallback: just show playing state for 2 seconds
      setTimeout(() => setPlayingPhrase(null), 2000);
    }
  };

  const getPhraseCardStyle = (phraseId: string) => {
    return hoveredCard === phraseId 
      ? { ...styles.phraseCard, ...styles.phraseCardHover }
      : styles.phraseCard;
  };

  const getPlayButtonStyle = (phraseId: string): React.CSSProperties => {
    let buttonStyle: React.CSSProperties = { ...styles.playButton };
    
    if (playingPhrase === phraseId) {
      buttonStyle = { ...buttonStyle, ...styles.playButtonActive };
    } else if (hoveredButton === phraseId) {
      buttonStyle = { ...buttonStyle, ...styles.playButtonHover };
    }
    
    return buttonStyle;
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
          <h1 style={styles.headerTitle}>Voice Guide</h1>
          <p style={styles.headerSubtitle}>Pre-set phrases for easy communication</p>
        </div>
      </header>

      <main style={styles.content}>
        <div style={styles.instructionBox}>
          <h3 style={styles.instructionTitle}>💡 How to Use</h3>
          <p style={styles.instructionText}>
            Tap the red play button next to any phrase to hear the Japanese pronunciation. 
            Show the text to locals if needed.
          </p>
        </div>

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

        <div style={styles.phrasesGrid}>
          {filteredPhrases.map((phrase) => (
            <div
              key={phrase.id}
              style={getPhraseCardStyle(phrase.id)}
              onMouseEnter={() => setHoveredCard(phrase.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div style={styles.phraseHeader}>
                <h3 style={styles.phraseEnglish}>{phrase.english}</h3>
                <button
                  style={getPlayButtonStyle(phrase.id)}
                  onMouseEnter={() => setHoveredButton(phrase.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  onClick={() => handlePlayPhrase(phrase.id, phrase)}
                  disabled={playingPhrase === phrase.id}
                >
                  {playingPhrase === phrase.id ? '⏸️' : '▶️'}
                </button>
              </div>
              
              <p style={styles.phraseJapanese}>{phrase.japanese}</p>
              <p style={styles.phraseRomaji}>{phrase.romaji}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default VoiceGuide;
