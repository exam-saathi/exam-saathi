
import Link from "next/link";
import { ArrowLeft, BookOpen, PlayCircle, Youtube } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import { batches } from "@/data/batches";

export default async function BatchDetailPage({ params }) {
  const { batchId } = await params;
  const batch = batches.find((item) => item.id === batchId);

  if (!batch) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <div className="mx-auto max-w-4xl px-4 py-20">
          <h1 className="text-3xl font-black">Batch नहीं मिला</h1>
          <Link href="/batches" className="mt-6 inline-block text-cyan-400">
            ← Batches पर वापस जाएँ
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
          href="/batches"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All Batches
        </Link>

        <section className="mt-8 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/10 p-6 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-xs font-black tracking-[0.2em] text-purple-400">
                {batch.badge}
              </div>

              <h1 className="mt-3 text-4xl font-black sm:text-5xl">
                {batch.title}
              </h1>

              <p className="mt-3 text-lg text-slate-400">
                {batch.subtitle}
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-slate-500">
                {batch.description}
              </p>

              <div className="mt-5 text-sm font-bold text-slate-400">
                Faculty: <span className="text-white">{batch.teacher}</span>
              </div>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10">
              <BookOpen className="h-8 w-8 text-purple-300" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {batch.subjects.map((subject) => (
              <span
                key={subject}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-300"
              >
                {subject}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs font-black tracking-[0.2em] text-cyan-400">
                LEARNING SESSIONS
              </div>
              <h2 className="mt-2 text-3xl font-black">
                Lectures
              </h2>
            </div>
          </div>

          {batch.sessions.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-slate-500">
              Lectures जल्द उपलब्ध होंगे।
            </div>
          ) : (
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {batch.sessions.map((session, index) => (
                <a
                  key={session.id}
                  href={session.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-200 hover:-translate-y-1 hover:border-red-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10">
                      <Youtube className="h-6 w-6 text-red-400" />
                    </div>

                    <span className="text-xs font-black text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-black">
                    {session.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {session.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 font-bold text-red-300">
                    <PlayCircle className="h-5 w-5" />
                    Watch Lecture
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
