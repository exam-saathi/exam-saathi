import Link from "next/link";
import { ArrowRight, BookOpen, PlayCircle, Users } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import { batches } from "@/data/batches";

export default function BatchesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Exam Saathi • Learning
          </p>
          <h1 className="mt-3 text-4xl font-black sm:text-5xl">
            Premium <span className="text-cyan-400">Batches</span>
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">
            व्यवस्थित classes, subjects और learning sessions एक ही जगह।
          </p>
        </div>

        {batches.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <BookOpen className="mx-auto h-10 w-10 text-cyan-400" />
            <h2 className="mt-4 text-xl font-black">कोई Batch उपलब्ध नहीं है</h2>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {batches.map((batch) => (
              <Link
                key={batch.id}
                href={`/batches/${batch.id}`}
                className="group block rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                    <BookOpen className="h-7 w-7 text-cyan-300" />
                  </div>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-300">
                    {batch.status}
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-black">{batch.title}</h2>
                <p className="mt-2 text-cyan-300">{batch.subtitle}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {batch.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {batch.subjects?.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="flex items-center gap-2 text-sm text-slate-400">
                    <Users className="h-4 w-4" />
                    {batch.teacher}
                  </span>

                  <span className="flex items-center gap-2 font-bold text-cyan-300">
                    Open Batch
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
