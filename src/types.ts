export type VisualDirection = 
  | "master"
  | "poster"
  | "tcg"
  | "arcade"
  | "sticker"
  | "fight";

export type AppPage = "home" | "challenge" | "underdog" | "quiz";

export type PredictionDirection = "UP" | "DOWN";

export interface MarketItem {
  id: string;
  symbol: string;
  name: string;
  mood: string;
  description: string;
  volatility: "LOW" | "HIGH" | "UNSTABLE";
  characterId: "jimothy" | "neet" | "chillhouse";
  cardEdition: string;
  currentTrend: "UP" | "DOWN";
  multiplier: number;
}

export interface CharacterProfile {
  id: "jimothy" | "neet" | "chillhouse";
  symbol: string;
  name: string;
  title: string;
  tagline: string;
  personality: string[];
  visualPrompt: string;
  rarity: "COMMON" | "RARE" | "LEGENDARY" | "MYTHIC";
  stats: {
    volatility: number;
    copeFactor: number;
    conviction: number;
    sleepDebt: number;
  };
  accentColor: string;
  badge: string;
  lore: string;
}

export interface PredictionRecord {
  id: number;
  marketSymbol: string;
  direction: PredictionDirection;
  stake: number;
  result: PredictionDirection;
  pnl: number;
  timestamp: string;
}

export interface TrainingModule {
  id: string;
  number: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  page: AppPage;
  status: "PLAYABLE" | "SOON";
  edition: string;
  theme: "orange" | "cyan" | "magenta" | "yellow";
  label: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: "RULES" | "MECHANICS" | "TACTICS";
}
