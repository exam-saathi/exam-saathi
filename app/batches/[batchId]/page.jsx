import Link from "next/link";
import { ArrowLeft, PlayCircle, BookOpen, UserRound } from "lucide-react";

import Navbar from "@/components/common/Navbar";
import { batches } from "@/data/batches";

export function generateStaticParams() {
  return batches.map((batch) => ({
    batchId: batch.id,
  }));
}

export default async function BatchPage({ params }) {
  const { batchId } = await params;

  const batch = batches.find((item) => item.id === batchId);

  if (!batch) {
    return (
      <main className="min-h-screen bg-slate-950 p-8 text-white">
        Batch नहीं मिला।
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">

        <Link
          href="/batches"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All Batches
        </Link>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/10 p-6 sm:p-10">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

            <div>
              <div className="text-xs font-black tracking-[0.2em] text-cyan-400">
                {batch.badge}
              </div>

              <h1 className="mt-3 text-3xl font-black sm:text-5xl">
                {batch.title}
              </h1>

              <p className="mt-3 text-lg text-slate-300">
                {batch.subtitle}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                {batch.description}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
              <UserRound className="h-4 w-4 text-cyan-400" />
              {batch.teacher}
            </div>

          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {batch.subjects.map((subject) => (
              <span
                key={subject}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
              >
                {subject}
              </span>
            ))}
          </div>

        </div>


        <div className="mt-10">

          <div className="mb-5">
            <div className="text-xs font-black tracking-[0.2em] text-cyan-400">
              COURSE SESSIONS
            </div>

            <h2 className="mt-2 text-2xl font-black">
              Classes & Lectures
            </h2>
          </div>


          {batch.sessions.length === 0 ? (

            <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.03] p-10 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-slate-600" />

              <h3 className="mt-4 font-bold">
                Sessions जल्द जोड़े जाएंगे
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                इस batch में नई classes और study sessions जल्द उपलब्ध होंगे।
              </p>
            </div>

          ) : (

            <div className="grid gap-4">

              {batch.sessions.map((session, index) => (

                <a
                  key={session.id}
                  href={session.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.06]"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                    <PlayCircle className="h-6 w-6 text-red-400" />
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="text-[10px] font-bold text-cyan-400">
                      LECTURE {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="mt-1 truncate font-bold">
                      {session.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {session.description}
                    </p>

                  </div>

                  <span className="hidden text-sm font-bold text-cyan-300 sm:block">
                    Watch
                  </span>

                </a>

              ))}

            </div>

          )}

        </div>

      </section>
    </main>
  );
}
