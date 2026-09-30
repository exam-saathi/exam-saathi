import Link from "next/link";
import { batches } from "@/data/batches";

export default function BatchesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="mb-10">
          <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-xs font-bold text-orange-300">
            LOYAL ACADEMY
          </span>

          <h1 className="mt-5 text-4xl font-black sm:text-5xl">
            Explore Our
            <span className="ml-2 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Batches
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Competitive exams की तैयारी के लिए structured courses,
            classes, notes और tests एक ही जगह।
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {batches.map((batch) => (
            <article
              key={batch.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  {batch.category}
                </span>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold text-emerald-300">
                  {batch.status}
                </span>
              </div>

              <h2 className="mt-5 text-2xl font-black">
                {batch.title}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {batch.subtitle}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl bg-white/[0.04] p-3">
                  <span className="text-slate-500">Faculty</span>
                  <p className="mt-1 font-bold">{batch.faculty}</p>
                </div>

                <div className="rounded-xl bg-white/[0.04] p-3">
                  <span className="text-slate-500">Language</span>
                  <p className="mt-1 font-bold">{batch.language}</p>
                </div>
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <span className="text-xs text-slate-500">Starting</span>
                  <div className="text-xl font-black text-orange-300">
                    {batch.price}
                  </div>
                </div>

                <Link
                  href={`/batches/${batch.id}`}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-black"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
