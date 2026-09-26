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
    <footer className="mt-12 bg-[#020617] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
                📖
              </span>
              <span>
                Exam<span className="text-blue-400">Sathi</span>
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              हिंदी माध्यम के विद्यार्थियों के लिए प्रतियोगी परीक्षाओं की
              तैयारी, अभ्यास टेस्ट, क्विज़, नोट्स और मॉक टेस्ट।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-white">
              त्वरित लिंक
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <a href="/" className="block hover:text-blue-400">होम</a>
              <a href="/mock-tests" className="block hover:text-blue-400">मॉक टेस्ट</a>
              <a href="/quizzes" className="block hover:text-blue-400">क्विज़</a>
              <a href="/courses" className="block hover:text-blue-400">कोर्स</a>
              <a href="/leaderboard" className="block hover:text-blue-400">लीडरबोर्ड</a>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-white">
              ⚡ Skills & Technology
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-blue-500 hover:text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-bold text-white">
              सहायता
            </h3>

            <div className="space-y-3 text-sm text-slate-400">
              <a href="/contact" className="block hover:text-blue-400">
                ✉ संपर्क करें
              </a>
              <a href="/privacy" className="block hover:text-blue-400">
                🔒 प्राइवेसी
              </a>

              <div className="mt-5 rounded-xl border border-blue-900/50 bg-blue-950/40 p-4">
                <p className="text-xs font-semibold text-blue-300">
                  🚀 Learn • Practice • Achieve
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  लगातार सीखें और अपनी तैयारी बेहतर बनाएं।
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="my-8 h-px bg-slate-800" />

        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 ExamSathi. सभी अधिकार सुरक्षित।
          </p>

          <p className="text-xs font-semibold text-slate-500">
            Developed by{" "}
            <span className="text-blue-400">LOYAL ji</span> ✦
          </p>
        </div>

      </div>
    </footer>
  );
}
