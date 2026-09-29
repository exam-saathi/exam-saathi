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

  const icons = [
    "🛡️","🔐","🐍","⚡","⚛️","🌐","🐧",
    "🔧","🌍","🗄️","🎨","💻","🧪","🏴‍☠️"
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

          {/* LINKS */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-white">
              ⚡ त्वरित लिंक
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <a href="/" className="block hover:text-blue-400">होम</a>
              <a href="/mock-tests" className="block hover:text-blue-400">मॉक टेस्ट</a>
              <a href="/quizzes" className="block hover:text-blue-400">क्विज़</a>
              <a href="/courses" className="block hover:text-blue-400">कोर्स</a>
              <a href="/leaderboard" className="block hover:text-blue-400">लीडरबोर्ड</a>
            </div>
          </div>

          {/* PREMIUM SKILLS */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-lg">
                ⚡
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-white">
                  Skills & Technology
                </h3>

                <p className="text-[10px] tracking-widest text-slate-500">
                  LOYAL TECH STACK
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-xl">

              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  Expertise
                </span>

                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-[9px] font-bold text-emerald-400">
                  ● ACTIVE
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-slate-700 bg-slate-900 px-2.5 py-2 text-[10px] font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-blue-500/10 hover:text-blue-300"
                  >
                    <span className="mr-1">{icons[index]}</span>
                    {skill}
                  </span>
                ))}
              </div>

              <div className="my-4 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

              <div className="flex items-center justify-between">
                <span className="text-[9px] text-slate-500">
                  TECH • SECURITY • DEVELOPMENT
                </span>

                <span className="text-[11px] font-black tracking-widest text-blue-400">
                  LOYAL
                </span>
              </div>
            </div>
          </div>

          {/* SUPPORT */}
          <div>
            <h3 className="mb-5 text-sm font-bold text-white">
              🛡️ सहायता
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <a href="/contact" className="block hover:text-blue-400">
                ✉ संपर्क करें
              </a>

              <a href="/privacy" className="block hover:text-blue-400">
                🔒 प्राइवेसी
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-blue-900/50 bg-blue-950/40 p-4">
              <p className="text-xs font-bold text-blue-300">
                🚀 Learn • Practice • Achieve
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                लगातार सीखें और अपनी तैयारी को बेहतर बनाएं।
              </p>
            </div>
          </div>

        </div>

        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 ExamSathi. सभी अधिकार सुरक्षित।
          </p>

          <p className="text-xs font-medium text-slate-500">
            Developed with ❤️ by{" "}
            <span className="font-black tracking-widest text-blue-400">
              LOYAL
            </span>{" "}
            ✦
          </p>
        </div>

      </div>
    </footer>
  );
}
