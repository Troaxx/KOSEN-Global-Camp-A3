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
    textAlign: 'center' as const,
    borderRadius: '0 0 20px 20px',
    marginBottom: '20px',
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, #2563EB 100%)`,
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
  
  section: {
    backgroundColor: COLORS.background,
    border: `2px solid ${COLORS.lightGray}`,
    borderRadius: '16px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0 0 16px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  
  sectionIcon: {
    fontSize: '20px',
  },
  
  settingItem: {
    marginBottom: '20px',
  },
  
  settingLabel: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: COLORS.darkGray,
    marginBottom: '8px',
    display: 'block',
  },
  
  languageGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '10px',
  },
  
  languageButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '12px 8px',
    border: `2px solid ${COLORS.lightGray}`,
    borderRadius: '12px',
    backgroundColor: COLORS.background,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '12px',
  },
  
  languageButtonActive: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    color: COLORS.background,
  },
  
  languageFlag: {
    fontSize: '24px',
    marginBottom: '4px',
  },
  
  languageName: {
    fontSize: '12px',
    fontWeight: 'bold' as const,
    textAlign: 'center' as const,
  },
  
  toggleRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  toggleSwitch: {
    position: 'relative' as const,
    width: '50px',
    height: '28px',
    backgroundColor: COLORS.lightGray,
    borderRadius: '14px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  
  toggleSwitchActive: {
    backgroundColor: COLORS.primary,
  },
  
  toggleKnob: {
    position: 'absolute' as const,
    top: '3px',
    left: '3px',
    width: '22px',
    height: '22px',
    backgroundColor: COLORS.background,
    borderRadius: '50%',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  },
  
  toggleKnobActive: {
    transform: 'translateX(22px)',
  },
  
  optionButtons: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap' as const,
  },
  
  optionButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 16px',
    border: `2px solid ${COLORS.lightGray}`,
    borderRadius: '20px',
    backgroundColor: COLORS.background,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontSize: '14px',
    fontWeight: 'bold' as const,
  },
  
  optionButtonActive: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.primary,
    color: COLORS.background,
  },
  
  optionIcon: {
    fontSize: '16px',
  },
  
  demoText: {
    padding: '12px',
    backgroundColor: COLORS.lightGray,
    borderRadius: '8px',
    marginTop: '12px',
    transition: 'all 0.2s ease',
  },
  
  demoTextSmall: {
    fontSize: '12px',
  },
  
  demoTextMedium: {
    fontSize: '16px',
  },
  
  demoTextLarge: {
    fontSize: '20px',
  },
  
  highContrastMode: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
  },
  
  highContrastModeLight: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    border: '2px solid #000000',
  },
};
