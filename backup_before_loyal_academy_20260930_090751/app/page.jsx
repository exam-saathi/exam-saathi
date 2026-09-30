import Link from "next/link";

const exams = [
  {
    title: "UPSC",
    subtitle: "Civil Services Examination",
    href: "/upsc",
  },
  {
    title: "UPPSC",
    subtitle: "Uttar Pradesh PCS",
    href: "/uppsc",
  },
  {
    title: "UP Exams",
    subtitle: "UPSSSC • Police • RO/ARO • TGT/PGT",
    href: "/up-exams",
  },
  {
    title: "Bihar Exams",
    subtitle: "BPSC • Bihar Police • BSSC • Teaching",
    href: "/bihar-exams",
  },
];

const features = [
  "Full Length Mock Tests",
  "Subject-wise Practice",
  "Detailed Solutions",
  "Performance Analysis",
  "Current Affairs",
  "Hindi & English Support",
];

function Card({ title, subtitle, href }) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07]"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-xl">
        ◆
      </div>

      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{subtitle}</p>

      <div className="mt-6 text-sm font-bold text-cyan-300">
        Explore →
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="leading-none">
            <div className="text-xl font-black tracking-wider">
              LOYAL <span className="text-cyan-400">ACADEMY</span>
            </div>
            <div className="mt-1 text-[9px] font-bold tracking-[.28em] text-slate-500">
              LEARN • PRACTICE • ACHIEVE
            </div>
          </Link>

          <nav className="hidden gap-6 text-sm font-semibold text-slate-300 md:flex">
            <Link href="/courses">Courses</Link>
            <Link href="/test-series">Test Series</Link>
            <Link href="/batches">Batches</Link>
            <Link href="/results">Results</Link>
            <Link href="/free-resources">Free Resources</Link>
          </nav>

          <Link
            href="/login"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold transition hover:bg-blue-500"
          >
            Student Login
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-20 sm:pt-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold text-blue-300">
              INDIA'S COMPETITIVE EXAM PREPARATION PLATFORM
            </div>

            <h1 className="text-5xl font-black leading-[1.05] sm:text-7xl">
              Learn Smart.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-orange-400 bg-clip-text text-transparent">
                Practice Daily.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              UPSC, UPPSC, Uttar Pradesh और Bihar competitive exams के लिए
              mock tests, test series, batches, current affairs और detailed
              performance analysis — एक ही platform पर।
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/test-series"
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3.5 font-black shadow-xl shadow-blue-950/30"
              >
                Explore Test Series →
              </Link>

              <Link
                href="/free-resources"
                className="rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3.5 font-bold"
              >
                Free Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8">
          <div className="text-xs font-bold tracking-[.25em] text-cyan-400">
            EXAM CATEGORIES
          </div>
          <h2 className="mt-2 text-3xl font-black">
            Choose Your Exam
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map((exam) => (
            <Card key={exam.title} {...exam} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-950/60 to-slate-900 p-8 sm:p-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-[.25em] text-orange-400">
              WHY LOYAL ACADEMY
            </div>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Preparation को सिर्फ पढ़ाई नहीं,
              <br />
              <span className="text-cyan-300">एक system बनाइए।</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-slate-200"
              >
                ✓ {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-10">
          <div className="text-xl font-black">
            LOYAL <span className="text-cyan-400">ACADEMY</span>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Learn • Practice • Achieve
          </p>

          <div className="mt-6 text-sm font-bold">
            Developed with <span className="animate-pulse">💓</span>{" "}
            <span className="rainbow">LOYAL JI</span>
          </div>

          <div className="mt-8 text-xs text-slate-600">
            © {new Date().getFullYear()} LOYAL ACADEMY. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        .rainbow {
          animation: rainbow 3s linear infinite;
        }

        @keyframes rainbow {
          0% { color: #60a5fa; }
          25% { color: #22d3ee; }
          50% { color: #a78bfa; }
          75% { color: #fb7185; }
          100% { color: #60a5fa; }
        }
      `}</style>
    </main>
  );
}
