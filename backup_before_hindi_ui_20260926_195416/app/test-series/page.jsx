"use client";

import Link from "next/link";
import {
  ClipboardList,
  ArrowRight,
  Trophy,
  Clock3,
  FileCheck2,
} from "lucide-react";

const exams = [
  {
    id: "uppsc",
    title: "UPPCS",
    subtitle: "उत्तर प्रदेश लोक सेवा आयोग",
    tests: 20,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "upsc",
    title: "UPSC",
    subtitle: "Civil Services Examination",
    tests: 20,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "ssc",
    title: "SSC",
    subtitle: "Staff Selection Commission",
    tests: 20,
    color: "from-purple-600 to-blue-600",
  },
  {
    id: "railway",
    title: "Railway",
    subtitle: "RRB Competitive Exams",
    tests: 20,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "banking",
    title: "Banking",
    subtitle: "Banking Examination",
    tests: 20,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "police",
    title: "Police",
    subtitle: "Police & Constable Exams",
    tests: 20,
    color: "from-slate-700 to-slate-950",
  },
];

export default function TestSeriesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-orange-500 text-white">
        <div className="mx-auto max-w-6xl px-5 py-12">

          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
              <ClipboardList size={30} />
            </div>

            <span className="font-bold tracking-widest">
              EXAMSATHI TEST SERIES
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-black sm:text-6xl">
            All Government Exams
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-blue-50">
            विभिन्न प्रतियोगी परीक्षाओं के लिए structured test series।
            हर परीक्षा के लिए Test 1 से Test 20 तक अभ्यास करें।
          </p>

        </div>
      </section>

      {/* Exam Cards */}
      <section className="mx-auto max-w-6xl px-5 py-10">

        <div className="mb-7">
          <h2 className="text-2xl font-black text-slate-900">
            परीक्षा चुनें
          </h2>

          <p className="mt-1 text-slate-500">
            अपनी परीक्षा की Test Series खोलें।
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {exams.map((exam) => (
            <Link
              key={exam.id}
              href={`/test-series/${exam.id}`}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className={`h-3 bg-gradient-to-r ${exam.color}`} />

              <div className="p-6">

                <div className="flex items-start justify-between">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${exam.color} text-xl font-black text-white`}
                  >
                    {exam.title.charAt(0)}
                  </div>

                  <ArrowRight
                    size={24}
                    className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                  />

                </div>

                <h3 className="mt-5 text-2xl font-black text-slate-900">
                  {exam.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {exam.subtitle}
                </p>

                <div className="mt-6 flex gap-3">

                  <div className="flex items-center gap-2 rounded-xl bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">
                    <FileCheck2 size={16} />
                    {exam.tests} Tests
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-orange-50 px-3 py-2 text-sm font-semibold text-orange-600">
                    <Clock3 size={16} />
                    Practice
                  </div>

                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* Info */}
        <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm">

          <div className="flex gap-4">

            <div className="rounded-2xl bg-orange-50 p-4 text-orange-500">
              <Trophy size={28} />
            </div>

            <div>
              <h3 className="font-black text-slate-900">
                नियमित अभ्यास करें
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                प्रत्येक Test के बाद अपना score और performance analysis देखें।
              </p>
            </div>

          </div>

        </div>

      </section>

      <footer className="border-t bg-white py-6 text-center text-sm text-slate-500">
        <p>© 2026 ExamSathi</p>
        <p className="mt-1 font-bold text-blue-600">
          Developed by LOYAL ji
        </p>
      </footer>

    </main>
  );
}
