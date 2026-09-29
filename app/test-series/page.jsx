import Link from "next/link";
import { ArrowRight, ClipboardCheck, Clock3 } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import { testSeries } from "@/data/test-series";

export default function TestSeriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
          Exam Saathi • Test Series
        </p>

        <h1 className="mt-3 text-4xl font-black sm:text-5xl">
          Test <span className="text-cyan-400">Series</span>
        </h1>

        <p className="mt-4 max-w-2xl text-slate-400">
          Exam-wise structured test series — Batches और Mock Tests से अलग।
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testSeries.map((series) => (
            <Link
              key={series.id}
              href={`/test-series/${series.id}`}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-400/40"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                  <ClipboardCheck className="h-7 w-7 text-cyan-300" />
                </div>

                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-300">
                  {series.status}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-black">{series.title}</h2>
              <p className="mt-2 text-cyan-300">{series.subtitle}</p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {series.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-sm text-slate-500">
                  {series.tests?.length || 0} Tests
                </span>

                <span className="flex items-center gap-2 font-bold text-cyan-300">
                  Open Series
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
