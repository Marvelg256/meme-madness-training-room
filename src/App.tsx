/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { AppPage } from "./types";
import { SiteHeader } from "./components/SiteHeader";
import { HomeView } from "./views/HomeView";
import { ChallengeView } from "./views/ChallengeView";
import { UnderdogView } from "./views/UnderdogView";
import { QuizView } from "./views/QuizView";
import { DesignSystemView } from "./views/DesignSystemView";
import { BrandLogo } from "./components/BrandLogo";
import { sound } from "./utils/audio";

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>("home");
  const [credits, setCredits] = useState<number>(20000);
  const [streak, setStreak] = useState<number>(0);

  const handleResetCredits = () => {
    setCredits(20000);
    setStreak(0);
  };

  const handleNavigate = (page: AppPage) => {
    sound.playClick();
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0C0A0F] text-[#FDFBF7] flex flex-col selection:bg-[#FF6A00] selection:text-black">
      {/* 1. PRIMARY SITE HEADER */}
      <SiteHeader
        currentPage={currentPage}
        onNavigate={handleNavigate}
        credits={credits}
        onResetCredits={handleResetCredits}
        streak={streak}
      />

      {/* 2. MAIN PAGE CONTENT */}
      <main className="flex-1">
        {currentPage === "home" && (
          <HomeView
            onNavigate={handleNavigate}
            direction="master"
          />
        )}

        {currentPage === "challenge" && (
          <ChallengeView
            credits={credits}
            onUpdateCredits={(amt) => setCredits(amt)}
            streak={streak}
            onUpdateStreak={(stk) => setStreak(stk)}
            direction="master"
          />
        )}

        {currentPage === "underdog" && <UnderdogView />}

        {currentPage === "quiz" && <QuizView />}

        {currentPage === "system" && <DesignSystemView />}
      </main>

      {/* 3. FOOTER */}
      <footer className="border-t-2 border-black bg-[#16131A] py-8 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <BrandLogo onClick={() => handleNavigate("home")} />
            <span className="hidden sm:inline text-[#3D354A]">|</span>
            <p className="font-mono text-xs text-[#6E637B] text-center sm:text-left">
              Unofficial community training sandbox inspired by Cade Market's Meme Madness.
            </p>
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-[#D1C9BD]">
            <button
              onClick={() => handleNavigate("challenge")}
              className="hover:text-[#00F5D4] transition-colors"
            >
              20K Challenge
            </button>
            <span>•</span>
            <button
              onClick={() => handleNavigate("underdog")}
              className="hover:text-[#FFD23F] transition-colors"
            >
              Underdog Arena
            </button>
            <span>•</span>
            <button
              onClick={() => handleNavigate("quiz")}
              className="hover:text-[#FF6A00] transition-colors"
            >
              Rules Drill
            </button>
            <span>•</span>
            <button
              onClick={() => handleNavigate("system")}
              className="text-[#6E637B] hover:text-[#D1C9BD] transition-colors text-[11px]"
            >
              Tokens & Spec
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
