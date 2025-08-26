import React from 'react';
import Navbar from '../Navbar/Navbar';
import { styles } from './styles';

interface LayoutProps {
  children: React.ReactNode;
  showNavbar?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showNavbar = true }) => {
  return (
    <div style={styles.layout}>
      <main style={showNavbar ? styles.mainWithNavbar : styles.main}>
        {children}
      </main>
      {showNavbar && <Navbar />}
    </div>
  );
};

export default Layout;
