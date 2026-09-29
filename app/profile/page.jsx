"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  GraduationCap,
  MapPin,
  Settings,
  Target,
  Trophy,
  User,
  Zap,
} from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
          const data = JSON.parse(raw);

          if (data?.name) {
            setUser(data);
            return;
          }
        } catch {
          if (raw.trim()) {
            setUser({ name: raw.trim() });
            return;
          }
        }
      }
    } catch {
      setUser(null);
    }
  }, []);

  const name = user?.name || "Student";
  const age = user?.age || "—";
  const city = user?.city || "—";
  const state = user?.state || "—";

  const initial = name.charAt(0).toUpperCase();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
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

          <Link
            href="/"
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10"
          >
            Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 sm:py-12">

        {/* Profile Hero */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-700/20 via-slate-900 to-cyan-500/5 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="absolute right-[-5%] top-[-30%] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-400 text-3xl font-black shadow-xl shadow-blue-900/30">
                {initial}
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Student Profile
                </div>

                <h1 className="mt-1 text-3xl font-black sm:text-4xl">
                  {name}
                </h1>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-400">
                  <span className="rounded-lg bg-white/5 px-2.5 py-1">
                    Age {age}
                  </span>

                  <span className="flex items-center gap-1 rounded-lg bg-white/5 px-2.5 py-1">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                    {city}, {state}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/mock-tests"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-black shadow-lg shadow-blue-950/30"
              >
                <Target className="h-4 w-4" />
                Start Test
              </Link>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            icon={ClipboardCheck}
            value="0"
            label="Tests Attempted"
          />

          <StatCard
            icon={CheckCircle2}
            value="0%"
            label="Average Accuracy"
          />

          <StatCard
            icon={Clock3}
            value="0h"
            label="Study Time"
          />

          <StatCard
            icon={Trophy}
            value="—"
            label="Current Rank"
          />
        </div>

        {/* Main Grid */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_.7fr]">

          {/* Preparation */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Preparation
                </div>

                <h2 className="mt-2 text-2xl font-black">
                  आपकी तैयारी
                </h2>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10">
                <Zap className="h-5 w-5 text-cyan-300" />
              </div>
            </div>

            <div className="mt-7 rounded-2xl border border-blue-400/10 bg-blue-500/5 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-300">
                  Overall Progress
                </span>

                <span className="text-sm font-black text-cyan-400">
                  0%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                अपना पहला mock test देकर preparation progress शुरू करें।
              </p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <QuickAction
                href="/subjects"
                icon={BookOpen}
                title="Subjects"
                text="विषयवार तैयारी शुरू करें"
              />

              <QuickAction
                href="/mock-tests"
                icon={ClipboardCheck}
                title="Mock Tests"
                text="अपना पहला test दें"
              />

              <QuickAction
                href="/quizzes"
                icon={Target}
                title="Practice"
                text="Topic-wise practice करें"
              />

              <QuickAction
                href="/leaderboard"
                icon={Trophy}
                title="Leaderboard"
                text="अपनी rank देखें"
              />
            </div>
          </div>

          {/* Profile Details */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Profile
                </div>

                <h2 className="mt-2 text-2xl font-black">
                  आपकी जानकारी
                </h2>
              </div>

              <User className="h-6 w-6 text-slate-600" />
            </div>

            <div className="mt-6 space-y-3">
              <InfoRow
                icon={User}
                label="नाम"
                value={name}
              />

              <InfoRow
                icon={User}
                label="उम्र"
                value={age}
              />

              <InfoRow
                icon={MapPin}
                label="शहर"
                value={city}
              />

              <InfoRow
                icon={MapPin}
                label="राज्य"
                value={state}
              />
            </div>

            <div className="mt-5 rounded-2xl border border-white/5 bg-white/[0.03] p-4">
              <div className="flex gap-3">
                <GraduationCap className="h-5 w-5 shrink-0 text-cyan-400" />

                <div>
                  <div className="text-sm font-bold">
                    Exam Saathi
                  </div>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    अपनी परीक्षा की तैयारी जारी रखें। Test दें और अपनी
                    performance को लगातार improve करें।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-blue-600/10 to-cyan-500/5 p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black">
                आज की तैयारी शुरू करें 🚀
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                एक test से अपनी preparation journey शुरू करें।
              </p>
            </div>

            <Link
              href="/mock-tests"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02]"
            >
              Open Mock Tests
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ icon: Icon, value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
      <Icon className="h-5 w-5 text-cyan-400" />

      <div className="mt-4 text-2xl font-black">
        {value}
      </div>

      <div className="mt-1 text-xs text-slate-500">
        {label}
      </div>
    </div>
  );
}

function QuickAction({ href, icon: Icon, title, text }) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.06]"
    >
      <div className="flex items-center justify-between">
        <Icon className="h-5 w-5 text-cyan-400" />
        <ArrowRight className="h-4 w-4 text-slate-700 transition group-hover:translate-x-1 group-hover:text-cyan-400" />
      </div>

      <div className="mt-4 text-sm font-black">
        {title}
      </div>

      <div className="mt-1 text-xs text-slate-500">
        {text}
      </div>
    </Link>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
        <Icon className="h-4 w-4 text-cyan-400" />
      </div>

      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
          {label}
        </div>

        <div className="mt-0.5 truncate text-sm font-bold text-slate-200">
          {value}
        </div>
      </div>
    </div>
  );
}
