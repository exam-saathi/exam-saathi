"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  UserRound,
  CalendarDays,
  GraduationCap,
  MapPin,
  Building2,
  Target,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const preparations = [
  "UPSC",
  "UPPSC",
  "BPSC",
  "UP RO/ARO",
  "SSC",
  "Banking",
  "Teaching",
  "Other",
];

const states = [
  "Uttar Pradesh",
  "Bihar",
  "Madhya Pradesh",
  "Rajasthan",
  "Delhi",
  "Maharashtra",
  "West Bengal",
  "Jharkhand",
  "Other",
];

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    age: "",
    preparation: "",
    state: "",
    district: "",
    goal: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("examSathiUser");

      if (saved) {
        const user = JSON.parse(saved);

        setForm({
          name: user.name || "",
          age: user.age || "",
          preparation: user.preparation || "",
          state: user.state || "",
          district: user.district || "",
          goal: user.goal || "",
        });
      }
    } catch {
      // Ignore invalid local data.
    }
  }, []);

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (error) setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const name = form.name.trim();
    const district = form.district.trim();
    const age = Number(form.age);

    if (name.length < 2) {
      setError("कृपया अपना सही नाम दर्ज करें।");
      return;
    }

    if (!age || age < 10 || age > 100) {
      setError("कृपया सही उम्र दर्ज करें।");
      return;
    }

    if (!form.preparation) {
      setError("अपनी तैयारी चुनें।");
      return;
    }

    if (!form.state) {
      setError("अपना State चुनें।");
      return;
    }

    if (district.length < 2) {
      setError("कृपया अपना District दर्ज करें।");
      return;
    }

    setLoading(true);

    const user = {
      name,
      age,
      preparation: form.preparation,
      state: form.state,
      district,
      goal: form.goal.trim(),
      loggedIn: true,
      loginAt: new Date().toISOString(),
    };

    try {
      localStorage.setItem("examSathiUser", JSON.stringify(user));
      localStorage.setItem("examSathiLoggedIn", "true");

      setTimeout(() => {
        router.push("/dashboard");
      }, 350);
    } catch {
      setLoading(false);
      setError("Login save नहीं हो पाया। कृपया दोबारा कोशिश करें।");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-10 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

        {/* Left branding */}
        <section className="hidden lg:block">
          <div className="max-w-lg text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
              <Sparkles size={17} />
              ExamSathi Student Portal
            </div>

            <h1 className="text-5xl font-black leading-tight">
              आपकी तैयारी,
              <span className="block text-blue-400">
                आपकी पहचान।
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              अपनी basic profile पूरी करें और ExamSathi पर अपनी
              preparation journey शुरू करें।
            </p>

            <div className="mt-8 space-y-4">
              {[
                ["Personal Dashboard", "अपनी तैयारी और progress एक जगह देखें।"],
                ["Smart Practice", "अपनी परीक्षा के अनुसार अभ्यास करें।"],
                ["Secure Profile", "आपकी profile इसी browser में सुरक्षित रहती है।"],
              ].map(([title, text]) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Login card */}
        <section className="mx-auto w-full max-w-xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl">

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-7 text-white sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                  📚
                </div>

                <div>
                  <p className="text-sm font-bold text-blue-100">
                    Welcome to
                  </p>

                  <h2 className="text-2xl font-black">
                    ExamSathi
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-blue-50">
                अपनी profile complete करें और अपनी exam preparation शुरू करें।
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8">

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  नाम
                </label>

                <div className="relative">
                  <UserRound
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="अपना नाम लिखें"
                    maxLength={50}
                    autoComplete="name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  उम्र
                </label>

                <div className="relative">
                  <CalendarDays
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="number"
                    value={form.age}
                    onChange={(e) => updateField("age", e.target.value)}
                    placeholder="अपनी उम्र"
                    min="10"
                    max="100"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  आपकी तैयारी
                </label>

                <div className="relative">
                  <GraduationCap
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    value={form.preparation}
                    onChange={(e) =>
                      updateField("preparation", e.target.value)
                    }
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="">अपनी परीक्षा चुनें</option>

                    {preparations.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    State
                  </label>

                  <div className="relative">
                    <MapPin
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <select
                      value={form.state}
                      onChange={(e) =>
                        updateField("state", e.target.value)
                      }
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    >
                      <option value="">State चुनें</option>

                      {states.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    District
                  </label>

                  <div className="relative">
                    <Building2
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      value={form.district}
                      onChange={(e) =>
                        updateField("district", e.target.value)
                      }
                      placeholder="जिला"
                      maxLength={40}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-slate-700">
                  आपका लक्ष्य
                  <span className="ml-2 font-normal text-slate-400">
                    (Optional)
                  </span>
                </label>

                <div className="relative">
                  <Target
                    size={19}
                    className="absolute left-4 top-4 text-slate-400"
                  />

                  <input
                    value={form.goal}
                    onChange={(e) =>
                      updateField("goal", e.target.value)
                    }
                    placeholder="जैसे: UPSC 2027"
                    maxLength={60}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 font-black text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Profile तैयार हो रही है..." : "Login & Start Preparation"}
                {!loading && <ArrowRight size={19} />}
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Login करके आप ExamSathi पर अपनी preparation journey शुरू करते हैं।
              </p>

            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
