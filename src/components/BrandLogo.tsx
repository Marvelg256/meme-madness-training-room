import React from "react";

export function BrandLogo({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex items-center gap-3 text-left focus:outline-none"
    >
      {/* 3D Offset Background Box */}
      <div className="relative">
        <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-lg bg-black transition-transform group-hover:translate-x-[4px] group-hover:translate-y-[4px]" />
        
        <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black bg-[#FF6A00] font-black text-white text-lg tracking-tight transition-transform group-hover:-translate-x-[1px] group-hover:-translate-y-[1px] group-active:translate-x-[2px] group-active:translate-y-[2px]">
          <span className="font-display text-2xl leading-none">M</span>
          {/* Subtle shine gloss */}
          <div className="absolute inset-0 rounded-md bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-1.5">
          <span className="font-heading font-black tracking-tight text-sm text-[#FDFBF7] group-hover:text-[#FF6A00] transition-colors">
            MEME MADNESS
          </span>
          <span className="inline-flex items-center rounded border border-[#FF6A00]/40 bg-[#FF6A00]/10 px-1 py-0.2 font-mono text-[9px] font-bold text-[#FF6A00]">
            UNOFFICIAL
          </span>
        </div>
        <p className="font-mono text-[10px] font-bold tracking-widest text-[#FF6A00] uppercase">
          THE TRAINING ROOM
        </p>
      </div>
    </button>
  );
}
