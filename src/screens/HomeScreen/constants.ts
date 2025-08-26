export const COLORS = {
  primary: '#1E3A8A', // Navy blue
  secondary: '#DC2626', // Red
  background: '#FFFFFF', // White
  lightGray: '#F3F4F6',
  darkGray: '#6B7280',
  success: '#10B981',
  warning: '#F59E0B',
} as const;

export const MENU_ITEMS = [
  {
    id: 'japan-rules',
    title: 'Japan Rules',
    subtitle: 'Culture, etiquette & bowing',
    route: '/japan-rules',
    icon: '🎌'
  },
  {
    id: 'japan-guide',
    title: 'Japan Guide',
    subtitle: 'Location-based recycling rules',
    route: '/japan-guide',
    icon: '♻️'
  },
  {
    id: 'voice-guide',
    title: 'Voice Guide',
    subtitle: 'Pre-set phrases for communication',
    route: '/voice-guide',
    icon: '🎤'
  },
  {
    id: 'crowd-levels',
    title: 'Tourist Areas',
    subtitle: 'Crowd levels & dynamic pricing',
    route: '/crowd-levels',
    icon: '🏯'
  },
  {
    id: 'emergency',
    title: 'Emergency',
    subtitle: 'Police, ambulance & hotline',
    route: '/emergency',
    icon: '🆘'
  }
] as const;
