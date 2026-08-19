import React, { useState } from "react";
import { AppPage } from "../types";
import { BrandLogo } from "./BrandLogo";
import { Coins, Flame, RotateCcw, Volume2, VolumeX, Gamepad2, Swords, Brain, Home } from "lucide-react";
import { sound } from "../utils/audio";

interface SiteHeaderProps {
  currentPage: AppPage;
  onNavigate: (page: AppPage) => void;
  credits: number;
  onResetCredits: () => void;
  streak: number;
}

export function SiteHeader({
  currentPage,
  onNavigate,
  credits,
  onResetCredits,
  streak,
}: SiteHeaderProps) {
  const [isMuted, setIsMuted] = useState(false);

  const navItems: { page: AppPage; label: string; icon: React.ReactNode; badge?: string }[] = [
    { page: "home", label: "LOBBY", icon: <Home className="h-3.5 w-3.5" /> },
    { page: "challenge", label: "20K CHALLENGE", icon: <Gamepad2 className="h-3.5 w-3.5" />, badge: "PLAY" },
    { page: "underdog", label: "UNDERDOG BATTLE", icon: <Swords className="h-3.5 w-3.5" /> },
    { page: "quiz", label: "KNOW THE GAME", icon: <Brain className="h-3.5 w-3.5" /> },
  ];

  const handleNavClick = (page: AppPage) => {
    sound.playClick();
    onNavigate(page);
  };

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      sound.playCoin();
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b-2 border-black bg-[#16131A] shadow-brutal-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2.5 sm:px-6">
        {/* Brand Logo */}
        <BrandLogo onClick={() => handleNavClick("home")} />

        {/* Primary Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-xl border-2 border-black bg-[#0C0A0F] p-1 shadow-[2px_2px_0px_#000]">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`
                  relative flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-heading text-xs font-black uppercase transition-all
                  ${
                    isActive
                      ? "bg-[#FF6A00] text-black shadow-[2px_2px_0px_#000]"
                      : "text-[#D1C9BD] hover:bg-[#1C1822] hover:text-white"
                  }
                `}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && !isActive && (
                  <span className="rounded bg-[#00F5D4] px-1 py-0.2 font-mono text-[8px] font-black text-black">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right HUD Controls: Streak, Credits & Sound */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            title={isMuted ? "Unmute Arcade SFX" : "Mute Arcade SFX"}
            className="flex h-8 w-8 items-center justify-center rounded-lg border-2 border-black bg-[#1C1822] text-[#D1C9BD] hover:border-[#FF6A00] hover:text-[#FF6A00] shadow-[2px_2px_0px_#000] transition-colors"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-[#00F5D4]" />}
          </button>

          {/* Streak Counter */}
          <div className="hidden sm:flex items-center gap-1 rounded-lg border-2 border-black bg-[#1C1822] px-2.5 py-1 font-mono text-xs font-black text-[#FFD23F] shadow-[2px_2px_0px_#000]">
            <Flame className="h-3.5 w-3.5 text-[#FF6A00] fill-[#FF6A00]" />
            <span>STREAK: {streak}</span>
          </div>

          {/* Credits Box */}
          <div className="flex items-center gap-1.5 sm:gap-2 rounded-lg border-2 border-black bg-[#0C0A0F] px-2.5 py-1 shadow-[2px_2px_0px_#000]">
            <Coins className="h-4 w-4 text-[#00F5D4] shrink-0" />
            <div className="flex flex-col text-left">
              <span className="hidden sm:block font-mono text-[8px] font-bold text-[#D1C9BD] leading-none">
                TRAINING STACK
              </span>
              <span className="font-mono text-xs sm:text-sm font-black text-[#00F5D4] leading-tight">
                {credits.toLocaleString()} <span className="text-[9px] text-white/70">PTS</span>
              </span>
            </div>
            
            <button
              onClick={() => {
                sound.playCoin();
                onResetCredits();
              }}
              title="Reset Stack to 20,000"
              className="ml-0.5 rounded border border-[#2E2838] bg-[#1C1822] p-1 text-[#D1C9BD] hover:border-[#FF6A00] hover:text-[#FF6A00] transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Bar - Compact & Sticky */}
      <div className="grid grid-cols-4 md:hidden border-t-2 border-black bg-[#0C0A0F] p-1 gap-1">
        {navItems.map((item) => {
          const isActive = currentPage === item.page;
          return (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`
                flex flex-col items-center justify-center py-1.5 rounded-lg font-heading text-[10px] font-black uppercase transition-colors
                ${
                  isActive
                    ? "bg-[#FF6A00] text-black shadow-[1px_1px_0px_#000]"
                    : "bg-[#16131A] text-[#D1C9BD]"
                }
              `}
            >
              {item.icon}
              <span className="mt-0.5 truncate">{item.label.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
