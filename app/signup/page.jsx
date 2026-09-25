"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  CalendarDays,
  GraduationCap,
  MapPin,
  Building2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const preparations = [
  "UPSC",
  "UPPCS",
  "UP RO/ARO",
  "BPSC",
  "SSC",
  "Railway",
  "CTET",
  "SUPER TET",
  "TGT",
  "Other",
];

const states = [
  "Uttar Pradesh",
  "Bihar",
  "Delhi",
  "Madhya Pradesh",
  "Rajasthan",
  "Jharkhand",
  "Haryana",
  "Uttarakhand",
  "Maharashtra",
  "Other",
];

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    age: "",
    preparation: "",
    state: "",
    district: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    const name = form.name.trim();
    const age = Number(form.age);
    const preparation = form.preparation;
    const state = form.state;
    const district = form.district.trim();

    if (!name) {
      setError("कृपया अपना नाम दर्ज करें।");
      return;
    }

    if (!age || age < 10 || age > 100) {
      setError("कृपया सही Age दर्ज करें।");
      return;
    }

    if (!preparation) {
      setError("अपनी Preparation चुनें।");
      return;
    }

    if (!state) {
      setError("अपना State चुनें।");
      return;
    }

    if (!district) {
      setError("अपना District दर्ज करें।");
      return;
    }

    setLoading(true);

    const student = {
      name,
      age,
      preparation,
      state,
      district,
      loginAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "examSathiStudent",
      JSON.stringify(student)
    );

    localStorage.setItem("examSathiLoggedIn", "true");

    setTimeout(() => {
      router.push("/dashboard");
    }, 400);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 px-4 py-8 sm:py-12">
      <div className="mx-auto flex min-h-[90vh] max-w-6xl items-center justify-center">

        <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}
          <section className="relative hidden overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 p-10 text-white lg:block">

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

            <div className="relative flex h-full flex-col justify-between">

              <div>
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
                  <Sparkles size={16} />
                  EXAM SAATHI
                </div>

                <h1 className="text-5xl font-black leading-tight">
                  आपकी तैयारी,
                  <span className="block text-cyan-300">
                    आपकी पहचान।
                  </span>
                </h1>

                <p className="mt-5 max-w-md text-base leading-8 text-blue-100">
                  अपनी basic profile पूरी करें और Quiz, Mock Test,
                  Notes तथा Courses के साथ अपनी preparation को एक जगह
                  व्यवस्थित करें।
                </p>
              </div>

              <div className="mt-12 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur">
                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                    <ShieldCheck size={25} />
                  </div>

                  <div>
                    <h3 className="font-extrabold">
                      Profile सुरक्षित रखें
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-blue-100">
                      आपकी profile information इसी browser में
                      save की जाएगी।
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </section>

          {/* RIGHT */}
          <section className="bg-white p-6 sm:p-10 lg:p-12">

            <div className="mx-auto max-w-xl">

              <div className="mb-8">

                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <GraduationCap size={27} />
                </div>

                <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                  अपनी Profile बनाएं
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  सिर्फ basic information भरें और Exam Saathi पर
                  अपनी तैयारी शुरू करें।
                </p>

              </div>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    आपका नाम
                  </label>

                  <div className="relative">
                    <User
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      value={form.name}
                      onChange={(e) =>
                        updateField("name", e.target.value)
                      }
                      placeholder="जैसे Rahul Kumar"
                      maxLength={50}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* AGE */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    आपकी Age
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="number"
                      value={form.age}
                      onChange={(e) =>
                        updateField("age", e.target.value)
                      }
                      placeholder="जैसे 21"
                      min="10"
                      max="100"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* PREPARATION */}
                <div>
                  <label className="mb-2 block text-sm font-bold text-slate-700">
                    आपकी Preparation
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
                      className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    >
                      <option value="">
                        अपनी परीक्षा चुनें
                      </option>

                      {preparations.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* STATE */}
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
                      className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    >
                      <option value="">
                        अपना State चुनें
                      </option>

                      {states.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* DISTRICT */}
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
                      placeholder="जैसे Prayagraj"
                      maxLength={50}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {error && (
                  <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Profile तैयार हो रही है..." : "Continue to Exam Saathi"}
                  {!loading && <ArrowRight size={19} />}
                </button>

              </form>

              <p className="mt-5 text-center text-xs leading-5 text-slate-400">
                Email और Password की जरूरत नहीं है।
                आपकी profile इसी browser में save होगी।
              </p>

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
