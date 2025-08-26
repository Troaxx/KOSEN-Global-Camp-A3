import { EmergencyContact } from '../../types';

export const COLORS = {
  primary: '#1E3A8A', // Navy blue
  secondary: '#DC2626', // Red
  background: '#FFFFFF', // White
  lightGray: '#F3F4F6',
  darkGray: '#6B7280',
  success: '#10B981',
  warning: '#F59E0B',
  emergency: '#DC2626',
} as const;

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    id: 'police',
    name: 'Police',
    number: '110',
    description: 'For crimes, accidents, and immediate police assistance'
  },
  {
    id: 'fire-ambulance',
    name: 'Fire & Ambulance',
    number: '119',
    description: 'For fires, medical emergencies, and ambulance services'
  },
  {
    id: 'visitor-hotline',
    name: 'Japan Visitor Hotline',
    number: '050-3816-2787',
    description: '24/7 multilingual support for tourists in emergency situations'
  },
  {
    id: 'medical-info',
    name: 'Medical Information',
    number: '#9110',
    description: 'Non-emergency medical consultation and hospital information'
  }
];

export const EMERGENCY_PHRASES = [
  {
    id: 'help-emergency',
    japanese: '緊急事態です！助けてください！',
    romaji: 'Kinkyuu jitai desu! Tasukete kudasai!',
    english: 'This is an emergency! Please help me!'
  },
  {
    id: 'call-police',
    japanese: '警察を呼んでください',
    romaji: 'Keisatsu wo yonde kudasai',
    english: 'Please call the police'
  },
  {
    id: 'call-ambulance',
    japanese: '救急車を呼んでください',
    romaji: 'Kyuukyuusha wo yonde kudasai',
    english: 'Please call an ambulance'
  },
  {
    id: 'not-speak-japanese',
    japanese: '日本語が話せません',
    romaji: 'Nihongo ga hanasemasen',
    english: 'I cannot speak Japanese'
  },
  {
    id: 'need-english',
    japanese: '英語が必要です',
    romaji: 'Eigo ga hitsuyou desu',
    english: 'I need English'
  }
];

export const SAFETY_TIPS = [
  {
    id: 'passport',
    title: 'Always carry your passport',
    description: 'By law, foreign visitors must carry their passport or residence card at all times.',
    icon: '📄'
  },
  {
    id: 'embassy',
    title: 'Know your embassy location',
    description: 'Keep your embassy contact information and address easily accessible.',
    icon: '🏛️'
  },
  {
    id: 'insurance',
    title: 'Travel insurance information',
    description: 'Keep your travel insurance policy number and contact details handy.',
    icon: '🛡️'
  },
  {
    id: 'location-sharing',
    title: 'Share your location',
    description: 'Keep family/friends informed of your whereabouts, especially when traveling alone.',
    icon: '📍'
  }
];
