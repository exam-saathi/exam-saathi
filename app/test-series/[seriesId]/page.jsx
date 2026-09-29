
import Link from "next/link";
import { ArrowLeft, ArrowRight, ClipboardCheck, Clock3 } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import { testSeries } from "@/data/test-series";

export default async function TestSeriesDetailPage({ params }) {
  const { seriesId } = await params;
  const series = testSeries.find((item) => item.id === seriesId);

  if (!series) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <div className="mx-auto max-w-4xl px-4 py-20">
          <h1 className="text-3xl font-black">Test Series नहीं मिली</h1>
          <Link href="/test-series" className="mt-6 inline-block text-cyan-400">
            ← Test Series पर वापस जाएँ
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <Link
          href="/test-series"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All Test Series
        </Link>

        <section className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/10 p-6 sm:p-10">
          <div className="text-xs font-black tracking-[0.2em] text-cyan-400">
            {series.badge}
          </div>

          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            {series.title}
          </h1>

          <p className="mt-3 text-lg text-slate-400">
            {series.subtitle}
          </p>

          <p className="mt-5 max-w-2xl leading-7 text-slate-500">
            {series.description}
          </p>
        </section>

        <section className="mt-10">
          <div className="text-xs font-black tracking-[0.2em] text-cyan-400">
            AVAILABLE TESTS
          </div>

          <h2 className="mt-2 text-3xl font-black">
            Tests
          </h2>

          {series.tests.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-slate-500">
              Tests जल्द उपलब्ध होंगे।
            </div>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {series.tests.map((test) => (
                <div
                  key={test.id}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                      <ClipboardCheck className="h-6 w-6 text-cyan-300" />
                    </div>

                    <span className="text-xs font-black text-emerald-300">
                      {test.status}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black">
                    {test.title}
                  </h3>

                  {test.subtitle && (
                    <p className="mt-2 text-sm text-slate-500">
                      {test.subtitle}
                    </p>
                  )}

                  <div className="mt-5 flex gap-3">
                    <span className="rounded-xl border border-white/10 px-3 py-2 text-xs text-slate-400">
                      {test.questions} Questions
                    </span>

                    <span className="inline-flex items-center gap-1 rounded-xl border border-white/10 px-3 py-2 text-xs text-slate-400">
                      <Clock3 className="h-3.5 w-3.5" />
                      {test.duration} Min
                    </span>
                  </div>

                  <Link
                    href={test.href || "/mock-tests/uppcs-test-1"}
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-black"
                  >
                    Start Test
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
