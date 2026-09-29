import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Trophy,
  PlayCircle,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: ClipboardCheck,
    title: "अभ्यास टेस्ट",
    text: "विभिन्न प्रतियोगी परीक्षाओं के लिए नियमित अभ्यास करें।",
  },
  {
    icon: BookOpen,
    title: "शॉर्ट नोट्स",
    text: "महत्वपूर्ण टॉपिक्स को सरल हिंदी में दोहराएं।",
  },
  {
    icon: Trophy,
    title: "रैंकिंग",
    text: "अपने टेस्ट प्रदर्शन को ट्रैक करें और प्रगति देखें।",
  },
];

const subjects = [
  "भारतीय राजव्यवस्था",
  "इतिहास",
  "भूगोल",
  "अर्थव्यवस्था",
  "विज्ञान",
  "उत्तर प्रदेश विशेष",
];

export default function HomePage() {
  return (
    <div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold text-blue-300">
              <GraduationCap size={16} />
              प्रतियोगी परीक्षा तैयारी प्लेटफॉर्म
            </div>

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              तैयारी को बनाएं
              <span className="block text-blue-400">
                आसान और व्यवस्थित।
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              क्विज़, मॉक टेस्ट, नोट्स और कोर्स के साथ अपनी परीक्षा तैयारी
              को एक जगह व्यवस्थित करें।
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quizzes"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white transition hover:bg-blue-500"
              >
                अभ्यास शुरू करें
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/mock-tests"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                <PlayCircle size={18} />
                मॉक टेस्ट
              </Link>
            </div>
          </div>

          {/* Hero card */}
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">

              <div className="rounded-2xl bg-white p-5 text-slate-900">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-500">
                      आज का अभ्यास
                    </p>
                    <h2 className="mt-1 text-lg font-extrabold">
                      सामान्य अध्ययन
                    </h2>
                  </div>

                  <div className="rounded-xl bg-orange-50 px-3 py-2 text-xs font-bold text-orange-600">
                    20 प्रश्न
                  </div>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[65%] rounded-full bg-blue-600" />
                </div>

                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>प्रगति</span>
                  <span>65%</span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-emerald-50 p-3 text-center">
                    <div className="font-bold text-emerald-600">12</div>
                    <div className="text-[10px] text-slate-500">सही</div>
                  </div>

                  <div className="rounded-xl bg-red-50 p-3 text-center">
                    <div className="font-bold text-red-500">3</div>
                    <div className="text-[10px] text-slate-500">गलत</div>
                  </div>

                  <div className="rounded-xl bg-slate-100 p-3 text-center">
                    <div className="font-bold text-slate-700">5</div>
                    <div className="text-[10px] text-slate-500">बाकी</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-white px-4 py-14">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-bold text-orange-500">
              ExamSathi की सुविधाएं
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-900">
              तैयारी के लिए जरूरी चीजें एक जगह
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 text-lg font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-slate-50 px-4 py-14">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold text-blue-600">
                विषय
              </p>

              <h2 className="mt-1 text-3xl font-black">
                अपनी तैयारी का विषय चुनें
              </h2>
            </div>

            <Link
              href="/subjects"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600"
            >
              सभी विषय
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {subjects.map((subject, index) => (
              <Link
                href="/subjects"
                key={subject}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-600">
                  {index + 1}
                </div>

                <p className="mt-3 text-sm font-bold leading-5 text-slate-700">
                  {subject}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-blue-600 px-6 py-12 text-center shadow-xl sm:px-10">
          <CheckCircle2 className="mx-auto text-blue-100" size={38} />

          <h2 className="mt-4 text-3xl font-black text-white">
            आज की तैयारी अभी शुरू करें
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-blue-100">
            छोटे-छोटे अभ्यास सत्रों के साथ अपनी तैयारी को नियमित बनाएं।
          </p>

          <Link
            href="/signup"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            अकाउंट बनाएं
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
