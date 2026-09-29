import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileText,
  GraduationCap,
  History,
  Map,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

const subjects = [
  {
    title: "भारतीय राजव्यवस्था",
    subtitle: "संविधान • शासन • संसद",
    icon: ShieldCheck,
    href: "/subjects",
  },
  {
    title: "इतिहास",
    subtitle: "प्राचीन • मध्यकालीन • आधुनिक",
    icon: History,
    href: "/subjects",
  },
  {
    title: "भूगोल",
    subtitle: "भौतिक • भारत • विश्व",
    icon: Map,
    href: "/subjects",
  },
  {
    title: "अर्थव्यवस्था",
    subtitle: "बैंकिंग • बजट • विकास",
    icon: Brain,
    href: "/subjects",
  },
  {
    title: "विज्ञान",
    subtitle: "भौतिक • रसायन • जीवविज्ञान",
    icon: Zap,
    href: "/subjects",
  },
  {
    title: "उत्तर प्रदेश विशेष",
    subtitle: "UP GK • UP Current Affairs",
    icon: GraduationCap,
    href: "/subjects",
  },
];

const features = [
  {
    icon: ClipboardCheck,
    title: "Mock Tests",
    text: "परीक्षा जैसे माहौल में अभ्यास करें",
    href: "/mock-tests",
  },
  {
    icon: BookOpen,
    title: "Smart Learning",
    text: "Subject से Topic तक व्यवस्थित तैयारी",
    href: "/subjects",
  },
  {
    icon: FileText,
    title: "Short Notes",
    text: "महत्वपूर्ण तथ्यों का quick revision",
    href: "/notes",
  },
  {
    icon: Trophy,
    title: "Live Ranking",
    text: "अपनी performance को track करें",
    href: "/leaderboard",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-15%] top-[-10%] h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[25%] h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-900/30">
              <GraduationCap className="h-6 w-6" />
            </div>

            <div>
              <div className="text-lg font-black tracking-tight">
                Exam <span className="text-cyan-400">Saathi</span>
              </div>
              <div className="text-[9px] font-semibold tracking-[0.25em] text-slate-400">
                LEARN • PRACTICE • ACHIEVE
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white"
            >
              Home
            </Link>

            <Link
              href="/subjects"
              className="rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Subjects
            </Link>

            <Link
              href="/quizzes"
              className="rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Quizzes
            </Link>

            <Link
              href="/mock-tests"
              className="rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Mock Tests
            </Link>

            <Link
              href="/notes"
              className="rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Notes
            </Link>

            <Link
              href="/leaderboard"
              className="rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              Rank
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/profile"
              className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-blue-400/30 hover:bg-white/10 sm:block"
            >
              Profile
            </Link>

            <Link
              href="/mock-tests"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-bold shadow-lg shadow-blue-900/30 transition hover:scale-[1.02]"
            >
              <Rocket className="h-4 w-4" />
              <span className="hidden sm:inline">Start Test</span>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-28 lg:pt-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold text-blue-300">
              <Sparkles className="h-4 w-4" />
              आपकी तैयारी का Smart साथी
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              मेहनत आपकी,
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                तैयारी हमारी।
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Exam Saathi पर पढ़ें, अभ्यास करें और अपनी तैयारी को बेहतर बनाएं।
              Subjects, quizzes, mock tests, notes और performance tracking —
              सब एक जगह।
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/mock-tests"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-bold shadow-xl shadow-blue-950/40 transition hover:-translate-y-0.5"
              >
                <PlayCircle className="h-5 w-5" />
                अभी Test शुरू करें
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/subjects"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3.5 font-bold text-slate-200 backdrop-blur transition hover:bg-white/10"
              >
                <BookOpen className="h-5 w-5" />
                Subjects देखें
              </Link>
            </div>

            {/* Mini stats */}
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xl font-black text-white">100+</div>
                <div className="mt-1 text-[11px] text-slate-500">
                  Practice Questions
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xl font-black text-white">24×7</div>
                <div className="mt-1 text-[11px] text-slate-500">
                  Learning Access
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xl font-black text-white">Hindi</div>
                <div className="mt-1 text-[11px] text-slate-500">
                  Easy Preparation
                </div>
              </div>
            </div>
          </div>

          {/* Hero dashboard card */}
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/90 p-4 shadow-2xl shadow-black/40">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/60 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-cyan-400">
                      EXAM SAATHI
                    </div>
                    <div className="mt-1 text-xl font-black">
                      आपकी तैयारी
                    </div>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                    <Trophy className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-600/20 to-cyan-500/5 p-5">
                  <div className="text-xs text-slate-400">
                    आज का लक्ष्य
                  </div>

                  <div className="mt-2 text-2xl font-black">
                    तैयारी जारी रखें 🚀
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                  </div>

                  <div className="mt-2 flex justify-between text-xs text-slate-400">
                    <span>Daily Progress</span>
                    <span>72%</span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Link
                    href="/mock-tests"
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
                  >
                    <ClipboardCheck className="h-5 w-5 text-blue-400" />
                    <div className="mt-3 font-bold">Mock Tests</div>
                    <div className="mt-1 text-xs text-slate-500">
                      परीक्षा जैसा अभ्यास
                    </div>
                  </Link>

                  <Link
                    href="/leaderboard"
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
                  >
                    <Trophy className="h-5 w-5 text-amber-400" />
                    <div className="mt-3 font-bold">Leaderboard</div>
                    <div className="mt-1 text-xs text-slate-500">
                      अपनी Rank देखें
                    </div>
                  </Link>
                </div>

                <div className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  <div>
                    <div className="text-sm font-bold">
                      आज की तैयारी complete करें
                    </div>
                    <div className="text-xs text-slate-500">
                      छोटा कदम, बेहतर तैयारी।
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-slate-900"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>

                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-cyan-400">
                    Explore
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SUBJECTS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Explore Subjects
            </div>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              विषयवार तैयारी
            </h2>

            <p className="mt-3 max-w-2xl text-slate-400">
              अपनी परीक्षा के अनुसार विषय चुनें और step-by-step तैयारी करें।
            </p>
          </div>

          <Link
            href="/subjects"
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400"
          >
            सभी Subjects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => {
            const Icon = subject.icon;

            return (
              <Link
                key={subject.title}
                href={subject.href}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-cyan-400/10" />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Icon className="h-6 w-6" />
                  </div>

                  <ArrowRight className="h-5 w-5 text-slate-600 transition group-hover:translate-x-1 group-hover:text-cyan-400" />
                </div>

                <h3 className="relative mt-6 text-lg font-black">
                  {subject.title}
                </h3>

                <p className="relative mt-2 text-sm text-slate-500">
                  {subject.subtitle}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-700/30 via-slate-900 to-cyan-600/10 p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-300">
                <Users className="h-4 w-4" />
                Exam Saathi
              </div>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                आज से तैयारी को
                <br />
                एक नई दिशा दें।
              </h2>

              <p className="mt-3 max-w-xl text-slate-400">
                Test दें, अपनी गलतियाँ देखें, solutions पढ़ें और लगातार अपनी
                preparation improve करें।
              </p>
            </div>

            <Link
              href="/mock-tests"
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-slate-950 transition hover:scale-[1.02]"
            >
              <Rocket className="h-5 w-5" />
              Start Preparation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <div>
                  <div className="font-black">
                    Exam <span className="text-cyan-400">Saathi</span>
                  </div>
                  <div className="text-[9px] tracking-[0.2em] text-slate-500">
                    LEARN • PRACTICE • ACHIEVE
                  </div>
                </div>
              </div>

              <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                बेहतर तैयारी, बेहतर practice और बेहतर learning experience के
                लिए आपका digital exam साथी।
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {["Ethical Hacking", "Python Programming", "Education"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-400"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} Exam Saathi. All rights reserved.
            </span>

            <span className="font-semibold">
              Developed with ❤️ by{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                LOYAL
              </span>
            </span>
          </div>
        </div>
      </footer>

      {/* MOBILE NAV */}
      <div className="fixed bottom-3 left-3 right-3 z-50 lg:hidden">
        <div className="grid grid-cols-4 rounded-2xl border border-white/10 bg-slate-950/90 p-2 shadow-2xl backdrop-blur-xl">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 rounded-xl bg-white/10 py-2 text-[10px] font-semibold text-cyan-300"
          >
            <GraduationCap className="h-4 w-4" />
            Home
          </Link>

          <Link
            href="/subjects"
            className="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-semibold text-slate-400"
          >
            <BookOpen className="h-4 w-4" />
            Subjects
          </Link>

          <Link
            href="/mock-tests"
            className="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-semibold text-slate-400"
          >
            <ClipboardCheck className="h-4 w-4" />
            Tests
          </Link>

          <Link
            href="/profile"
            className="flex flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-semibold text-slate-400"
          >
            <Users className="h-4 w-4" />
            Profile
          </Link>
        </div>
      </div>
    </main>
  );
}
