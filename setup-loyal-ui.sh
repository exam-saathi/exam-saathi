#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "=== LOYAL ACADEMY UI UPDATE ==="

# Backup current UI files
mkdir -p backup_loyal_ui_$(date +%Y%m%d_%H%M%S)

cp app/page.jsx backup_loyal_ui_$(date +%Y%m%d_%H%M%S)/page.jsx 2>/dev/null || true
cp components/common/Navbar.jsx backup_loyal_ui_$(date +%Y%m%d_%H%M%S)/Navbar.jsx 2>/dev/null || true

echo "✓ UI backup created"

# --------------------------------------------------
# BRAND
# --------------------------------------------------

cat > data/brand.js <<'EOF'
export const brand = {
  name: "LOYAL ACADEMY",
  shortName: "LOYAL",
  tagline: "LEARN • PRACTICE • ACHIEVE",
  description:
    "प्रतियोगी परीक्षाओं की स्मार्ट और व्यवस्थित तैयारी का प्लेटफॉर्म।",
};
EOF

# --------------------------------------------------
# HOME PAGE
# --------------------------------------------------

cat > app/page.jsx <<'EOF'
import Link from "next/link";
import { batches } from "@/data/batches";
import { testSeries } from "@/data/test-series";
import { subjects } from "@/data/subjects";
import { brand } from "@/data/brand";

export default function HomePage() {
  const liveTests = testSeries.flatMap((series) =>
    (series.tests || []).map((test) => ({
      ...test,
      seriesId: series.id,
      exam: series.exam,
    }))
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,.18),transparent_35%),radial-gradient(circle_at_top_left,rgba(37,99,235,.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">

          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold tracking-widest text-cyan-300">
              {brand.tagline}
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                LOYAL ACADEMY
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              {brand.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/batches"
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 font-black shadow-lg shadow-cyan-500/10 transition hover:scale-[1.02]"
              >
                Explore Classes
              </Link>

              <Link
                href="/test-series"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-black transition hover:bg-white/10"
              >
                Start a Test
              </Link>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              ["🎓", "Classes", batches.length],
              ["📝", "Tests", liveTests.length],
              ["📚", "Subjects", subjects.length],
              ["🇮🇳", "Medium", "Hindi"],
            ].map(([icon, label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
              >
                <div className="text-2xl">{icon}</div>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className="mt-1 text-xl font-black">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASSES */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black tracking-[.25em] text-cyan-400">
              LEARN
            </p>
            <h2 className="mt-2 text-3xl font-black">Popular Classes</h2>
            <p className="mt-2 text-sm text-slate-500">
              व्यवस्थित तरीके से पढ़ें और अपनी तैयारी मजबूत करें।
            </p>
          </div>

          <Link
            href="/batches"
            className="hidden text-sm font-bold text-cyan-400 sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {batches.map((batch) => (
            <Link
              key={batch.id}
              href={`/batches/${batch.id}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-lg bg-cyan-400/10 px-3 py-1 text-[10px] font-black text-cyan-300">
                  {batch.badge}
                </span>
                <span className="text-xs font-bold text-emerald-400">
                  ● LIVE
                </span>
              </div>

              <h3 className="mt-6 text-xl font-black group-hover:text-cyan-300">
                {batch.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {batch.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {(batch.subjects || []).slice(0, 3).map((subject) => (
                  <span
                    key={subject}
                    className="rounded-lg border border-white/5 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-400"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTS */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="text-xs font-black tracking-[.25em] text-orange-400">
            PRACTICE
          </p>
          <h2 className="mt-2 text-3xl font-black">Test Center</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {liveTests.map((test) => (
              <Link
                key={test.id}
                href={`/test-series/${test.seriesId}/${test.id}`}
                className="rounded-3xl border border-white/10 bg-slate-900 p-6 transition hover:border-orange-400/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-orange-400">
                    {test.exam}
                  </span>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-400">
                    LIVE
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-black">{test.title}</h3>

                <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span>{test.questions} Questions</span>
                  <span>•</span>
                  <span>{test.duration} Minutes</span>
                  <span>•</span>
                  <span>{test.medium || "Hindi"}</span>
                </div>

                <div className="mt-6 font-bold text-orange-400">
                  Start Test →
                </div>
              </Link>
            ))}

            {!liveTests.length && (
              <div className="rounded-3xl border border-dashed border-white/10 p-8 text-center text-slate-500">
                जल्द नए tests उपलब्ध होंगे।
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <p className="text-xs font-black tracking-[.25em] text-purple-400">
          PREPARATION
        </p>
        <h2 className="mt-2 text-3xl font-black">Study Subjects</h2>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {subjects.map((subject) => (
            <Link
              href={`/subjects/${subject.id}`}
              key={subject.id}
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-purple-400/30 hover:bg-white/[0.06]"
            >
              <div className="text-3xl">{subject.icon}</div>
              <h3 className="mt-4 text-sm font-black">{subject.title}</h3>
              <p className="mt-2 text-[11px] leading-5 text-slate-500">
                {subject.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 sm:p-12">
          <h2 className="text-3xl font-black">
            आपकी तैयारी, आपका लक्ष्य।
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            LOYAL ACADEMY पर classes देखें, tests दें और अपनी preparation को
            लगातार improve करें।
          </p>

          <Link
            href="/batches"
            className="mt-7 inline-block rounded-2xl bg-white px-6 py-3 font-black text-slate-950"
          >
            Start Learning
          </Link>
        </div>
      </section>

    </main>
  );
}
EOF

echo
echo "=== BUILD CHECK ==="
npm run build

echo
echo "=== LOYAL ACADEMY UI READY ==="
