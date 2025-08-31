# Hello Japan - KOSEN Global Camp Solution

A prototype mobile-first web application created for **KOSEN Global Camp** to address overtourism challenges in Japan through smart technology solutions.

## About the Project

This application was developed as part of **Group A3** during the KOSEN Global Camp, where students from:
- **Kyushu Region KOSENs** (Japan)
- **Thailand** (PCHSS Princess Chulabhorn Science High School Loei)
- **Singapore** (TP)

came together to solve **overtourism & smart disaster prevention solutions** for Japan.

## Live Demo

🌐 **Live Demo**: [https://kosena3.netlify.app/](https://kosena3.netlify.app/)

## Features

### 1. Dynamic Pricing Based on Crowd Levels
- Real-time crowd level monitoring
- Adaptive pricing system that adjusts based on tourist density
- Helps distribute tourist flow and reduce overcrowding

### 2. Japanese Rules & Etiquette Guide
- Comprehensive rulebook covering essential Japanese customs
- Cultural etiquette guidelines for tourists
- Helps visitors respect local traditions and avoid cultural misunderstandings

### 3. Voice Command System
- Interactive voice button for learning Japanese phrases
- Displays phrases in three formats:
  - **English** (translation)
  - **Romaji** (romanized pronunciation)
  - **Japanese** (original script)
- Perfect for tourists to communicate basic needs

## Technical Details

- **Platform**: Web application (mobile-optimized)
- **Framework**: React with TypeScript
- **Design**: Mobile-first responsive design
- **Deployment**: Netlify

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd kosen-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (language management)
├── screens/            # Main application screens
│   ├── CrowdLevels/   # Dynamic pricing & crowd monitoring
│   ├── Emergency/      # Emergency information
│   ├── HomeScreen/     # Main landing page
│   ├── JapanGuide/     # Cultural guide
│   ├── JapanRules/     # Rules & etiquette
│   ├── Settings/       # App configuration
│   └── VoiceGuide/     # Voice command system
├── translations/        # Multi-language support
└── types/              # TypeScript type definitions
```


## License

This project is part of the KOSEN Global Camp initiative and is intended for educational and demonstration purposes.

---

**Developed with ❤️ for KOSEN Global Camp - Solving Japan's Overtourism Challenges**
