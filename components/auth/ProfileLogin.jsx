"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User, CalendarDays, MapPin, Map, ArrowRight, Sparkles } from "lucide-react";

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

    localStorage.setItem("loyalAcademyUser", JSON.stringify(user));

    window.dispatchEvent(new Event("loyalAcademyUserChanged"));

    setTimeout(() => {
      router.push("/");
      router.refresh();
    }, 500);
  }

  return (
    <main className="min-h-[calc(100vh-80px)] overflow-hidden bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto flex min-h-[650px] max-w-5xl items-center justify-center">

        <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 shadow-2xl shadow-emerald-950/30">

          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="grid md:grid-cols-2">

            {/* Animated Side */}
            <div className="relative hidden min-h-[620px] overflow-hidden md:flex flex-col items-center justify-center border-r border-white/10 bg-gradient-to-br from-emerald-950/70 to-slate-950">

              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 20%, rgba(52,211,153,.5) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative z-10 text-center">

                <div className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 shadow-[0_0_80px_rgba(52,211,153,.15)] animate-pulse">
                  <div className="flex h-28 w-28 items-center justify-center rounded-3xl border border-emerald-300/30 bg-gradient-to-br from-emerald-400/20 to-cyan-400/10">
                    <User className="h-16 w-16 text-emerald-300" />
                  </div>
                </div>

                <div className="mb-3 flex items-center justify-center gap-2 text-emerald-300">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em]">
                    Welcome
                  </span>
                  <Sparkles className="h-4 w-4" />
                </div>

                <h1 className="text-4xl font-black tracking-tight">
                  LOYAL
                  <span className="text-emerald-400"> ACADEMY</span>
                </h1>

                <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
                  अपनी परीक्षा की तैयारी जारी रखें और अपनी learning journey
                  को एक ही जगह से manage करें।
                </p>

                <div className="mt-8 flex justify-center gap-2">
                  <span className="h-1.5 w-10 rounded-full bg-emerald-400" />
                  <span className="h-1.5 w-3 rounded-full bg-cyan-400/60" />
                  <span className="h-1.5 w-3 rounded-full bg-emerald-400/30" />
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="relative z-10 p-6 sm:p-10">

              <div className="mb-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  STUDENT LOGIN
                </div>

                <h2 className="text-3xl font-black">
                  Welcome Back
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  अपनी details भरकर LOYAL ACADEMY में प्रवेश करें।
                </p>
              </div>

              <form onSubmit={submit} className="space-y-4">

                <Field
                  icon={User}
                  label="पूरा नाम"
                  placeholder="अपना नाम लिखें"
                  value={name}
                  onChange={setName}
                />

                <Field
                  icon={CalendarDays}
                  label="उम्र"
                  placeholder="अपनी उम्र लिखें"
                  type="number"
                  value={age}
                  onChange={setAge}
                />

                <Field
                  icon={MapPin}
                  label="शहर"
                  placeholder="अपना शहर लिखें"
                  value={city}
                  onChange={setCity}
                />

                <Field
                  icon={Map}
                  label="राज्य"
                  placeholder="अपना राज्य लिखें"
                  value={state}
                  onChange={setState}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-4 text-sm font-black text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:scale-[1.01] hover:shadow-emerald-400/30 disabled:opacity-60"
                >
                  {loading ? "LOGIN हो रहा है..." : "LOGIN / CONTINUE"}
                  {!loading && (
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  )}
                </button>

              </form>

              <p className="mt-6 text-center text-[11px] text-slate-500">
                Email और Password की जरूरत नहीं है।
              </p>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({
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

      <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 transition focus-within:border-emerald-400/50 focus-within:bg-emerald-400/[0.04]">
        <Icon className="h-5 w-5 shrink-0 text-emerald-400 transition group-focus-within:scale-110" />

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={type === "number" ? "5" : undefined}
          max={type === "number" ? "100" : undefined}
          className="w-full bg-transparent py-3.5 text-sm text-white outline-none placeholder:text-slate-600"
          required
        />
      </div>
    </label>
  );
}
