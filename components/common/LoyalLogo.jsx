
export default function LoyalLogo() {
  return (
    <div className="group inline-flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 shadow-lg shadow-cyan-950/20">
        <span className="text-lg font-black">L</span>
      </div>

      <div className="leading-none">
        <div className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-lg font-black text-transparent">
          LOYAL EDUCATION HUB
        </div>

        <div className="mt-1 text-[9px] font-bold tracking-[0.28em] text-slate-500">
          LEARN • PRACTICE • ACHIEVE
        </div>
      </div>
    </div>
  );
}
