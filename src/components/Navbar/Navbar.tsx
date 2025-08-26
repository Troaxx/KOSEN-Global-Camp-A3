import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styles } from './styles';

interface NavItem {
  id: string;
  path: string;
  icon: string;
  label: string;
  color?: string;
}

const navItems: NavItem[] = [
  { id: 'home', path: '/', icon: '🏠', label: 'Home' },
  { id: 'voice', path: '/voice-guide', icon: '🎤', label: 'Voice' },
  { id: 'settings', path: '/settings', icon: '⚙️', label: 'Settings' },
  { id: 'emergency', path: '/emergency', icon: '🆘', label: 'SOS', color: '#DC2626' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.navContainer}>
        {navItems.map((item) => (
          <button
            key={item.id}
            style={{
              ...styles.navItem,
              ...(isActive(item.path) ? styles.navItemActive : {}),
              ...(item.id === 'emergency' && !isActive(item.path) ? styles.emergencyButton : {}),
              ...(item.id === 'emergency' && isActive(item.path) ? styles.emergencyButtonActive : {}),
            }}
            onClick={() => handleNavigation(item.path)}
            aria-label={`Navigate to ${item.label}`}
          >
            <span style={styles.navIcon}>{item.icon}</span>
            <span style={styles.navLabel}>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
