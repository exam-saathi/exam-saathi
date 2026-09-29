"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  PlayCircle,
  FileText,
  CheckCircle2,
  Clock3,
  BookOpen,
} from "lucide-react";

const lessons = {
  "earth-structure": {
    title: "पृथ्वी की संरचना",
    subject: "Geography",
    chapter: "Physical Geography",
    duration: "45 min",
  },
  "earth-movements": {
    title: "पृथ्वी की गतियाँ",
    subject: "Geography",
    chapter: "Physical Geography",
    duration: "40 min",
  },
  "indian-rivers": {
    title: "भारत की नदियाँ",
    subject: "Geography",
    chapter: "Indian Geography",
    duration: "50 min",
  },
};

export default function LessonPage() {
  const params = useParams();

  const lessonId = params?.lessonId || "earth-structure";
  const lesson = lessons[lessonId] || {
    title: "Lecture",
    subject: params?.batchId || "Subject",
    chapter: "Chapter",
    duration: "45 min",
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 text-white">
        <div className="mx-auto max-w-5xl px-5 py-7">
          <Link
            href={`/batches/${params?.batchId}`}
            className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur hover:bg-white/25"
          >
            <ArrowLeft size={18} />
            Back to Classes
          </Link>

          <p className="mt-7 text-sm font-bold text-blue-100">
            {lesson.subject} • {lesson.chapter}
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-5xl">
            {lesson.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-8">
        {/* VIDEO */}
        <div className="overflow-hidden rounded-3xl bg-slate-950 shadow-xl">
          <div className="flex aspect-video items-center justify-center">
            <div className="text-center text-white">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 shadow-lg">
                <PlayCircle size={42} />
              </div>

              <h2 className="mt-5 text-xl font-black">
                Video Lecture
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Video यहाँ add किया जाएगा
              </p>
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border bg-white p-5">
            <BookOpen className="text-blue-600" />
            <p className="mt-3 text-xs text-slate-400">Subject</p>
            <p className="font-black text-slate-800">
              {lesson.subject}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <Clock3 className="text-orange-500" />
            <p className="mt-3 text-xs text-slate-400">Duration</p>
            <p className="font-black text-slate-800">
              {lesson.duration}
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-5">
            <CheckCircle2 className="text-emerald-500" />
            <p className="mt-3 text-xs text-slate-400">Status</p>
            <p className="font-black text-slate-800">
              Ready to Learn
            </p>
          </div>
        </div>

        {/* NOTES */}
        <div className="mt-6 rounded-3xl border bg-white p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-orange-50 p-4 text-orange-500">
              <FileText size={27} />
            </div>

            <div className="flex-1">
              <h2 className="text-xl font-black text-slate-900">
                Lecture Notes
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                इस lecture की PDF notes यहाँ उपलब्ध कराई जा सकती हैं।
              </p>

              <button
                type="button"
                className="mt-5 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
              >
                PDF Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* COMPLETE */}
        <div className="mt-6 rounded-3xl bg-blue-50 p-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="mt-1 text-blue-600" />

            <div>
              <h3 className="font-black text-slate-900">
                Lecture पूरा करने के बाद
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Lecture revise करें और फिर Test Series से practice करें।
              </p>

              <Link
                href="/test-series"
                className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700"
              >
                Practice Tests
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-7 text-center">
        <p className="text-sm text-slate-400">ExamSathi</p>
        <p className="mt-1 text-sm font-black">
          Developed by <span className="text-blue-600">LOYAL ji</span>
        </p>
      </footer>
    </main>
  );
}
