import React from 'react';
import { COLORS } from './constants';

export const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: COLORS.background,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  
  header: {
    backgroundColor: COLORS.primary,
    color: COLORS.background,
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    borderRadius: '0 0 20px 20px',
    marginBottom: '20px',
  },
  
  backButton: {
    background: 'none',
    border: 'none',
    color: COLORS.background,
    fontSize: '24px',
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '5px',
    transition: 'background-color 0.2s',
  },
  
  backButtonHover: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  headerContent: {
    flex: 1,
  },
  
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    margin: '0 0 5px 0',
  },
  
  headerSubtitle: {
    fontSize: '14px',
    opacity: 0.9,
    margin: '0',
  },
  
  content: {
    padding: '0 20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  
  categoryTabs: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    overflowX: 'auto' as const,
    padding: '5px',
  },
  
  categoryTab: {
    padding: '10px 20px',
    border: `2px solid ${COLORS.primary}`,
    backgroundColor: COLORS.background,
    color: COLORS.primary,
    borderRadius: '25px',
    cursor: 'pointer',
    whiteSpace: 'nowrap' as const,
    fontSize: '14px',
    fontWeight: 'bold' as const,
    transition: 'all 0.2s ease',
    touchAction: 'manipulation',
    WebkitTapHighlightColor: 'transparent',
    minHeight: '44px',
  },
  
  categoryTabActive: {
    backgroundColor: COLORS.primary,
    color: COLORS.background,
  },
  
  phrasesGrid: {
    display: 'grid',
    gap: '15px',
    paddingBottom: '30px',
  },
  
  phraseCard: {
    backgroundColor: COLORS.background,
    border: `2px solid ${COLORS.lightGray}`,
    borderRadius: '12px',
    padding: '20px',
    transition: 'all 0.2s ease',
    position: 'relative' as const,
    touchAction: 'manipulation',
  },
  
  phraseCardHover: {
    borderColor: COLORS.primary,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.1)',
  },
  
  phraseHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  
  phraseEnglish: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0',
    flex: 1,
  },
  
  playButton: {
    backgroundColor: COLORS.secondary,
    color: COLORS.background,
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    minWidth: '50px',
    minHeight: '50px',
    fontSize: '20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    flexShrink: 0,
    touchAction: 'manipulation',
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none' as const,
  },
  
  playButtonHover: {
    backgroundColor: '#B91C1C',
    transform: 'scale(1.1)',
  },
  
  playButtonActive: {
    backgroundColor: COLORS.success,
  },
  
  phraseJapanese: {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    color: COLORS.darkGray,
    margin: '0 0 8px 0',
    textAlign: 'center' as const,
  },
  
  phraseRomaji: {
    fontSize: '16px',
    color: COLORS.darkGray,
    margin: '0',
    textAlign: 'center' as const,
    fontStyle: 'italic' as const,
  },
  
  categoryIcon: {
    fontSize: '20px',
    marginRight: '10px',
  },
  
  instructionBox: {
    backgroundColor: COLORS.lightGray,
    padding: '15px',
    borderRadius: '12px',
    marginBottom: '20px',
    border: `2px solid ${COLORS.warning}`,
  },
  
  instructionTitle: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: COLORS.warning,
    margin: '0 0 5px 0',
  },
  
  instructionText: {
    fontSize: '14px',
    color: COLORS.darkGray,
    margin: '0',
  },
};
