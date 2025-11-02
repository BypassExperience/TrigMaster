"use client";

import { useState } from "react";

export default function InteractiveUnitCircle() {
  const [deg, setDeg] = useState(30);
  const rad = (deg * Math.PI) / 180;
  const sin = Math.sin(rad);
  const cos = Math.cos(rad);

  const center = 140;
  const r = 90;
  const x = center + r * cos;
  const y = center - r * sin;

  const quadrant =
    deg >= 0 && deg < 90
      ? "I"
      : deg >= 90 && deg < 180
      ? "II"
      : deg >= 180 && deg < 270
      ? "III"
      : "IV";

  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div className="bg-slate-900/40 rounded-xl border border-slate-800 p-4">
        <svg viewBox="0 0 280 280" className="w-full">
          <rect x="0" y="0" width="140" height="140" fill="rgba(34,197,235,0.05)" />
          <rect x="140" y="0" width="140" height="140" fill="rgba(244,63,94,0.05)" />
          <rect x="0" y="140" width="140" height="140" fill="rgba(234,179,8,0.05)" />
          <rect x="140" y="140" width="140" height="140" fill="rgba(34,197,94,0.05)" />

          <circle cx={140} cy={140} r={90} stroke="#94a3b8" strokeWidth="1.5" fill="none" />
          <line x1="0" y1={140} x2="280" y2={140} stroke="#1f2937" strokeWidth="2" />
          <line x1={140} y1="0" x2={140} y2="280" stroke="#1f2937" strokeWidth="2" />

          <line x1={140} y1={140} x2={x} y2={y} stroke="#0ea5e9" strokeWidth="3" />
          <circle cx={x} cy={y} r="5" fill="#0ea5e9" />
        </svg>
      </div>

      <div className="space-y-4">
        <label className="block text-sm text-slate-100">
          কোণ (ডিগ্রি): <span className="font-semibold">{deg}°</span>
        </label>
        <input
          type="range"
          min="0"
          max="360"
          value={deg}
          onChange={(e) => setDeg(Number(e.target.value))}
          className="w-full"
        />
        <div className="bg-slate-900/40 rounded-lg border border-slate-800 p-4 text-sm space-y-1">
          <p>sin(θ) = {sin.toFixed(3)}</p>
          <p>cos(θ) = {cos.toFixed(3)}</p>
          <p>tan(θ) = {cos === 0 ? "অসীম" : (sin / cos).toFixed(3)}</p>
          <p className="pt-2 text-xs text-slate-400">
            বর্তমান কোয়াড্রেন্ট: <span className="font-semibold text-slate-200">{quadrant}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
