import Link from "next/link";
import { ArrowLeft, BookOpen, PlayCircle } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import { batches } from "@/data/batches";

export default async function BatchDetailPage({ params }) {
  const { batchId } = await params;
  const batch = batches.find((item) => item.id === batchId);

  if (!batch) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h1 className="text-3xl font-black">Batch नहीं मिला</h1>
          <Link href="/batches" className="mt-6 inline-block text-cyan-400">
            ← सभी Batches
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/batches"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All Batches
        </Link>

        <div className="mt-8 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 p-7 sm:p-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
            <BookOpen className="h-8 w-8 text-cyan-300" />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-cyan-400">
            {batch.badge}
          </p>

          <h1 className="mt-2 text-4xl font-black">{batch.title}</h1>
          <p className="mt-3 text-lg text-cyan-300">{batch.subtitle}</p>
          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            {batch.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {batch.subjects?.map((subject) => (
              <span
                key={subject}
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
            Sessions
          </p>

          <h2 className="mt-2 text-2xl font-black">Learning Sessions</h2>

          {batch.sessions?.length ? (
            <div className="mt-6 grid gap-4">
              {batch.sessions.map((session, index) => (
                <a
                  key={session.id || index}
                  href={session.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-red-400/30 hover:bg-white/[0.07]"
                >
                  <div className="flex items-center gap-4">
                    <PlayCircle className="h-7 w-7 text-red-400" />
                    <div>
                      <h3 className="font-black">{session.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {session.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-red-400">
                    YouTube →
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-slate-500">
              Sessions जल्द जोड़े जाएंगे।
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
