"use client";

import { useState } from "react";

export default function QuizCard({
  question,
  options,
  answer,
}: {
  question: string;
  options: string[];
  answer: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="glass rounded-xl p-4 space-y-3">
      <p className="text-sm text-slate-100">{question}</p>
      <div className="grid gap-2">
        {options.map((opt) => {
          const isCorrect = selected === opt && opt === answer;
          const isWrong = selected === opt && opt !== answer;
          return (
            <button
              key={opt}
              onClick={() => setSelected(opt)}
              className={`text-left px-3 py-2 rounded-md text-sm border
                ${
                  isCorrect
                    ? "bg-emerald-500/20 border-emerald-400"
                    : isWrong
                    ? "bg-rose-500/10 border-rose-500/60"
                    : "bg-slate-900/30 border-slate-700/40"
                }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {selected && (
        <p className="text-xs">
          {selected === answer ? "✅ সঠিক!" : `❌ সঠিক উত্তর: ${answer}`}
        </p>
      )}
    </div>
  );
}
