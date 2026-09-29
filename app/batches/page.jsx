
import Link from "next/link";
import { ArrowRight, BookOpen, PlayCircle, Sparkles } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import { batches } from "@/data/batches";

export default function BatchesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-2 text-xs font-bold text-purple-300">
            <Sparkles className="h-4 w-4" />
            LEARNING BATCHES
          </div>

          <h1 className="mt-6 text-4xl font-black sm:text-6xl">
            Learn.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Practice. Achieve.
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-slate-400">
            Subject-wise classes, lectures और learning sessions को
            एक professional batch structure में access करें।
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {batches.map((batch) => (
              <Link
                key={batch.id}
                href={`/batches/${batch.id}`}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-200 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
                    <BookOpen className="h-7 w-7 text-purple-300" />
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-black text-emerald-300">
                    {batch.status}
                  </span>
                </div>

                <div className="mt-6 text-xs font-bold uppercase tracking-wider text-purple-400">
                  {batch.badge}
                </div>

                <h2 className="mt-2 text-2xl font-black">
                  {batch.title}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  {batch.subtitle}
                </p>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {batch.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {batch.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-400"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-300">
                    <PlayCircle className="h-4 w-4 text-purple-400" />
                    {batch.sessions.length} Lectures
                  </span>

                  <span className="inline-flex items-center gap-2 font-bold text-purple-300">
                    Open Batch
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
