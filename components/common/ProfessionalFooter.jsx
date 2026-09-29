
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
