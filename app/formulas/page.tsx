"use client";

import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";
import { useState } from "react";

const formulaGroups = {
  basic: [
    { id: "p1", title: "পাইথাগোরাস অভেদ", expr: "\\sin^2\\theta + \\cos^2\\theta = 1" },
    { id: "p2", title: "ট্যানজেন্ট", expr: "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}" }
  ],
  compound: [
    {
      id: "c1",
      title: "সাইন (α ± β)",
      expr: "\\sin(\\alpha \\pm \\beta) = \\sin\\alpha\\cos\\beta \\pm \\cos\\alpha\\sin\\beta"
    },
    {
      id: "c2",
      title: "কোসাইন (α ± β)",
      expr: "\\cos(\\alpha \\pm \\beta) = \\cos\\alpha\\cos\\beta \\mp \\sin\\alpha\\sin\\beta"
    }
  ]
};

export default function FormulasPage() {
  const [active, setActive] = useState<"basic" | "compound">("basic");

  return (
    <main className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">সূত্র ভাণ্ডার</h2>
      <p className="text-slate-300 text-sm md:text-base">
        সব সূত্র বাংলায় বর্ণনা সহ। নিচের ট্যাব থেকে বেছে নিন।
      </p>

      <div className="inline-flex rounded-lg overflow-hidden border border-slate-700">
        <button
          onClick={() => setActive("basic")}
          className={\`px-4 py-2 text-sm \${active === "basic" ? "bg-slate-100 text-slate-900" : "bg-slate-900 text-slate-200"}\`}
        >
          মৌলিক
        </button>
        <button
          onClick={() => setActive("compound")}
          className={\`px-4 py-2 text-sm \${active === "compound" ? "bg-slate-100 text-slate-900" : "bg-slate-900 text-slate-200"}\`}
        >
          যৌগিক কোণ
        </button>
      </div>

      <div className="space-y-4">
        {formulaGroups[active].map((f) => (
          <div key={f.id} className="bg-slate-900/40 border border-slate-800 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-slate-100 mb-2">{f.title}</h3>
            <BlockMath math={f.expr} />
          </div>
        ))}
      </div>
    </main>
  );
}
