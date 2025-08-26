export interface Location {
  id: string;
  name: string;
  prefecture: string;
  recyclingRules: RecyclingRule[];
}

export interface RecyclingRule {
  category: string;
  description: string;
  examples: string[];
}

export interface TouristArea {
  id: string;
  name: string;
  currentCrowdLevel: 'low' | 'medium' | 'high' | 'very-high';
  basePrice: number;
  currentPrice: number;
  description: string;
  location: string;
}

export interface EmergencyContact {
  id: string;
  name: string;
  number: string;
  description: string;
}

export interface VoicePhrase {
  id: string;
  japanese: string;
  romaji: string;
  english: string;
  category: 'greeting' | 'help' | 'direction' | 'emergency' | 'courtesy';
}

export interface JapanRule {
  id: string;
  title: string;
  description: string;
  category: 'culture' | 'etiquette' | 'bowing' | 'general';
  importance: 'low' | 'medium' | 'high';
}
