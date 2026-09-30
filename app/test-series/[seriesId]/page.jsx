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
