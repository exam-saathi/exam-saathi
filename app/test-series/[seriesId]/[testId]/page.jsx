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
