export const COLORS = {
  primary: '#1E3A8A', // Navy blue
  secondary: '#DC2626', // Red
  background: '#FFFFFF', // White
  lightGray: '#F3F4F6',
  darkGray: '#6B7280',
  success: '#10B981',
  warning: '#F59E0B',
} as const;

export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
] as const;

export const FONT_SIZES = [
  { value: 'small', label: 'Small', icon: '🔤' },
  { value: 'medium', label: 'Medium', icon: '🔤' },
  { value: 'large', label: 'Large', icon: '🔤' },
] as const;

export const VOICE_SPEEDS = [
  { value: 'slow', label: 'Slow', icon: '🐌' },
  { value: 'normal', label: 'Normal', icon: '⚡' },
  { value: 'fast', label: 'Fast', icon: '🚀' },
] as const;
