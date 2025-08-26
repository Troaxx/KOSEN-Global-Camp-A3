import { VoicePhrase } from '../../types';

export const COLORS = {
  primary: '#1E3A8A', // Navy blue
  secondary: '#DC2626', // Red
  background: '#FFFFFF', // White
  lightGray: '#F3F4F6',
  darkGray: '#6B7280',
  success: '#10B981',
  warning: '#F59E0B',
} as const;

export const VOICE_PHRASES: VoicePhrase[] = [
  // Greetings
  {
    id: 'hello',
    japanese: 'こんにちは',
    romaji: 'Konnichiwa',
    english: 'Hello',
    category: 'greeting'
  },
  {
    id: 'good-morning',
    japanese: 'おはようございます',
    romaji: 'Ohayou gozaimasu',
    english: 'Good morning',
    category: 'greeting'
  },
  {
    id: 'good-evening',
    japanese: 'こんばんは',
    romaji: 'Konbanwa',
    english: 'Good evening',
    category: 'greeting'
  },
  {
    id: 'goodbye',
    japanese: 'さようなら',
    romaji: 'Sayounara',
    english: 'Goodbye',
    category: 'greeting'
  },

  // Help
  {
    id: 'help-me',
    japanese: '助けてください',
    romaji: 'Tasukete kudasai',
    english: 'Please help me',
    category: 'help'
  },
  {
    id: 'dont-understand',
    japanese: 'わかりません',
    romaji: 'Wakarimasen',
    english: 'I don\'t understand',
    category: 'help'
  },
  {
    id: 'speak-slowly',
    japanese: 'ゆっくり話してください',
    romaji: 'Yukkuri hanashite kudasai',
    english: 'Please speak slowly',
    category: 'help'
  },
  {
    id: 'english-speaker',
    japanese: '英語を話せる人はいますか？',
    romaji: 'Eigo wo hanaseru hito wa imasu ka?',
    english: 'Is there someone who speaks English?',
    category: 'help'
  },

  // Directions
  {
    id: 'where-is',
    japanese: 'どこですか？',
    romaji: 'Doko desu ka?',
    english: 'Where is it?',
    category: 'direction'
  },
  {
    id: 'toilet',
    japanese: 'トイレはどこですか？',
    romaji: 'Toire wa doko desu ka?',
    english: 'Where is the toilet?',
    category: 'direction'
  },
  {
    id: 'station',
    japanese: '駅はどこですか？',
    romaji: 'Eki wa doko desu ka?',
    english: 'Where is the station?',
    category: 'direction'
  },
  {
    id: 'lost',
    japanese: '道に迷いました',
    romaji: 'Michi ni mayoimashita',
    english: 'I am lost',
    category: 'direction'
  },

  // Emergency
  {
    id: 'call-police',
    japanese: '警察を呼んでください',
    romaji: 'Keisatsu wo yonde kudasai',
    english: 'Please call the police',
    category: 'emergency'
  },
  {
    id: 'call-ambulance',
    japanese: '救急車を呼んでください',
    romaji: 'Kyuukyuusha wo yonde kudasai',
    english: 'Please call an ambulance',
    category: 'emergency'
  },
  {
    id: 'fire',
    japanese: '火事です',
    romaji: 'Kaji desu',
    english: 'Fire!',
    category: 'emergency'
  },
  {
    id: 'sick',
    japanese: '具合が悪いです',
    romaji: 'Guai ga warui desu',
    english: 'I feel sick',
    category: 'emergency'
  },

  // Courtesy
  {
    id: 'thank-you',
    japanese: 'ありがとうございます',
    romaji: 'Arigatou gozaimasu',
    english: 'Thank you',
    category: 'courtesy'
  },
  {
    id: 'excuse-me',
    japanese: 'すみません',
    romaji: 'Sumimasen',
    english: 'Excuse me',
    category: 'courtesy'
  },
  {
    id: 'sorry',
    japanese: 'ごめんなさい',
    romaji: 'Gomen nasai',
    english: 'I\'m sorry',
    category: 'courtesy'
  },
  {
    id: 'please',
    japanese: 'お願いします',
    romaji: 'Onegaishimasu',
    english: 'Please',
    category: 'courtesy'
  },
  {
    id: 'no-thank-you',
    japanese: '結構です',
    romaji: 'Kekkou desu',
    english: 'No thank you',
    category: 'courtesy'
  }
];
