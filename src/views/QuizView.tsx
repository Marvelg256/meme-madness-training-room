import React, { useState } from "react";
import { QUIZ_QUESTIONS } from "../data/markets";
import { TactileButton } from "../components/TactileButton";
import { Brain, CheckCircle2, XCircle, RotateCcw, Award, Sparkles } from "lucide-react";

export function QuizView() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((i) => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsAnswered(false);
    setIsCompleted(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-black pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black text-[#00F5D4] tracking-widest uppercase">
              // MODULE 03 // STRATEGY SPEED DRILL
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl text-[#FDFBF7]">
            KNOW THE GAME DRILL
          </h1>
        </div>

        <div className="font-mono text-xs text-[#D1C9BD]">
          PROGRESS: <strong className="text-[#FF6A00]">{isCompleted ? 5 : currentIdx + 1} / 5</strong>
        </div>
      </div>

      {!isCompleted ? (
        <div className="rounded-2xl border-2 border-black bg-[#1C1822] p-6 sm:p-8 shadow-brutal-lg space-y-6">
          {/* Question Category & Progress Bar */}
          <div>
            <div className="flex items-center justify-between font-mono text-xs text-[#6E637B] mb-2">
              <span className="rounded bg-[#FF6A00]/20 text-[#FF6A00] px-2 py-0.5 font-bold border border-[#FF6A00]/40">
                CATEGORY: {currentQ.category}
              </span>
              <span>SCORE: {score} PTS</span>
            </div>

            <div className="h-2 w-full overflow-hidden rounded-full bg-black border border-[#2E2838]">
              <div
                className="h-full bg-[#00F5D4] transition-all"
                style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <h2 className="font-heading text-xl sm:text-2xl font-black text-[#FDFBF7] leading-snug">
            {currentQ.question}
          </h2>

          {/* Options Grid */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              let optionClasses = "border-[#2E2838] bg-[#0C0A0F] text-[#D1C9BD] hover:border-[#FF6A00]";

              if (isAnswered) {
                if (idx === currentQ.correctIndex) {
                  optionClasses = "border-[#00F5D4] bg-[#00F5D4]/20 text-white font-bold";
                } else if (idx === selectedOption) {
                  optionClasses = "border-[#FF007F] bg-[#FF007F]/20 text-white";
                } else {
                  optionClasses = "border-[#2E2838] bg-[#0C0A0F] opacity-40";
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`
                    w-full text-left rounded-xl p-4 border-2 transition-all font-sans text-sm flex items-start gap-3
                    ${optionClasses}
                  `}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-black bg-[#1C1822] font-mono text-xs font-bold text-white">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="flex-1">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation Box when Answered */}
          {isAnswered && (
            <div className="rounded-xl border-2 border-black bg-[#0C0A0F] p-4 text-xs font-sans text-[#D1C9BD] space-y-1">
              <strong className="text-[#FFD23F] font-heading block">EXPLANATION:</strong>
              <p>{currentQ.explanation}</p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end pt-2">
              <TactileButton variant="primary" size="md" onClick={handleNext}>
                {currentIdx + 1 === QUIZ_QUESTIONS.length ? "VIEW FINAL RESULTS" : "NEXT QUESTION →"}
              </TactileButton>
            </div>
          )}
        </div>
      ) : (
        /* Quiz Complete Results Card */
        <div className="rounded-2xl border-2 border-black bg-[#1C1822] p-8 text-center shadow-brutal-lg space-y-6">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-black bg-[#FFD23F] text-black shadow-brutal">
            <Award className="h-10 w-10" />
          </div>

          <div>
            <span className="font-mono text-xs font-bold text-[#FF6A00] uppercase tracking-widest block">
              DRILL COMPLETED
            </span>
            <h2 className="font-display text-5xl text-white mt-1">
              YOUR SCORE: {score} / 5
            </h2>
            <p className="font-sans text-sm text-[#D1C9BD] max-w-md mx-auto mt-2">
              {score === 5
                ? "Flawless score! You possess the rare diamond-hands discipline required to navigate Meme Madness."
                : score >= 3
                ? "Solid understanding of market mechanics. Keep drilling to refine your entry timing."
                : "Need more training rounds. Review the contender codex and test smaller stakes in the 20K Challenge."}
            </p>
          </div>

          <div className="flex justify-center gap-3">
            <TactileButton
              variant="primary"
              size="lg"
              onClick={handleRestart}
              icon={<RotateCcw className="h-4 w-4" />}
            >
              TRY AGAIN
            </TactileButton>
          </div>
        </div>
      )}
    </div>
  );
}
