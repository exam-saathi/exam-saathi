"use client";

import Link from "next/link";
import {
  BookOpen,
  ClipboardList,
  GraduationCap,
  Trophy,
  FileText,
  Users,
  ArrowRight,
  Printer,
} from "lucide-react";

const cards = [
  {
    title: "Test Series",
    subtitle: "सभी Government Exams",
    description: "UPSC, UPPCS, SSC, Banking, Railway और अन्य परीक्षाओं के टेस्ट।",
    href: "/test-series",
    icon: ClipboardList,
  },
  {
    title: "Batches & Classes",
    subtitle: "विषयवार तैयारी",
    description: "Geography और अन्य subjects की structured classes।",
    href: "/batches",
    icon: GraduationCap,
  },
  {
    title: "Subjects",
    subtitle: "सिलेबस की तैयारी",
    description: "विभिन्न subjects को topic-wise पढ़ें।",
    href: "/subjects",
    icon: BookOpen,
  },
  {
    title: "Notes",
    subtitle: "Quick Revision",
    description: "महत्वपूर्ण notes और revision material।",
    href: "/notes",
    icon: FileText,
  },
];

export default function DashboardPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-orange-500 text-white">
        <div className="mx-auto max-w-6xl px-5 py-10">

          <div className="flex flex-wrap items-center justify-between gap-5">

            <div>
              <p className="mb-2 text-sm font-semibold tracking-widest text-blue-100">
                EXAMSATHI
              </p>

              <h1 className="text-3xl font-black sm:text-5xl">
                Student Dashboard
              </h1>

              <p className="mt-3 text-blue-50">
                पढ़ाई आपकी, साथ हमारा।
              </p>
            </div>

            <button
              onClick={handlePrint}
              className="no-print flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-blue-700 shadow-lg transition hover:scale-105"
            >
              <Printer size={19} />
              Print Dashboard
            </button>

          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="mx-auto max-w-6xl px-5 py-8">

        <div className="mb-8">
          <h2 className="text-2xl font-black text-slate-900">
            आपकी तैयारी
          </h2>

          <p className="mt-1 text-slate-500">
            Test Series और Classes से अपनी तैयारी शुरू करें।
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.href}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="h-2 bg-gradient-to-r from-blue-600 to-orange-500" />

                <div className="p-6">

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-orange-500 text-white shadow-lg">
                      <Icon size={28} />
                    </div>

                    <ArrowRight
                      className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600"
                      size={25}
                    />

                  </div>

                  <p className="text-sm font-bold text-orange-500">
                    {card.subtitle}
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-slate-900">
                    {card.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {card.description}
                  </p>

                </div>
              </Link>
            );
          })}

        </div>

        {/* Public info */}
        <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">

          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-blue-50 p-4 text-blue-600">
              <Trophy size={28} />
            </div>

            <div>
              <h3 className="text-xl font-black text-slate-900">
                तैयारी का नया तरीका
              </h3>

              <p className="text-slate-500">
                रोज़ अभ्यास करें, टेस्ट दें और अपनी performance देखें।
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-6 text-center text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} ExamSathi
        </p>

        <p className="mt-1 font-semibold text-slate-700">
          Developed by <span className="text-blue-600">LOYAL ji</span>
        </p>
      </footer>

    </main>
  );
}
