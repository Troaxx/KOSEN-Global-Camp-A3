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
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, #2563EB 100%)`,
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
  },
  
  categoryTabActive: {
    backgroundColor: COLORS.primary,
    color: COLORS.background,
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
    cursor: 'pointer',
  },
  
  ruleCardHover: {
    borderColor: COLORS.primary,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.1)',
  },
  
  ruleHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  
  ruleTitle: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0',
    flex: 1,
  },
  
  importanceBadge: {
    padding: '4px 12px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold' as const,
    textTransform: 'uppercase' as const,
  },
  
  importanceHigh: {
    backgroundColor: COLORS.secondary,
    color: COLORS.background,
  },
  
  importanceMedium: {
    backgroundColor: COLORS.warning,
    color: COLORS.background,
  },
  
  importanceLow: {
    backgroundColor: COLORS.success,
    color: COLORS.background,
  },
  
  ruleDescription: {
    fontSize: '14px',
    color: COLORS.darkGray,
    lineHeight: '1.5',
    margin: '0',
  },
  
  categoryIcon: {
    fontSize: '20px',
    marginRight: '10px',
  },
};
