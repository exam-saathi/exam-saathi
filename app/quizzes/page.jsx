import Link from "next/link";
import {
  BookOpen,
  Clock,
  Trophy,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const quizzes = [
  {
    id: "uppcs-general",
    title: "UPPCS सामान्य अध्ययन अभ्यास टेस्ट",
    subject: "सामान्य अध्ययन",
    questions: 20,
    duration: 20,
    marks: 20,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: "history-basic",
    title: "भारतीय इतिहास — बेसिक टेस्ट",
    subject: "इतिहास",
    questions: 15,
    duration: 15,
    marks: 15,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "polity-basic",
    title: "भारतीय राजव्यवस्था अभ्यास टेस्ट",
    subject: "राजव्यवस्था",
    questions: 20,
    duration: 20,
    marks: 20,
    color: "from-emerald-500 to-teal-600",
  },
];

export default function QuizzesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-slate-950 px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">

          <div className="mb-3 flex items-center gap-2 text-blue-400">
            <Sparkles size={18} />
            <span className="text-sm font-bold">
              ExamSathi Practice Zone
            </span>
          </div>

          <h1 className="text-3xl font-black sm:text-4xl">
            अभ्यास <span className="text-orange-500">टेस्ट</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            अपनी तैयारी को मजबूत करने के लिए विषयवार अभ्यास टेस्ट दें
            और अपनी performance को बेहतर बनाएं।
          </p>

        </div>
      </section>

      {/* Quiz List */}
      <section className="mx-auto max-w-7xl px-4 py-8">

        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-black text-slate-900">
              उपलब्ध टेस्ट
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              अपनी पसंद का टेस्ट चुनें
            </p>
          </div>

          <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
            {quizzes.length} Tests
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${quiz.color} p-6 text-white`}
              >
                <div className="flex items-start justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                    <BookOpen size={24} />
                  </div>

                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold">
                    Practice
                  </span>

                </div>

                <h3 className="mt-5 text-lg font-black leading-7">
                  {quiz.title}
                </h3>

                <p className="mt-1 text-sm text-white/80">
                  {quiz.subject}
                </p>
              </div>

              {/* Details */}
              <div className="p-5">

                <div className="grid grid-cols-3 gap-2">

                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <BookOpen
                      size={17}
                      className="mx-auto text-blue-600"
                    />

                    <p className="mt-1 text-sm font-black text-slate-800">
                      {quiz.questions}
                    </p>

                    <p className="text-[11px] text-slate-500">
                      प्रश्न
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <Clock
                      size={17}
                      className="mx-auto text-orange-500"
                    />

                    <p className="mt-1 text-sm font-black text-slate-800">
                      {quiz.duration}
                    </p>

                    <p className="text-[11px] text-slate-500">
                      मिनट
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3 text-center">
                    <Trophy
                      size={17}
                      className="mx-auto text-emerald-500"
                    />

                    <p className="mt-1 text-sm font-black text-slate-800">
                      {quiz.marks}
                    </p>

                    <p className="text-[11px] text-slate-500">
                      अंक
                    </p>
                  </div>

                </div>

                <Link
                  href={`/quizzes/${quiz.id}`}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 font-bold text-white transition hover:bg-blue-600"
                >
                  टेस्ट शुरू करें
                  <ArrowRight size={18} />
                </Link>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Developer */}
      <div className="px-4 pb-8 text-center">
        <p className="text-xs text-slate-400">
          Developer by{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text font-black text-transparent">
            LOYAL ji
          </span>
          {" "}✦
        </p>
      </div>

    </main>
  );
}
