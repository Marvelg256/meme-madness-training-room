import React from "react";
import { VisualDirection } from "../types";
import { Sparkles, Layers, Tv, Sticker, Trophy, Crown } from "lucide-react";

interface DirectionSwitcherProps {
  currentDirection: VisualDirection;
  onSelect: (dir: VisualDirection) => void;
}

export const DIRECTIONS_CONFIG: {
  id: VisualDirection;
  name: string;
  badge: string;
  icon: React.ReactNode;
  tagline: string;
  theme: string;
}[] = [
  {
    id: "master",
    name: "Master Synthesis",
    badge: "RECOMMENDED",
    icon: <Crown className="h-3.5 w-3.5 text-[#FFD23F]" />,
    tagline: "TCG Slab + Arcade Mechanical + High Contrast",
    theme: "bg-gradient-to-r from-[#FF6A00] to-[#FFD23F] text-black",
  },
  {
    id: "tcg",
    name: "Trading Card Deck",
    badge: "COLLECTIBLE",
    icon: <Layers className="h-3.5 w-3.5 text-[#00F5D4]" />,
    tagline: "PSA Graded Slabs & Holographic Foils",
    theme: "bg-[#00F5D4] text-black",
  },
  {
    id: "arcade",
    name: "Arcade Cabinet",
    badge: "TACTILE",
    icon: <Tv className="h-3.5 w-3.5 text-[#FF007F]" />,
    tagline: "Scanlines, 16-Bit HUD & Mechanical Joypad",
    theme: "bg-[#FF007F] text-white",
  },
  {
    id: "poster",
    name: "Meme Poster",
    badge: "STREET PRINT",
    icon: <Sparkles className="h-3.5 w-3.5 text-[#FF6A00]" />,
    tagline: "Wheatpaste Screenprint & Halftone Texture",
    theme: "bg-[#FF6A00] text-black",
  },
  {
    id: "sticker",
    name: "Internet Sticker",
    badge: "CHAOS MEME",
    icon: <Sticker className="h-3.5 w-3.5 text-[#FFD23F]" />,
    tagline: "Die-Cut Vinyl, Rotation Offsets & Graffiti",
    theme: "bg-[#FFD23F] text-black",
  },
  {
    id: "fight",
    name: "Fight Night Matchup",
    badge: "ARENA VS",
    icon: <Trophy className="h-3.5 w-3.5 text-[#00F5D4]" />,
    tagline: "Tale-of-the-Tape Boxing Octagon Cards",
    theme: "bg-[#00F5D4] text-black",
  },
];

export function DirectionSwitcher({ currentDirection, onSelect }: DirectionSwitcherProps) {
  return (
    <div className="w-full border-b border-[#2E2638] bg-[#16131A]/90 backdrop-blur-md px-4 py-2.5">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 md:flex-row md:items-center md:justify-between">
        {/* Left Label */}
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#00F5D4] animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#D1C9BD]">
            VISUAL DIRECTION TESTBED:
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-[#6E637B]">
            (Live interactive design exploration)
          </span>
        </div>

        {/* Direction Switch Pills */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {DIRECTIONS_CONFIG.map((d) => {
            const isActive = currentDirection === d.id;
            return (
              <button
                key={d.id}
                onClick={() => onSelect(d.id)}
                className={`
                  group relative flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 font-heading text-xs font-black transition-all
                  border ${
                    isActive
                      ? "border-black bg-[#FDFBF7] text-black shadow-[2px_2px_0px_#FF6A00] scale-105"
                      : "border-[#2E2638] bg-[#1C1822] text-[#D1C9BD] hover:border-[#FF6A00]/50 hover:text-white"
                  }
                `}
              >
                {d.icon}
                <span>{d.name}</span>
                {isActive && (
                  <span className={`ml-1 rounded px-1 py-0.2 text-[8px] font-bold ${d.theme}`}>
                    ACTIVE
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
