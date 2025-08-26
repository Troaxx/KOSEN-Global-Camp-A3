import React from 'react';

export const styles: { [key: string]: React.CSSProperties } = {
  layout: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  
  mainWithNavbar: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '80px', // Space for navbar
  },
};
