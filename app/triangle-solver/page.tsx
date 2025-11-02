import TriangleSolverTool from "@/components/TriangleSolverTool";

export default function TriangleSolverPage() {
  return (
    <main className="space-y-6">
      <h2 className="text-2xl font-semibold">ত্রিভুজ সলভার</h2>
      <p className="text-slate-300 text-sm md:text-base">
        যেকোনো তিনটি ইনপুট দিলে বাকি বাহু/কোণ ও ক্ষেত্রফল বের করে দেখাবে।
      </p>
      <TriangleSolverTool />
    </main>
  );
}
