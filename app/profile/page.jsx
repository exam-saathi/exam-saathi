"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const saved =
        localStorage.getItem("loyal_academy_user") ||
        localStorage.getItem("user");

      if (saved) setUser(JSON.parse(saved));
    } catch {}
  }, []);

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-white">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 text-2xl font-black">
            LA
          </div>

          <h1 className="mt-6 text-2xl font-black">
            LOYAL ACADEMY
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            अपनी learning profile देखने के लिए पहले login करें।
          </p>

          <Link
            href="/login"
            className="mt-7 inline-block rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-black"
          >
            Login →
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl sm:p-10">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-500/20 blur-[90px]" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">

            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600 text-3xl font-black shadow-lg">
              {(user.name || "L").charAt(0).toUpperCase()}
            </div>

            <div>
              <p className="text-xs font-black tracking-[.25em] text-cyan-400">
                STUDENT PROFILE
              </p>

              <h1 className="mt-2 text-3xl font-black">
                {user.name || "Student"}
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                LOYAL ACADEMY Learner
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          <InfoCard
            icon="📍"
            title="State"
            value={user.state || "Not added"}
          />

          <InfoCard
            icon="🏠"
            title="District"
            value={user.district || "Not added"}
          />

          <InfoCard
            icon="🎓"
            title="Learning"
            value="Active Student"
          />

        </div>

        <section className="mt-8">
          <p className="text-xs font-black tracking-[.25em] text-purple-400">
            LEARNING CENTER
          </p>

          <h2 className="mt-2 text-2xl font-black">
            आपकी तैयारी
          </h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">

            <ProfileLink
              href="/batches"
              icon="🎓"
              title="My Classes"
              description="अपनी available classes और lectures देखें।"
            />

            <ProfileLink
              href="/test-series"
              icon="📝"
              title="My Tests"
              description="Available test series और practice tests दें।"
            />

            <ProfileLink
              href="/courses"
              icon="📚"
              title="Study Material"
              description="Courses और learning resources देखें।"
            />

            <ProfileLink
              href="/"
              icon="🏠"
              title="Academy Home"
              description="LOYAL ACADEMY के home dashboard पर जाएँ।"
            />

          </div>
        </section>

      </div>
    </main>
  );
}

function InfoCard({ icon, title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="text-2xl">{icon}</div>
      <p className="mt-4 text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </p>
      <p className="mt-1 font-black">{value}</p>
    </div>
  );
}

function ProfileLink({ href, icon, title, description }) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-2xl">
          {icon}
        </div>

        <div>
          <h3 className="font-black group-hover:text-cyan-300">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
