import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ja' | 'ko' | 'zh';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  fontSize: 'small' | 'medium' | 'large';
  setFontSize: (size: 'small' | 'medium' | 'large') => void;
  highContrast: boolean;
  setHighContrast: (enabled: boolean) => void;
  voiceSpeed: 'slow' | 'normal' | 'fast';
  setVoiceSpeed: (speed: 'slow' | 'normal' | 'fast') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [voiceSpeed, setVoiceSpeed] = useState<'slow' | 'normal' | 'fast'>('normal');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        fontSize,
        setFontSize,
        highContrast,
        setHighContrast,
        voiceSpeed,
        setVoiceSpeed,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
