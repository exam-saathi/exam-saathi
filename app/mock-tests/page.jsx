import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock3,
  ClipboardCheck,
  Flame,
  Lock,
  Sparkles,
  Target,
  Trophy,
  Zap,
} from "lucide-react";

import Navbar from "@/components/common/Navbar";

const tests = [
  {
    title: "UPPCS Test 01",
    subtitle: "भारतीय राजव्यवस्था",
    questions: 150,
    time: "120 मिनट",
    level: "UPPCS",
    status: "LIVE",
    href: "/mock-tests/uppcs-test-1",
  },
];

export default function MockTestsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-[-10%] top-[-15%] h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-2 text-xs font-bold text-orange-300">
                <Flame className="h-4 w-4" />
                MOCK TEST ZONE
              </div>

              <h1 className="mt-6 text-4xl font-black sm:text-5xl">
                परीक्षा जैसी
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Practice करें।
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-slate-400">
                Timer, questions, score और solutions के साथ अपनी तैयारी को
                test करें।
              </p>
            </div>

            <div className="flex gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                <div className="text-2xl font-black">100+</div>
                <div className="text-xs text-slate-500">Questions</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
                <div className="text-2xl font-black">24×7</div>
                <div className="text-xs text-slate-500">Practice</div>
              </div>
            </div>
          </div>

          {/* Highlight */}
          <div className="mt-12 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-700/20 via-slate-900 to-cyan-500/5 p-6 sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10">
                  <Target className="h-7 w-7 text-cyan-300" />
                </div>

                <div>
                  <div className="text-xs font-bold tracking-wider text-cyan-400">
                    FEATURED TEST
                  </div>

                  <h2 className="mt-1 text-2xl font-black">
                    UPPCS Test 01
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Hindi Medium • 100 Questions • Detailed Solutions
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <Tag icon={ClipboardCheck} text="100 Questions" />
                    <Tag icon={Clock3} text="120 Minutes" />
                    <Tag icon={CheckCircle2} text="Solutions" />
                  </div>
                </div>
              </div>

              <Link
                href="/mock-tests/uppcs-test-1"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-black shadow-lg shadow-blue-950/40"
              >
                Start Test
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-12 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Practice Library
              </div>
              <h2 className="mt-2 text-2xl font-black">
                Available Tests
              </h2>
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            {tests.map((test, index) => (
              <TestCard key={test.title} test={test} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard
            icon={Clock3}
            title="Real Exam Timer"
            text="समय के साथ practice करें।"
          />

          <InfoCard
            icon={Trophy}
            title="Performance"
            text="अपना score और progress देखें।"
          />

          <InfoCard
            icon={Award}
            title="Solution Review"
            text="Test के बाद answers और solutions देखें।"
          />
        </div>
      </section>
    </main>
  );
}

function TestCard({ test, index }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">

      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10">
          <ClipboardCheck className="h-6 w-6 text-cyan-300" />
        </div>

        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-black text-emerald-300">
          {test.status}
        </span>
      </div>

      <div className="relative mt-6">
        <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
          {test.level}
        </div>

        <h3 className="mt-2 text-xl font-black">
          {test.title}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {test.subtitle}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          <Stat icon={ClipboardCheck} value={test.questions} label="Questions" />
          <Stat icon={Clock3} value={test.time} label="Time" />
        </div>

        <Link
          href={test.href}
          className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm font-bold transition hover:bg-white/10"
        >
          Open Test
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Icon className="h-4 w-4 text-cyan-400" />
        {label}
      </div>

      <div className="mt-1 text-sm font-black text-slate-200">
        {value}
      </div>
    </div>
  );
}

function Tag({ icon: Icon, text }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] font-semibold text-slate-400">
      <Icon className="h-3.5 w-3.5 text-cyan-400" />
      {text}
    </span>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <Icon className="h-5 w-5 text-cyan-400" />
      <h3 className="mt-4 font-black">{title}</h3>
      <p className="mt-1 text-sm text-slate-500">{text}</p>
    </div>
  );
}
