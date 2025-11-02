const topics = [
  {
    title: "প্রাথমিক ধারণা",
    desc: "সমকোণী ত্রিভুজ, কোণ, SOH-CAH-TOA",
    href: "/basics"
  },
  {
    title: "ইউনিট সার্কেল",
    desc: "ড্র্যাগ করে sin/cos মান দেখুন",
    href: "/unit-circle"
  },
  {
    title: "ত্রিকোণমিতিক গ্রাফ",
    desc: "Amplitude, Period, Phase shift",
    href: "/graphs"
  },
  {
    title: "সূত্র ভাণ্ডার",
    desc: "KaTeX দিয়ে সুন্দর রেন্ডার",
    href: "/formulas"
  },
  {
    title: "ত্রিভুজ সমাধান",
    desc: "ইনপুট দিন, গ্রাফ দেখুন",
    href: "/triangle-solver"
  },
  {
    title: "অনুশীলন ও কুইজ",
    desc: "চ্যাপ্টারভিত্তিক প্রশ্ন",
    href: "/practice"
  }
];

export default function TopicGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {topics.map((t) => (
        <a
          key={t.href}
          href={t.href}
          className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-500 transition"
        >
          <h3 className="text-base font-semibold text-slate-50">{t.title}</h3>
          <p className="text-sm text-slate-400 mt-1">{t.desc}</p>
        </a>
      ))}
    </div>
  );
}
