"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Home,
  Menu,
  Trophy,
  UserCircle,
  X,
} from "lucide-react";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      try {
        const keys = [
          "examSaathiUser",
          "exam_sathi_user",
          "user",
          "profile",
        ];

        let found = null;

        for (const key of keys) {
          const raw = localStorage.getItem(key);
          if (!raw) continue;

          try {
            const parsed = JSON.parse(raw);

            if (parsed?.name) {
              found = parsed;
              break;
            }
          } catch {
            if (raw.trim()) {
              found = { name: raw.trim() };
              break;
            }
          }
        }

        setUser(found);
      } catch {
        setUser(null);
      }
    };

    loadUser();

    window.addEventListener("storage", loadUser);
    window.addEventListener("examSaathiUserChanged", loadUser);

    return () => {
      window.removeEventListener("storage", loadUser);
      window.removeEventListener("examSaathiUserChanged", loadUser);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-lg shadow-blue-900/30">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>

            <div>
              <div className="text-base font-black">
                Exam <span className="text-cyan-400">Saathi</span>
              </div>

              <div className="text-[8px] font-semibold tracking-[0.22em] text-slate-500">
                LEARN • PRACTICE • ACHIEVE
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            <NavItem href="/" icon={Home} label="Home" />
            <NavItem href="/subjects" icon={BookOpen} label="Subjects" />
            <NavItem href="/quizzes" icon={ClipboardCheck} label="Quizzes" />
            <NavItem href="/mock-tests" icon={ClipboardCheck} label="Mock Tests" />
            <NavItem href="/leaderboard" icon={Trophy} label="Rank" />
          </nav>

          {/* Right */}
          <div className="hidden items-center gap-2 sm:flex">

            {user ? (
              <Link
                href="/profile"
                className="group flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-cyan-400/30 hover:bg-white/10"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 text-xs font-black">
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <div className="max-w-[110px]">
                  <div className="truncate text-xs font-bold text-white">
                    {user.name}
                  </div>
                  <div className="text-[9px] text-slate-500">
                    My Profile
                  </div>
                </div>
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2.5 text-sm font-bold shadow-lg shadow-blue-900/30"
                >
                  Sign Up
                </Link>
              </>
            )}

          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 sm:hidden"
            aria-label="Menu"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-white/10 bg-slate-950 px-4 py-4 sm:hidden">
            <div className="space-y-2">

              <MobileItem
                href="/"
                icon={Home}
                label="Home"
                onClick={closeMenu}
              />

              <MobileItem
                href="/subjects"
                icon={BookOpen}
                label="Subjects"
                onClick={closeMenu}
              />

              <MobileItem
                href="/quizzes"
                icon={ClipboardCheck}
                label="Quizzes"
                onClick={closeMenu}
              />

              <MobileItem
                href="/mock-tests"
                icon={ClipboardCheck}
                label="Mock Tests"
                onClick={closeMenu}
              />

              <MobileItem
                href="/leaderboard"
                icon={Trophy}
                label="Leaderboard"
                onClick={closeMenu}
              />

              {user ? (
                <MobileItem
                  href="/profile"
                  icon={UserCircle}
                  label={`${user.name} • Profile`}
                  onClick={closeMenu}
                />
              ) : (
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    href="/login"
                    onClick={closeMenu}
                    className="rounded-xl border border-white/10 bg-white/5 py-3 text-center text-sm font-bold"
                  >
                    Login
                  </Link>

                  <Link
                    href="/signup"
                    onClick={closeMenu}
                    className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-center text-sm font-bold"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function NavItem({ href, icon: Icon, label }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/10 hover:text-white"
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
}

function MobileItem({ href, icon: Icon, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-300"
    >
      <Icon className="h-5 w-5 text-cyan-400" />
      {label}
    </Link>
  );
}
