#!/data/data/com.termux/files/usr/bin/bash
set -e

cd ~/exam-sathi

echo "======================================"
echo " LOYAL ACADEMY ROUTE FIX"
echo " BATCHES + TEST SERIES"
echo "======================================"

mkdir -p app/batches/[batchId]
mkdir -p app/test-series/[seriesId]
mkdir -p app/test-series/[seriesId]/[testId]

cat > app/test-series/page.jsx <<'EOT'
import Link from "next/link";
import { testSeries } from "@/data/test-series";

export default function TestSeriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-orange-400">LOYAL ACADEMY</p>

        <h1 className="mt-3 text-4xl font-black">
          Test Series
        </h1>

        <p className="mt-3 max-w-2xl text-slate-400">
          UPSC, UPPSC, UP और Bihar exams के लिए अलग-अलग professional test
          series.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testSeries.map((series) => (
            <Link
              key={series.id}
              href={`/test-series/${series.id}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-orange-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-orange-400/10 px-3 py-1 text-xs font-bold text-orange-300">
                  {series.exam}
                </span>

                <span className="text-xs font-bold text-emerald-400">
                  {series.status}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-black">
                {series.title}
              </h2>

              <p className="mt-3 text-sm text-slate-400">
                Exam-oriented mock tests, practice tests और detailed solutions.
              </p>

              <div className="mt-6 text-sm font-bold text-orange-400">
                View Test Series →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
EOT

cat > app/test-series/[seriesId]/page.jsx <<'EOT'
import Link from "next/link";
import { notFound } from "next/navigation";
import { testSeries } from "@/data/test-series";

export function generateStaticParams() {
  return testSeries.map((series) => ({
    seriesId: series.id,
  }));
}

export default async function TestSeriesDetailPage({ params }) {
  const { seriesId } = await params;

  const series = testSeries.find(
    (item) => item.id === seriesId
  );

  if (!series) notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <Link
          href="/test-series"
          className="text-sm font-bold text-orange-400"
        >
          ← All Test Series
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
          <span className="text-xs font-bold text-orange-400">
            {series.exam}
          </span>

          <h1 className="mt-3 text-3xl font-black sm:text-4xl">
            {series.title}
          </h1>

          <p className="mt-4 text-slate-400">
            Complete exam-oriented test preparation.
          </p>

          <div className="mt-8">
            {series.tests?.length ? (
              <div className="grid gap-4">
                {series.tests.map((test) => (
                  <Link
                    key={test.id}
                    href={`/test-series/${series.id}/${test.id}`}
                    className="rounded-2xl border border-white/10 p-5 transition hover:border-orange-400/40"
                  >
                    <h2 className="font-black">{test.title}</h2>
                    <p className="mt-2 text-sm text-slate-400">
                      {test.questions} Questions • {test.duration} Minutes
                    </p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center">
                <p className="font-bold">Tests जल्द उपलब्ध होंगे</p>
                <p className="mt-2 text-sm text-slate-500">
                  इस series में tests अभी add नहीं किए गए हैं।
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
EOT

cat > app/test-series/[seriesId]/[testId]/page.jsx <<'EOT'
import Link from "next/link";
import { notFound } from "next/navigation";
import { testSeries } from "@/data/test-series";

export function generateStaticParams() {
  return testSeries.flatMap((series) =>
    (series.tests || []).map((test) => ({
      seriesId: series.id,
      testId: test.id,
    }))
  );
}

export default async function TestPage({ params }) {
  const { seriesId, testId } = await params;

  const series = testSeries.find(
    (item) => item.id === seriesId
  );

  const test = series?.tests?.find(
    (item) => item.id === testId
  );

  if (!series || !test) notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-4xl px-4 py-12">
        <Link
          href={`/test-series/${series.id}`}
          className="text-sm font-bold text-orange-400"
        >
          ← Back to Series
        </Link>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <p className="text-xs font-bold text-orange-400">
            {series.exam}
          </p>

          <h1 className="mt-3 text-3xl font-black">
            {test.title}
          </h1>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/[0.04] p-4">
              <p className="text-xs text-slate-500">Questions</p>
              <p className="mt-1 text-xl font-black">
                {test.questions}
              </p>
            </div>

            <div className="rounded-2xl bg-white/[0.04] p-4">
              <p className="text-xs text-slate-500">Duration</p>
              <p className="mt-1 text-xl font-black">
                {test.duration} min
              </p>
            </div>
          </div>

          <button
            className="mt-8 w-full rounded-2xl bg-orange-500 px-6 py-4 font-black text-white transition hover:bg-orange-400"
          >
            Start Test
          </button>
        </div>
      </section>
    </main>
  );
}
EOT

echo
echo "===== CHECKING ROUTES ====="
find app -maxdepth 4 -type f | sort

echo
echo "===== BUILD ====="
npm run build

echo
echo "======================================"
echo " ROUTES FIXED SUCCESSFULLY"
echo "======================================"
echo
echo "Batches:"
echo "  /batches"
echo
echo "Test Series:"
echo "  /test-series"
echo
echo "Run deployment:"
echo "  git add ."
echo "  git commit -m \"Fix batches and test series routes\""
echo "  git push"
echo "  vercel --prod --yes"
