import React, { useState, useEffect } from "react";
import { VisualDirection, MarketItem, PredictionDirection, PredictionRecord } from "../types";
import { SIMULATED_MARKETS } from "../data/markets";
import { CHARACTERS } from "../data/characters";
import { CharacterArtwork } from "../components/CharacterArtwork";
import { TactileButton } from "../components/TactileButton";
import { sound } from "../utils/audio";
import {
  TrendingUp,
  TrendingDown,
  Coins,
  Flame,
  RotateCcw,
  Sparkles,
  Zap,
  Activity,
  History,
  CheckCircle2,
  XCircle,
  AlertTriangle,
} from "lucide-react";

interface ChallengeViewProps {
  credits: number;
  onUpdateCredits: (newAmount: number) => void;
  streak: number;
  onUpdateStreak: (newStreak: number) => void;
  direction: VisualDirection;
}

export function ChallengeView({
  credits,
  onUpdateCredits,
  streak,
  onUpdateStreak,
  direction,
}: ChallengeViewProps) {
  const [selectedMarketId, setSelectedMarketId] = useState<string>("jimothy");
  const [stake, setStake] = useState<number>(1000);
  const [history, setHistory] = useState<PredictionRecord[]>([]);
  const [isResolving, setIsResolving] = useState<boolean>(false);
  const [resolveCountdown, setResolveCountdown] = useState<number>(3);
  const [lastResult, setLastResult] = useState<{
    call: PredictionDirection;
    outcome: PredictionDirection;
    win: boolean;
    pnl: number;
  } | null>(null);

  const currentMarket = SIMULATED_MARKETS.find((m) => m.id === selectedMarketId) || SIMULATED_MARKETS[0];
  const currentCharacter = CHARACTERS.find((c) => c.id === currentMarket.characterId) || CHARACTERS[0];

  // Quick Stake increments
  const stakePresets = [500, 1000, 2500, 5000, 10000];

  const handlePredict = (predictedDirection: PredictionDirection) => {
    if (credits <= 0 || stake <= 0 || isResolving) return;

    const actualStake = Math.min(stake, credits);
    setIsResolving(true);
    setLastResult(null);
    setResolveCountdown(3);

    // Simulate countdown and outcome
    let count = 3;
    const interval = setInterval(() => {
      count -= 1;
      setResolveCountdown(count);
      if (count <= 0) {
        clearInterval(interval);
        
        // Outcome probability: Jimothy slightly favors UP, Neet is pure 50/50 chaotic, Chillhouse favors UP
        let outcome: PredictionDirection = Math.random() > 0.48 ? "UP" : "DOWN";
        if (currentMarket.volatility === "HIGH") {
          outcome = Math.random() > 0.50 ? "UP" : "DOWN";
        }

        const isWin = predictedDirection === outcome;
        let pnl = 0;
        let newTotal = credits;

        if (isWin) {
          pnl = Math.round(actualStake * (currentMarket.multiplier - 1));
          newTotal = credits + pnl;
          onUpdateStreak(streak + 1);
          sound.playWin();
        } else {
          pnl = -actualStake;
          newTotal = Math.max(0, credits - actualStake);
          onUpdateStreak(0);
          sound.playLoss();
        }

        onUpdateCredits(newTotal);

        const newRecord: PredictionRecord = {
          id: Date.now(),
          marketSymbol: currentMarket.symbol,
          direction: predictedDirection,
          stake: actualStake,
          result: outcome,
          pnl,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        };

        setHistory((prev) => [newRecord, ...prev.slice(0, 14)]);
        setLastResult({
          call: predictedDirection,
          outcome,
          win: isWin,
          pnl,
        });
        setIsResolving(false);
      }
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-black pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black text-[#FF6A00] tracking-widest uppercase">
              // MODULE 01 // LIVE ARCADE
            </span>
            <span className="rounded bg-[#00F5D4] px-1.5 py-0.2 font-mono text-[9px] font-black text-black">
              INTERACTIVE
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-[#FDFBF7]">
            20K PREDICTION CHALLENGE
          </h1>
        </div>

        {/* Current Stack Pill */}
        <div className="flex items-center gap-3">
          <div className="rounded-xl border-2 border-black bg-[#1C1822] px-4 py-2 shadow-brutal">
            <span className="font-mono text-[10px] text-[#6E637B] block">CURRENT STACK</span>
            <div className="flex items-center gap-1.5 font-display text-2xl text-[#00F5D4]">
              <Coins className="h-5 w-5" />
              <span>{credits.toLocaleString()} PTS</span>
            </div>
          </div>

          <TactileButton
            variant="outline"
            size="sm"
            onClick={() => {
              onUpdateCredits(20000);
              onUpdateStreak(0);
              setLastResult(null);
            }}
            icon={<RotateCcw className="h-3.5 w-3.5" />}
          >
            RESET
          </TactileButton>
        </div>
      </div>

      {/* Main Trading Floor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Market Selection & Character Card Slab */}
        <div className="lg:col-span-4 space-y-4">
          <div className="rounded-xl border-2 border-black bg-[#16131A] p-4 shadow-brutal">
            <h2 className="font-mono text-xs font-black text-[#D1C9BD] uppercase tracking-wider mb-3">
              SELECT ACTIVE MEME ASSET:
            </h2>

            <div className="space-y-2">
              {SIMULATED_MARKETS.map((m) => {
                const isSelected = m.id === selectedMarketId;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMarketId(m.id)}
                    className={`
                      w-full text-left rounded-xl p-3 border-2 transition-all flex items-center justify-between
                      ${
                        isSelected
                          ? "border-[#FF6A00] bg-[#1C1822] shadow-[3px_3px_0px_#000]"
                          : "border-[#2E2838] bg-[#0C0A0F] hover:border-[#3D354A] opacity-75 hover:opacity-100"
                      }
                    `}
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="h-8 w-8 rounded-lg overflow-hidden border border-black shrink-0">
                        <CharacterArtwork id={m.characterId} className="h-full w-full" />
                      </div>
                      <div>
                        <div className="font-display text-lg text-white leading-none">
                          {m.symbol}
                        </div>
                        <span className="font-mono text-[10px] text-[#D1C9BD]">
                          {m.mood}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-mono text-xs font-black text-[#FFD23F] block">
                        {m.multiplier}x
                      </span>
                      <span className="font-mono text-[9px] text-[#6E637B]">
                        PAYOUT
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Character Bio Card */}
          <div className="rounded-xl border-2 border-black bg-[#1C1822] p-4 shadow-brutal space-y-3">
            <div className="flex items-center justify-between border-b border-[#2E2838] pb-2">
              <span className="font-mono text-xs font-bold text-[#FF6A00]">
                {currentCharacter.symbol} CHARACTER FILE
              </span>
              <span className="font-mono text-[10px] text-[#D1C9BD]">
                {currentCharacter.badge}
              </span>
            </div>

            <p className="font-sans text-xs text-[#D1C9BD]">
              {currentCharacter.lore}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-2 text-center font-mono text-[10px]">
              <div className="rounded bg-black/50 p-1.5 border border-[#2E2838]">
                <span className="text-[#6E637B] block">VOLATILITY</span>
                <span className="font-bold text-[#FF6A00]">{currentCharacter.stats.volatility}%</span>
              </div>
              <div className="rounded bg-black/50 p-1.5 border border-[#2E2838]">
                <span className="text-[#6E637B] block">CONVICTION</span>
                <span className="font-bold text-[#00F5D4]">{currentCharacter.stats.conviction}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle/Right Column: Prediction Terminal */}
        <div className="lg:col-span-8 space-y-6">
          {/* Main Execution Arena */}
          <div className="relative rounded-2xl border-2 border-black bg-[#1C1822] p-6 sm:p-8 shadow-brutal-lg">
            {/* Top Market Status Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-[#FF6A00] font-display text-2xl text-black">
                  {currentMarket.symbol.slice(1, 2)}
                </div>
                <div>
                  <h2 className="font-display text-3xl text-[#FDFBF7] leading-none">
                    {currentMarket.symbol} ARENA
                  </h2>
                  <p className="font-mono text-xs text-[#00F5D4] mt-0.5">
                    {currentMarket.description}
                  </p>
                </div>
              </div>

              <div className="rounded-lg border-2 border-black bg-black/60 px-3 py-1.5 text-right font-mono">
                <span className="text-[10px] text-[#6E637B] block">MULTIPLIER</span>
                <span className="text-xl font-black text-[#FFD23F]">{currentMarket.multiplier}x</span>
              </div>
            </div>

            {/* Resolution Countdown Overlay */}
            {isResolving && (
              <div className="my-6 rounded-xl border-2 border-black bg-[#0C0A0F] p-8 text-center shadow-brutal">
                <span className="font-mono text-xs font-bold text-[#FF6A00] uppercase tracking-widest block mb-2">
                  RESOLVING ORDER BOOK WITH ORACLE...
                </span>
                <div className="font-display text-7xl text-[#00F5D4] animate-bounce">
                  {resolveCountdown}
                </div>
                <p className="font-mono text-xs text-[#D1C9BD] mt-2">
                  Evaluating simulated liquidity pulse & candle drift
                </p>
              </div>
            )}

            {/* Last Result Banner */}
            {!isResolving && lastResult && (
              <div
                className={`
                  my-6 rounded-xl border-2 border-black p-4 text-center shadow-brutal transition-all
                  ${lastResult.win ? "bg-[#00F5D4]/20 border-[#00F5D4]" : "bg-[#FF007F]/20 border-[#FF007F]"}
                `}
              >
                <div className="flex items-center justify-center gap-2">
                  {lastResult.win ? (
                    <CheckCircle2 className="h-6 w-6 text-[#00F5D4]" />
                  ) : (
                    <XCircle className="h-6 w-6 text-[#FF007F]" />
                  )}
                  <span className="font-display text-3xl text-white">
                    {lastResult.win ? "PREDICTION CORRECT!" : "PREDICTION FAILED"}
                  </span>
                </div>

                <div className="mt-2 flex items-center justify-center gap-4 font-mono text-xs">
                  <span>
                    YOUR CALL: <strong className="text-white">{lastResult.call}</strong>
                  </span>
                  <span>•</span>
                  <span>
                    OUTCOME: <strong className="text-white">{lastResult.outcome}</strong>
                  </span>
                  <span>•</span>
                  <span className={`font-black ${lastResult.win ? "text-[#00F5D4]" : "text-[#FF007F]"}`}>
                    NET P&L: {lastResult.pnl > 0 ? `+${lastResult.pnl.toLocaleString()}` : lastResult.pnl.toLocaleString()} PTS
                  </span>
                </div>
              </div>
            )}

            {/* Stake Configuration Area */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <label className="font-mono text-xs font-black text-[#D1C9BD] uppercase">
                  CHOOSE WAGER AMOUNT (PLAY CREDITS):
                </label>
                <span className="font-mono text-xs text-[#6E637B]">
                  AVAILABLE: {credits.toLocaleString()} PTS
                </span>
              </div>

              {/* Stake Presets */}
              <div className="grid grid-cols-5 gap-2">
                {stakePresets.map((amt) => (
                  <button
                    key={amt}
                    disabled={isResolving}
                    onClick={() => setStake(amt)}
                    className={`
                      rounded-lg py-2 font-mono text-xs font-bold border-2 transition-all
                      ${
                        stake === amt
                          ? "border-[#FF6A00] bg-[#FF6A00] text-black shadow-[2px_2px_0px_#000]"
                          : "border-[#2E2838] bg-[#0C0A0F] text-[#D1C9BD] hover:border-[#3D354A]"
                      }
                    `}
                  >
                    +{amt.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Stake Input & All-In */}
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="number"
                    min="100"
                    max={credits}
                    value={stake}
                    onChange={(e) => setStake(Math.max(0, parseInt(e.target.value) || 0))}
                    disabled={isResolving}
                    className="w-full rounded-lg border-2 border-black bg-[#0C0A0F] px-4 py-2.5 font-mono text-lg font-black text-white focus:border-[#FF6A00] focus:outline-none"
                    placeholder="Enter custom stake..."
                  />
                  <span className="absolute right-3 top-3 font-mono text-xs text-[#6E637B]">
                    PTS
                  </span>
                </div>

                <TactileButton
                  variant="arcade"
                  size="md"
                  disabled={isResolving || credits <= 0}
                  onClick={() => setStake(credits)}
                >
                  MAX STACK
                </TactileButton>
              </div>

              {/* Potential Return Calculator */}
              <div className="flex items-center justify-between rounded-lg border border-[#2E2838] bg-[#120F17] px-4 py-2 font-mono text-xs">
                <span className="text-[#D1C9BD]">POTENTIAL PAYOUT ON WIN:</span>
                <span className="font-bold text-[#00F5D4]">
                  +{Math.round(stake * (currentMarket.multiplier - 1)).toLocaleString()} PTS ({currentMarket.multiplier}x)
                </span>
              </div>
            </div>

            {/* BIG TACTILE PREDICTION ACTION BUTTONS (UP vs DOWN) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                disabled={isResolving || credits <= 0 || stake <= 0}
                onClick={() => handlePredict("UP")}
                className={`
                  group relative flex flex-col items-center justify-center rounded-2xl border-4 border-black p-6
                  bg-gradient-to-b from-[#00F5D4] to-[#00C4AA] text-black font-black transition-all
                  shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] active:translate-x-[2px] active:translate-y-[2px]
                  disabled:opacity-40 disabled:cursor-not-allowed
                `}
              >
                <div className="flex items-center gap-2 font-display text-4xl sm:text-5xl">
                  <TrendingUp className="h-10 w-10 group-hover:-translate-y-1 transition-transform" />
                  <span>CALL UP</span>
                </div>
                <span className="font-mono text-xs tracking-wider opacity-80 mt-1">
                  BULLISH MOMENTUM // {currentMarket.multiplier}x
                </span>
              </button>

              <button
                disabled={isResolving || credits <= 0 || stake <= 0}
                onClick={() => handlePredict("DOWN")}
                className={`
                  group relative flex flex-col items-center justify-center rounded-2xl border-4 border-black p-6
                  bg-gradient-to-b from-[#FF007F] to-[#D6006B] text-white font-black transition-all
                  shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#000] active:translate-x-[2px] active:translate-y-[2px]
                  disabled:opacity-40 disabled:cursor-not-allowed
                `}
              >
                <div className="flex items-center gap-2 font-display text-4xl sm:text-5xl">
                  <TrendingDown className="h-10 w-10 group-hover:translate-y-1 transition-transform" />
                  <span>CALL DOWN</span>
                </div>
                <span className="font-mono text-xs tracking-wider opacity-80 mt-1">
                  BEARISH REJECTION // {currentMarket.multiplier}x
                </span>
              </button>
            </div>
          </div>

          {/* Prediction History Log Table */}
          <div className="rounded-2xl border-2 border-black bg-[#16131A] p-6 shadow-brutal">
            <div className="flex items-center justify-between border-b border-[#2E2838] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <History className="h-4 w-4 text-[#FF6A00]" />
                <h3 className="font-mono text-xs font-black text-[#FDFBF7] uppercase tracking-wider">
                  SESSION PREDICTION AUDIT LOG
                </h3>
              </div>
              <span className="font-mono text-[10px] text-[#6E637B]">
                {history.length} ROUNDS RECORDED
              </span>
            </div>

            {history.length === 0 ? (
              <div className="py-8 text-center font-mono text-xs text-[#6E637B]">
                No predictions made yet in this session. Lock in a call above to test your instincts!
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead>
                    <tr className="border-b border-[#2E2838] text-[10px] text-[#6E637B]">
                      <th className="pb-2">TIME</th>
                      <th className="pb-2">ASSET</th>
                      <th className="pb-2">CALL</th>
                      <th className="pb-2">STAKE</th>
                      <th className="pb-2">OUTCOME</th>
                      <th className="pb-2 text-right">P&L</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#2E2838]/50">
                    {history.map((record) => {
                      const isWin = record.pnl > 0;
                      return (
                        <tr key={record.id} className="hover:bg-white/[0.02]">
                          <td className="py-2.5 text-[#6E637B]">{record.timestamp}</td>
                          <td className="py-2.5 font-bold text-white">{record.marketSymbol}</td>
                          <td className="py-2.5">
                            <span
                              className={`rounded px-1.5 py-0.5 text-[9px] font-black border border-black ${
                                record.direction === "UP" ? "bg-[#00F5D4] text-black" : "bg-[#FF007F] text-white"
                              }`}
                            >
                              {record.direction}
                            </span>
                          </td>
                          <td className="py-2.5 text-[#D1C9BD]">{record.stake.toLocaleString()} PTS</td>
                          <td className="py-2.5 font-bold text-white">{record.result}</td>
                          <td
                            className={`py-2.5 text-right font-black ${
                              isWin ? "text-[#00F5D4]" : "text-[#FF007F]"
                            }`}
                          >
                            {isWin ? `+${record.pnl.toLocaleString()}` : record.pnl.toLocaleString()} PTS
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
