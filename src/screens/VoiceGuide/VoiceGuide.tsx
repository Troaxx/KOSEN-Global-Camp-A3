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
    
    // Enhanced speech synthesis for better mobile compatibility
    if ('speechSynthesis' in window) {
      // Stop any currently playing speech
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(phrase.japanese);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.8;
      utterance.volume = 1.0;
      
      utterance.onend = () => setPlayingPhrase(null);
      utterance.onerror = () => setPlayingPhrase(null);
      
      // Small delay to ensure cancellation is processed
      setTimeout(() => {
        speechSynthesis.speak(utterance);
      }, 100);
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
    
    // Make buttons larger on mobile devices
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      buttonStyle = { 
        ...buttonStyle, 
        width: '55px', 
        height: '55px',
        minWidth: '55px',
        minHeight: '55px',
        fontSize: '22px'
      };
    }
    
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
          onTouchStart={() => setHoveredBack(true)}
          onTouchEnd={() => setHoveredBack(false)}
          onClick={() => navigate('/')}
          aria-label="Go back to home"
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
              aria-label={`Filter by ${category.name} category`}
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
                  onTouchStart={() => setHoveredButton(phrase.id)}
                  onTouchEnd={() => setHoveredButton(null)}
                  onClick={() => handlePlayPhrase(phrase.id, phrase)}
                  disabled={playingPhrase === phrase.id}
                  aria-label={`Play pronunciation for ${phrase.english}`}
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
