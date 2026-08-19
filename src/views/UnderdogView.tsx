import React, { useState } from "react";
import { CharacterArtwork } from "../components/CharacterArtwork";
import { TactileButton } from "../components/TactileButton";
import { Swords, Trophy, Zap, Flame, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

export function UnderdogView() {
  const [underdogVotes, setUnderdogVotes] = useState(62);
  const [isSimulating, setIsSimulating] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);

  const handleSimulate = () => {
    setIsSimulating(true);
    setWinner(null);

    setTimeout(() => {
      // 60% chance for underdog given high momentum
      const result = Math.random() > 0.4 ? "$NEET" : "$CHILLHOUSE";
      setWinner(result);
      setIsSimulating(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-black pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black text-[#FF007F] tracking-widest uppercase">
              // MODULE 02 // HEAD-TO-HEAD ARENA
            </span>
            <span className="rounded bg-[#FFD23F] px-1.5 py-0.2 font-mono text-[9px] font-black text-black">
              ARENA PREVIEW
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-[#FDFBF7]">
            UNDERDOG BATTLE OCTAGON
          </h1>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-[#D1C9BD]">
          <span className="rounded bg-black/60 px-3 py-1.5 border border-[#2E2838]">
            BOUNTY REWARD: <strong className="text-[#FFD23F]">3.50x MULTIPLIER</strong>
          </span>
        </div>
      </div>

      {/* Main Tale-of-the-Tape Arena Card */}
      <div className="rounded-2xl border-2 border-black bg-[#16131A] p-6 sm:p-8 shadow-brutal-lg relative overflow-hidden">
        <div className="text-center mb-6">
          <span className="rounded-full border-2 border-black bg-[#FF007F] px-4 py-1 font-mono text-xs font-black text-white shadow-[2px_2px_0px_#000]">
            ROUND 01 MATCHUP // BRACKET QUALIFIER
          </span>
          <p className="mt-2 font-mono text-xs text-[#D1C9BD]">
            Underdogs start with uphill volume handicaps but award outsized multiplier bounties if they topple an All-Star.
          </p>
        </div>

        {/* VS Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
          {/* Left Fighter: Underdog ($NEET) */}
          <div className="md:col-span-5 rounded-2xl border-2 border-[#00F5D4] bg-[#1C1822] p-5 shadow-[4px_4px_0px_#00F5D4]/40 relative">
            <div className="flex items-center justify-between border-b border-[#2E2838] pb-2 mb-3">
              <span className="rounded bg-[#00F5D4] px-2 py-0.5 font-mono text-[10px] font-black text-black">
                UNDERDOG SEED #08
              </span>
              <span className="font-mono text-xs text-[#00F5D4] font-bold">2.40x BOUNTY</span>
            </div>

            <CharacterArtwork id="neet" className="h-44 w-full" />

            <div className="mt-3">
              <h3 className="font-display text-2xl text-white leading-none">$NEET</h3>
              <p className="font-mono text-xs text-[#D1C9BD]">Neet 'Terminal' Chen</p>
            </div>

            {/* Stats */}
            <div className="mt-3 space-y-1.5 font-mono text-[11px] bg-black/40 p-2.5 rounded-lg border border-[#2E2838]">
              <div className="flex justify-between">
                <span className="text-[#6E637B]">VOLATILITY:</span>
                <span className="font-bold text-[#00F5D4]">98% (EXTREME)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6E637B]">COMMUNITY MOMENTUM:</span>
                <span className="font-bold text-[#00F5D4]">{underdogVotes}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6E637B]">UPHILL TARGET:</span>
                <span className="font-bold text-[#FFD23F]">+150K VOL</span>
              </div>
            </div>
          </div>

          {/* Center VS Badge */}
          <div className="md:col-span-1 flex flex-col items-center justify-center my-4 md:my-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-black bg-[#FF6A00] font-display text-2xl text-black shadow-brutal animate-pulse">
              VS
            </div>
          </div>

          {/* Right Fighter: All-Star ($CHILLHOUSE) */}
          <div className="md:col-span-5 rounded-2xl border-2 border-[#FFD23F] bg-[#1C1822] p-5 shadow-[4px_4px_0px_#FFD23F]/40 relative">
            <div className="flex items-center justify-between border-b border-[#2E2838] pb-2 mb-3">
              <span className="rounded bg-[#FFD23F] px-2 py-0.5 font-mono text-[10px] font-black text-black">
                ALL-STAR SEED #01
              </span>
              <span className="font-mono text-xs text-[#FFD23F] font-bold">1.45x BOUNTY</span>
            </div>

            <CharacterArtwork id="chillhouse" className="h-44 w-full" />

            <div className="mt-3">
              <h3 className="font-display text-2xl text-white leading-none">$CHILLHOUSE</h3>
              <p className="font-mono text-xs text-[#D1C9BD]">Lord Chillhouse III</p>
            </div>

            {/* Stats */}
            <div className="mt-3 space-y-1.5 font-mono text-[11px] bg-black/40 p-2.5 rounded-lg border border-[#2E2838]">
              <div className="flex justify-between">
                <span className="text-[#6E637B]">VOLATILITY:</span>
                <span className="font-bold text-[#FFD23F]">18% (STEADY)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6E637B]">COMMUNITY MOMENTUM:</span>
                <span className="font-bold text-[#FFD23F]">{100 - underdogVotes}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6E637B]">LIQUIDITY MOAT:</span>
                <span className="font-bold text-[#00F5D4]">WHALE LEVEL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tug-of-War Momentum Meter */}
        <div className="mt-8 rounded-xl border-2 border-black bg-[#0C0A0F] p-4 shadow-brutal">
          <div className="flex justify-between font-mono text-xs font-bold mb-2">
            <span className="text-[#00F5D4]">$NEET MOMENTUM: {underdogVotes}%</span>
            <span className="text-[#FFD23F]">$CHILLHOUSE MOAT: {100 - underdogVotes}%</span>
          </div>

          <div className="h-4 w-full overflow-hidden rounded-full bg-black border-2 border-black flex">
            <div
              className="h-full bg-[#00F5D4] transition-all duration-300"
              style={{ width: `${underdogVotes}%` }}
            />
            <div
              className="h-full bg-[#FFD23F] transition-all duration-300"
              style={{ width: `${100 - underdogVotes}%` }}
            />
          </div>

          <div className="mt-4 flex justify-center gap-3">
            <TactileButton
              variant="outline"
              size="sm"
              onClick={() => setUnderdogVotes((v) => Math.min(95, v + 5))}
            >
              + BOOST $NEET VOLUME (+5%)
            </TactileButton>

            <TactileButton
              variant="outline"
              size="sm"
              onClick={() => setUnderdogVotes((v) => Math.max(5, v - 5))}
            >
              + BOOST $CHILLHOUSE DEFENSE (+5%)
            </TactileButton>
          </div>
        </div>

        {/* Simulation Trigger & Result */}
        <div className="mt-8 text-center">
          {winner && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-xl border-2 border-black bg-[#FFD23F] px-6 py-3 font-display text-2xl text-black shadow-brutal animate-bounce">
              <Trophy className="h-6 w-6" />
              <span>ROUND WINNER: {winner} CLAIMS THE OCTAGON!</span>
            </div>
          )}

          <div>
            <TactileButton
              variant="primary"
              size="lg"
              disabled={isSimulating}
              onClick={handleSimulate}
              icon={<Swords className="h-5 w-5" />}
            >
              {isSimulating ? "SIMULATING MATCH CLASH..." : "SIMULATE ROUND FIGHT"}
            </TactileButton>
          </div>
        </div>
      </div>
    </div>
  );
}
