from pathlib import Path

files = {}

files["app/page.jsx"] = r'''import Link from "next/link";

const exams = [
  ["UPSC Prelims","UPSC की complete prelims preparation","/upsc-prelims"],
  ["UPPSC Prelims","UP PCS exam-focused preparation","/uppsc-prelims"],
  ["UP All Exams","UPSSSC, Police, RO/ARO, TGT/PGT आदि","/up-exams"],
  ["Bihar All Exams","BPSC, Bihar Police, BSSC, Teacher आदि","/bihar-exams"],
];

const features = [
  "Latest exam pattern के अनुसार test series",
  "Hindi और English medium support",
  "Detailed solutions और explanations",
  "All India Rank और performance analysis",
  "Topic-wise performance tracking",
  "Mobile-friendly online test platform",
  "Daily Current Affairs quizzes",
  "Experienced faculty guidance",
  "Affordable plans",
  "WhatsApp / Telegram doubt support",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="text-xl font-black tracking-tight">
            <span className="text-blue-400">LOYAL</span>{" "}
            <span className="text-white">EDUCATION HUB</span>
          </Link>

          <nav className="hidden gap-6 text-sm font-semibold md:flex">
            <Link href="/">Home</Link>
            <Link href="/upsc-prelims">UPSC</Link>
            <Link href="/uppsc-prelims">UPPSC</Link>
            <Link href="/up-exams">UP Exams</Link>
            <Link href="/bihar-exams">Bihar Exams</Link>
            <Link href="/free-resources">Free Resources</Link>
            <Link href="/results">Results</Link>
          </nav>

          <Link
            href="/login"
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-black"
          >
            Student Login
          </Link>
        </div>
      </header>

      <div className="border-b border-orange-500/20 bg-orange-500/10 px-4 py-2 text-center text-xs font-bold text-orange-300">
        UPSC • UPPSC • UP & Bihar Competitive Exams — Online Test Series Admissions Open!
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-20 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 text-center">
          <div className="mx-auto mb-5 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-black text-blue-300">
            INDIA'S COMPETITIVE EXAM PREPARATION HUB
          </div>

          <h1 className="text-5xl font-black leading-tight sm:text-7xl">
            Prepare Smart.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
              Perform Better.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
            UPSC, UPPSC, Uttar Pradesh और Bihar के competitive exams के लिए
            mock tests, test series, detailed solutions, current affairs और
            performance analysis — सब एक जगह।
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/free-resources"
              className="rounded-2xl bg-orange-500 px-7 py-4 font-black"
            >
              Start Free Test
            </Link>
            <Link
              href="/test-series"
              className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-black"
            >
              Explore Test Series
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-8">
          <p className="text-xs font-black tracking-[.25em] text-orange-400">EXAM CATEGORIES</p>
          <h2 className="mt-2 text-3xl font-black">Choose Your Preparation</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map(([title, text, href]) => (
            <Link
              key={title}
              href={href}
              className="group rounded-3xl border border-white/10 bg-white/[.03] p-6 transition hover:-translate-y-1 hover:border-blue-400/40"
            >
              <div className="text-3xl">📚</div>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              <div className="mt-6 text-sm font-bold text-blue-400">Explore →</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.02]">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="text-xs font-black tracking-[.25em] text-blue-400">WHY LOYAL</p>
          <h2 className="mt-2 text-3xl font-black">Why Students Choose Loyal Education Hub?</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 p-5">
                <span className="mr-3 text-orange-400">✓</span>
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-xl font-black">
                <span className="text-blue-400">LOYAL</span> EDUCATION HUB
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                India के aspirants के लिए reliable online test preparation platform.
              </p>
            </div>

            <div>
              <h4 className="font-black">Popular Exams</h4>
              <div className="mt-3 space-y-2 text-sm text-slate-500">
                <Link className="block" href="/upsc-prelims">UPSC Prelims</Link>
                <Link className="block" href="/uppsc-prelims">UPPSC Prelims</Link>
                <Link className="block" href="/up-exams">UP All Exams</Link>
                <Link className="block" href="/bihar-exams">Bihar All Exams</Link>
              </div>
            </div>

            <div>
              <h4 className="font-black">Student Support</h4>
              <div className="mt-3 space-y-2 text-sm text-slate-500">
                <Link className="block" href="/contact">Contact Us</Link>
                <Link className="block" href="/free-resources">Free Resources</Link>
                <Link className="block" href="/results">Results</Link>
              </div>
            </div>

            <div>
              <h4 className="font-black">Follow Us</h4>
              <p className="mt-3 text-sm text-slate-500">
                YouTube • Telegram • WhatsApp • Instagram
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center">
            <p className="text-sm font-black">
              Developed by{" "}
              <span className="loyal-heart">💓 LOYAL JI 💓</span>
            </p>
            <p className="mt-2 text-xs text-slate-600">
              Loyal Education Hub • Practice. Analyze. Improve. Succeed.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
'''

files["app/globals.css"] = r'''@import "tailwindcss";

:root {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #020617;
  color: white;
}

.loyal-heart {
  animation: loyalColor 3s linear infinite;
}

@keyframes loyalColor {
  0% { color: #60a5fa; }
  25% { color: #22d3ee; }
  50% { color: #fb923c; }
  75% { color: #f472b6; }
  100% { color: #a78bfa; }
}
'''

