import React from "react";
import { TactileButton } from "../components/TactileButton";
import { Sparkles, Palette, Type, Layers, CheckCircle2, Box } from "lucide-react";

export function DesignSystemView() {
  const colorTokens = [
    { name: "Deep Ink", hex: "#0C0A0F", usage: "Base canvas & deep background", bg: "bg-[#0C0A0F]" },
    { name: "Deep Surface", hex: "#16131A", usage: "Cards & container layers", bg: "bg-[#16131A]" },
    { name: "Electric Orange", hex: "#FF6A00", usage: "Primary brand & Jimothy signature", bg: "bg-[#FF6A00]" },
    { name: "Retro Yellow", hex: "#FFD23F", usage: "High scores, Chillhouse & bounties", bg: "bg-[#FFD23F]" },
    { name: "Bullish UP (Cyan)", hex: "#00F5D4", usage: "Positive calls, wins & Neet neon", bg: "bg-[#00F5D4]" },
    { name: "Bearish DOWN (Magenta)", hex: "#FF007F", usage: "Negative calls, rejections & hazards", bg: "bg-[#FF007F]" },
    { name: "Warm Cream", hex: "#FDFBF7", usage: "High-contrast headings & cards", bg: "bg-[#FDFBF7]" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header */}
      <div className="border-b-2 border-black pb-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-black text-[#FFD23F] tracking-widest uppercase">
            // DESIGN SYSTEM & CREATIVE SPEC
          </span>
        </div>
        <h1 className="font-display text-4xl sm:text-6xl text-[#FDFBF7]">
          DESIGN SYSTEM & DIRECTIONS SPEC
        </h1>
        <p className="mt-2 font-sans text-sm text-[#D1C9BD] max-w-2xl">
          Complete architectural tokens, typography pairing, tactile button mechanics, and the strategic breakdown of all 5 visual design directions explored for Meme Madness.
        </p>
      </div>

      {/* 1. COLOR TOKENS */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-[#FF6A00]">
          <Palette className="h-5 w-5" />
          <h2 className="font-display text-2xl text-white">1. COLOR PALETTE TOKENS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {colorTokens.map((token) => (
            <div
              key={token.hex}
              className="rounded-xl border-2 border-black bg-[#1C1822] p-4 shadow-brutal space-y-2"
            >
              <div className={`h-16 w-full rounded-lg border-2 border-black ${token.bg} shadow-inner`} />
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs font-black text-white">{token.name}</span>
                  <span className="font-mono text-[10px] text-[#FF6A00] font-bold">{token.hex}</span>
                </div>
                <p className="font-sans text-[11px] text-[#6E637B] mt-1">{token.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. TYPOGRAPHY PAIRINGS */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-[#00F5D4]">
          <Type className="h-5 w-5" />
          <h2 className="font-display text-2xl text-white">2. TYPOGRAPHIC HIERARCHY</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border-2 border-black bg-[#1C1822] p-6 shadow-brutal space-y-4">
            <span className="font-mono text-xs text-[#6E637B] block">DISPLAY TYPOGRAPHY</span>
            <div className="font-display text-4xl sm:text-5xl text-white">
              BEBAS NEUE 900 // ARCADE HEADLINES
            </div>
            <p className="font-sans text-xs text-[#D1C9BD]">
              Used for high-impact module titles, brand slogans, and scoreboard callouts.
            </p>
          </div>

          <div className="rounded-xl border-2 border-black bg-[#1C1822] p-6 shadow-brutal space-y-4">
            <span className="font-mono text-xs text-[#6E637B] block">MONOSPACE & DATA ENGINE</span>
            <div className="font-mono text-xl sm:text-2xl font-black text-[#00F5D4]">
              JETBRAINS MONO 800 // DATA HUD
            </div>
            <p className="font-sans text-xs text-[#D1C9BD]">
              Used for multipliers, stack counters, audit logs, countdown timers, and serial slab numbers.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TACTILE BUTTONS TESTBED */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-[#FFD23F]">
          <Box className="h-5 w-5" />
          <h2 className="font-display text-2xl text-white">3. TACTILE BUTTON MECHANICS</h2>
        </div>

        <div className="rounded-xl border-2 border-black bg-[#1C1822] p-6 shadow-brutal space-y-4">
          <p className="font-sans text-xs text-[#D1C9BD]">
            Every interactive control features a physical 3D keyline offset that depresses downward on active click state:
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <TactileButton variant="primary" size="md">PRIMARY BRAND</TactileButton>
            <TactileButton variant="secondary" size="md">SECONDARY SURFACE</TactileButton>
            <TactileButton variant="up" size="md">BULLISH UP CALL</TactileButton>
            <TactileButton variant="down" size="md">BEARISH DOWN CALL</TactileButton>
            <TactileButton variant="arcade" size="md">ARCADE GOLD</TactileButton>
            <TactileButton variant="outline" size="md">OUTLINE SLAB</TactileButton>
          </div>
        </div>
      </section>

      {/* 4. VISUAL DIRECTIONS MATRIX */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-[#FF6A00]">
          <Layers className="h-5 w-5" />
          <h2 className="font-display text-2xl text-white">4. EXPLORED DESIGN DIRECTIONS BREAKDOWN</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border-2 border-[#FFD23F] bg-[#16131A] p-5 shadow-brutal space-y-2">
            <span className="rounded bg-[#FFD23F] text-black px-2 py-0.5 font-mono text-[9px] font-black">
              DIRECTION 01 // SYNTHESIS (WINNER)
            </span>
            <h3 className="font-display text-2xl text-white">COLLECTIBLE TCG + ARCADE</h3>
            <p className="font-sans text-xs text-[#D1C9BD]">
              Combines holographic PSA slab cards for characters with chunky mechanical arcade buttons and 3D brutalist offsets.
            </p>
          </div>

          <div className="rounded-xl border-2 border-[#FF6A00] bg-[#16131A] p-5 shadow-brutal space-y-2">
            <span className="rounded bg-[#FF6A00] text-black px-2 py-0.5 font-mono text-[9px] font-black">
              DIRECTION 02
            </span>
            <h3 className="font-display text-2xl text-white">MEME SCREENPRINT POSTER</h3>
            <p className="font-sans text-xs text-[#D1C9BD]">
              Heavy halftone dot patterns, high-contrast black borders, and wheatpaste street flyer aesthetics.
            </p>
          </div>

          <div className="rounded-xl border-2 border-[#00F5D4] bg-[#16131A] p-5 shadow-brutal space-y-2">
            <span className="rounded bg-[#00F5D4] text-black px-2 py-0.5 font-mono text-[9px] font-black">
              DIRECTION 03
            </span>
            <h3 className="font-display text-2xl text-white">TRADING CARD DECK</h3>
            <p className="font-sans text-xs text-[#D1C9BD]">
              Foil metallic sheens, authentic serial numbers, rarity stamps, and tilt physics on hover.
            </p>
          </div>

          <div className="rounded-xl border-2 border-[#FF007F] bg-[#16131A] p-5 shadow-brutal space-y-2">
            <span className="rounded bg-[#FF007F] text-white px-2 py-0.5 font-mono text-[9px] font-black">
              DIRECTION 04
            </span>
            <h3 className="font-display text-2xl text-white">ARCADE CABINET</h3>
            <p className="font-sans text-xs text-[#D1C9BD]">
              Subtle CRT scanline overlays, high-score HUD elements, and 16-bit sound effect feedback triggers.
            </p>
          </div>

          <div className="rounded-xl border-2 border-[#FFD23F] bg-[#16131A] p-5 shadow-brutal space-y-2">
            <span className="rounded bg-[#FFD23F] text-black px-2 py-0.5 font-mono text-[9px] font-black">
              DIRECTION 05
            </span>
            <h3 className="font-display text-2xl text-white">INTERNET STICKER</h3>
            <p className="font-sans text-xs text-[#D1C9BD]">
              Die-cut vinyl sticker badges with slight rotation offsets, cutting mat grid patterns, and playful sticker shadows.
            </p>
          </div>

          <div className="rounded-xl border-2 border-[#00F5D4] bg-[#16131A] p-5 shadow-brutal space-y-2">
            <span className="rounded bg-[#00F5D4] text-black px-2 py-0.5 font-mono text-[9px] font-black">
              DIRECTION 06
            </span>
            <h3 className="font-display text-2xl text-white">FIGHT NIGHT OCTAGON</h3>
            <p className="font-sans text-xs text-[#D1C9BD]">
              Boxing poster tale-of-the-tape comparisons, underdog bounty multipliers, and live community tug-of-war.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
