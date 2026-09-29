"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  PlayCircle,
  FileText,
  CheckCircle2,
  Clock3,
  GraduationCap,
} from "lucide-react";

const subjects = {
  geography: {
    title: "Geography",
    hindi: "भूगोल",
    subtitle: "भारत एवं विश्व भूगोल",
    description:
      "प्रतियोगी परीक्षाओं के लिए Geography की structured और exam-oriented preparation.",
    gradient: "from-blue-700 via-blue-600 to-cyan-500",
    chapters: [
      {
        title: "Chapter 1 — Physical Geography",
        lessons: [
          "पृथ्वी की संरचना",
          "पृथ्वी की गतियाँ",
          "महाद्वीप एवं महासागर",
          "पर्वत, पठार और मैदान",
        ],
      },
      {
        title: "Chapter 2 — Indian Geography",
        lessons: [
          "भारत की भौगोलिक स्थिति",
          "भारत की नदियाँ",
          "भारत की पर्वत श्रेणियाँ",
          "भारतीय जलवायु",
        ],
      },
      {
        title: "Chapter 3 — Indian Resources",
        lessons: [
          "खनिज संसाधन",
          "ऊर्जा संसाधन",
          "कृषि",
          "उद्योग",
        ],
      },
      {
        title: "Chapter 4 — World Geography",
        lessons: [
          "विश्व की प्रमुख नदियाँ",
          "विश्व के पर्वत",
          "जलवायु प्रदेश",
          "महत्वपूर्ण भौगोलिक तथ्य",
        ],
      },
    ],
  },

  history: {
    title: "History",
    hindi: "इतिहास",
    subtitle: "प्राचीन से आधुनिक भारत",
    description:
      "Ancient, Medieval और Modern History की structured preparation.",
    gradient: "from-orange-600 via-orange-500 to-red-500",
    chapters: [
      {
        title: "Chapter 1 — Ancient History",
        lessons: [
          "सिंधु घाटी सभ्यता",
          "वैदिक काल",
          "महाजनपद",
          "मौर्य साम्राज्य",
        ],
      },
      {
        title: "Chapter 2 — Medieval History",
        lessons: [
          "दिल्ली सल्तनत",
          "मुगल साम्राज्य",
          "भक्ति आंदोलन",
          "सूफी आंदोलन",
        ],
      },
      {
        title: "Chapter 3 — Modern History",
        lessons: [
          "यूरोपीय कंपनियों का आगमन",
          "1857 का विद्रोह",
          "भारतीय राष्ट्रीय आंदोलन",
          "स्वतंत्रता और विभाजन",
        ],
      },
    ],
  },

  polity: {
    title: "Polity",
    hindi: "भारतीय राजव्यवस्था",
    subtitle: "Constitution & Governance",
    description:
      "भारतीय संविधान और शासन व्यवस्था की exam-oriented classes.",
    gradient: "from-indigo-700 via-purple-600 to-fuchsia-500",
    chapters: [
      {
        title: "Chapter 1 — Constitution",
        lessons: [
          "संविधान की विशेषताएँ",
          "प्रस्तावना",
          "मौलिक अधिकार",
          "मौलिक कर्तव्य",
        ],
      },
      {
        title: "Chapter 2 — Union Government",
        lessons: [
          "राष्ट्रपति",
          "प्रधानमंत्री एवं मंत्रिपरिषद",
          "संसद",
          "सर्वोच्च न्यायालय",
        ],
      },
      {
        title: "Chapter 3 — State Government",
        lessons: [
          "राज्यपाल",
          "मुख्यमंत्री",
          "राज्य विधानमंडल",
          "उच्च न्यायालय",
        ],
      },
    ],
  },

  economy: {
    title: "Economy",
    hindi: "अर्थव्यवस्था",
    subtitle: "Indian Economy",
    description:
      "भारतीय अर्थव्यवस्था के महत्वपूर्ण concepts और examination topics.",
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    chapters: [
      {
        title: "Chapter 1 — Basic Economy",
        lessons: [
          "अर्थव्यवस्था का परिचय",
          "GDP और GNP",
          "राष्ट्रीय आय",
          "आर्थिक विकास",
        ],
      },
      {
        title: "Chapter 2 — Banking",
        lessons: [
          "बैंकिंग व्यवस्था",
          "RBI",
          "मुद्रा और साख",
          "Monetary Policy",
        ],
      },
      {
        title: "Chapter 3 — Government Economy",
        lessons: [
          "बजट",
          "कर व्यवस्था",
          "राजकोषीय नीति",
          "सरकारी योजनाएँ",
        ],
      },
    ],
  },

  science: {
    title: "General Science",
    hindi: "सामान्य विज्ञान",
    subtitle: "Physics • Chemistry • Biology",
    description:
      "प्रतियोगी परीक्षाओं के लिए General Science की structured preparation.",
    gradient: "from-pink-600 via-rose-500 to-orange-500",
    chapters: [
      {
        title: "Chapter 1 — Physics",
        lessons: [
          "गति और बल",
          "कार्य एवं ऊर्जा",
          "प्रकाश",
          "विद्युत",
        ],
      },
      {
        title: "Chapter 2 — Chemistry",
        lessons: [
          "परमाणु एवं अणु",
          "तत्व और यौगिक",
          "अम्ल, क्षार और लवण",
          "धातु एवं अधातु",
        ],
      },
      {
        title: "Chapter 3 — Biology",
        lessons: [
          "कोशिका",
          "मानव शरीर",
          "पोषण",
          "रोग एवं प्रतिरक्षा",
        ],
      },
    ],
  },

  "current-affairs": {
    title: "Current Affairs",
    hindi: "समसामयिक घटनाक्रम",
    subtitle: "Daily & Monthly Current Affairs",
    description:
      "महत्वपूर्ण राष्ट्रीय और अंतरराष्ट्रीय घटनाओं की exam-oriented preparation.",
    gradient: "from-slate-800 via-slate-700 to-blue-700",
    chapters: [
      {
        title: "Monthly Current Affairs",
        lessons: [
          "National Events",
          "International Events",
          "Economy & Banking",
          "Awards & Honours",
        ],
      },
      {
        title: "Important Topics",
        lessons: [
          "Government Schemes",
          "Appointments",
          "Sports",
          "Science & Technology",
        ],
      },
    ],
  },
};

