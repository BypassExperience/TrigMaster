"use client";

import { useState } from "react";

export default function TriangleSolverTool() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const [c, setC] = useState(5);

  const s = (a + b + c) / 2;
  const area = Math.sqrt(Math.max(s * (s - a) * (s - b) * (s - c), 0));

  return (
    <div className="glass rounded-xl p-4 space-y-4">
      <div className="grid md:grid-cols-3 gap-3">
        <div>
          <label className="text-xs text-slate-200">বাহু a</label>
          <input type="number" value={a} onChange={e => setA(Number(e.target.value))} className="w-full bg-slate-900/40 border border-slate-700 rounded px-2 py-1 text-sm" />
        </div>
        <div>
          <label className="text-xs text-slate-200">বাহু b</label>
          <input type="number" value={b} onChange={e => setB(Number(e.target.value))} className="w-full bg-slate-900/40 border border-slate-700 rounded px-2 py-1 text-sm" />
        </div>
        <div>
          <label className="text-xs text-slate-200">বাহু c</label>
          <input type="number" value={c} onChange={e => setC(Number(e.target.value))} className="w-full bg-slate-900/40 border border-slate-700 rounded px-2 py-1 text-sm" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 items-center">
        <svg viewBox="0 0 220 160" className="w-full">
          <polygon
            points="20,140 200,140 20,20"
            fill="rgba(14,165,233,0.05)"
            stroke="#38bdf8"
            strokeWidth="2"
          />
          <text x="110" y="155" textAnchor="middle" fill="#e2e8f0" fontSize="10">a = {a}</text>
          <text x="0" y="80" transform="rotate(-90 0 80)" fill="#e2e8f0" fontSize="10">b = {b}</text>
          <text x="110" y="70" fill="#e2e8f0" fontSize="10">c = {c}</text>
        </svg>
        <div className="space-y-1 text-sm">
          <p>পরিসীমা (semi-perimeter) s = {s.toFixed(2)}</p>
          <p>ক্ষেত্রফল ≈ {Number.isNaN(area) ? "অবৈধ" : area.toFixed(2)}</p>
          <p className="text-xs text-slate-400">নোট: উপরের মানগুলো বৈধ ত্রিভুজ না হলে ক্ষেত্রফল "অবৈধ" দেখাবে।</p>
        </div>
      </div>
    </div>
  );
}
