export default function Footer() {
  const skills = [
    "Ethical Hacking",
    "Cyber Security",
    "Python Programming",
    "JavaScript",
    "React / Next.js",
    "Web Development",
    "Linux & Termux",
    "Git & GitHub",
    "Computer Networking",
    "SQL & Databases",
    "UI / UX Design",
    "C / C++",
    "Security Labs",
    "CTF & Cyber Practice",
  ];

  return (
    <footer className="mt-16 bg-[#020617] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12">

        <div className="grid gap-10 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30">
                📖
              </div>

              <div>
                <div className="text-xl font-extrabold">
                  Exam<span className="text-blue-400">Sathi</span>
                </div>
                <div className="text-[10px] tracking-widest text-slate-500">
                  LEARN • PRACTICE • ACHIEVE
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              हिंदी माध्यम के विद्यार्थियों के लिए प्रतियोगी परीक्षाओं की
              तैयारी, अभ्यास टेस्ट, क्विज़, नोट्स और मॉक टेस्ट।
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-white">
              ⚡ त्वरित लिंक
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <a href="/" className="block transition hover:translate-x-1 hover:text-blue-400">
                होम
              </a>

              <a href="/mock-tests" className="block transition hover:translate-x-1 hover:text-blue-400">
                मॉक टेस्ट
              </a>

              <a href="/quizzes" className="block transition hover:translate-x-1 hover:text-blue-400">
                क्विज़
              </a>

              <a href="/courses" className="block transition hover:translate-x-1 hover:text-blue-400">
                कोर्स
              </a>

              <a href="/leaderboard" className="block transition hover:translate-x-1 hover:text-blue-400">
                लीडरबोर्ड
              </a>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-white">
              ⚡ Skills & Technology
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[11px] font-medium text-slate-300 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-500 hover:text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-white">
              🛡️ सहायता
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <a
                href="/contact"
                className="block transition hover:translate-x-1 hover:text-blue-400"
              >
                ✉ संपर्क करें
              </a>

              <a
                href="/privacy"
                className="block transition hover:translate-x-1 hover:text-blue-400"
              >
                🔒 प्राइवेसी
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-900/50 bg-gradient-to-br from-blue-950/70 to-slate-950 p-4 shadow-lg shadow-blue-950/20">
              <p className="text-xs font-bold text-blue-300">
                🚀 Learn • Practice • Achieve
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                लगातार सीखें और अपनी तैयारी को बेहतर बनाएं।
              </p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* BOTTOM BRAND */}
        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row">

          <p className="text-xs text-slate-500">
            © 2026 ExamSathi. सभी अधिकार सुरक्षित।
          </p>

          <p className="text-xs font-medium text-slate-500">
            Developed with ❤️ by{" "}
            <span className="loyal-rainbow font-black tracking-widest">
              LOYAL
            </span>{" "}
            ✦
          </p>
        </div>

      </div>

      {/* LOYAL ANIMATION */}
      <style jsx>{`
        .loyal-rainbow {
          background: linear-gradient(
            90deg,
            #00e5ff,
            #3b82f6,
            #a855f7,
            #ec4899,
            #f97316,
            #22c55e,
            #00e5ff
          );
          background-size: 400% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: loyalColor 5s linear infinite;
          text-shadow: 0 0 18px rgba(59, 130, 246, 0.25);
        }

        @keyframes loyalColor {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </footer>
  );
}
