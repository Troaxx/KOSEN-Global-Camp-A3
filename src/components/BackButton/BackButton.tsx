import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  customStyle?: React.CSSProperties;
  customHoverStyle?: React.CSSProperties;
}

const BackButton: React.FC<BackButtonProps> = ({ customStyle, customHoverStyle }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const defaultStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    color: '#FFFFFF',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '5px',
    borderRadius: '5px',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '40px',
    minHeight: '40px',
  };

  const defaultHoverStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  };

  const buttonStyle = {
    ...defaultStyle,
    ...customStyle,
    ...(isHovered ? { ...defaultHoverStyle, ...customHoverStyle } : {})
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate('/')}
      aria-label="Go back to home"
    >
      ←
    </button>
  );
};

export default BackButton;