export default function BatchClassPage() {
  const params = useParams();

  const batchId = params?.batchId || "geography";
  const subject = subjects[batchId] || subjects.geography;

  const totalLessons = subject.chapters.reduce(
    (total, chapter) => total + chapter.lessons.length,
    0
  );

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section
        className={`bg-gradient-to-br ${subject.gradient} text-white`}
      >
        <div className="mx-auto max-w-6xl px-5 py-8">
          <Link
            href="/batches"
            className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur transition hover:bg-white/25"
          >
            <ArrowLeft size={18} />
            All Subjects
          </Link>

          <div className="max-w-3xl">
            <p className="text-sm font-black tracking-[0.25em] text-white/70">
              EXAMSATHI CLASSROOM
            </p>

            <h1 className="mt-3 text-4xl font-black sm:text-6xl">
              {subject.title}
            </h1>

            <p className="mt-2 text-xl font-bold text-orange-200">
              {subject.hindi} • {subject.subtitle}
            </p>

            <p className="mt-5 text-base leading-7 text-white/90 sm:text-lg">
              {subject.description}
            </p>
          </div>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-xl sm:gap-5">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <BookOpen size={22} />
              <p className="mt-3 text-2xl font-black">
                {subject.chapters.length}
              </p>
              <p className="text-xs text-white/70">Chapters</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <PlayCircle size={22} />
              <p className="mt-3 text-2xl font-black">
                {totalLessons}
              </p>
              <p className="text-xs text-white/70">Lessons</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <GraduationCap size={22} />
              <p className="mt-3 text-2xl font-black">100%</p>
              <p className="text-xs text-white/70">Exam Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLASSROOM */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="mb-8">
          <p className="text-sm font-black tracking-widest text-orange-500">
            COURSE CONTENT
          </p>

          <h2 className="mt-1 text-3xl font-black text-slate-900">
            Chapters & Classes
          </h2>

          <p className="mt-2 text-slate-500">
            Chapter चुनें और अपनी class शुरू करें।
          </p>
        </div>

        <div className="space-y-6">
          {subject.chapters.map((chapter, chapterIndex) => (
            <div
              key={chapter.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              {/* CHAPTER HEADER */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b bg-slate-50 px-5 py-5 sm:px-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-orange-500 font-black text-white shadow-md">
                    {chapterIndex + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900 sm:text-xl">
                      {chapter.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {chapter.lessons.length} Lessons
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                  Exam Focused
                </span>
              </div>

              {/* LESSONS */}
              <div className="divide-y">
                {chapter.lessons.map((lesson, lessonIndex) => (
                  <div
                    key={lesson}
                    className="flex items-center justify-between gap-4 px-5 py-4 transition hover:bg-blue-50/50 sm:px-7"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                        <PlayCircle size={19} />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate font-bold text-slate-800">
                          Lecture {lessonIndex + 1}: {lesson}
                        </p>

                        <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                          <Clock3 size={13} />
                          Video Class
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="shrink-0 rounded-xl bg-blue-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-blue-700"
                    >
                      Start
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* NOTES */}
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-blue-700 to-orange-500 p-[1px]">
          <div className="rounded-[23px] bg-white p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-orange-50 p-4 text-orange-500">
                  <FileText size={28} />
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Class Notes
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    इस subject के revision notes और PDF material यहाँ
                    जोड़े जा सकते हैं।
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Notes Coming Soon
              </button>
            </div>
          </div>
        </div>

        {/* PRACTICE */}
        <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50 p-6">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-white p-3 text-blue-600 shadow-sm">
              <CheckCircle2 size={25} />
            </div>

            <div>
              <h3 className="font-black text-slate-900">
                Class के बाद Practice करें
              </h3>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Concept पढ़ने के बाद Test Series में जाकर अपने
                preparation level को check करें।
              </p>

              <Link
                href="/test-series"
                className="mt-4 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Go to Test Series
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white py-7 text-center">
        <p className="text-sm text-slate-400">ExamSathi</p>

        <p className="mt-1 text-sm font-black">
          Developed by{" "}
          <span className="text-blue-600">LOYAL ji</span>
        </p>
      </footer>
    </main>
  );
}
