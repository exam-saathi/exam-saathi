"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function TestPage() {
  const params = useParams();

  const testNumber =
    params?.testId?.replace("test-", "") || "1";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-orange-500 p-6 text-white shadow-xl">
          <p className="text-sm font-bold tracking-widest">
            EXAMSATHI • TEST SERIES
          </p>

          <h1 className="mt-3 text-3xl font-black">
            Government Exams
          </h1>

          <p className="mt-2 text-white/90">
            All Government Exams Test Series
          </p>
        </div>

        {/* Test Card */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-orange-500 text-2xl font-black text-white">
              {testNumber}
            </div>

            <div>
              <p className="text-sm font-semibold text-orange-600">
                TEST SERIES
              </p>

              <h2 className="text-2xl font-black text-slate-900">
                Test {testNumber}
              </h2>
            </div>
          </div>

          {/* Info */}
          <div className="mt-7 grid grid-cols-3 gap-3">

            <div className="rounded-2xl bg-blue-50 p-4 text-center">
              <p className="text-xl font-black text-blue-700">
                50
              </p>
              <p className="text-xs text-slate-500">
                Questions
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 p-4 text-center">
              <p className="text-xl font-black text-orange-600">
                60
              </p>
              <p className="text-xs text-slate-500">
                Minutes
              </p>
            </div>

            <div className="rounded-2xl bg-green-50 p-4 text-center">
              <p className="text-xl font-black text-green-600">
                100
              </p>
              <p className="text-xs text-slate-500">
                Marks
              </p>
            </div>

          </div>

          {/* Notice */}
          <div className="mt-6 rounded-2xl bg-slate-50 p-4">
            <h3 className="font-bold text-slate-900">
              Test Information
            </h3>

            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>✓ कुल 50 प्रश्न</li>
              <li>✓ समय सीमा 60 मिनट</li>
              <li>✓ सभी प्रश्न बाद में जोड़े जाएंगे</li>
              <li>✓ Result और performance analysis उपलब्ध होगा</li>
            </ul>
          </div>

          {/* Coming Soon */}
          <div className="mt-6 rounded-2xl border border-dashed border-orange-300 bg-orange-50 p-5 text-center">
            <p className="font-bold text-orange-700">
              Questions जल्द जोड़े जाएंगे
            </p>

            <p className="mt-1 text-sm text-orange-600">
              अभी Test {testNumber} का structure तैयार है।
            </p>
          </div>

          {/* Back */}
          <Link
            href="/test-series"
            className="mt-6 block rounded-2xl bg-slate-900 py-4 text-center font-bold text-white transition hover:bg-blue-700"
          >
            ← सभी Tests देखें
          </Link>

        </div>

        {/* Developer */}
        <p className="mt-8 text-center text-sm text-slate-400">
          Developer by{" "}
          <span className="font-black text-blue-600">
            LOYAL JI
          </span>
        </p>

      </div>
    </main>
  );
}
