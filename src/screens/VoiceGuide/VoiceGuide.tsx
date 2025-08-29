import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { styles } from './styles';
import { VOICE_PHRASES } from './constants';
import { VoicePhrase } from '../../types';
import ScrollToTop from '../../components/ScrollToTop';
import BackButton from '../../components/BackButton';

const VoiceGuide: React.FC = () => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [playingPhrase, setPlayingPhrase] = useState<string | null>(null);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  const t = translations[language];

  const categories = [
    { id: 'all', name: t.all, icon: '🎤' },
    { id: 'greeting', name: t.greeting, icon: '👋' },
    { id: 'help', name: t.help, icon: '🆘' },
    { id: 'direction', name: t.direction, icon: '🧭' },
    { id: 'emergency', name: t.emergency, icon: '🚨' },
    { id: 'courtesy', name: t.courtesy, icon: '🙏' },
  ];

  // Initialize speech synthesis for mobile compatibility
  useEffect(() => {
    const initializeSpeech = () => {
      if ('speechSynthesis' in window) {
        // Create a dummy utterance to initialize speech synthesis
        const testUtterance = new SpeechSynthesisUtterance('');
        testUtterance.volume = 0;
        speechSynthesis.speak(testUtterance);
      }
    };

    // Initialize speech on first user interaction
    const handleFirstInteraction = () => {
      initializeSpeech();
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('click', handleFirstInteraction);
    };
  }, []);

  const filteredPhrases = selectedCategory === 'all' 
    ? VOICE_PHRASES 
    : VOICE_PHRASES.filter(phrase => phrase.category === selectedCategory);

  const handlePlayPhrase = (phraseId: string, phrase: VoicePhrase) => {
    setPlayingPhrase(phraseId);
    
    if ('speechSynthesis' in window) {
      // Stop any currently playing speech
      speechSynthesis.cancel();
      
      // Wait for voices to be loaded (important for mobile)
      const speak = () => {
        const utterance = new SpeechSynthesisUtterance(phrase.japanese);
        
        // Try to find a Japanese voice
        const voices = speechSynthesis.getVoices();
        const japaneseVoice = voices.find(voice => 
          voice.lang.includes('ja') || voice.lang.includes('JP')
        );
        
        if (japaneseVoice) {
          utterance.voice = japaneseVoice;
        }
        
        utterance.lang = 'ja-JP';
        utterance.rate = 0.7; // Slower for better pronunciation
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        utterance.onstart = () => {
          console.log('Speech started');
        };
        
        utterance.onend = () => {
          console.log('Speech ended');
          setPlayingPhrase(null);
        };
        
        utterance.onerror = (event) => {
          console.log('Speech error:', event.error);
          setPlayingPhrase(null);
        };
        
        // Ensure speech synthesis is ready before speaking
        if (speechSynthesis.speaking) {
          speechSynthesis.cancel();
        }
        
        // Use setTimeout to ensure speech synthesis is ready
        setTimeout(() => {
          try {
            speechSynthesis.speak(utterance);
            
            // Fallback: if speech doesn't start within 1 second, reset state
            setTimeout(() => {
              if (playingPhrase === phraseId && !speechSynthesis.speaking) {
                setPlayingPhrase(null);
              }
            }, 1000);
          } catch (error) {
            console.error('Speech synthesis error:', error);
            setPlayingPhrase(null);
          }
        }, 100);
      };

      // Check if voices are loaded
      if (speechSynthesis.getVoices().length > 0) {
        speak();
      } else {
        // Wait for voices to load
        speechSynthesis.onvoiceschanged = () => {
          speak();
          speechSynthesis.onvoiceschanged = null;
        };
        
        // Fallback timeout
        setTimeout(() => {
          if (playingPhrase === phraseId) {
            speak();
          }
        }, 500);
      }
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

  return (
    <div style={styles.container}>
      <ScrollToTop />
      <header style={styles.header}>
        <BackButton />
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>{t.voiceGuideTitle}</h1>
          <p style={styles.headerSubtitle}>{t.voiceGuideSubtitle}</p>
        </div>
      </header>

      <main style={styles.content}>
        <div style={styles.instructionBox}>
          <h3 style={styles.instructionTitle}>💡 {t.howToUse}</h3>
          <p style={styles.instructionText}>
            {t.voiceInstructions}
          </p>
          {!('speechSynthesis' in window) && (
            <p style={{ ...styles.instructionText, color: '#DC2626', fontSize: '14px' }}>
              ⚠️ {t.speechNotSupported}
            </p>
          )}
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
