import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "TrigMaster: Visualized Trigonometry",
  description: "ত্রিকোণমিতি শিখুন ভিজ্যুয়ালি, বাংলায়।"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="bn">
      <body className="min-h-screen bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-4">
          <header className="flex items-center justify-between mb-6">
            <h1 className="text-lg font-semibold tracking-tight text-slate-50">
              TrigMaster
              <span className="text-slate-400 text-xs block">
                ভিজ্যুয়ালাইজড ত্রিকোণমিতি
              </span>
            </h1>
            <nav className="flex gap-4 text-sm text-slate-200">
              <a href="/" className="hover:text-white">হোম</a>
              <a href="/basics" className="hover:text-white">প্রাথমিক ধারণা</a>
              <a href="/unit-circle" className="hover:text-white">ইউনিট সার্কেল</a>
              <a href="/graphs" className="hover:text-white">গ্রাফ</a>
              <a href="/formulas" className="hover:text-white">সূত্র</a>
              <a href="/practice" className="hover:text-white">অনুশীলন</a>
            </nav>
          </header>
          {children}
          <footer className="py-6 text-xs text-slate-500 mt-10 border-t border-slate-800">
            TrigMaster — বাংলা ভিজ্যুয়াল ত্রিকোণমিতি প্ল্যাটফর্ম
          </footer>
        </div>
      </body>
    </html>
  );
}
