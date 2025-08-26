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
  
  locationSelector: {
    marginBottom: '20px',
  },
  
  locationLabel: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    marginBottom: '10px',
    display: 'block',
  },
  
  locationSelect: {
    width: '100%',
    padding: '12px',
    border: `2px solid ${COLORS.primary}`,
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: COLORS.background,
    color: COLORS.primary,
    cursor: 'pointer',
  },
  
  currentLocation: {
    backgroundColor: COLORS.lightGray,
    padding: '15px',
    borderRadius: '12px',
    marginBottom: '20px',
    border: `2px solid ${COLORS.success}`,
  },
  
  currentLocationTitle: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: COLORS.success,
    margin: '0 0 5px 0',
  },
  
  currentLocationText: {
    fontSize: '14px',
    color: COLORS.darkGray,
    margin: '0',
  },
  
  rulesGrid: {
    display: 'grid',
    gap: '15px',
    paddingBottom: '30px',
  },
  
  ruleCard: {
    backgroundColor: COLORS.background,
    border: `2px solid ${COLORS.lightGray}`,
    borderRadius: '12px',
    padding: '20px',
    transition: 'all 0.2s ease',
  },
  
  ruleCardHover: {
    borderColor: COLORS.primary,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.1)',
  },
  
  ruleHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  
  categoryIcon: {
    fontSize: '24px',
    marginRight: '12px',
  },
  
  ruleTitle: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0',
  },
  
  ruleDescription: {
    fontSize: '14px',
    color: COLORS.darkGray,
    marginBottom: '15px',
    margin: '0 0 15px 0',
  },
  
  examplesSection: {
    marginTop: '15px',
  },
  
  examplesTitle: {
    fontSize: '14px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0 0 8px 0',
  },
  
  examplesList: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '8px',
  },
  
  exampleTag: {
    backgroundColor: COLORS.lightGray,
    color: COLORS.darkGray,
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold' as const,
  },
  
  noRulesMessage: {
    textAlign: 'center' as const,
    padding: '40px 20px',
    color: COLORS.darkGray,
    fontSize: '16px',
  },
};
