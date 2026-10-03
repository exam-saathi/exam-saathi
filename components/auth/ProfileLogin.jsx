"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, User, CalendarDays, ArrowRight } from "lucide-react";

export default function ProfileLogin() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("loyalAcademyUser");

      if (saved) {
        const user = JSON.parse(saved);

        if (user?.loggedIn) {
          setName(user.name || "");
          setAge(user.age || "");
          setCity(user.city || "");
        }
      }
    } catch {}
  }, []);

  function submit(e) {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanCity = city.trim();
    const numericAge = Number(age);

    if (!cleanName) {
      alert("कृपया अपना नाम दर्ज करें।");
      return;
    }

    if (!numericAge || numericAge < 5 || numericAge > 100) {
      alert("कृपया सही उम्र दर्ज करें।");
      return;
    }

    if (!cleanCity) {
      alert("कृपया अपना शहर दर्ज करें।");
      return;
    }

    setLoading(true);

    const user = {
      name: cleanName,
      age: numericAge,
      city: cleanCity,
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
      router.push("/profile");
      router.refresh();
    }, 500);
  }

  return (
    <main className="relative flex min-h-[calc(100vh-70px)] items-center justify-center overflow-hidden bg-[#050816] px-4 py-10">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative w-full max-w-md">

        {/* Animated mascot */}
        <div className="relative z-10 mx-auto -mb-10 flex h-28 w-28 items-center justify-center">

          <div className="absolute h-24 w-24 animate-pulse rounded-full bg-blue-500/20 blur-xl" />

          <div className="relative flex h-24 w-24 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-950 shadow-[0_20px_60px_rgba(0,0,0,.55)]">

            <div className="relative text-[55px] leading-none">
              🐺
            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="rounded-[30px] border border-white/10 bg-slate-950/75 p-6 pt-14 shadow-[0_30px_100px_rgba(0,0,0,.65)] backdrop-blur-2xl sm:p-8 sm:pt-14">

          <div className="mb-7 text-center">
            <h1 className="text-3xl font-black tracking-tight text-white">
              LOYAL <span className="text-blue-400">ACADEMY</span>
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              अपनी परीक्षा की तैयारी शुरू करें
            </p>
          </div>

          <form onSubmit={submit} className="space-y-4">

            <Field
              label="आपका नाम"
              icon={User}
              value={name}
              onChange={setName}
              placeholder="अपना नाम लिखें"
              type="text"
            />

            <Field
              label="उम्र"
              icon={CalendarDays}
              value={age}
              onChange={setAge}
              placeholder="अपनी उम्र लिखें"
              type="number"
            />

            <Field
              label="शहर"
              icon={MapPin}
              value={city}
              onChange={setCity}
              placeholder="अपना शहर लिखें"
              type="text"
            />

            <button
              type="submit"
              disabled={loading}
              className="group mt-3 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-5 py-4 text-sm font-black text-white shadow-[0_10px_35px_rgba(37,99,235,.28)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_15px_45px_rgba(34,211,238,.25)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Login हो रहा है..." : "Continue"}

              {!loading && (
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-[11px] text-slate-600">
              Email और Password की जरूरत नहीं है
            </p>
          </div>

        </div>

        <p className="mt-5 text-center text-xs text-slate-600">
          © LOYAL ACADEMY • Learn • Practice • Achieve
        </p>

      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </main>
  );
}

function Field({
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold text-slate-300">
        {label}
      </span>

      <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 transition-all focus-within:border-cyan-400/50 focus-within:bg-cyan-400/[0.04] focus-within:shadow-[0_0_25px_rgba(34,211,238,.08)]">

        <Icon className="h-5 w-5 shrink-0 text-cyan-400 transition-transform group-focus-within:scale-110" />

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
