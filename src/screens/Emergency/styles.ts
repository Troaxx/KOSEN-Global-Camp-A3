import React from 'react';
import { COLORS } from './constants';

export const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: COLORS.background,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  
  header: {
    backgroundColor: COLORS.emergency,
    color: COLORS.background,
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    borderRadius: '0 0 20px 20px',
    marginBottom: '20px',
    background: `linear-gradient(135deg, ${COLORS.emergency} 0%, #B91C1C 100%)`,
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
  
  warningBox: {
    backgroundColor: '#FEF2F2',
    border: `2px solid ${COLORS.emergency}`,
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
    textAlign: 'center' as const,
  },
  
  warningTitle: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    color: COLORS.emergency,
    margin: '0 0 10px 0',
  },
  
  warningText: {
    fontSize: '14px',
    color: COLORS.darkGray,
    margin: '0',
  },
  
  emergencyGrid: {
    display: 'grid',
    gap: '15px',
    marginBottom: '30px',
  },
  
  emergencyCard: {
    backgroundColor: COLORS.background,
    border: `3px solid ${COLORS.emergency}`,
    borderRadius: '12px',
    padding: '20px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
  
  emergencyCardHover: {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 20px rgba(220, 38, 38, 0.2)',
    backgroundColor: '#FEF2F2',
  },
  
  emergencyHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  
  emergencyIcon: {
    fontSize: '32px',
    marginRight: '15px',
  },
  
  emergencyInfo: {
    flex: 1,
  },
  
  emergencyName: {
    fontSize: '20px',
    fontWeight: 'bold' as const,
    color: COLORS.emergency,
    margin: '0 0 5px 0',
  },
  
  emergencyNumber: {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0',
  },
  
  callButton: {
    backgroundColor: COLORS.emergency,
    color: COLORS.background,
    border: `2px solid ${COLORS.background}`,
    borderRadius: '25px',
    padding: '12px 20px',
    fontSize: '14px',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
  },
  
  callButtonHover: {
    backgroundColor: COLORS.background,
    color: COLORS.emergency,
    borderColor: COLORS.emergency,
    transform: 'scale(1.05)',
    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
  },
  
  emergencyDescription: {
    fontSize: '14px',
    color: COLORS.darkGray,
    margin: '10px 0 0 0',
    lineHeight: '1.4',
  },
  
  sectionTitle: {
    fontSize: '20px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '30px 0 15px 0',
    borderBottom: `2px solid ${COLORS.primary}`,
    paddingBottom: '10px',
  },
  
  phrasesGrid: {
    display: 'grid',
    gap: '10px',
    marginBottom: '30px',
  },
  
  phraseCard: {
    backgroundColor: COLORS.lightGray,
    border: `2px solid ${COLORS.primary}`,
    borderRadius: '8px',
    padding: '15px',
    transition: 'all 0.2s ease',
  },
  
  phraseCardHover: {
    backgroundColor: COLORS.primary,
    color: COLORS.background,
  },
  
  phraseEnglish: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    margin: '0 0 8px 0',
  },
  
  phraseJapanese: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    margin: '0 0 5px 0',
  },
  
  phraseRomaji: {
    fontSize: '14px',
    fontStyle: 'italic' as const,
    margin: '0',
    opacity: 0.8,
  },
  
  tipsGrid: {
    display: 'grid',
    gap: '15px',
    paddingBottom: '30px',
  },
  
  tipCard: {
    backgroundColor: COLORS.background,
    border: `2px solid ${COLORS.success}`,
    borderRadius: '12px',
    padding: '15px',
    transition: 'all 0.2s ease',
  },
  
  tipCardHover: {
    borderColor: COLORS.primary,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.1)',
  },
  
  tipHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
  },
  
  tipIcon: {
    fontSize: '20px',
    marginRight: '10px',
  },
  
  tipTitle: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0',
  },
  
  tipDescription: {
    fontSize: '14px',
    color: COLORS.darkGray,
    margin: '0',
    lineHeight: '1.4',
  },
};
