import React, { useState, useRef } from "react";
import { CharacterProfile } from "../types";
import { CharacterArtwork } from "./CharacterArtwork";
import { Sparkles, Shield, Flame, Activity, Zap } from "lucide-react";

interface CharacterCardProps {
  character: CharacterProfile;
  isSelected?: boolean;
  onSelect?: () => void;
  interactive?: boolean;
}

export function CharacterCard({
  character,
  isSelected = false,
  onSelect,
  interactive = true,
}: CharacterCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rX = ((y - centerY) / centerY) * -12;
    const rY = ((x - centerX) / centerX) * 12;
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const rarityColor = {
    MYTHIC: "bg-[#FFD23F] text-black border-black",
    LEGENDARY: "bg-[#00F5D4] text-black border-black",
    RARE: "bg-[#FF6A00] text-black border-black",
    COMMON: "bg-[#D1C9BD] text-black border-black",
  }[character.rarity];

  return (
    <div
      style={{ perspective: "1000px" }}
      className="inline-block w-full max-w-[340px] cursor-pointer select-none"
      onClick={onSelect}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.03 : 1})`,
          transition: isHovered ? "transform 0.08s ease-out" : "transform 0.4s ease-out",
        }}
        className={`
          relative rounded-2xl p-2.5 transition-all
          ${isSelected ? "ring-4 ring-[#FF6A00]" : ""}
          bg-gradient-to-b from-[#2E2838] via-[#1C1822] to-[#120F17]
          border-2 border-[#3D354A] shadow-[6px_6px_0px_#000000]
          hover:shadow-[10px_10px_0px_#000000]
          hover:border-[#FF6A00]/80
        `}
      >
        {/* Holographic Sheen Overlay */}
        <div
          className={`
            pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300
            ${isHovered ? "opacity-100" : "opacity-0"}
          `}
          style={{
            background: `radial-gradient(circle at ${50 + rotateY * 3}% ${50 - rotateX * 3}%, rgba(255,255,255,0.18) 0%, rgba(255,106,0,0.15) 35%, rgba(0,245,212,0.12) 65%, transparent 80%)`,
          }}
        />

        {/* Card Header Slab */}
        <div className="flex items-center justify-between border-b-2 border-black/60 bg-black/40 px-3 py-2 rounded-t-xl">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-xl tracking-wide text-[#FDFBF7]">
              {character.symbol}
            </span>
            <span className="rounded bg-[#FF6A00]/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-[#FF6A00]">
              MM-S1
            </span>
          </div>

          <div className={`flex items-center gap-1 rounded px-2 py-0.5 font-mono text-[10px] font-black border ${rarityColor}`}>
            <Sparkles className="h-3 w-3" />
            <span>{character.rarity}</span>
          </div>
        </div>

        {/* Character Illustration Frame */}
        <div className="relative mt-2 overflow-hidden rounded-xl border-2 border-black bg-black">
          <CharacterArtwork id={character.id} className="h-44 w-full" />

          {/* Badge Ribbon */}
          <div className="absolute top-2 left-2 rounded-md border border-black bg-black/80 backdrop-blur-sm px-2 py-0.5 font-mono text-[10px] font-bold text-[#FDFBF7]">
            {character.badge}
          </div>
        </div>

        {/* Character Bio & Identity */}
        <div className="mt-2.5 px-1">
          <div className="flex items-baseline justify-between">
            <h3 className="font-heading text-sm font-black text-[#FDFBF7]">
              {character.name}
            </h3>
            <span className="font-mono text-[10px] text-[#D1C9BD]">
              {character.title}
            </span>
          </div>

          <p className="mt-1 font-sans text-xs italic text-[#D1C9BD] line-clamp-2">
            "{character.tagline}"
          </p>

          {/* Personality Tags */}
          <div className="mt-2 flex flex-wrap gap-1">
            {character.personality.map((trait, idx) => (
              <span
                key={idx}
                className="rounded border border-[#3D354A] bg-[#120F17] px-1.5 py-0.5 font-mono text-[9px] text-[#D1C9BD]"
              >
                #{trait}
              </span>
            ))}
          </div>

          {/* Stat Meters Grid */}
          <div className="mt-3 space-y-1.5 rounded-lg border border-[#2E2838] bg-black/40 p-2 font-mono text-[10px]">
            {/* Volatility */}
            <div>
              <div className="flex justify-between text-[#D1C9BD]">
                <span className="flex items-center gap-1">
                  <Activity className="h-3 w-3 text-[#FF6A00]" /> VOLATILITY
                </span>
                <span className="font-bold text-[#FDFBF7]">{character.stats.volatility}%</span>
              </div>
              <div className="mt-0.5 h-1.5 w-full overflow-hidden rounded-full bg-[#1C1822] border border-black">
                <div
                  className="h-full bg-gradient-to-r from-[#FF6A00] to-[#FF007F]"
                  style={{ width: `${character.stats.volatility}%` }}
                />
              </div>
            </div>

            {/* Cope Factor */}
            <div>
              <div className="flex justify-between text-[#D1C9BD]">
                <span className="flex items-center gap-1">
                  <Flame className="h-3 w-3 text-[#FFD23F]" /> COPE FACTOR
                </span>
                <span className="font-bold text-[#FDFBF7]">{character.stats.copeFactor}%</span>
              </div>
              <div className="mt-0.5 h-1.5 w-full overflow-hidden rounded-full bg-[#1C1822] border border-black">
                <div
                  className="h-full bg-gradient-to-r from-[#FFD23F] to-[#FF6A00]"
                  style={{ width: `${character.stats.copeFactor}%` }}
                />
              </div>
            </div>

            {/* Conviction */}
            <div>
              <div className="flex justify-between text-[#D1C9BD]">
                <span className="flex items-center gap-1">
                  <Zap className="h-3 w-3 text-[#00F5D4]" /> CONVICTION
                </span>
                <span className="font-bold text-[#FDFBF7]">{character.stats.conviction}%</span>
              </div>
              <div className="mt-0.5 h-1.5 w-full overflow-hidden rounded-full bg-[#1C1822] border border-black">
                <div
                  className="h-full bg-gradient-to-r from-[#00F5D4] to-[#38FFDF]"
                  style={{ width: `${character.stats.conviction}%` }}
                />
              </div>
            </div>
          </div>

          {/* Slab Serial Footer */}
          <div className="mt-2.5 flex items-center justify-between border-t border-[#2E2838] pt-1.5 font-mono text-[9px] text-[#6E637B]">
            <span>AUTHENTIC SLAB #4492</span>
            <span>MEME MADNESS PROTOCOL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
