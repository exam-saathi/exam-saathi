"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  CalendarDays,
  MapPin,
  Map,
  ArrowRight,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

export default function ProfileLogin() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(e) {
    e.preventDefault();

    if (!name.trim() || !age || !city.trim() || !state.trim()) return;

    setLoading(true);

    const user = {
      name: name.trim(),
      age: Number(age),
      city: city.trim(),
      district: city.trim(),
      state: state.trim(),
      loggedIn: true,
    };

    localStorage.setItem(
      "loyalAcademyUser",
      JSON.stringify(user)
    );

    window.dispatchEvent(
      new Event("loyalAcademyUserChanged")
    );

    setTimeout(() => {
      router.push("/");
      router.refresh();
    }, 700);
  }

  return (
    <main className="relative min-h-[calc(100vh-70px)] overflow-hidden bg-[#070b12] px-4 py-8 text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto flex min-h-[700px] max-w-5xl items-center justify-center">

        <div className="login-shell w-full overflow-hidden rounded-[30px] border border-white/10 bg-[#0c111b]/95 shadow-2xl shadow-black/50">

          <div className="grid lg:grid-cols-2">

            {/* LEFT ANIMATION */}
            <section className="relative hidden min-h-[650px] overflow-hidden border-r border-white/10 bg-gradient-to-br from-[#101722] via-[#09100f] to-[#062019] lg:block">

              {/* grid */}
              <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                  backgroundSize: "35px 35px",
                }}
              />

              <div className="relative z-10 flex h-full flex-col items-center justify-center px-10">

                <div className="mb-8 text-center">
                  <div className="mb-3 flex items-center justify-center gap-2 text-emerald-400">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-[0.35em]">
                      Student Portal
                    </span>
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <h1 className="text-4xl font-black tracking-tight">
                    LOYAL
                    <span className="text-emerald-400">
                      {" "}ACADEMY
                    </span>
                  </h1>

                  <p className="mt-3 text-sm text-slate-500">
                    Your preparation. Your progress. Your journey.
                  </p>
                </div>

                {/* Animation stage */}
                <div className="relative h-64 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]">

                  {/* floor */}
                  <div className="absolute bottom-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

                  {/* glow */}
                  <div className="absolute bottom-10 left-1/2 h-20 w-48 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-2xl" />

                  {/* Character */}
                  <div className="walking-person absolute bottom-[48px] left-[14%]">

                    {/* head */}
                    <div className="person-head mx-auto h-8 w-8 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 shadow-lg" />

                    {/* body */}
                    <div className="person-body relative mx-auto mt-1 h-16 w-10 rounded-t-[18px] rounded-b-lg bg-gradient-to-b from-emerald-400 to-emerald-700">

                      {/* arm */}
                      <div className="person-arm absolute -right-4 top-3 h-4 w-12 origin-left rotate-[25deg] rounded-full bg-emerald-500" />
                    </div>

                    {/* legs */}
                    <div className="relative mx-auto flex w-10 justify-center gap-1">
                      <div className="leg-left h-12 w-3 origin-top rounded-full bg-slate-700" />
                      <div className="leg-right h-12 w-3 origin-top rounded-full bg-slate-600" />
                    </div>

                  </div>

                  {/* BAG */}
                  <div className="login-bag absolute bottom-[49px] right-[19%]">
                    <div className="relative h-12 w-16 rounded-lg border border-amber-200/30 bg-gradient-to-br from-amber-800 to-amber-950 shadow-lg shadow-black/40">

                      <div className="absolute -top-3 left-1/2 h-4 w-7 -translate-x-1/2 rounded-t-lg border-2 border-b-0 border-amber-400/50" />

                      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300" />
                    </div>
                  </div>

                  {/* sparkle particles */}
                  <span className="particle p1" />
                  <span className="particle p2" />
                  <span className="particle p3" />
                  <span className="particle p4" />
                </div>

                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.04] px-5 py-3">
                  <BriefcaseBusiness className="h-5 w-5 text-emerald-400" />
                  <span className="text-xs font-semibold text-slate-400">
                    Login करके अपनी तैयारी जारी रखें
                  </span>
                </div>

              </div>
            </section>

            {/* RIGHT FORM */}
            <section className="relative p-6 sm:p-10 lg:p-12">

              <div className="mb-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-black tracking-widest text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  LOYAL ACADEMY
                </div>

                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Student Login
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  अपनी basic details भरें और अपनी learning journey शुरू करें।
                </p>
              </div>

              <form onSubmit={submit} className="space-y-4">

                <Input
                  icon={User}
                  label="पूरा नाम"
                  placeholder="अपना नाम लिखें"
                  value={name}
                  onChange={setName}
                />

                <Input
                  icon={CalendarDays}
                  label="उम्र"
                  placeholder="अपनी उम्र लिखें"
                  type="number"
                  value={age}
                  onChange={setAge}
                />

                <Input
                  icon={MapPin}
                  label="शहर"
                  placeholder="अपना शहर लिखें"
                  value={city}
                  onChange={setCity}
                />

                <Input
                  icon={Map}
                  label="राज्य"
                  placeholder="अपना राज्य लिखें"
                  value={state}
                  onChange={setState}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="login-button group mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-cyan-400 px-5 py-4 text-sm font-black text-slate-950 transition hover:scale-[1.015] disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900/30 border-t-slate-950" />
                      LOGIN हो रहा है...
                    </>
                  ) : (
                    <>
                      LOGIN / CONTINUE
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

              </form>

              <div className="mt-7 flex items-center justify-center gap-2 text-[11px] text-slate-600">
                <span className="h-px w-10 bg-white/10" />
                Email और Password की जरूरत नहीं
                <span className="h-px w-10 bg-white/10" />
              </div>

            </section>

          </div>
        </div>
      </div>

      <style jsx>{`
        .login-shell {
          animation: shellIn 0.8s ease both;
        }

        .walking-person {
          animation: walkAcross 5s ease-in-out infinite;
        }

        .person-head {
          animation: headMove 0.7s ease-in-out infinite alternate;
        }

        .person-body {
          animation: bodyMove 0.7s ease-in-out infinite alternate;
        }

        .leg-left {
          animation: legLeft 0.7s ease-in-out infinite alternate;
        }

        .leg-right {
          animation: legRight 0.7s ease-in-out infinite alternate;
        }

        .login-bag {
          animation: bagPulse 1.8s ease-in-out infinite;
        }

        .login-button {
          box-shadow: 0 10px 35px rgba(52, 211, 153, 0.18);
        }

        .particle {
          position: absolute;
          height: 5px;
          width: 5px;
          border-radius: 999px;
          background: #34d399;
          animation: particleFloat 2.5s ease-in-out infinite;
        }

        .p1 {
          left: 25%;
          top: 25%;
        }

        .p2 {
          left: 55%;
          top: 18%;
          animation-delay: 0.5s;
        }

        .p3 {
          right: 18%;
          top: 38%;
          animation-delay: 1s;
        }

        .p4 {
          left: 68%;
          bottom: 25%;
          animation-delay: 1.5s;
        }

        @keyframes shellIn {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes walkAcross {
          0% {
            transform: translateX(-5px);
          }
          45% {
            transform: translateX(115px);
          }
          55% {
            transform: translateX(115px);
          }
          100% {
            transform: translateX(-5px);
          }
        }

        @keyframes headMove {
          from {
            transform: translateY(0) rotate(-2deg);
          }
          to {
            transform: translateY(-2px) rotate(2deg);
          }
        }

        @keyframes bodyMove {
          from {
            transform: rotate(-2deg);
          }
          to {
            transform: rotate(2deg);
          }
        }

        @keyframes legLeft {
          from {
            transform: rotate(12deg);
          }
          to {
            transform: rotate(-12deg);
          }
        }

        @keyframes legRight {
          from {
            transform: rotate(-12deg);
          }
          to {
            transform: rotate(12deg);
          }
        }

        @keyframes bagPulse {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.04);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            opacity: 0.2;
            transform: translateY(8px) scale(0.7);
          }
          50% {
            opacity: 1;
            transform: translateY(-12px) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .walking-person,
          .person-head,
          .person-body,
          .leg-left,
          .leg-right,
          .login-bag,
          .particle,
          .login-shell {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}

function Input({
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-slate-300">
        {label}
      </span>

      <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 transition-all focus-within:border-emerald-400/50 focus-within:bg-emerald-400/[0.04] focus-within:shadow-[0_0_25px_rgba(52,211,153,.06)]">
        <Icon className="h-5 w-5 shrink-0 text-emerald-400 transition-transform group-focus-within:scale-110" />

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={type === "number" ? "5" : undefined}
          max={type === "number" ? "100" : undefined}
          required
          className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-600"
        />
      </div>
    </label>
  );
}
