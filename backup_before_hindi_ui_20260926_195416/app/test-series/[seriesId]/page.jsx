"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ClipboardCheck,
  Clock3,
  Play,
} from "lucide-react";

const examNames = {
  uppsc: "UPPCS",
  upsc: "UPSC",
  ssc: "SSC",
  railway: "Railway",
  banking: "Banking",
  police: "Police",
};

export default function SeriesDetailPage() {
  const params = useParams();

  const exam =
    examNames[params.seriesId] || "Government Exam";

  const tests = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 to-orange-500 text-white">
        <div className="mx-auto max-w-5xl px-5 py-9">

          <Link
            href="/test-series"
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-white/90"
          >
            <ArrowLeft size={18} />
            सभी Test Series
          </Link>

          <p className="text-sm font-bold tracking-widest text-white/80">
            EXAMSATHI TEST SERIES
          </p>

          <h1 className="mt-2 text-4xl font-black">
            {exam}
          </h1>

          <p className="mt-2 text-white/90">
            Test 1 से Test 20 तक
          </p>

        </div>
      </section>

      {/* Tests */}
      <section className="mx-auto max-w-5xl px-5 py-9">

        <div className="mb-6">
          <h2 className="text-2xl font-black text-slate-900">
            {exam} Test Series
          </h2>

          <p className="text-slate-500">
            अभी questions नहीं जोड़े गए हैं। पहले test structure तैयार है।
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {tests.map((test) => (
            <Link
              key={test}
              href={`/quizzes/${params.seriesId}-test-${test}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                    {test}
                  </div>

                  <div>
                    <h3 className="font-black text-slate-900">
                      Test {test}
                    </h3>

                    <p className="text-xs text-slate-500">
                      {exam} Practice Test
                    </p>
                  </div>

                </div>

                <Play
                  size={20}
                  className="text-orange-500 transition group-hover:translate-x-1"
                />

              </div>

              <div className="mt-4 flex gap-3 text-xs text-slate-500">

                <span className="flex items-center gap-1">
                  <ClipboardCheck size={14} />
                  Questions
                </span>

                <span className="flex items-center gap-1">
                  <Clock3 size={14} />
                  Mock Test
                </span>

              </div>

            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}
