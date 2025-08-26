export interface Translations {
  // Navigation
  home: string;
  voice: string;
  sos: string;
  settings: string;
  
  // Home Screen
  appTitle: string;
  appSubtitle: string;
  myLocation: string;
  quickAccess: string;
  todaysTip: string;
  
  // Settings
  settingsTitle: string;
  language: string;
  accessibility: string;
  fontSize: string;
  highContrast: string;
  voiceSpeed: string;
  small: string;
  medium: string;
  large: string;
  slow: string;
  normal: string;
  fast: string;
  enabled: string;
  disabled: string;
  
  // Emergency
  emergencyTitle: string;
  emergencyOnly: string;
  emergencyWarning: string;
  call: string;
  
  // Voice Guide
  voiceGuideTitle: string;
  voiceGuideSubtitle: string;
  howToUse: string;
  voiceInstructions: string;
  
  // Japan Rules
  japanRulesTitle: string;
  japanRulesSubtitle: string;
  
  // Menu Items
  japanRules: string;
  japanGuide: string;
  voiceGuide: string;
  emergency: string;
  touristAreas: string;
}

export const translations: Record<string, Translations> = {
  en: {
    // Navigation
    home: 'Home',
    voice: 'Voice',
    sos: 'SOS',
    settings: 'Settings',
    
    // Home Screen
    appTitle: 'Japan Travel Guide',
    appSubtitle: 'Your essential companion for respectful tourism',
    myLocation: 'My Location',
    quickAccess: 'Quick Access',
    todaysTip: "Today's Tip",
    
    // Settings
    settingsTitle: 'Settings & Accessibility',
    language: 'Language',
    accessibility: 'Accessibility',
    fontSize: 'Font Size',
    highContrast: 'High Contrast',
    voiceSpeed: 'Voice Speed',
    small: 'Small',
    medium: 'Medium',
    large: 'Large',
    slow: 'Slow',
    normal: 'Normal',
    fast: 'Fast',
    enabled: 'Enabled',
    disabled: 'Disabled',
    
    // Emergency
    emergencyTitle: 'Emergency Contacts',
    emergencyOnly: 'Emergency Only',
    emergencyWarning: 'Use these numbers only for genuine emergencies. For non-urgent matters, consult local information or your accommodation staff.',
    call: 'CALL',
    
    // Voice Guide
    voiceGuideTitle: 'Voice Guide',
    voiceGuideSubtitle: 'Pre-set phrases for easy communication',
    howToUse: 'How to Use',
    voiceInstructions: 'Tap the red play button next to any phrase to hear the Japanese pronunciation. Show the text to locals if needed.',
    
    // Japan Rules
    japanRulesTitle: 'Japan Rules & Etiquette',
    japanRulesSubtitle: 'Essential cultural guidelines for respectful travel',
    
    // Menu Items
    japanRules: 'Japan Rules',
    japanGuide: 'Japan Guide',
    voiceGuide: 'Voice Guide',
    emergency: 'Emergency',
    touristAreas: 'Tourist Areas',
  },
  
  ja: {
    // Navigation
    home: 'ホーム',
    voice: '音声',
    sos: 'SOS',
    settings: '設定',
    
    // Home Screen
    appTitle: '日本旅行ガイド',
    appSubtitle: '敬意ある観光のための必須コンパニオン',
    myLocation: '現在地',
    quickAccess: 'クイックアクセス',
    todaysTip: '今日のヒント',
    
    // Settings
    settingsTitle: '設定・アクセシビリティ',
    language: '言語',
    accessibility: 'アクセシビリティ',
    fontSize: 'フォントサイズ',
    highContrast: 'ハイコントラスト',
    voiceSpeed: '音声速度',
    small: '小',
    medium: '中',
    large: '大',
    slow: '遅い',
    normal: '普通',
    fast: '速い',
    enabled: '有効',
    disabled: '無効',
    
    // Emergency
    emergencyTitle: '緊急連絡先',
    emergencyOnly: '緊急時のみ',
    emergencyWarning: '真の緊急事態の時のみこれらの番号を使用してください。緊急でない場合は、現地の情報や宿泊施設のスタッフにご相談ください。',
    call: '通話',
    
    // Voice Guide
    voiceGuideTitle: '音声ガイド',
    voiceGuideSubtitle: 'コミュニケーションのための事前設定フレーズ',
    howToUse: '使い方',
    voiceInstructions: 'フレーズの横にある赤い再生ボタンをタップして、日本語の発音を聞いてください。必要に応じて現地の人にテキストを見せてください。',
    
    // Japan Rules
    japanRulesTitle: '日本のルール・エチケット',
    japanRulesSubtitle: '敬意ある旅行のための必須文化ガイドライン',
    
    // Menu Items
    japanRules: '日本のルール',
    japanGuide: '日本ガイド',
    voiceGuide: '音声ガイド',
    emergency: '緊急',
    touristAreas: '観光エリア',
  },
  
  ko: {
    // Navigation
    home: '홈',
    voice: '음성',
    sos: 'SOS',
    settings: '설정',
    
    // Home Screen
    appTitle: '일본 여행 가이드',
    appSubtitle: '예의 바른 관광을 위한 필수 동반자',
    myLocation: '내 위치',
    quickAccess: '빠른 접근',
    todaysTip: '오늘의 팁',
    
    // Settings
    settingsTitle: '설정 및 접근성',
    language: '언어',
    accessibility: '접근성',
    fontSize: '글꼴 크기',
    highContrast: '고대비',
    voiceSpeed: '음성 속도',
    small: '작게',
    medium: '보통',
    large: '크게',
    slow: '느리게',
    normal: '보통',
    fast: '빠르게',
    enabled: '활성화',
    disabled: '비활성화',
    
    // Emergency
    emergencyTitle: '응급 연락처',
    emergencyOnly: '응급시에만',
    emergencyWarning: '진정한 응급상황에서만 이 번호들을 사용하세요. 긴급하지 않은 경우에는 현지 정보나 숙박시설 직원에게 문의하세요.',
    call: '통화',
    
    // Voice Guide
    voiceGuideTitle: '음성 가이드',
    voiceGuideSubtitle: '쉬운 의사소통을 위한 미리 설정된 문구',
    howToUse: '사용법',
    voiceInstructions: '일본어 발음을 들으려면 문구 옆의 빨간 재생 버튼을 누르세요. 필요시 현지인에게 텍스트를 보여주세요.',
    
    // Japan Rules
    japanRulesTitle: '일본 규칙 및 에티켓',
    japanRulesSubtitle: '예의 바른 여행을 위한 필수 문화 가이드라인',
    
    // Menu Items
    japanRules: '일본 규칙',
    japanGuide: '일본 가이드',
    voiceGuide: '음성 가이드',
    emergency: '응급',
    touristAreas: '관광지',
  },
  
  zh: {
    // Navigation
    home: '主页',
    voice: '语音',
    sos: 'SOS',
    settings: '设置',
    
    // Home Screen
    appTitle: '日本旅行指南',
    appSubtitle: '尊重旅游的必备伴侣',
    myLocation: '我的位置',
    quickAccess: '快速访问',
    todaysTip: '今日提示',
    
    // Settings
    settingsTitle: '设置和无障碍',
    language: '语言',
    accessibility: '无障碍',
    fontSize: '字体大小',
    highContrast: '高对比度',
    voiceSpeed: '语音速度',
    small: '小',
    medium: '中',
    large: '大',
    slow: '慢',
    normal: '正常',
    fast: '快',
    enabled: '启用',
    disabled: '禁用',
    
    // Emergency
    emergencyTitle: '紧急联系方式',
    emergencyOnly: '仅限紧急情况',
    emergencyWarning: '仅在真正的紧急情况下使用这些号码。对于非紧急事务，请咨询当地信息或您的住宿工作人员。',
    call: '呼叫',
    
    // Voice Guide
    voiceGuideTitle: '语音指南',
    voiceGuideSubtitle: '便于沟通的预设短语',
    howToUse: '使用方法',
    voiceInstructions: '点击短语旁边的红色播放按钮以听取日语发音。如有需要，可向当地人展示文本。',
    
    // Japan Rules
    japanRulesTitle: '日本规则和礼仪',
    japanRulesSubtitle: '尊重旅行的基本文化指南',
    
    // Menu Items
    japanRules: '日本规则',
    japanGuide: '日本指南',
    voiceGuide: '语音指南',
    emergency: '紧急',
    touristAreas: '旅游区',
  }
};
