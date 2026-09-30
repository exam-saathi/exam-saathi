import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  PlayCircle,
  Users,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/common/Navbar";
import { batches } from "@/data/batches";

export default function BatchesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300">
              <GraduationCap className="h-4 w-4" />
              LOYAL ACADEMY
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
              Learn.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Practice. Succeed.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-slate-400">
              Competitive exams की तैयारी के लिए structured batches,
              video classes, study resources और practice एक ही जगह।
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {batches.map((batch) => (
              <BatchCard key={batch.id} batch={batch} />
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}


function BatchCard({ batch }) {
  const live = batch.status === "LIVE";

  return (
    <Link
      href={`/batches/${batch.id}`}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
    >

      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
          <BookOpen className="h-6 w-6 text-cyan-300" />
        </div>

        <span
          className={`rounded-full px-3 py-1 text-[10px] font-black ${
            live
              ? "bg-emerald-400/10 text-emerald-300"
              : "bg-orange-400/10 text-orange-300"
          }`}
        >
          {batch.status}
        </span>

      </div>

      <div className="relative mt-6">

        <div className="text-[10px] font-black tracking-[0.2em] text-cyan-400">
          {batch.badge}
        </div>

        <h2 className="mt-2 text-xl font-black">
          {batch.title}
        </h2>

        <p className="mt-2 text-sm font-semibold text-slate-300">
          {batch.subtitle}
        </p>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
          {batch.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {batch.subjects.slice(0, 3).map((subject) => (
            <span
              key={subject}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] text-slate-400"
            >
              {subject}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <PlayCircle className="h-4 w-4 text-cyan-400" />
            {batch.sessions.length} Sessions
          </div>

          <span className="flex items-center gap-1 text-sm font-bold text-cyan-300">
            Open
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>

        </div>

      </div>
    </Link>
  );
}
