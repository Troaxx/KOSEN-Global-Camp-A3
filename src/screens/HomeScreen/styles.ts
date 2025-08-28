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
    borderRadius: '0 0 20px 20px',
    marginBottom: '20px',
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, #2563EB 100%)`,
  },
  
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2px',
  },
  
  headerLogo: {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    objectFit: 'contain' as const,
    backgroundColor: '#FFFFFF',
    padding: '6px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
    border: '2px solid rgba(255, 255, 255, 0.3)',
  },
  
  headerTitle: {
    fontSize: '24px',
    fontWeight: 'bold' as const,
    margin: '0',
  },
  
  statusIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '4px 8px',
    borderRadius: '12px',
  },
  
  statusDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#10B981',
    borderRadius: '50%',
    animation: 'pulse 2s infinite',
  },
  
  statusText: {
    fontSize: '12px',
    fontWeight: 'bold' as const,
  },
  
  headerSubtitle: {
    fontSize: '14px',
    opacity: 0.9,
    margin: '0',
    textAlign: 'center' as const,
  },
  
  content: {
    padding: '0 20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  
  locationSection: {
    backgroundColor: COLORS.background,
    padding: '20px',
    borderRadius: '16px',
    marginBottom: '24px',
    border: `2px solid ${COLORS.lightGray}`,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  
  locationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  
  locationTitle: {
    fontSize: '16px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0',
  },
  
  refreshButton: {
    backgroundColor: 'transparent',
    border: `1px solid ${COLORS.lightGray}`,
    borderRadius: '8px',
    padding: '6px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'all 0.2s ease',
  },
  
  locationInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    marginBottom: '12px',
  },
  
  locationName: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
  },
  
  locationSubtext: {
    fontSize: '14px',
    color: COLORS.darkGray,
  },
  
  weatherInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.lightGray,
    padding: '8px 12px',
    borderRadius: '8px',
  },
  
  weather: {
    fontSize: '14px',
    fontWeight: 'bold' as const,
  },
  
  airQuality: {
    fontSize: '12px',
    color: COLORS.darkGray,
  },
  
  quickActions: {
    marginBottom: '24px',
  },
  
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    color: COLORS.primary,
    margin: '0 0 16px 0',
  },
  
  menuGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '15px',
  },
  
  menuItem: {
    backgroundColor: COLORS.primary,
    border: `2px solid ${COLORS.primary}`,
    borderRadius: '20px',
    padding: '20px',
    textDecoration: 'none',
    color: COLORS.background,
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    display: 'block',
  },
  
  menuItemHover: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.3)',
  },
  
  menuItemContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    width: '100%',
  },
  
  menuArrow: {
    fontSize: '16px',
    color: 'inherit',
    marginLeft: 'auto',
    transition: 'transform 0.2s ease',
  },
  
  menuIcon: {
    fontSize: '24px',
    minWidth: '32px',
  },
  
  menuText: {
    flex: 1,
  },
  
  menuTitle: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    margin: '0 0 5px 0',
  },
  
  menuSubtitle: {
    fontSize: '14px',
    opacity: 0.8,
    margin: '0',
  },
  
  emergencyButton: {
    backgroundColor: COLORS.secondary,
    border: `2px solid ${COLORS.secondary}`,
    marginTop: '10px',
    borderRadius: '20px',
    color: COLORS.background,
  },
  
  emergencyButtonHover: {
    backgroundColor: '#B91C1C',
    borderColor: '#B91C1C',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.3)',
  },
  
  tipsSection: {
    marginBottom: '24px',
  },
  
  tipCard: {
    backgroundColor: COLORS.lightGray,
    padding: '16px',
    borderRadius: '12px',
    border: `2px solid ${COLORS.warning}`,
    borderLeft: `4px solid ${COLORS.warning}`,
  },
  
  tipText: {
    fontSize: '14px',
    color: COLORS.darkGray,
    margin: '0',
    lineHeight: '1.5',
  },
};
