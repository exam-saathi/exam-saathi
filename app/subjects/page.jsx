import Link from "next/link";
import {
  ArrowRight,
  Atom,
  BarChart3,
  BookOpen,
  Globe2,
  GraduationCap,
  History,
  Map,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/common/Navbar";

const subjects = [
  {
    title: "भारतीय राजव्यवस्था",
    english: "Indian Polity",
    icon: ShieldCheck,
    chapters: "12 Chapters",
    description: "संविधान, संसद, राष्ट्रपति, न्यायपालिका और शासन व्यवस्था।",
  },
  {
    title: "इतिहास",
    english: "History",
    icon: History,
    chapters: "10 Chapters",
    description: "प्राचीन, मध्यकालीन और आधुनिक भारतीय इतिहास की तैयारी।",
  },
  {
    title: "भूगोल",
    english: "Geography",
    icon: Globe2,
    chapters: "10 Chapters",
    description: "भौतिक भूगोल, भारत का भूगोल और विश्व भूगोल।",
  },
  {
    title: "अर्थव्यवस्था",
    english: "Economy",
    icon: BarChart3,
    chapters: "8 Chapters",
    description: "बजट, बैंकिंग, मुद्रास्फीति, विकास और भारतीय अर्थव्यवस्था।",
  },
  {
    title: "विज्ञान",
    english: "Science",
    icon: Atom,
    chapters: "8 Chapters",
    description: "भौतिकी, रसायन विज्ञान, जीवविज्ञान और विज्ञान-तकनीक।",
  },
  {
    title: "उत्तर प्रदेश विशेष",
    english: "Uttar Pradesh Special",
    icon: Map,
    chapters: "12 Chapters",
    description: "UP GK, इतिहास, भूगोल, योजनाएं और महत्वपूर्ण तथ्य।",
  },
];

export default function SubjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-[-10%] top-[-20%] h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-10%] top-[10%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300">
              <Sparkles className="h-4 w-4" />
              SMART SUBJECT LEARNING
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
              विषय चुनें,
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                तैयारी शुरू करें।
              </span>
            </h1>

            <p className="mt-5 max-w-2xl leading-7 text-slate-400">
              Subject → Chapter → Topic → Test के आसान flow में अपनी तैयारी
              को व्यवस्थित करें।
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject) => {
              const Icon = subject.icon;

              return (
                <Link
                  key={subject.title}
                  href="/quizzes"
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl transition group-hover:bg-cyan-400/10" />

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-400/10 text-cyan-300">
                      <Icon className="h-7 w-7" />
                    </div>

                    <ArrowRight className="h-5 w-5 text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
                  </div>

                  <div className="relative mt-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      {subject.english}
                    </div>

                    <h2 className="mt-2 text-xl font-black">
                      {subject.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {subject.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="text-xs font-semibold text-slate-500">
                        {subject.chapters}
                      </span>

                      <span className="text-xs font-bold text-cyan-400">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-600/10 to-cyan-500/5 p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
                <GraduationCap className="h-6 w-6 text-cyan-300" />
              </div>

              <div>
                <h3 className="font-black">Topic-wise Practice</h3>
                <p className="mt-1 text-sm text-slate-500">
                  किसी भी विषय को चुनकर practice questions शुरू करें।
                </p>
              </div>
            </div>

            <Link
              href="/mock-tests"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-bold"
            >
              Mock Tests
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
