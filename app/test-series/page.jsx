
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Clock3, Trophy, Sparkles } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import { testSeries } from "@/data/test-series";

export default function TestSeriesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300">
            <Sparkles className="h-4 w-4" />
            TEST SERIES
          </div>

          <h1 className="mt-6 text-4xl font-black sm:text-6xl">
            Exam-focused
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Test Series
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-slate-400">
            परीक्षा के अनुसार structured test series, timer, questions,
            score और detailed solutions के साथ।
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testSeries.map((series) => (
              <Link
                key={series.id}
                href={`/test-series/${series.id}`}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                    <ClipboardCheck className="h-7 w-7 text-cyan-300" />
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-black text-emerald-300">
                    {series.status}
                  </span>
                </div>

                <div className="mt-6 text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {series.exam}
                </div>

                <h2 className="mt-2 text-2xl font-black">
                  {series.title}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  {series.subtitle}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {series.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-300">
                    {series.tests.length} Test
                    {series.tests.length !== 1 ? "s" : ""}
                  </span>

                  <span className="inline-flex items-center gap-2 font-bold text-cyan-300">
                    Open Series
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 pb-20 md:grid-cols-3 sm:px-6 lg:px-8">
        <Feature icon={Clock3} title="Real Timer" text="Exam जैसा timed practice." />
        <Feature icon={ClipboardCheck} title="Detailed Tests" text="Structured questions और attempts." />
        <Feature icon={Trophy} title="Performance" text="Score और progress tracking." />
      </section>
    </main>
  );
}

function Feature({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <Icon className="h-6 w-6 text-cyan-400" />
      <h3 className="mt-4 font-black">{title}</h3>
      <p className="mt-2 text-sm text-slate-500">{text}</p>
    </div>
  );
}
