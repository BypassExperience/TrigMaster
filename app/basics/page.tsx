import SvgRightTriangle from "@/components/SvgRightTriangle";

export default function BasicsPage() {
  return (
    <main className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">প্রাথমিক ধারণা</h2>
      <p className="text-slate-300 text-sm md:text-base max-w-3xl">
        ত্রিকোণমিতি শুরু হয় সমকোণী ত্রিভুজ থেকে। এখানে আমরা কোণ, বাহু আর তাদের অনুপাত
        (sin, cos, tan) ভিজ্যুয়ালভাবে দেখব।
      </p>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        <SvgRightTriangle />
        <div className="space-y-3 bg-slate-900/40 border border-slate-800 rounded-lg p-4 text-sm text-slate-200">
          <h3 className="font-semibold">মনে রাখুন:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>sin θ = লম্ব / অতিভুজ</li>
            <li>cos θ = ভূমি / অতিভুজ</li>
            <li>tan θ = লম্ব / ভূমি</li>
          </ul>
          <p className="text-xs text-slate-400">
            (ইন্টারেক্টিভ: ত্রিভুজের বাহু পাল্টালে অনুপাত কীভাবে বদলায় সেটা আমরা পরে দেখব।)
          </p>
        </div>
      </div>
    </main>
  );
}
