import React, { useState } from 'react';
import Navigation from './components/Navigation';
import SplashScreen from './components/SplashScreen/SplashScreen';
import './App.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

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
