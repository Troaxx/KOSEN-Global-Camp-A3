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
  locationSubtext: string;
  weather: string;
  airQuality: string;
  goodAirQuality: string;
  tipContent: string;
  
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
  customizeExperience: string;
  
  // Emergency
  emergencyTitle: string;
  emergencyOnly: string;
  emergencyWarning: string;
  call: string;
  emergencyPhrases: string;
  safetyTips: string;
  
  // Voice Guide
  voiceGuideTitle: string;
  voiceGuideSubtitle: string;
  howToUse: string;
  voiceInstructions: string;
  speechNotSupported: string;
  
  // Japan Rules
  japanRulesTitle: string;
  japanRulesSubtitle: string;
  all: string;
  bowing: string;
  etiquette: string;
  culture: string;
  general: string;
  
  // Japan Guide
  japanGuideTitle: string;
  japanGuideSubtitle: string;
  selectLocation: string;
  currentLocation: string;
  youAreIn: string;
  
  // Crowd Levels
  crowdLevelsTitle: string;
  crowdLevelsSubtitle: string;
  filterByLocation: string;
  allLocations: string;
  crowdLevelLegend: string;
  touristAreas: string;
  entryPrice: string;
  freeEntry: string;
  buyTicket: string;
  noAreasFound: string;
  
  // Menu Items
  japanRules: string;
  japanGuide: string;
  voiceGuide: string;
  emergency: string;
  
  // Categories
  greeting: string;
  help: string;
  direction: string;
  courtesy: string;
  
  // Common
  back: string;
  filter: string;
  select: string;
  location: string;
  description: string;
  price: string;
  crowd: string;
  level: string;
  importance: string;
  high: string;
  low: string;
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
    locationSubtext: 'Current Weather & Air Quality',
    weather: 'Weather',
    airQuality: 'Air Quality',
    goodAirQuality: 'Good Air Quality',
    tipContent: 'Tip of the Day',
    
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
    customizeExperience: 'Customize Experience',
    
    // Emergency
    emergencyTitle: 'Emergency Contacts',
    emergencyOnly: 'Emergency Only',
    emergencyWarning: 'Use these numbers only for genuine emergencies. For non-urgent matters, consult local information or your accommodation staff.',
    call: 'CALL',
    emergencyPhrases: 'Emergency Phrases',
    safetyTips: 'Safety Tips',
    
    // Voice Guide
    voiceGuideTitle: 'Voice Guide',
    voiceGuideSubtitle: 'Pre-set phrases for easy communication',
    howToUse: 'How to Use',
    voiceInstructions: 'Tap the red play button next to any phrase to hear the Japanese pronunciation. Show the text to locals if needed.',
    speechNotSupported: 'Speech not supported in this language.',
    
    // Japan Rules
    japanRulesTitle: 'Japan Rules & Etiquette',
    japanRulesSubtitle: 'Essential cultural guidelines for respectful travel',
    all: 'All',
    bowing: 'Bowing',
    etiquette: 'Etiquette',
    culture: 'Culture',
    general: 'General',
    
    // Japan Guide
    japanGuideTitle: 'Japan Guide',
    japanGuideSubtitle: 'Find your perfect destination',
    selectLocation: 'Select Location',
    currentLocation: 'Current Location',
    youAreIn: 'You are in',
    
    // Crowd Levels
    crowdLevelsTitle: 'Crowd Levels',
    crowdLevelsSubtitle: 'Check visitor density',
    filterByLocation: 'Filter by Location',
    allLocations: 'All Locations',
    crowdLevelLegend: 'Legend',
    touristAreas: 'Tourist Areas',
    entryPrice: 'Entry Price',
    freeEntry: 'Free Entry',
    buyTicket: 'Buy Ticket',
    noAreasFound: 'No areas found',
    
    // Menu Items
    japanRules: 'Japan Rules',
    japanGuide: 'Japan Guide',
    voiceGuide: 'Voice Guide',
    emergency: 'Emergency',
    
    // Categories
    greeting: 'Greeting',
    help: 'Help',
    direction: 'Direction',
    courtesy: 'Courtesy',
    
    // Common
    back: 'Back',
    filter: 'Filter',
    select: 'Select',
    location: 'Location',
    description: 'Description',
    price: 'Price',
    crowd: 'Crowd',
    level: 'Level',
    importance: 'Importance',
    high: 'High',
    low: 'Low',
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
    locationSubtext: '現在の天気と空気質',
    weather: '天気',
    airQuality: '空気質',
    goodAirQuality: '良好な空気質',
    tipContent: '今日のヒント',
    
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
    customizeExperience: '体験をカスタマイズ',
    
    // Emergency
    emergencyTitle: '緊急連絡先',
    emergencyOnly: '緊急時のみ',
    emergencyWarning: '真の緊急事態の時のみこれらの番号を使用してください。緊急でない場合は、現地の情報や宿泊施設のスタッフにご相談ください。',
    call: '通話',
    emergencyPhrases: '緊急フレーズ',
    safetyTips: '安全ヒント',
    
    // Voice Guide
    voiceGuideTitle: '音声ガイド',
    voiceGuideSubtitle: 'コミュニケーションのための事前設定フレーズ',
    howToUse: '使い方',
    voiceInstructions: 'フレーズの横にある赤い再生ボタンをタップして、日本語の発音を聞いてください。必要に応じて現地の人にテキストを見せてください。',
    speechNotSupported: 'この言語では音声はサポートされていません。',
    
    // Japan Rules
    japanRulesTitle: '日本のルール・エチケット',
    japanRulesSubtitle: '敬意ある旅行のための必須文化ガイドライン',
    all: '全て',
    bowing: '敬礼',
    etiquette: '礼儀',
    culture: '文化',
    general: '一般',
    
    // Japan Guide
    japanGuideTitle: '日本ガイド',
    japanGuideSubtitle: 'あなたの理想の目的地を見つける',
    selectLocation: '場所を選択',
    currentLocation: '現在地',
    youAreIn: 'あなたはここにいます',
    
    // Crowd Levels
    crowdLevelsTitle: '混雑度',
    crowdLevelsSubtitle: '訪問者の密度をチェック',
    filterByLocation: '場所でフィルター',
    allLocations: '全ての場所',
    crowdLevelLegend: '凡例',
    touristAreas: '観光エリア',
    entryPrice: '入場料',
    freeEntry: '無料',
    buyTicket: 'チケットを購入',
    noAreasFound: 'エリアが見つかりません',
    
    // Menu Items
    japanRules: '日本のルール',
    japanGuide: '日本ガイド',
    voiceGuide: '音声ガイド',
    emergency: '緊急',
    
    // Categories
    greeting: '挨拶',
    help: '助け',
    direction: '方向',
    courtesy: '礼儀',
    
    // Common
    back: '戻る',
    filter: 'フィルター',
    select: '選択',
    location: '場所',
    description: '説明',
    price: '価格',
    crowd: '混雑',
    level: 'レベル',
    importance: '重要度',
    high: '高い',
    low: '低い',
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
    locationSubtext: '현재 날씨 및 대기질',
    weather: '날씨',
    airQuality: '대기질',
    goodAirQuality: '양호한 대기질',
    tipContent: '오늘의 팁',
    
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
    customizeExperience: '경험 사용자 정의',
    
    // Emergency
    emergencyTitle: '응급 연락처',
    emergencyOnly: '응급시에만',
    emergencyWarning: '진정한 응급상황에서만 이 번호들을 사용하세요. 긴급하지 않은 경우에는 현지 정보나 숙박시설 직원에게 문의하세요.',
    call: '통화',
    emergencyPhrases: '응급 문구',
    safetyTips: '안전 팁',
    
    // Voice Guide
    voiceGuideTitle: '음성 가이드',
    voiceGuideSubtitle: '쉬운 의사소통을 위한 미리 설정된 문구',
    howToUse: '사용법',
    voiceInstructions: '일본어 발음을 들으려면 문구 옆의 빨간 재생 버튼을 누르세요. 필요시 현지인에게 텍스트를 보여주세요.',
    speechNotSupported: '이 언어에서는 음성이 지원되지 않습니다.',
    
    // Japan Rules
    japanRulesTitle: '일본 규칙 및 에티켓',
    japanRulesSubtitle: '예의 바른 여행을 위한 필수 문화 가이드라인',
    all: '모든 것',
    bowing: '문완성',
    etiquette: '에티켓',
    culture: '문화',
    general: '일반',
    
    // Japan Guide
    japanGuideTitle: '일본 가이드',
    japanGuideSubtitle: '이상적인 목적지를 찾으세요',
    selectLocation: '위치 선택',
    currentLocation: '현재 위치',
    youAreIn: '당신은 여기에 있습니다',
    
    // Crowd Levels
    crowdLevelsTitle: '혼잡도',
    crowdLevelsSubtitle: '방문객 밀도 확인',
    filterByLocation: '위치별 필터',
    allLocations: '모든 위치',
    crowdLevelLegend: '범례',
    touristAreas: '관광지',
    entryPrice: '입장료',
    freeEntry: '무료',
    buyTicket: '티켓 구매',
    noAreasFound: '지역을 찾을 수 없습니다',
    
    // Menu Items
    japanRules: '일본 규칙',
    japanGuide: '일본 가이드',
    voiceGuide: '음성 가이드',
    emergency: '응급',
    
    // Categories
    greeting: '인사',
    help: '도움',
    direction: '방향',
    courtesy: '에티켓',
    
    // Common
    back: '뒤로',
    filter: '필터',
    select: '선택',
    location: '위치',
    description: '설명',
    price: '가격',
    crowd: '혼잡',
    level: '레벨',
    importance: '중요도',
    high: '높은',
    low: '낮은',
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
    locationSubtext: '当前天气及空气质量',
    weather: '天气',
    airQuality: '空气质量',
    goodAirQuality: '良好空气质量',
    tipContent: '今日提示',
    
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
    customizeExperience: '自定义体验',
    
    // Emergency
    emergencyTitle: '紧急联系方式',
    emergencyOnly: '仅限紧急情况',
    emergencyWarning: '仅在真正的紧急情况下使用这些号码。对于非紧急事务，请咨询当地信息或您的住宿工作人员。',
    call: '呼叫',
    emergencyPhrases: '紧急短语',
    safetyTips: '安全提示',
    
    // Voice Guide
    voiceGuideTitle: '语音指南',
    voiceGuideSubtitle: '便于沟通的预设短语',
    howToUse: '使用方法',
    voiceInstructions: '点击短语旁边的红色播放按钮以听取日语发音。如有需要，可向当地人展示文本。',
    speechNotSupported: '此语言不支持语音。',
    
    // Japan Rules
    japanRulesTitle: '日本规则和礼仪',
    japanRulesSubtitle: '尊重旅行的基本文化指南',
    all: '全部',
    bowing: '鞠躬',
    etiquette: '礼仪',
    culture: '文化',
    general: '一般',
    
    // Japan Guide
    japanGuideTitle: '日本指南',
    japanGuideSubtitle: '找到您的理想目的地',
    selectLocation: '选择位置',
    currentLocation: '当前位置',
    youAreIn: '您在这里',
    
    // Crowd Levels
    crowdLevelsTitle: '拥挤度',
    crowdLevelsSubtitle: '检查游客密度',
    filterByLocation: '按位置过滤',
    allLocations: '所有位置',
    crowdLevelLegend: '图例',
    touristAreas: '旅游区',
    entryPrice: '入场费',
    freeEntry: '免费',
    buyTicket: '购买门票',
    noAreasFound: '未找到区域',
    
    // Menu Items
    japanRules: '日本规则',
    japanGuide: '日本指南',
    voiceGuide: '语音指南',
    emergency: '紧急',
    
    // Categories
    greeting: '问候',
    help: '帮助',
    direction: '方向',
    courtesy: '礼仪',
    
    // Common
    back: '返回',
    filter: '过滤',
    select: '选择',
    location: '位置',
    description: '描述',
    price: '价格',
    crowd: '拥挤',
    level: '级别',
    importance: '重要性',
    high: '高',
    low: '低',
  }
};
