import { JapanRule } from '../../types';

export const COLORS = {
  primary: '#1E3A8A', // Navy blue
  secondary: '#DC2626', // Red
  background: '#FFFFFF', // White
  lightGray: '#F3F4F6',
  darkGray: '#6B7280',
  success: '#10B981',
  warning: '#F59E0B',
} as const;

export const JAPAN_RULES: JapanRule[] = [
  {
    id: 'bowing-basic',
    title: 'Bowing Etiquette',
    description: 'Bowing is a fundamental part of Japanese culture. A slight bow (15°) for casual greetings, deeper bow (30°) for formal situations, and very deep bow (45°) for apologies or showing great respect.',
    category: 'bowing',
    importance: 'high'
  },
  {
    id: 'shoes-removal',
    title: 'Shoe Removal',
    description: 'Always remove shoes when entering homes, temples, traditional restaurants, and some hotels. Look for shoe racks or slippers at the entrance.',
    category: 'etiquette',
    importance: 'high'
  },
  {
    id: 'public-transport',
    title: 'Public Transport Manners',
    description: 'Keep conversations quiet, turn phone to silent mode, offer priority seats to elderly/pregnant women, and do not eat strong-smelling food.',
    category: 'etiquette',
    importance: 'high'
  },
  {
    id: 'gift-giving',
    title: 'Gift Giving (Omiyage)',
    description: 'Bring small gifts (omiyage) when visiting someone. Present and receive gifts with both hands. The presentation is as important as the gift itself.',
    category: 'culture',
    importance: 'medium'
  },
  {
    id: 'chopstick-etiquette',
    title: 'Chopstick Manners',
    description: 'Never stick chopsticks upright in rice (resembles incense at funerals), don\'t point with them, and don\'t pass food chopstick to chopstick.',
    category: 'etiquette',
    importance: 'high'
  },
  {
    id: 'business-cards',
    title: 'Business Card Exchange (Meishi)',
    description: 'Present and receive business cards with both hands. Study the card briefly before carefully placing it in a card case or on the table.',
    category: 'culture',
    importance: 'medium'
  },
  {
    id: 'onsen-rules',
    title: 'Onsen (Hot Spring) Etiquette',
    description: 'Wash thoroughly before entering the bath, keep towels out of the water, no swimming or loud talking, and tattoos may not be allowed.',
    category: 'culture',
    importance: 'medium'
  },
  {
    id: 'shrine-temple',
    title: 'Shrine & Temple Manners',
    description: 'Bow before entering, purify hands and mouth at the water basin, make offerings quietly, and be respectful of worshippers and ceremonies.',
    category: 'culture',
    importance: 'high'
  },
  {
    id: 'slurping-ok',
    title: 'Slurping Noodles',
    description: 'Slurping noodles (especially ramen and soba) is not only acceptable but encouraged - it shows appreciation and enhances the flavor.',
    category: 'etiquette',
    importance: 'low'
  },
  {
    id: 'personal-space',
    title: 'Personal Space & Physical Contact',
    description: 'Maintain appropriate distance, avoid physical contact like hugging or touching shoulders. Handshakes are acceptable in business but bowing is preferred.',
    category: 'general',
    importance: 'high'
  }
];