pages = {
"upsc-prelims": ("UPSC Prelims Test Series 2027",
"""GS Paper I mock tests
CSAT practice tests
Subject-wise tests
Full-length simulated tests
Current Affairs monthly tests
Previous Year Question Practice
Detailed Solutions
Student Performance Dashboard"""),

"uppsc-prelims": ("UPPSC Prelims Test Series",
"""UPPSC GS Paper I
GS Paper II / CSAT
Uttar Pradesh Special GK
UP Current Affairs
Subject-wise Mini Tests
Full-length Mock Exams
Previous Year Questions
Hindi-medium focused preparation"""),

"up-exams": ("Uttar Pradesh All Competitive Exams",
"""UPSSSC PET
UP Police Constable
UP Police SI
UP Lekhpal
UP RO/ARO
UP Junior Assistant
UP TGT/PGT
UP शिक्षक भर्ती
UPPSC RO/ARO
UP Home Guard
UP Secretariat Exams
UP Group C & Group D"""),

"bihar-exams": ("Bihar Competitive Exams Test Series",
"""BPSC Prelims
BPSC Mains Practice
Bihar Police Constable
Bihar Police SI / Daroga
BSSC CGL
BSSC Inter Level
Bihar Teacher Recruitment
Bihar STET
Bihar Panchayati Raj
BTSC
Bihar GK
Bihar Current Affairs
Bihar History & Geography"""),

"test-series": ("Professional Test Series", 
"""UPSC Test Series
UPPSC Test Series
UP All Exams Test Series
Bihar All Exams Test Series
Subject-wise Tests
Full-length Mock Tests
Current Affairs Tests
Previous Year Question Tests"""),

"free-resources": ("Free Resources",
"""Daily Current Affairs
Daily Quiz
Weekly Quiz
Monthly Current Affairs PDF
Previous Year Papers
Study Notes
Free Mock Tests
Exam Notifications"""),

"results": ("Results & Performance",
"""Top Rankers
Student Scorecards
Test Results
All India Rank
Subject-wise Performance
Accuracy Analysis
Success Stories"""),

"about": ("About Loyal Education Hub",
"""Loyal Education Hub का mission competitive-exam aspirants को reliable,
structured और exam-focused preparation platform देना है।

हमारा focus है — quality tests, detailed solutions, performance analysis
और students के लिए simple तथा mobile-friendly learning experience."""),

"contact": ("Contact Us",
"""Student Support
WhatsApp Support
Telegram Support
Email Support
YouTube Channel
Instagram / Facebook
Contact Form"""),
}

for slug, (title, items) in pages.items():
    lis = "\n".join(
        f'<li className="rounded-xl border border-white/10 bg-white/[.03] p-4">{x}</li>'
        for x in items.splitlines()
    )
    files[f"app/{slug}/page.jsx"] = f'''import Link from "next/link";

export default function Page() {{
  const items = {items.splitlines()!r};

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
          <Link href="/" className="text-xl font-black">
            <span className="text-blue-400">LOYAL</span> EDUCATION HUB
          </Link>
          <Link href="/test-series" className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-black">
            Test Series
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-black tracking-[.25em] text-orange-400">
            LOYAL EDUCATION HUB
          </p>
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">{title}</h1>
          <p className="mt-5 text-slate-400">
            Smart practice, detailed solutions और performance-focused preparation.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {{items.map((item) => (
            <div key={{item}} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <div className="text-2xl">✓</div>
              <h2 className="mt-4 font-bold">{{item}}</h2>
              <p className="mt-2 text-sm text-slate-500">
                Exam-focused practice और detailed preparation.
              </p>
            </div>
          ))}}
        </div>

        <div className="mt-12">
          <Link href="/free-resources" className="rounded-2xl bg-orange-500 px-7 py-4 font-black">
            Start Free Preparation →
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm">
        Developed by <span className="loyal-heart font-black">💓 LOYAL JI 💓</span>
      </footer>
    </main>
  );
}}
'''

# Clear old page/data structures but preserve config, package files, git and public assets.
for folder in ["app"]:
    p = Path(folder)
    if p.exists():
        for child in p.iterdir():
            if child.name in ["favicon.ico"]:
                continue
            if child.is_dir():
                import shutil
                shutil.rmtree(child)
            else:
                child.unlink()

for path, content in files.items():
    p = Path(path)
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(content, encoding="utf-8")

Path("data").mkdir(exist_ok=True)
Path("data/batches.js").write_text(
'''export const batches = [
  {
    id: "history-khan-sir",
    title: "History by Khan Sir",
    subtitle: "इतिहास की सम्पूर्ण तैयारी",
    teacher: "Khan Sir",
    status: "LIVE",
    sessions: [],
  },
  {
    id: "pw-batch",
    title: "PW Competitive Exams Batch",
    subtitle: "Competitive Exam Preparation",
    teacher: "PW",
    status: "LIVE",
    sessions: [],
  },
];
''', encoding="utf-8")

Path("data/test-series.js").write_text(
'''export const testSeries = [
  {
    id: "upsc-prelims",
    title: "UPSC Prelims Test Series",
    exam: "UPSC",
    status: "LIVE",
    tests: [],
  },
  {
    id: "uppsc-prelims",
    title: "UPPSC Prelims Test Series",
    exam: "UPPSC",
    status: "LIVE",
    tests: [],
  },
  {
    id: "up-all-exams",
    title: "UP All Exams Test Series",
    exam: "UP",
    status: "LIVE",
    tests: [],
  },
  {
    id: "bihar-all-exams",
    title: "Bihar All Exams Test Series",
    exam: "Bihar",
    status: "LIVE",
    tests: [],
  },
];
''', encoding="utf-8")

print("LOYAL EDUCATION HUB structure created.")
