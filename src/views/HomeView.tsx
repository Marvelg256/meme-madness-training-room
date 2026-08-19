import React, { useState } from "react";
import { AppPage, VisualDirection, CharacterProfile } from "../types";
import { CHARACTERS } from "../data/characters";
import { TRAINING_MODULES } from "../data/markets";
import { CharacterCard } from "../components/CharacterCard";
import { TactileButton } from "../components/TactileButton";
import {
  Sparkles,
  ArrowRight,
  Flame,
  Zap,
  TrendingUp,
  Activity,
  Layers,
  Award,
  Gamepad2,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

interface HomeViewProps {
  onNavigate: (page: AppPage) => void;
  direction: VisualDirection;
}

export function HomeView({ onNavigate, direction }: HomeViewProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterProfile | null>(CHARACTERS[0]);

  // Apply distinct visual flavors based on direction
  const isPoster = direction === "poster";
  const isTCG = direction === "tcg";
  const isArcade = direction === "arcade";
  const isSticker = direction === "sticker";
  const isFight = direction === "fight";

  return (
    <div className="relative pb-24">
      {/* Background Decor depending on direction */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {isArcade && <div className="absolute inset-0 scanline-overlay opacity-30" />}
        {isPoster && <div className="absolute inset-0 bg-halftone opacity-40" />}
        {isTCG && <div className="absolute inset-0 bg-retro-grid opacity-30" />}
        {isSticker && <div className="absolute inset-0 bg-cutting-mat opacity-40" />}

        {/* Ambient Glows */}
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#FF6A00]/10 blur-[120px]" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-[#00F5D4]/10 blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative px-4 pt-10 pb-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Top Eyebrow / Edition Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-black bg-[#16131A] px-4 py-2 rounded-t-2xl shadow-brutal-sm">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6A00] animate-pulse" />
            <span className="font-mono text-xs font-black text-[#FDFBF7] uppercase tracking-wider">
              OFFICIAL TRAINING DECK // SEASON 01
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#D1C9BD]">
            <span className="rounded bg-black/60 px-2 py-0.5 border border-[#2E2638]">
              NO REAL FUNDS RISKED
            </span>
            <span className="rounded bg-[#00F5D4]/20 text-[#00F5D4] px-2 py-0.5 font-bold border border-[#00F5D4]/40">
              100% ARCADE SIMULATION
            </span>
          </div>
        </div>

        {/* Hero Main Card Slab */}
        <div
          className={`
            relative overflow-hidden rounded-b-2xl border-2 border-black bg-[#1C1822] p-6 sm:p-10 shadow-[8px_8px_0px_#000000]
            ${isPoster ? "bg-halftone border-4" : ""}
            ${isArcade ? "border-[#FF6A00]" : ""}
          `}
        >
          {/* Top Right Floating Sticker for Sticker mode */}
          {isSticker && (
            <div className="absolute -top-3 -right-3 rotate-12 z-20 rounded-xl border-2 border-black bg-[#FFD23F] p-3 text-black font-black text-xs sticker-shadow">
              🔥 100% MEME NATIVE
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-[#FF6A00] px-3 py-1 font-mono text-xs font-black text-black shadow-[2px_2px_0px_#000]">
                <Flame className="h-3.5 w-3.5 fill-black" />
                <span>UNOFFICIAL COMMUNITY-BUILT ARCADE</span>
              </div>

              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-none text-[#FDFBF7] tracking-tight">
                TRAIN BEFORE <br />
                <span className="text-[#FF6A00] drop-shadow-[4px_4px_0px_#000000]">
                  YOU BLOW
                </span>{" "}
                YOUR STACK.
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#D1C9BD] leading-relaxed max-w-xl">
                Master the instincts, volatility swings, and risk limits of Cade Market's
                prediction arena. Lock in UP or DOWN calls with 20,000 play credits across the
                top meme contenders.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <TactileButton
                  variant="primary"
                  size="xl"
                  icon={<Gamepad2 className="h-5 w-5" />}
                  onClick={() => onNavigate("challenge")}
                >
                  START 20K CHALLENGE
                </TactileButton>

                <TactileButton
                  variant="secondary"
                  size="xl"
                  icon={<Layers className="h-5 w-5 text-[#00F5D4]" />}
                  onClick={() => onNavigate("underdog")}
                >
                  VIEW UNDERDOG ARENA
                </TactileButton>
              </div>

              {/* Live Mini Stats Ribbon */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#2E2838]">
                <div className="rounded-lg border border-[#2E2838] bg-[#120F17] p-2.5">
                  <span className="font-mono text-[10px] text-[#6E637B] block">STARTING STACK</span>
                  <span className="font-display text-xl text-[#00F5D4]">20,000 PTS</span>
                </div>
                <div className="rounded-lg border border-[#2E2838] bg-[#120F17] p-2.5">
                  <span className="font-mono text-[10px] text-[#6E637B] block">MAX PAYOUT MULT</span>
                  <span className="font-display text-xl text-[#FFD23F]">1.88x</span>
                </div>
                <div className="rounded-lg border border-[#2E2838] bg-[#120F17] p-2.5">
                  <span className="font-mono text-[10px] text-[#6E637B] block">SETTLEMENT SPEED</span>
                  <span className="font-display text-xl text-[#FF6A00]">INSTANT</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card Slab */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[320px]">
                {/* Floating "Foil" Badge */}
                <div className="absolute -top-3 -left-3 z-20 rotate-[-8deg] rounded-lg border-2 border-black bg-[#00F5D4] px-3 py-1 font-mono text-xs font-black text-black shadow-[3px_3px_0px_#000]">
                  ✦ 1ST EDITION FOIL
                </div>

                <CharacterCard
                  character={CHARACTERS[0]}
                  isSelected={false}
                  interactive={true}
                />
              </div>

              <span className="mt-3 font-mono text-[11px] text-[#6E637B]">
                Hover to tilt holographic slab
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING MODULES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-black pb-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-[#FF6A00] tracking-widest uppercase">
                // SELECT MODULE
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-[#FDFBF7]">
              CHOOSE YOUR DRILL
            </h2>
          </div>
          <p className="font-sans text-sm text-[#D1C9BD] max-w-md">
            Three distinct training environments designed to sharpen your prediction instincts before entering the real arena.
          </p>
        </div>

        {/* 3 Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRAINING_MODULES.map((module) => {
            const themeBorder = {
              orange: "hover:border-[#FF6A00] border-[#2E2838]",
              magenta: "hover:border-[#FF007F] border-[#2E2838]",
              cyan: "hover:border-[#00F5D4] border-[#2E2838]",
              yellow: "hover:border-[#FFD23F] border-[#2E2838]",
            }[module.theme];

            const themeBadge = {
              orange: "bg-[#FF6A00] text-black",
              magenta: "bg-[#FF007F] text-white",
              cyan: "bg-[#00F5D4] text-black",
              yellow: "bg-[#FFD23F] text-black",
            }[module.theme];

            return (
              <div
                key={module.id}
                onClick={() => onNavigate(module.page)}
                className={`
                  group relative flex flex-col justify-between rounded-2xl border-2 bg-[#1C1822] p-6 shadow-brutal
                  transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal-lg cursor-pointer
                  ${themeBorder}
                `}
              >
                {/* Top Module Header */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#2E2838] pb-3">
                    <span className="font-mono text-xs font-black text-[#6E637B]">
                      MODULE {module.number}
                    </span>
                    <span className={`rounded px-2 py-0.5 font-mono text-[9px] font-black border border-black ${themeBadge}`}>
                      {module.label}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-3xl">{module.icon}</span>
                    <div>
                      <h3 className="font-display text-2xl text-[#FDFBF7] group-hover:text-[#FF6A00] transition-colors">
                        {module.title}
                      </h3>
                      <span className="font-mono text-xs text-[#D1C9BD]">
                        {module.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 font-sans text-xs text-[#D1C9BD] leading-relaxed">
                    {module.description}
                  </p>
                </div>

                {/* Footer Launch Button */}
                <div className="mt-6 pt-4 border-t border-[#2E2838] flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#6E637B]">
                    {module.edition}
                  </span>
                  
                  <div className="flex items-center gap-1 font-heading text-xs font-black text-[#FF6A00] group-hover:translate-x-1 transition-transform">
                    <span>ENTER DRILL</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTENDER ROSTER / TRADING CARDS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="rounded-2xl border-2 border-black bg-[#16131A] p-6 sm:p-8 shadow-[6px_6px_0px_#000]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-black pb-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#00F5D4] tracking-widest uppercase">
                  // COLLECTIBLE ROSTER
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-[#FDFBF7]">
                CONTENDER CODEX & STATS
              </h2>
            </div>
            <p className="font-sans text-xs text-[#D1C9BD] max-w-sm">
              Each character has distinct volatility signatures, conviction levels, and coping thresholds. Learn their mechanics before wagering credits.
            </p>
          </div>

          {/* 3 Character Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {CHARACTERS.map((char) => (
              <div key={char.id} className="w-full flex flex-col items-center">
                <CharacterCard
                  character={char}
                  isSelected={selectedCharacter?.id === char.id}
                  onSelect={() => setSelectedCharacter(char)}
                />
                
                <div className="mt-3 w-full max-w-[340px]">
                  <TactileButton
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => {
                      setSelectedCharacter(char);
                      onNavigate("challenge");
                    }}
                  >
                    TRADE {char.symbol} IN 20K CHALLENGE
                  </TactileButton>
                </div>
              </div>
            ))}
          </div>

          {/* Character Lore Detail Expanded Bar */}
          {selectedCharacter && (
            <div className="mt-8 rounded-xl border-2 border-black bg-[#0C0A0F] p-4 sm:p-6 shadow-[4px_4px_0px_#000]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-[#2E2838] pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-display text-2xl text-[#FF6A00]">
                    {selectedCharacter.symbol}
                  </span>
                  <span className="font-heading text-sm font-bold text-[#FDFBF7]">
                    — {selectedCharacter.name}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#00F5D4]">
                  ARCHETYPE: {selectedCharacter.title}
                </span>
              </div>

              <p className="mt-3 font-sans text-sm text-[#D1C9BD] leading-relaxed">
                <strong className="text-white font-heading">Lore Entry: </strong>
                {selectedCharacter.lore}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* WHY THE TRAINING ROOM WORKS / DESIGN PRINCIPLES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border-2 border-black bg-[#1C1822] p-5 shadow-brutal">
            <div className="flex items-center gap-2 text-[#FF6A00]">
              <Activity className="h-5 w-5" />
              <h3 className="font-display text-xl">TACTILE PREDICTION</h3>
            </div>
            <p className="mt-2 font-sans text-xs text-[#D1C9BD]">
              Physical button feel, snappy animations, and immediate feedback loop simulate the intensity of live trading with zero lag.
            </p>
          </div>

          <div className="rounded-xl border-2 border-black bg-[#1C1822] p-5 shadow-brutal">
            <div className="flex items-center gap-2 text-[#00F5D4]">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="font-display text-xl">MEME-NATIVE IDENTITY</h3>
            </div>
            <p className="mt-2 font-sans text-xs text-[#D1C9BD]">
              No generic financial charts or boring corporate widgets. Designed with the energy of collectible foil cards and arcade scoreboards.
            </p>
          </div>

          <div className="rounded-xl border-2 border-black bg-[#1C1822] p-5 shadow-brutal">
            <div className="flex items-center gap-2 text-[#FFD23F]">
              <Award className="h-5 w-5" />
              <h3 className="font-display text-xl">ZERO FINANCIAL RISK</h3>
            </div>
            <p className="mt-2 font-sans text-xs text-[#D1C9BD]">
              Start with 20,000 play credits, test wild theories, track winning streaks, and hit instant reset whenever you want.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
