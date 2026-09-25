"use client";

import Link from "next/link";
import {
  Map,
  Landmark,
  BookOpen,
  Coins,
  FlaskConical,
  Newspaper,
  ArrowRight,
  PlayCircle,
} from "lucide-react";

const batches = [
  {
    id: "geography",
    title: "Geography",
    hindi: "भूगोल",
    subtitle: "भारत एवं विश्व भूगोल",
    description:
      "Physical Geography, Indian Geography, World Geography और Map Study की structured classes.",
    icon: Map,
    gradient: "from-blue-600 to-cyan-500",
    topics: ["Physical Geography", "Indian Geography", "World Geography", "Map Study"],
  },
  {
    id: "history",
    title: "History",
    hindi: "इतिहास",
    subtitle: "प्राचीन से आधुनिक भारत",
    description:
      "Ancient, Medieval और Modern History की परीक्षा-केंद्रित classes.",
    icon: Landmark,
    gradient: "from-orange-500 to-red-500",
    topics: ["Ancient", "Medieval", "Modern", "Art & Culture"],
  },
  {
    id: "polity",
    title: "Polity",
    hindi: "भारतीय राजव्यवस्था",
    subtitle: "Constitution & Governance",
    description:
      "भारतीय संविधान, संसद, न्यायपालिका और शासन व्यवस्था.",
    icon: BookOpen,
    gradient: "from-indigo-600 to-purple-600",
    topics: ["Constitution", "Parliament", "Judiciary", "Governance"],
  },
  {
    id: "economy",
    title: "Economy",
    hindi: "अर्थव्यवस्था",
    subtitle: "Indian Economy",
    description:
      "भारतीय अर्थव्यवस्था के महत्वपूर्ण concepts और exam topics.",
    icon: Coins,
    gradient: "from-emerald-500 to-teal-600",
    topics: ["GDP", "Banking", "Budget", "Inflation"],
  },
  {
    id: "science",
    title: "General Science",
    hindi: "सामान्य विज्ञान",
    subtitle: "Physics • Chemistry • Biology",
    description:
      "प्रतियोगी परीक्षाओं के लिए General Science की structured preparation.",
    icon: FlaskConical,
    gradient: "from-pink-500 to-rose-600",
    topics: ["Physics", "Chemistry", "Biology"],
  },
  {
    id: "current-affairs",
    title: "Current Affairs",
    hindi: "समसामयिक घटनाक्रम",
    subtitle: "Daily & Monthly Current Affairs",
    description:
      "महत्वपूर्ण राष्ट्रीय और अंतरराष्ट्रीय घटनाओं की exam-oriented classes.",
    icon: Newspaper,
    gradient: "from-slate-700 to-slate-950",
    topics: ["National", "International", "Economy", "Awards"],
  },
];

export default function BatchesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-orange-500 text-white">
        <div className="mx-auto max-w-6xl px-5 py-12">

          <p className="text-sm font-black tracking-[0.25em] text-blue-100">
            EXAMSATHI CLASSES
          </p>

          <h1 className="mt-3 text-4xl font-black sm:text-6xl">
            Batches & Classes
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">
            अलग-अलग subjects की structured preparation —
            class, notes और practice के साथ।
          </p>

        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-5 py-10">

        <div className="mb-7">
          <h2 className="text-2xl font-black text-slate-900">
            All Subjects
          </h2>

          <p className="mt-1 text-slate-500">
            अपना subject चुनें और classes शुरू करें।
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {batches.map((batch) => {
            const Icon = batch.icon;

            return (
              <Link
                key={batch.id}
                href={`/batches/${batch.id}`}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Top gradient */}
                <div className={`h-3 bg-gradient-to-r ${batch.gradient}`} />

                <div className="p-6">

                  <div className="flex items-start justify-between">

                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${batch.gradient} text-white shadow-lg`}
                    >
                      <Icon size={31} />
                    </div>

                    <ArrowRight
                      size={24}
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                    />

                  </div>

                  <p className="mt-5 text-sm font-bold text-orange-500">
                    {batch.hindi}
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-slate-900">
                    {batch.title}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-blue-600">
                    {batch.subtitle}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {batch.description}
                  </p>

                  {/* Topics */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {batch.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3 text-sm font-bold text-white transition group-hover:bg-blue-700">
                    <PlayCircle size={18} />
                    View Classes
                  </div>

                </div>
              </Link>
            );
          })}

        </div>

      </section>

      {/* Developer */}
      <footer className="border-t bg-white py-7 text-center">

        <p className="text-sm text-slate-400">
          ExamSathi
        </p>

        <p className="mt-1 text-sm font-black">
          Developed by{" "}
          <span className="text-blue-600">
            LOYAL ji
          </span>
        </p>

      </footer>

    </main>
  );
}
