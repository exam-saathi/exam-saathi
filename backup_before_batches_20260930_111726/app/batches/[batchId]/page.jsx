import Link from "next/link";
import { notFound } from "next/navigation";
import { batches } from "@/data/batches";

export function generateStaticParams() {
  return batches.map((batch) => ({
    batchId: batch.id,
  }));
}

export default async function BatchDetailPage({ params }) {
  const { batchId } = await params;

  const batch = batches.find((item) => item.id === batchId);

  if (!batch) notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="border-b border-white/10 bg-gradient-to-br from-blue-950/60 via-slate-950 to-cyan-950/30">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <Link
            href="/batches"
            className="text-sm font-bold text-cyan-400"
          >
            ← All Batches
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">

            <div>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300">
                {batch.category}
              </span>

              <h1 className="mt-6 text-4xl font-black sm:text-6xl">
                {batch.title}
              </h1>

              <p className="mt-4 text-xl text-slate-400">
                {batch.subtitle}
              </p>

              <p className="mt-6 max-w-3xl leading-7 text-slate-300">
                {batch.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <Badge text={batch.language} />
                <Badge text={batch.type} />
                <Badge text={batch.duration} />
                <Badge text={`${batch.validity} Validity`} />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
              <div className="text-sm text-slate-500">Course Price</div>

              <div className="mt-2 text-4xl font-black text-orange-300">
                {batch.price}
              </div>

              {batch.oldPrice && (
                <div className="mt-1 text-sm text-slate-500 line-through">
                  {batch.oldPrice}
                </div>
              )}

              <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 px-6 py-4 font-black text-slate-950">
                Enroll Now
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                Secure enrollment • Student support available
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <SectionTitle title="What You Get" />

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {batch.features.map((feature) => (
            <div
              key={feature}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 font-bold"
            >
              ✓ {feature}
            </div>
          ))}
        </div>

        <SectionTitle title="Subjects" />

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {batch.subjects.map((subject) => (
            <div
              key={subject}
              className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-slate-200"
            >
              {subject}
            </div>
          ))}
        </div>

        <SectionTitle title="Sessions / Lectures" />

        <div className="mt-6 space-y-3">
          {batch.sessions.length === 0 ? (
            <Empty text="Sessions जल्द उपलब्ध होंगे।" />
          ) : (
            batch.sessions.map((session, index) => (
              <div
                key={session.id}
                className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-cyan-400">
                    LECTURE {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="mt-1 text-lg font-black">
                    {session.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {session.description}
                  </p>
                </div>

                {session.videoUrl ? (
                  <a
                    href={session.videoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-red-600 px-5 py-3 text-center text-sm font-black"
                  >
                    ▶ Watch Class
                  </a>
                ) : (
                  <span className="rounded-xl bg-white/5 px-5 py-3 text-center text-sm font-bold text-slate-500">
                    Coming Soon
                  </span>
                )}
              </div>
            ))
          )}
        </div>

        <SectionTitle title="Study Material" />

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {batch.notes.length === 0 ? (
            <Empty text="Study material जल्द उपलब्ध होगा।" />
          ) : (
            batch.notes.map((note) => (
              <a
                key={note.title}
                href={note.url}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 font-bold transition hover:border-cyan-400/30"
              >
                📄 {note.title}
              </a>
            ))
          )}
        </div>

        <SectionTitle title="Practice Tests" />

        <div className="mt-6 space-y-3">
          {batch.tests.length === 0 ? (
            <Empty text="Tests जल्द उपलब्ध होंगे।" />
          ) : (
            batch.tests.map((test) => (
              <div
                key={test.id}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div>
                  <h3 className="font-black">{test.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {test.questions} Questions • {test.duration} Minutes
                  </p>
                </div>

                <span className="rounded-xl border border-cyan-400/20 px-4 py-2 text-xs font-bold text-cyan-300">
                  Practice
                </span>
              </div>
            ))
          )}
        </div>

      </section>
    </main>
  );
}

function Badge({ text }) {
  return (
    <span className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-slate-300">
      {text}
    </span>
  );
}

function SectionTitle({ title }) {
  return (
    <h2 className="mt-14 text-2xl font-black">
      {title}
    </h2>
  );
}

function Empty({ text }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-sm text-slate-500">
      {text}
    </div>
  );
}
