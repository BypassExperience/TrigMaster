import InteractiveUnitCircle from "@/components/InteractiveUnitCircle";

export default function UnitCirclePage() {
  return (
    <main className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">ইউনিট সার্কেল</h2>
      <p className="text-slate-300 text-sm md:text-base max-w-3xl">
        নিচের সার্কেলে কোণ পরিবর্তন করলে সাথে সাথে sin, cos, tan এর মান দেখে নিন। চারটি
        কোয়াড্রেন্টে কোন অনুপাত ধনাত্মক/ঋণাত্মক তাও মার্ক করা আছে।
      </p>
      <InteractiveUnitCircle />
    </main>
  );
}
