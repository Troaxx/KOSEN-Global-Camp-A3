import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import SplashScreen from './components/SplashScreen/SplashScreen';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset splash screen on page refresh and ensure it shows on mobile
  useEffect(() => {
    // Force splash screen to show on mobile devices
    if (isMobile) {
      setShowSplash(true);
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isMobile) {
        setShowSplash(true);
      }
    };

    const handleFocus = () => {
      if (isMobile) {
        setShowSplash(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, [isMobile]);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <Navigation />
      )}
    </div>
  );
}

export default App;
