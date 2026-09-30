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
