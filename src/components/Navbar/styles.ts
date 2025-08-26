import React from 'react';

const COLORS = {
  primary: '#1E3A8A',
  secondary: '#DC2626',
  background: '#FFFFFF',
  lightGray: '#F3F4F6',
  darkGray: '#6B7280',
  navBackground: 'rgba(255, 255, 255, 0.95)',
  shadow: 'rgba(30, 58, 138, 0.1)',
} as const;

export const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.navBackground,
    backdropFilter: 'blur(10px)',
    borderTop: `2px solid ${COLORS.primary}`,
    boxShadow: `0 -4px 20px ${COLORS.shadow}`,
    zIndex: 1000,
    padding: '8px 0',
  },
  
  navContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '480px',
    margin: '0 auto',
    padding: '0 10px',
  },
  
  navItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 8px',
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    color: COLORS.darkGray,
    minWidth: '60px',
    fontSize: '12px',
    fontWeight: '600',
    flex: 1,
  },
  
  navItemActive: {
    backgroundColor: COLORS.primary,
    color: COLORS.background,
    transform: 'translateY(-2px)',
    boxShadow: `0 4px 12px ${COLORS.shadow}`,
  },
  
  navIcon: {
    fontSize: '20px',
    marginBottom: '2px',
    display: 'block',
  },
  
  navLabel: {
    fontSize: '10px',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: '1',
  },
  
  emergencyButton: {
    backgroundColor: 'rgba(220, 38, 38, 0.1)',
    borderColor: COLORS.secondary,
    color: COLORS.secondary,
  },
  
  emergencyButtonActive: {
    backgroundColor: COLORS.secondary,
    color: COLORS.background,
    transform: 'translateY(-2px)',
    boxShadow: `0 4px 12px rgba(220, 38, 38, 0.3)`,
  },
};
