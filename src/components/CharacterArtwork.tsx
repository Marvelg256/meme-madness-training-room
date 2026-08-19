import React from "react";

interface CharacterArtworkProps {
  id: "jimothy" | "neet" | "chillhouse";
  size?: "sm" | "md" | "lg" | "banner";
  className?: string;
}

export function CharacterArtwork({ id, size = "md", className = "" }: CharacterArtworkProps) {
  if (id === "jimothy") {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#FF6A00]/20 via-[#1C1822] to-[#0C0A0F] border border-[#FF6A00]/40 ${className}`}>
        {/* Halftone BG Accent */}
        <div className="absolute inset-0 bg-halftone-orange opacity-40" />
        
        {/* Stylized SVG Character Representation */}
        <svg viewBox="0 0 200 200" className="w-full h-full p-3 drop-shadow-[0_8px_16px_rgba(255,106,0,0.3)]">
          {/* Background Speed Lines */}
          <g stroke="#FF6A00" strokeWidth="2" strokeDasharray="6,6" opacity="0.3">
            <line x1="20" y1="20" x2="80" y2="80" />
            <line x1="180" y1="20" x2="120" y2="80" />
            <line x1="100" y1="10" x2="100" y2="60" />
          </g>

          {/* Glowing Aura Ring */}
          <circle cx="100" cy="100" r="75" fill="none" stroke="#FF6A00" strokeWidth="3" opacity="0.4" />
          <circle cx="100" cy="100" r="70" fill="#FF6A00" fillOpacity="0.08" />

          {/* Up Arrow Weapon on Shoulder */}
          <g transform="translate(130, 40) rotate(25)">
            <path d="M 0 40 L 0 0 L -15 0 L 10 -30 L 35 0 L 20 0 L 20 40 Z" fill="#00F5D4" stroke="#000" strokeWidth="3" />
            <path d="M 5 35 L 5 5 L -5 5 L 10 -20 L 25 5 L 15 5 L 15 35 Z" fill="#FFFFFF" fillOpacity="0.4" />
          </g>

          {/* Jimothy Character Body & Face */}
          {/* Orange Jacket */}
          <path d="M 45 190 C 50 135, 70 120, 100 120 C 130 120, 150 135, 155 190 Z" fill="#FF6A00" stroke="#000" strokeWidth="4" />
          {/* Jacket Collar / Zipper */}
          <path d="M 100 120 L 100 190" stroke="#000" strokeWidth="4" strokeDasharray="4,2" />
          <path d="M 75 125 L 100 155 L 125 125" fill="#1C1822" stroke="#000" strokeWidth="3" />

          {/* Neck */}
          <rect x="90" y="105" width="20" height="20" fill="#F4B28C" stroke="#000" strokeWidth="3" />

          {/* Face */}
          <circle cx="100" cy="85" r="32" fill="#F8C7A8" stroke="#000" strokeWidth="4" />

          {/* Messy Dark Hair */}
          <path d="M 68 80 C 65 50, 85 40, 105 42 C 125 40, 140 55, 135 80 C 130 70, 120 72, 115 65 C 105 60, 95 65, 88 72 C 78 70, 72 75, 68 80 Z" fill="#201A24" stroke="#000" strokeWidth="3" />

          {/* Confident Eyes & Eyebrows */}
          <path d="M 82 76 L 94 79" stroke="#000" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 118 76 L 106 79" stroke="#000" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="88" cy="84" r="3" fill="#000" />
          <circle cx="112" cy="84" r="3" fill="#000" />

          {/* Smirking Confident Grin */}
          <path d="M 88 98 Q 100 110 114 96" fill="none" stroke="#000" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 114 96 L 118 92" stroke="#000" strokeWidth="3" strokeLinecap="round" />

          {/* Orange Tint Aviator Glasses (Folded or Worn) */}
          <rect x="76" y="79" width="20" height="12" rx="3" fill="#FF6A00" fillOpacity="0.4" stroke="#000" strokeWidth="2" />
          <rect x="104" y="79" width="20" height="12" rx="3" fill="#FF6A00" fillOpacity="0.4" stroke="#000" strokeWidth="2" />
          <line x1="96" y1="83" x2="104" y2="83" stroke="#000" strokeWidth="2" />
        </svg>

        {/* Floating Tag */}
        <div className="absolute bottom-2 right-2 rounded border border-black bg-[#FF6A00] px-2 py-0.5 font-mono text-[9px] font-black text-black shadow-[2px_2px_0px_#000]">
          BULL RUNNER
        </div>
      </div>
    );
  }

  if (id === "neet") {
    return (
      <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#00F5D4]/20 via-[#1C1822] to-[#0C0A0F] border border-[#00F5D4]/40 ${className}`}>
        {/* Halftone Accent */}
        <div className="absolute inset-0 bg-cutting-mat opacity-50" />

        <svg viewBox="0 0 200 200" className="w-full h-full p-3 drop-shadow-[0_8px_16px_rgba(0,245,212,0.3)]">
          {/* Glitch Grid Matrix Lines */}
          <g stroke="#00F5D4" strokeWidth="1" opacity="0.3">
            <line x1="0" y1="50" x2="200" y2="50" strokeDasharray="4,8" />
            <line x1="0" y1="100" x2="200" y2="100" strokeDasharray="2,6" />
            <line x1="0" y1="150" x2="200" y2="150" strokeDasharray="5,5" />
          </g>

          {/* Massive Gaming Headset Outer Band */}
          <path d="M 60 85 C 60 35, 140 35, 140 85" fill="none" stroke="#25202D" strokeWidth="10" strokeLinecap="round" />
          <path d="M 60 85 C 60 35, 140 35, 140 85" fill="none" stroke="#00F5D4" strokeWidth="4" strokeLinecap="round" />

          {/* Hoodie Body */}
          <path d="M 45 190 C 48 135, 65 115, 100 115 C 135 115, 152 135, 155 190 Z" fill="#2E2838" stroke="#000" strokeWidth="4" />
          {/* Hoodie Cords */}
          <path d="M 90 125 L 88 160" stroke="#00F5D4" strokeWidth="3" strokeLinecap="round" />
          <path d="M 110 125 L 112 160" stroke="#00F5D4" strokeWidth="3" strokeLinecap="round" />

          {/* Neck & Face */}
          <rect x="90" y="105" width="20" height="18" fill="#E8B89C" stroke="#000" strokeWidth="3" />
          <circle cx="100" cy="85" r="30" fill="#E8B89C" stroke="#000" strokeWidth="4" />

          {/* Messy Hair Bangs covering forehead */}
          <path d="M 70 78 C 70 50, 85 45, 100 45 C 120 45, 130 55, 130 78 C 125 68, 115 65, 110 72 C 105 62, 95 62, 90 72 C 85 65, 75 68, 70 78 Z" fill="#15121A" stroke="#000" strokeWidth="3" />

          {/* Headset Ear Cups */}
          <rect x="58" y="70" width="12" height="30" rx="5" fill="#00F5D4" stroke="#000" strokeWidth="3" />
          <rect x="130" y="70" width="12" height="30" rx="5" fill="#00F5D4" stroke="#000" strokeWidth="3" />

          {/* Dark Eye Circles / Sleep-deprived Rings */}
          <path d="M 80 88 Q 88 95 96 88" fill="none" stroke="#7A4E6E" strokeWidth="3" />
          <path d="M 104 88 Q 112 95 120 88" fill="none" stroke="#7A4E6E" strokeWidth="3" />

          {/* Manic Wide Eyes with green glow reflection */}
          <circle cx="88" cy="82" r="5" fill="#000" />
          <circle cx="88" cy="81" r="2" fill="#00F5D4" />
          <circle cx="112" cy="82" r="5" fill="#000" />
          <circle cx="112" cy="81" r="2" fill="#00F5D4" />

          {/* Unhinged Smile / Caffeine Jitter */}
          <path d="M 88 98 Q 100 108 112 98" fill="#FFF" stroke="#000" strokeWidth="3" />
          <line x1="94" y1="100" x2="94" y2="104" stroke="#000" strokeWidth="1.5" />
          <line x1="100" y1="100" x2="100" y2="105" stroke="#000" strokeWidth="1.5" />
          <line x1="106" y1="100" x2="106" y2="104" stroke="#000" strokeWidth="1.5" />

          {/* Phone held up with green matrix candles */}
          <g transform="translate(130, 110) rotate(-15)">
            <rect x="0" y="0" width="30" height="50" rx="4" fill="#000" stroke="#00F5D4" strokeWidth="2" />
            <line x1="8" y1="15" x2="8" y2="35" stroke="#00F5D4" strokeWidth="2" />
            <line x1="15" y1="10" x2="15" y2="40" stroke="#00F5D4" strokeWidth="2" />
            <line x1="22" y1="20" x2="22" y2="30" stroke="#FF007F" strokeWidth="2" />
          </g>
        </svg>

        <div className="absolute bottom-2 right-2 rounded border border-black bg-[#00F5D4] px-2 py-0.5 font-mono text-[9px] font-black text-black shadow-[2px_2px_0px_#000]">
          CHAOS ENGINE
        </div>
      </div>
    );
  }

  // Chillhouse
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-[#FFD23F]/20 via-[#1C1822] to-[#0C0A0F] border border-[#FFD23F]/40 ${className}`}>
      <div className="absolute inset-0 bg-halftone opacity-30" />

      <svg viewBox="0 0 200 200" className="w-full h-full p-3 drop-shadow-[0_8px_16px_rgba(255,210,63,0.3)]">
        {/* Palm Tree Leaf Silhouette behind */}
        <path d="M 20 50 Q 70 30 100 60 Q 50 70 20 50 Z" fill="#FFD23F" fillOpacity="0.2" />
        <path d="M 180 50 Q 130 30 100 60 Q 150 70 180 50 Z" fill="#FFD23F" fillOpacity="0.2" />

        {/* Velour Tracksuit */}
        <path d="M 45 190 C 50 140, 70 125, 100 125 C 130 125, 150 140, 155 190 Z" fill="#FFD23F" stroke="#000" strokeWidth="4" />
        {/* Tracksuit White Stripes on Shoulders */}
        <path d="M 55 180 C 60 148, 72 135, 85 130" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        <path d="M 145 180 C 140 148, 128 135, 115 130" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />

        {/* Neck with Thick Gold Chain */}
        <rect x="90" y="110" width="20" height="18" fill="#F2C19D" stroke="#000" strokeWidth="3" />
        <path d="M 85 125 Q 100 145 115 125" fill="none" stroke="#FFD23F" strokeWidth="5" />
        <circle cx="100" cy="137" r="6" fill="#FF6A00" stroke="#000" strokeWidth="2" />

        {/* Face */}
        <circle cx="100" cy="90" r="32" fill="#F5CAA7" stroke="#000" strokeWidth="4" />

        {/* Slicked Back Gold/Blonde Hair */}
        <path d="M 68 85 C 68 55, 80 40, 100 40 C 120 40, 132 55, 132 85 C 125 75, 110 70, 100 70 C 90 70, 75 75, 68 85 Z" fill="#E6B800" stroke="#000" strokeWidth="3" />

        {/* Giant Oversized Black Sunglasses */}
        <rect x="74" y="80" width="23" height="16" rx="4" fill="#000" stroke="#FFD23F" strokeWidth="2.5" />
        <rect x="103" y="80" width="23" height="16" rx="4" fill="#000" stroke="#FFD23F" strokeWidth="2.5" />
        <line x1="97" y1="87" x2="103" y2="87" stroke="#FFD23F" strokeWidth="3" />
        {/* Sunglasses Glint */}
        <line x1="77" y1="83" x2="85" y2="83" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
        <line x1="106" y1="83" x2="114" y2="83" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />

        {/* Relaxed Smug Half-Smile */}
        <path d="M 92 105 Q 102 110 114 104" fill="none" stroke="#000" strokeWidth="3.5" strokeLinecap="round" />

        {/* Coconut Drink with Tiny Umbrella in Corner */}
        <g transform="translate(135, 125)">
          <circle cx="15" cy="20" r="14" fill="#6A4526" stroke="#000" strokeWidth="3" />
          <path d="M 5 15 Q 15 22 25 15" fill="#FFF" />
          <line x1="18" y1="2" x2="12" y2="18" stroke="#FF007F" strokeWidth="3" strokeLinecap="round" />
          <path d="M 12 2 L 25 -4 L 20 8 Z" fill="#00F5D4" stroke="#000" strokeWidth="1.5" />
        </g>
      </svg>

      <div className="absolute bottom-2 right-2 rounded border border-black bg-[#FFD23F] px-2 py-0.5 font-mono text-[9px] font-black text-black shadow-[2px_2px_0px_#000]">
        WHALE LIQUIDITY
      </div>
    </div>
  );
}
