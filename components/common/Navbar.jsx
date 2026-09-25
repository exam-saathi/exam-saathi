"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  UserCircle,
} from "lucide-react";

const navItems = [
  { name: "होम", href: "/" },
  { name: "क्विज़", href: "/quizzes" },
  { name: "मॉक टेस्ट", href: "/mock-tests" },
  { name: "कोर्स", href: "/courses" },
  { name: "विषय", href: "/subjects" },
  { name: "नोट्स", href: "/notes" },
  { name: "लीडरबोर्ड", href: "/leaderboard" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <BookOpen size={21} />
          </div>

          <div>
            <div className="text-lg font-extrabold leading-none text-blue-700">
              Exam<span className="text-orange-500">Sathi</span>
            </div>

            <div className="mt-1 text-[10px] font-medium text-slate-500">
              पढ़ाई आपकी, साथ हमारा
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            href="/login"
            className="rounded-xl px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100"
          >
            लॉगिन
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700"
          >
            शुरू करें
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "मेनू बंद करें" : "मेनू खोलें"}
          onClick={() => setOpen(!open)}
          className="rounded-xl p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold"
            >
              <UserCircle size={18} />
              लॉगिन
            </Link>

            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white"
            >
              शुरू करें
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
