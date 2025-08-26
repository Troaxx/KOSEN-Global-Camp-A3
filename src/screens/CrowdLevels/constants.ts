import { TouristArea } from '../../types';

export const COLORS = {
  primary: '#1E3A8A', // Navy blue
  secondary: '#DC2626', // Red
  background: '#FFFFFF', // White
  lightGray: '#F3F4F6',
  darkGray: '#6B7280',
  success: '#10B981',
  warning: '#F59E0B',
  crowdLow: '#10B981',
  crowdMedium: '#F59E0B',
  crowdHigh: '#DC2626',
  crowdVeryHigh: '#7C2D12',
} as const;

export const TOURIST_AREAS: TouristArea[] = [
  {
    id: 'fushimi-inari',
    name: 'Fushimi Inari Shrine',
    currentCrowdLevel: 'high',
    basePrice: 2000,
    currentPrice: 3500,
    description: 'Famous shrine with thousands of vermillion torii gates',
    location: 'Kyoto'
  },
  {
    id: 'kiyomizu-dera',
    name: 'Kiyomizu-dera Temple',
    currentCrowdLevel: 'medium',
    basePrice: 1500,
    currentPrice: 2200,
    description: 'Historic Buddhist temple with city views',
    location: 'Kyoto'
  },
  {
    id: 'senso-ji',
    name: 'Senso-ji Temple',
    currentCrowdLevel: 'very-high',
    basePrice: 1000,
    currentPrice: 4000,
    description: 'Tokyo\'s oldest temple in Asakusa district',
    location: 'Tokyo'
  },
  {
    id: 'shibuya-crossing',
    name: 'Shibuya Crossing',
    currentCrowdLevel: 'high',
    basePrice: 0,
    currentPrice: 0,
    description: 'The world\'s busiest pedestrian crossing',
    location: 'Tokyo'
  },
  {
    id: 'arashiyama-bamboo',
    name: 'Arashiyama Bamboo Grove',
    currentCrowdLevel: 'low',
    basePrice: 500,
    currentPrice: 500,
    description: 'Peaceful bamboo forest path',
    location: 'Kyoto'
  },
  {
    id: 'meiji-shrine',
    name: 'Meiji Shrine',
    currentCrowdLevel: 'medium',
    basePrice: 800,
    currentPrice: 1200,
    description: 'Shinto shrine dedicated to Emperor Meiji',
    location: 'Tokyo'
  },
  {
    id: 'kumamoto-castle',
    name: 'Kumamoto Castle',
    currentCrowdLevel: 'low',
    basePrice: 1200,
    currentPrice: 1200,
    description: 'Historic castle with reconstruction work ongoing',
    location: 'Kumamoto'
  },
  {
    id: 'aso-kuju',
    name: 'Aso-Kuju National Park',
    currentCrowdLevel: 'low',
    basePrice: 800,
    currentPrice: 800,
    description: 'Active volcanic caldera and mountain landscapes',
    location: 'Kumamoto'
  },
  {
    id: 'dotonbori',
    name: 'Dotonbori District',
    currentCrowdLevel: 'high',
    basePrice: 0,
    currentPrice: 0,
    description: 'Vibrant entertainment district with neon lights',
    location: 'Osaka'
  },
  {
    id: 'osaka-castle',
    name: 'Osaka Castle',
    currentCrowdLevel: 'medium',
    basePrice: 1500,
    currentPrice: 2000,
    description: 'Reconstructed castle with museum and gardens',
    location: 'Osaka'
  }
];

export const CROWD_LEVEL_INFO = {
  low: {
    color: COLORS.crowdLow,
    label: 'Low',
    description: 'Perfect time to visit! Minimal crowds.',
    icon: '🟢',
    multiplier: 1.0
  },
  medium: {
    color: COLORS.crowdMedium,
    label: 'Medium',
    description: 'Moderate crowds. Good time to visit.',
    icon: '🟡',
    multiplier: 1.5
  },
  high: {
    color: COLORS.crowdHigh,
    label: 'High',
    description: 'Busy period. Expect longer wait times.',
    icon: '🟠',
    multiplier: 2.0
  },
  'very-high': {
    color: COLORS.crowdVeryHigh,
    label: 'Very High',
    description: 'Extremely crowded. Consider visiting later.',
    icon: '🔴',
    multiplier: 3.0
  }
} as const;
