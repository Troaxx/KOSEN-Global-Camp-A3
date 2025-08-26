import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '../contexts/LanguageContext';
import Layout from './Layout/Layout';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import JapanRules from '../screens/JapanRules/JapanRules';
import JapanGuide from '../screens/JapanGuide/JapanGuide';
import VoiceGuide from '../screens/VoiceGuide/VoiceGuide';
import Emergency from '../screens/Emergency/Emergency';
import CrowdLevels from '../screens/CrowdLevels/CrowdLevels';
import Settings from '../screens/Settings/Settings';

const Navigation: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/japan-rules" element={<JapanRules />} />
            <Route path="/japan-guide" element={<JapanGuide />} />
            <Route path="/voice-guide" element={<VoiceGuide />} />
            <Route path="/emergency" element={<Emergency />} />
            <Route path="/crowd-levels" element={<CrowdLevels />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
};

export default Navigation;
