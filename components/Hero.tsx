"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [theta, setTheta] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTheta((prev) => (prev + 3) % 360);
    }, 80);
    return () => clearInterval(t);
  }, []);

  const rad = (theta * Math.PI) / 180;
  const sin = Math.sin(rad).toFixed(2);
  const cos = Math.cos(rad).toFixed(2);

  return (
    <section className="rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-800 p-8 flex flex-col md:flex-row gap-8 items-center">
      <div className="flex-1 space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
          বাংলা ভিজ্যুয়াল লার্নিং
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          ত্রিকোণমিতি ভিজ্যুয়ালাইজ করুন, <br /> বোঝার গতি বাড়ান।
        </h2>
        <p className="text-slate-300 text-sm md:text-base max-w-xl">
          ইন্টারেক্টিভ গ্রাফ, SVG ডায়াগ্রাম, ইউনিট সার্কেল আর ফর্মুলা ভিউ দিয়ে
          বেসিক থেকে ইন্টারমিডিয়েট লেভেল — সব এক জায়গায়।
        </p>
        <div className="flex gap-3">
          <a
            href="/basics"
            className="bg-white text-slate-900 px-4 py-2 rounded-md text-sm font-semibold"
          >
            শুরু করুন
          </a>
          <a
            href="/unit-circle"
            className="px-4 py-2 rounded-md text-sm border border-slate-500 text-slate-100"
          >
            ইউনিট সার্কেল দেখুন
          </a>
        </div>
      </div>

      <div className="w-56 h-56 md:w-64 md:h-64 relative">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="70" stroke="#94a3b8" strokeWidth="1" fill="none" />
          <line x1="30" y1="100" x2="170" y2="100" stroke="#1e293b" strokeWidth="1.5" />
          <line x1="100" y1="30" x2="100" y2="170" stroke="#1e293b" strokeWidth="1.5" />
          <line
            x1="100"
            y1="100"
            x2={100 + 70 * Math.cos(rad)}
            y2={100 - 70 * Math.sin(rad)}
            stroke="#38bdf8"
            strokeWidth="3"
          />
          <circle
            cx={100 + 70 * Math.cos(rad)}
            cy={100 - 70 * Math.sin(rad)}
            r="5"
            fill="#38bdf8"
          />
        </svg>
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-slate-900/70 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-100 text-center min-w-[10rem]">
          θ = {theta}° • sin θ = {sin} • cos θ = {cos}
        </div>
      </div>
    </section>
  );
}
