"use client";

import { useState } from "react";

export default function GraphsPage() {
  const [amp, setAmp] = useState(1);
  const [freq, setFreq] = useState(1);

  const width = 500;
  const height = 200;
  const points: string[] = [];
  for (let x = 0; x <= width; x += 5) {
    const rad = (x / width) * 2 * Math.PI * freq;
    const y = height / 2 - Math.sin(rad) * amp * 60;
    points.push(`${x},${y}`);
  }

  return (
    <main className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">ত্রিকোণমিতিক গ্রাফ</h2>
      <p className="text-slate-300 text-sm md:text-base">
        নিচের স্লাইডারগুলো নাড়িয়ে দেখুন — amplitude বা frequency বদলালে গ্রাফ কীভাবে বদলায়।
      </p>

      <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
          <line x1={0} y1={height / 2} x2={width} y2={height / 2} stroke="#1e293b" strokeWidth="2" />
          <polyline fill="none" stroke="#38bdf8" strokeWidth="2" points={points.join(" ")} />
        </svg>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-slate-100 mb-1">
            Amplitude: <span className="font-semibold">{amp.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={amp}
            onChange={(e) => setAmp(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm text-slate-100 mb-1">
            Frequency: <span className="font-semibold">{freq.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={freq}
            onChange={(e) => setFreq(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="text-xs text-slate-500">
        Current function: y = {amp.toFixed(1)} · sin({freq.toFixed(1)}x)
      </div>
    </main>
  );
}
