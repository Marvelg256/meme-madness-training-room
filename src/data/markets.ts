import { MarketItem, TrainingModule, QuizQuestion } from "../types";

export const SIMULATED_MARKETS: MarketItem[] = [
  {
    id: "jimothy",
    symbol: "$JIMOTHY",
    name: "Jimothy Index",
    mood: "LOW VOLATILITY",
    description: "The relatively steady engine. Steady climbs, predictable pulls. Don't mistake calm for safety.",
    volatility: "LOW",
    characterId: "jimothy",
    cardEdition: "SLAB-001/A",
    currentTrend: "UP",
    multiplier: 1.74,
  },
  {
    id: "neet",
    symbol: "$NEET",
    name: "Neet Terminal Drift",
    mood: "HIGH VOLATILITY",
    description: "Wild intraday whipsaws. Fast green candles followed by hyper-speed pullbacks. True reflex training.",
    volatility: "HIGH",
    characterId: "neet",
    cardEdition: "SLAB-002/B",
    currentTrend: "DOWN",
    multiplier: 1.88,
  },
  {
    id: "chillhouse",
    symbol: "$CHILLHOUSE",
    name: "Chillhouse Reserve",
    mood: "UNSTABLE CALM",
    description: "Looks totally asleep until an outsized liquidity dump strikes without warning. Unpredictable regime.",
    volatility: "UNSTABLE",
    characterId: "chillhouse",
    cardEdition: "SLAB-003/C",
    currentTrend: "UP",
    multiplier: 1.82,
  },
];

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: "challenge",
    number: "01",
    icon: "🎮",
    title: "20K CHALLENGE",
    subtitle: "Core Prediction Simulation",
    description: "Start with 20,000 play credits. Read the volatility, lock in UP or DOWN calls, and survive the 10-round session without blowing your stack.",
    page: "challenge",
    status: "PLAYABLE",
    edition: "EDITION 01 // FIRST RUN",
    theme: "orange",
    label: "MOST POPULAR",
  },
  {
    id: "underdog",
    number: "02",
    icon: "⚔️",
    title: "UNDERDOG BATTLE",
    subtitle: "Head-to-Head Clash",
    description: "Two underdog assets square off in the octagon. Community volume weighting decides who ascends and which all-star falls.",
    page: "underdog",
    status: "PLAYABLE",
    edition: "EDITION 02 // MATCHUP",
    theme: "magenta",
    label: "FEATURE PREVIEW",
  },
  {
    id: "quiz",
    number: "03",
    icon: "🧠",
    title: "KNOW THE GAME",
    subtitle: "Rules & Strategy Speed Quiz",
    description: "Think you understand Meme Madness mechanics, multipliers, and liquidation brackets? Prove your trading IQ in a fast 5-round drill.",
    page: "quiz",
    status: "PLAYABLE",
    edition: "EDITION 03 // DRILL",
    theme: "cyan",
    label: "SPEED DRILL",
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary role of the Counted Volume metric in Meme Madness?",
    options: [
      "It determines which meme contender qualifies for the championship bracket.",
      "It multiplies your play credits by 100x automatically.",
      "It prevents other players from placing opposing DOWN predictions.",
      "It resets the market back to zero credits instantly."
    ],
    correctIndex: 0,
    explanation: "Counted Volume tracks genuine community momentum and market activity to decide bracket promotions.",
    category: "MECHANICS"
  },
  {
    id: 2,
    question: "When staking credits on an UP call with a 1.74x payout, how is P&L calculated on a win?",
    options: [
      "You receive 100% of your stake plus an extra 74% net profit.",
      "You lose your stake but gain 74 experience points.",
      "Your credits are locked for 30 business days.",
      "You only get back your principal stake."
    ],
    correctIndex: 0,
    explanation: "Winning a 1.74x return awards your original stake plus 74% in net credit profit.",
    category: "RULES"
  },
  {
    id: 3,
    question: "Why should a player avoid max-betting on high volatility tokens like $NEET early in a session?",
    options: [
      "To preserve risk capital and avoid rapid stack wipeout before seeing late-session setups.",
      "Because high volatility markets only allow UP predictions.",
      "Because credit limits decrease on every win.",
      "Because $NEET charges an automatic 50% entry tax."
    ],
    correctIndex: 0,
    explanation: "Session survival requires bankroll discipline. Staking 5,000 on early volatile moves puts you at risk of ruin in 4 bad calls.",
    category: "TACTICS"
  },
  {
    id: 4,
    question: "What distinguishes an 'Underdog' market from an 'All-Star' market?",
    options: [
      "Underdogs start with higher potential payout multipliers but steeper uphill volume targets.",
      "Underdogs never lose value regardless of prediction direction.",
      "Underdogs are only open to VIP pass holders.",
      "All-Stars can only be traded with DOWN calls."
    ],
    correctIndex: 0,
    explanation: "Underdog markets offer explosive upside multipliers for early conviction calls.",
    category: "MECHANICS"
  },
  {
    id: 5,
    question: "What happens if a player runs out of play credits in the Training Room?",
    options: [
      "They can immediately hit 'Reset Session' to restore 20,000 credits with zero penalty.",
      "Their account is banned permanently from Cade Market.",
      "They must pay real currency to reload credits.",
      "The browser shuts down."
    ],
    correctIndex: 0,
    explanation: "The Training Room is 100% simulated, risk-free training designed for experimenting with bold strategies.",
    category: "RULES"
  }
];
