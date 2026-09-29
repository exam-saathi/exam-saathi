"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Crown,
  GraduationCap,
  Medal,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

export default function LeaderboardPage() {
  const [user, setUser] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load local profile
    try {
      const keys = [
        "examSaathiUser",
        "exam_sathi_user",
        "user",
        "profile",
      ];

      for (const key of keys) {
        const raw = localStorage.getItem(key);

        if (!raw) continue;

        try {
          const parsed = JSON.parse(raw);

          if (parsed?.name) {
            setUser(parsed);
            break;
          }
        } catch {
          if (raw.trim()) {
            setUser({ name: raw.trim() });
            break;
          }
        }
      }
    } catch {
      // Ignore localStorage errors
    }

    // Try existing leaderboard API.
    // If it is not available, keep the page in a clean empty state.
    fetch("/api/rank")
      .then(async (res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .then((data) => {
        if (!data) return;

        const list =
          Array.isArray(data)
            ? data
            : Array.isArray(data?.results)
              ? data.results
              : Array.isArray(data?.rank)
                ? data.rank
                : Array.isArray(data?.users)
                  ? data.users
                  : [];

        setResults(list);
      })
      .catch(() => {
        setResults([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const leaderboard = useMemo(() => {
    return [...results]
      .filter(Boolean)
      .map((item) => ({
        name:
          item.name ||
          item.username ||
          item.studentName ||
          "Student",

        score: Number(
          item.score ??
            item.totalScore ??
            item.marks ??
            0
        ),

        total: Number(
          item.total ??
            item.maxScore ??
            item.totalMarks ??
            0
        ),

        accuracy: Number(
          item.accuracy ??
            item.accuracyPercent ??
            0
        ),

        tests: Number(
          item.tests ??
            item.testCount ??
            item.attempts ??
            0
        ),
      }))
      .sort((a, b) => b.score - a.score);
  }, [results]);

  const currentUser = useMemo(() => {
    if (!user?.name) return null;

    const index = leaderboard.findIndex(
      (item) =>
        item.name.toLowerCase() === user.name.toLowerCase()
    );

    if (index === -1) return null;

    return {
      ...leaderboard[index],
      rank: index + 1,
    };
  }, [leaderboard, user]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute right-[-10%] top-[15%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[35%] h-96 w-96 rounded-full bg-indigo-600/10 blur-[130px]" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-lg shadow-blue-900/30">
              <GraduationCap className="h-6 w-6" />
            </div>

            <div>
              <div className="font-black">
                Exam <span className="text-cyan-400">Saathi</span>
              </div>

              <div className="text-[9px] tracking-[0.22em] text-slate-500">
                LEARN • PRACTICE • ACHIEVE
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/subjects"
              className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 sm:block"
            >
              Subjects
            </Link>

            <Link
              href="/profile"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10"
            >
              Profile
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pt-14 lg:px-8">

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-700/20 via-slate-900 to-cyan-500/5 p-6 sm:p-10">

          <div className="absolute right-[-5%] top-[-35%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-black tracking-wider text-yellow-300">
                <Trophy className="h-4 w-4" />
                LEADERBOARD
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
                अपनी
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Performance देखें।
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Mock tests और quizzes में अपनी performance को track करें और
                अपनी preparation journey को बेहतर बनाएं।
              </p>

            </div>

            <div className="flex h-28 w-28 shrink-0 items-center justify-center self-center rounded-[2rem] border border-yellow-400/20 bg-yellow-400/5 lg:mr-10">
              <Trophy className="h-14 w-14 text-yellow-300" />
            </div>

          </div>
        </div>

        {/* Current user */}
        {currentUser && (
          <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 font-black">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>

                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Your Position
                  </div>

                  <div className="mt-1 font-black">
                    {currentUser.name}
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <Metric
                  value={`#${currentUser.rank}`}
                  label="Rank"
                />

                <Metric
                  value={currentUser.score}
                  label="Score"
                />

                <Metric
                  value={`${currentUser.accuracy || 0}%`}
                  label="Accuracy"
                />
              </div>

            </div>
          </div>
        )}

        {/* Top 3 */}
        {!loading && leaderboard.length >= 3 && (
          <section className="mt-10">

            <SectionHeading
              icon={Crown}
              eyebrow="TOP PERFORMERS"
              title="Leading Students"
            />

            <div className="mt-6 grid gap-4 md:grid-cols-3">

              <TopStudent
                rank={2}
                student={leaderboard[1]}
                icon={Medal}
              />

              <TopStudent
                rank={1}
                student={leaderboard[0]}
                icon={Crown}
                featured
              />

              <TopStudent
                rank={3}
                student={leaderboard[2]}
                icon={Medal}
              />

            </div>
          </section>
        )}

        {/* Full leaderboard */}
        <section className="mt-10">

          <SectionHeading
            icon={BarChart3}
            eyebrow="RANKINGS"
            title="Leaderboard"
          />

          <div className="mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70">

            {loading ? (
              <LoadingState />
            ) : leaderboard.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="divide-y divide-white/5">

                <div className="hidden grid-cols-[80px_1fr_120px_120px_100px] gap-4 bg-white/[0.03] px-5 py-4 text-[10px] font-black uppercase tracking-wider text-slate-500 sm:grid">
                  <span>Rank</span>
                  <span>Student</span>
                  <span>Score</span>
                  <span>Accuracy</span>
                  <span>Tests</span>
                </div>

                {leaderboard.map((student, index) => (
                  <LeaderboardRow
                    key={`${student.name}-${index}`}
                    student={student}
                    rank={index + 1}
                    current={student.name === user?.name}
                  />
                ))}

              </div>
            )}

          </div>
        </section>

        {/* Stats / CTA */}
        <section className="mt-6 grid gap-4 sm:grid-cols-3">

          <InfoCard
            icon={Target}
            title="Improve Accuracy"
            text="Topic-wise practice करके अपनी accuracy improve करें।"
            href="/quizzes"
          />

          <InfoCard
            icon={Zap}
            title="Take a Mock Test"
            text="Regular mock tests से अपनी preparation check करें।"
            href="/mock-tests"
          />

          <InfoCard
            icon={BookOpen}
            title="Explore Subjects"
            text="अपने syllabus के subjects से preparation शुरू करें।"
            href="/subjects"
          />

        </section>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-slate-600 sm:px-6 lg:px-8">
          Exam Saathi • Learn • Practice • Achieve
        </div>
      </footer>

    </main>
  );
}

function SectionHeading({ icon: Icon, eyebrow, title }) {
  return (
    <div className="flex items-end justify-between">

      <div>
        <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-cyan-400">
          <Icon className="h-4 w-4" />
          {eyebrow}
        </div>

        <h2 className="mt-2 text-2xl font-black">
          {title}
        </h2>
      </div>

    </div>
  );
}

function TopStudent({
  rank,
  student,
  icon: Icon,
  featured = false,
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-6 text-center ${
        featured
          ? "border-yellow-400/20 bg-gradient-to-b from-yellow-400/10 to-slate-900"
          : "border-white/10 bg-slate-900/70"
      }`}
    >

      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
        <Icon
          className={`h-7 w-7 ${
            rank === 1
              ? "text-yellow-300"
              : "text-slate-400"
          }`}
        />
      </div>

      <div className="mt-4 text-xs font-black uppercase tracking-wider text-slate-500">
        Rank #{rank}
      </div>

      <div className="mt-2 text-xl font-black">
        {student.name}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <SmallStat
          value={student.score}
          label="Score"
        />

        <SmallStat
          value={`${student.accuracy || 0}%`}
          label="Accuracy"
        />
      </div>

    </div>
  );
}

function LeaderboardRow({
  student,
  rank,
  current,
}) {
  return (
    <div
      className={`px-4 py-4 transition sm:grid sm:grid-cols-[80px_1fr_120px_120px_100px] sm:items-center sm:gap-4 sm:px-5 ${
        current
          ? "bg-cyan-400/5"
          : "hover:bg-white/[0.025]"
      }`}
    >

      <div className="flex items-center gap-3 sm:block">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-sm font-black text-slate-300">
          #{rank}
        </div>

        <div className="sm:hidden">
          <div className="font-bold">
            {student.name}
          </div>

          {current && (
            <div className="text-[10px] font-bold text-cyan-400">
              YOU
            </div>
          )}
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="flex items-center gap-2">
          <div className="font-bold">
            {student.name}
          </div>

          {current && (
            <span className="rounded-md bg-cyan-400/10 px-2 py-1 text-[9px] font-black text-cyan-300">
              YOU
            </span>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between sm:mt-0">
        <span className="text-xs text-slate-500 sm:hidden">
          Score
        </span>

        <span className="font-black">
          {student.score}
        </span>
      </div>

      <div className="flex items-center justify-between sm:block">
        <span className="text-xs text-slate-500 sm:hidden">
          Accuracy
        </span>

        <span className="font-bold text-cyan-400">
          {student.accuracy || 0}%
        </span>
      </div>

      <div className="flex items-center justify-between sm:block">
        <span className="text-xs text-slate-500 sm:hidden">
          Tests
        </span>

        <span className="font-semibold text-slate-400">
          {student.tests || 0}
        </span>
      </div>

    </div>
  );
}

function EmptyState() {
  return (
    <div className="px-6 py-16 text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10">
        <Trophy className="h-8 w-8 text-cyan-400" />
      </div>

      <h3 className="mt-5 text-xl font-black">
        Leaderboard अभी तैयार हो रहा है
      </h3>

      <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
        जैसे ही students mock tests और quizzes attempt करेंगे,
        verified performance data यहाँ दिखाई देगा।
      </p>

      <Link
        href="/mock-tests"
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-black"
      >
        पहला Mock Test दें
        <ArrowRight className="h-4 w-4" />
      </Link>

    </div>
  );
}

function LoadingState() {
  return (
    <div className="px-6 py-16 text-center">

      <div className="mx-auto h-12 w-12 animate-pulse rounded-2xl bg-white/10" />

      <div className="mx-auto mt-5 h-4 w-40 animate-pulse rounded bg-white/10" />

      <div className="mx-auto mt-3 h-3 w-64 animate-pulse rounded bg-white/5" />

    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-lg font-black">
        {value}
      </div>

      <div className="text-[10px] text-slate-500">
        {label}
      </div>
    </div>
  );
}

function SmallStat({ value, label }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
      <div className="font-black">
        {value}
      </div>

      <div className="mt-1 text-[10px] text-slate-500">
        {label}
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  text,
  href,
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:-translate-y-0.5 hover:border-cyan-400/20"
    >
      <div className="flex items-center justify-between">
        <Icon className="h-5 w-5 text-cyan-400" />

        <ChevronRight className="h-4 w-4 text-slate-700 transition group-hover:translate-x-1 group-hover:text-cyan-400" />
      </div>

      <h3 className="mt-4 font-black">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-slate-500">
        {text}
      </p>
    </Link>
  );
}
