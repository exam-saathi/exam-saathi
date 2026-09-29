from pathlib import Path

def write(path, content):
    p = Path(path)
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")
    print("✓", path)

write("components/common/LoyalLogo.jsx", r'''
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
''')

write("components/common/LoyalDeveloper.jsx", r'''
export default function LoyalDeveloper() {
  return (
    <div className="py-6 text-center">
      <div className="text-[10px] font-bold tracking-[0.35em] text-slate-600">
        DEVELOPER BY
      </div>

      <div className="mt-2 text-xl font-black animate-pulse bg-gradient-to-r from-pink-400 via-purple-400 via-cyan-300 to-blue-400 bg-[length:300%_300%] bg-clip-text text-transparent">
        💓 LOYAL JI 💓
      </div>
    </div>
  );
}
''')

# Replace common footer with a lightweight professional footer.
write("components/common/ProfessionalFooter.jsx", r'''
import Link from "next/link";
import LoyalDeveloper from "./LoyalDeveloper";

export default function ProfessionalFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              LOYAL EDUCATION HUB
            </div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              परीक्षा की तैयारी के लिए tests, test series और learning batches
              एक ही जगह।
            </p>
          </div>

          <div>
            <div className="text-sm font-black text-white">
              Learning
            </div>

            <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
              <Link href="/batches" className="hover:text-cyan-300">
                Batches
              </Link>
              <Link href="/test-series" className="hover:text-cyan-300">
                Test Series
              </Link>
              <Link href="/mock-tests" className="hover:text-cyan-300">
                Mock Tests
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-black text-white">
              Platform
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Practice करें, अपनी preparation track करें और लगातार improve करें।
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-4">
          <LoyalDeveloper />
        </div>

        <div className="text-center text-[11px] text-slate-700">
          © {new Date().getFullYear()} LOYAL EDUCATION HUB
        </div>
      </div>
    </footer>
  );
}
''')

print("")
print("==============================================")
print(" LOYAL EDUCATION HUB BRANDING READY")
print("==============================================")
print("✓ LOYAL EDUCATION HUB logo component")
print("✓ Animated DEVELOPER BY 💓 LOYAL JI 💓")
print("✓ Professional footer")
print("✓ Batches / Test Series / Mock Tests links")
print("")
