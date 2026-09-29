import Link from "next/link";
import { ArrowLeft, ArrowRight, ClipboardCheck, Clock3 } from "lucide-react";
import Navbar from "@/components/common/Navbar";
import { testSeries } from "@/data/test-series";

export default async function SeriesDetailPage({ params }) {
  const { seriesId } = await params;
  const series = testSeries.find((item) => item.id === seriesId);

  if (!series) {
    return (
      <main className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <div className="px-4 py-20 text-center">
          <h1 className="text-3xl font-black">Test Series नहीं मिली</h1>
          <Link href="/test-series" className="mt-6 inline-block text-cyan-400">
            ← सभी Test Series
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
          href="/test-series"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All Test Series
        </Link>

        <div className="mt-8 rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-600/10 via-slate-900 to-cyan-500/10 p-8">
          <ClipboardCheck className="h-10 w-10 text-cyan-300" />

          <h1 className="mt-5 text-4xl font-black">{series.title}</h1>
          <p className="mt-2 text-lg text-cyan-300">{series.subtitle}</p>
          <p className="mt-4 text-slate-400">{series.description}</p>
        </div>

        <div className="mt-10 space-y-4">
          {series.tests?.map((test) => (
            <Link
              key={test.id}
              href={`/test-series/${series.id}/${test.id}`}
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-400/40 hover:bg-white/[0.07]"
            >
              <div>
                <h2 className="font-black">{test.title}</h2>

                <div className="mt-2 flex flex-wrap gap-4 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <ClipboardCheck className="h-4 w-4" />
                    {test.questions} Questions
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock3 className="h-4 w-4" />
                    {test.duration} Minutes
                  </span>
                </div>
              </div>

              <ArrowRight className="h-5 w-5 text-cyan-400 transition group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
