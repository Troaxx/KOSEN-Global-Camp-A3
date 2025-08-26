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
  
  filterSection: {
    marginBottom: '20px',
  },
  
  filterLabel: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    marginBottom: '10px',
    display: 'block',
  },
  
  filterSelect: {
    width: '100%',
    padding: '12px',
    border: `2px solid ${COLORS.primary}`,
    borderRadius: '8px',
    fontSize: '16px',
    backgroundColor: COLORS.background,
    color: COLORS.primary,
    cursor: 'pointer',
  },
  
  legendBox: {
    backgroundColor: COLORS.lightGray,
    padding: '15px',
    borderRadius: '12px',
    marginBottom: '20px',
    border: `2px solid ${COLORS.primary}`,
  },
  
  legendTitle: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0 0 10px 0',
  },
  
  legendGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: '10px',
  },
  
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
  },
  
  legendIcon: {
    fontSize: '16px',
  },
  
  areasGrid: {
    display: 'grid',
    gap: '15px',
    paddingBottom: '30px',
  },
  
  areaCard: {
    backgroundColor: COLORS.background,
    border: `2px solid ${COLORS.lightGray}`,
    borderRadius: '12px',
    padding: '20px',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
  },
  
  areaCardHover: {
    borderColor: COLORS.primary,
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.1)',
  },
  
  areaHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  
  areaInfo: {
    flex: 1,
  },
  
  areaName: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0 0 5px 0',
  },
  
  areaLocation: {
    fontSize: '14px',
    color: COLORS.darkGray,
    margin: '0',
  },
  
  crowdBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '8px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold' as const,
    color: COLORS.background,
    textTransform: 'uppercase' as const,
  },
  
  areaDescription: {
    fontSize: '14px',
    color: COLORS.darkGray,
    margin: '10px 0 15px 0',
    lineHeight: '1.4',
  },
  
  priceSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  
  priceInfo: {
    flex: 1,
  },
  
  priceLabel: {
    fontSize: '12px',
    color: COLORS.darkGray,
    margin: '0 0 2px 0',
  },
  
  currentPrice: {
    fontSize: '20px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0',
  },
  
  basePrice: {
    fontSize: '14px',
    color: COLORS.darkGray,
    textDecoration: 'line-through',
    margin: '0 0 0 5px',
  },
  
  freeEntry: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: COLORS.success,
    margin: '0',
  },
  
  buyButton: {
    backgroundColor: COLORS.primary,
    color: COLORS.background,
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 'bold' as const,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  
  buyButtonHover: {
    backgroundColor: '#1E40AF',
    transform: 'scale(1.05)',
  },
  
  buyButtonDisabled: {
    backgroundColor: COLORS.lightGray,
    color: COLORS.darkGray,
    cursor: 'not-allowed',
  },
  
  crowdInfo: {
    backgroundColor: COLORS.lightGray,
    padding: '10px',
    borderRadius: '8px',
    marginTop: '10px',
  },
  
  crowdDescription: {
    fontSize: '12px',
    color: COLORS.darkGray,
    margin: '0',
    textAlign: 'center' as const,
  },
  
  noAreasMessage: {
    textAlign: 'center' as const,
    padding: '40px 20px',
    color: COLORS.darkGray,
    fontSize: '16px',
  },
};
