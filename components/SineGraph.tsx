"use client";

import { useState } from "react";

export default function SineGraph() {
  const [amp, setAmp] = useState(1);
  const [freq, setFreq] = useState(1);
  const [phase, setPhase] = useState(0);

  const width = 500;
  const height = 200;
  const pts: string[] = [];
  for (let x = 0; x <= width; x += 5) {
    const rad = (x / width) * 2 * Math.PI * freq + phase;
    const y = height / 2 - Math.sin(rad) * amp * 60;
    pts.push(`${x},${y}`);
  }

  return (
    <div className="space-y-4">
      <div className="glass rounded-xl p-4">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full">
          <line x1="0" y1={height / 2} x2={width} y2={height / 2} stroke="#1e293b" strokeWidth="2" />
          <polyline points={pts.join(" ")} fill="none" stroke="#38bdf8" strokeWidth="2" />
        </svg>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm mb-1">
            Amplitude: {amp.toFixed(1)}
          </label>
          <input type="range" min="0.5" max="3" step="0.1" value={amp} onChange={e => setAmp(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-sm mb-1">
            Frequency: {freq.toFixed(1)}
          </label>
          <input type="range" min="0.5" max="3" step="0.1" value={freq} onChange={e => setFreq(Number(e.target.value))} className="w-full" />
        </div>
        <div>
          <label className="block text-sm mb-1">
            Phase: {phase.toFixed(1)}
          </label>
          <input type="range" min="-3.14" max="3.14" step="0.1" value={phase} onChange={e => setPhase(Number(e.target.value))} className="w-full" />
        </div>
      </div>
      <p className="text-xs text-slate-500">
        Current: y = {amp.toFixed(1)} · sin({freq.toFixed(1)}x {phase >= 0 ? "+" : "-"} {Math.abs(phase).toFixed(1)})
      </p>
    </div>
  );
}
