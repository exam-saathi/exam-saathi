"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  MapPin,
  User,
} from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    age: "",
    city: "",
    state: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const name = form.name.trim();
    const age = Number(form.age);
    const city = form.city.trim();
    const state = form.state.trim();

    if (!name || !age || !city || !state) {
      setError("कृपया सभी जानकारी भरें।");
      return;
    }

    if (age < 5 || age > 100) {
      setError("कृपया सही उम्र दर्ज करें।");
      return;
    }

    setLoading(true);

    const user = {
      name,
      age,
      city,
      state,
    };

    try {
      // Existing profile state
      localStorage.setItem("examSaathiUser", JSON.stringify(user));

      // Compatibility with existing profile/login code
      localStorage.setItem("exam_sathi_user", JSON.stringify(user));
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("profile", JSON.stringify(user));

      // Save user to backend
      try {
        await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
      } catch {
        // Local profile still works if API is unavailable
      }

      window.dispatchEvent(new Event("examSaathiUserChanged"));

      router.push("/");
      router.refresh();
    } catch {
      setError("Profile बनाने में समस्या हुई। फिर से कोशिश करें।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:py-12">
      <div className="mx-auto flex min-h-[90vh] max-w-md items-center justify-center">
        <div className="w-full">

          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-xl shadow-blue-900/30">
              <GraduationCap className="h-8 w-8" />
            </div>

            <h1 className="mt-5 text-3xl font-black">
              Exam <span className="text-cyan-400">Saathi</span>
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              अपना learning profile बनाएं
            </p>
          </div>

          {/* Card */}
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">

            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Create Profile
              </div>

              <h2 className="mt-2 text-2xl font-black">
                अपनी जानकारी दें
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                केवल चार जानकारी चाहिए। Email और Password की जरूरत नहीं है।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <Field
                label="नाम"
                icon={User}
                placeholder="अपना नाम लिखें"
                value={form.name}
                onChange={(value) => updateField("name", value)}
              />

              {/* Age */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  उम्र
                </label>

                <input
                  type="number"
                  min="5"
                  max="100"
                  value={form.age}
                  onChange={(e) => updateField("age", e.target.value)}
                  placeholder="अपनी उम्र लिखें"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-white/[0.06]"
                />
              </div>

              {/* City */}
              <Field
                label="शहर"
                icon={MapPin}
                placeholder="अपना शहर लिखें"
                value={form.city}
                onChange={(value) => updateField("city", value)}
              />

              {/* State */}
              <Field
                label="राज्य"
                icon={MapPin}
                placeholder="अपना राज्य लिखें"
                value={form.state}
                onChange={(value) => updateField("state", value)}
              />

              {error && (
                <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm font-medium text-red-300">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3.5 font-black shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Profile बन रहा है..." : "Continue"}

                {!loading && (
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                )}
              </button>
            </form>

            <div className="mt-6 flex items-center gap-2 rounded-xl border border-emerald-400/10 bg-emerald-400/5 px-4 py-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />

              <p className="text-xs leading-5 text-slate-500">
                आपकी profile जानकारी से आपका learning experience personalize
                किया जाएगा।
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-slate-600">
            Exam Saathi • Learn • Practice • Achieve
          </p>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  icon: Icon,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-300">
        {label}
      </label>

      <div className="relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-600" />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-white/10 bg-white/[0.04] py-3.5 pl-11 pr-4 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:bg-white/[0.06]"
        />
      </div>
    </div>
  );
}
