import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#1E3A8A',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    opacity: fadeOut ? 0 : 1,
    transition: 'opacity 0.5s ease-out',
    WebkitOverflowScrolling: 'touch',
    overflow: 'hidden',
  };

  const logoStyle: React.CSSProperties = {
    width: '150px',
    height: '150px',
    marginBottom: '20px',
    animation: 'logoAnimation 1.5s ease-in-out',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    border: '3px solid rgba(255, 255, 255, 0.2)',
  };

  const titleStyle: React.CSSProperties = {
    color: '#FFFFFF',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
    animation: 'titleAnimation 1.8s ease-in-out',
  };

  const subtitleStyle: React.CSSProperties = {
    color: '#F3F4F6',
    fontSize: '16px',
    textAlign: 'center',
    animation: 'subtitleAnimation 2s ease-in-out',
  };

  const loadingStyle: React.CSSProperties = {
    marginTop: '40px',
    color: '#F3F4F6',
    fontSize: '14px',
    animation: 'loadingAnimation 1s infinite',
  };

  // Inject keyframe animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes logoAnimation {
        0% { opacity: 0; transform: scale(0.5) translateY(20px); }
        60% { opacity: 1; transform: scale(1.1) translateY(-10px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }
      
      @keyframes titleAnimation {
        0% { opacity: 0; transform: translateY(20px); }
        70% { opacity: 0; }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes subtitleAnimation {
        0% { opacity: 0; transform: translateY(20px); }
        80% { opacity: 0; }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes loadingAnimation {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={containerStyle}>
      <img 
        src="/assets/hellojapan_logo.png" 
        alt="Hello Japan Logo" 
        style={logoStyle}
        onError={(e) => {
          // Fallback if logo doesn't load
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      <h1 style={titleStyle}>Hello Japan</h1>
      <p style={subtitleStyle}>Your essential companion for respectful tourism</p>
      <div style={loadingStyle}>Loading...</div>
    </div>
  );
};

export default SplashScreen;
