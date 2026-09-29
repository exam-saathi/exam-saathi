import Link from "next/link";

export default function Page() {
  const items = ['GS Paper I mock tests', 'CSAT practice tests', 'Subject-wise tests', 'Full-length simulated tests', 'Current Affairs monthly tests', 'Previous Year Question Practice', 'Detailed Solutions', 'Student Performance Dashboard'];

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
          <h1 className="mt-4 text-4xl font-black sm:text-6xl">UPSC Prelims Test Series 2027</h1>
          <p className="mt-5 text-slate-400">
            Smart practice, detailed solutions और performance-focused preparation.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <div className="text-2xl">✓</div>
              <h2 className="mt-4 font-bold">{item}</h2>
              <p className="mt-2 text-sm text-slate-500">
                Exam-focused practice और detailed preparation.
              </p>
            </div>
          ))}
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
}
