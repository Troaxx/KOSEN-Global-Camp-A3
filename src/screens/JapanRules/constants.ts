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
    id: 'lining-up',
    title: 'Lining Up',
    description: 'When lining up, keep your distance from others and do not push. Wait for your turn and maintain order.',
    category: 'etiquette',
    importance: 'high'
  },
  {
    id: 'train-timing',
    title: 'Train Timing',
    description: 'Always arrive at the station 10 minutes before the train is scheduled to leave. Do not be late for the train. Japan trains are always on time.',
    category: 'etiquette',
    importance: 'high'
  },
  {
    id: 'drinking-and-smoking',
    title: 'Drinking and Smoking',
    description: 'Drinking and Smoking is prohibited before 20 years old.',
    category: 'etiquette',
    importance: 'high'
  },
  {
    id: 'smoking-in-public',
    title: 'Smoking in Public',
    description: 'Smoking in Public is prohibited in most places. There are designated smoking areas in some places.',
    category: 'etiquette',
    importance: 'high'
  },
  {
    id: 'trash-disposal',
    title: 'Trash Disposal',
    description: 'Always dispose of trash in the designated bins. Do not throw trash on the ground or in the streets. Throw your trash at home if there is no trash bins.',
    category: 'etiquette',
    importance: 'high'
  },
  {
    id: 'eating-etiquette',
    title: 'Eating etiquette',
    description: 'When eating, do not speak when food is in your mouth.',
    category: 'culture',
    importance: 'medium'
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
];
