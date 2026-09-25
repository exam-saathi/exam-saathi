"use client";

import Link from "next/link";
import { UserPlus, Mail, Lock, User, ArrowLeft } from "lucide-react";

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-md">

        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          होम पर वापस जाएं
        </Link>

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

          {/* Header */}
          <div className="bg-slate-950 px-6 py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
              <UserPlus size={26} />
            </div>

            <h1 className="mt-4 text-2xl font-black text-white">
              Exam<span className="text-orange-500">Sathi</span>
            </h1>

            <p className="mt-2 text-sm text-slate-300">
              अपनी तैयारी का सफर आज से शुरू करें
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5 p-6">

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                आपका नाम
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="पूरा नाम"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                ईमेल
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                पासवर्ड
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  placeholder="कम से कम 6 अक्षर"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.98]"
            >
              अकाउंट बनाएं
            </button>

          </form>

          <div className="border-t border-slate-100 px-6 py-5 text-center">
            <p className="text-sm text-slate-500">
              पहले से अकाउंट है?{" "}
              <Link
                href="/login"
                className="font-bold text-blue-600 hover:text-blue-700"
              >
                लॉगिन करें
              </Link>
            </p>
          </div>
        </div>

        {/* Developer Branding */}
        <div className="mt-6 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-400">
            Crafted with ❤️
          </p>

          <p className="mt-1 text-sm font-black tracking-wide text-slate-700">
            Developer by{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              LOYAL ji
            </span>
          </p>
        </div>

      </div>
    </main>
  );
}
