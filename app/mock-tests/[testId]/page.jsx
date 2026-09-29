"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Flag,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";

import testData from "@/data/uppcs_test1.json";

export default function MockTestPage() {
  const params = useParams();
  const router = useRouter();

  const testId = params?.testId;
  const isUPPCS = testId === "uppcs-test-1";

  const questions = useMemo(() => {
    if (!isUPPCS) return [];
    return testData.questions || [];
  }, [isUPPCS]);

  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [marked, setMarked] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(
    (testData.durationMinutes || 120) * 60
  );

  const question = questions[current];

  useEffect(() => {
    if (submitted || !isUPPCS || questions.length === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((time) => {
        if (time <= 1) {
          clearInterval(timer);
          setSubmitted(true);
          return 0;
        }
        return time - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted, isUPPCS, questions.length]);

  if (!isUPPCS) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-16 text-white">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h1 className="text-2xl font-black">Test नहीं मिला</h1>
          <p className="mt-3 text-slate-400">
            यह mock test अभी उपलब्ध नहीं है।
          </p>
          <button
            onClick={() => router.push("/mock-tests")}
            className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-bold"
          >
            Mock Tests पर जाएँ
          </button>
        </div>
      </main>
    );
  }

  if (!question) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <p className="text-xl font-bold">Questions loading...</p>
        </div>
      </main>
    );
  }

  const answeredCount = Object.keys(answers).length;

  const calculateResult = () => {
    let correct = 0;
    let wrong = 0;

    questions.forEach((q) => {
      const selected = answers[q.id];

      if (!selected) return;

      if (selected === q.answer) {
        correct++;
      } else {
        wrong++;
      }
    });

    const negative = wrong * (testData.negativeMarkingValue || 0);
    const score = correct - negative;

    return {
      correct,
      wrong,
      unanswered: questions.length - answeredCount,
      score: Number(score.toFixed(2)),
    };
  };

  const result = submitted ? calculateResult() : null;

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return [
      h > 0 ? String(h).padStart(2, "0") : null,
      String(m).padStart(2, "0"),
      String(s).padStart(2, "0"),
    ]
      .filter(Boolean)
      .join(":");
  };

  const selectAnswer = (option) => {
    if (submitted) return;

    setAnswers((prev) => ({
      ...prev,
      [question.id]: option,
    }));
  };

  const goNext = () => {
    if (current < questions.length - 1) {
      setCurrent((v) => v + 1);
    }
  };

  const goPrevious = () => {
    if (current > 0) {
      setCurrent((v) => v - 1);
    }
  };

  const toggleMark = () => {
    setMarked((prev) => ({
      ...prev,
      [question.id]: !prev[question.id],
    }));
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl sm:p-10">
            <div className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
                <Trophy className="h-10 w-10 text-emerald-400" />
              </div>

              <p className="mt-5 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
                Test Completed
              </p>

              <h1 className="mt-2 text-3xl font-black sm:text-4xl">
                UPPCS Test 1 Result
              </h1>

              <p className="mt-2 text-slate-400">
                भारतीय राजव्यवस्था • Hindi Medium
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              <ResultBox
                title="Score"
                value={`${result.score}`}
                icon={Trophy}
              />
              <ResultBox
                title="Correct"
                value={result.correct}
                icon={CheckCircle2}
              />
              <ResultBox
                title="Wrong"
                value={result.wrong}
                icon={XCircle}
              />
              <ResultBox
                title="Unanswered"
                value={result.unanswered}
                icon={Clock3}
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {
                  setAnswers({});
                  setMarked({});
                  setCurrent(0);
                  setSubmitted(false);
                  setTimeLeft((testData.durationMinutes || 120) * 60);
                }}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-4 font-black"
              >
                <RotateCcw className="h-5 w-5" />
                फिर से टेस्ट दें
              </button>

              <button
                onClick={() => router.push("/mock-tests")}
                className="flex flex-1 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-bold"
              >
                सभी Mock Tests
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
            <h2 className="text-xl font-black">Solutions & Answer Review</h2>

            <div className="mt-5 space-y-4">
              {questions.map((q, index) => {
                const selected = answers[q.id];
                const isCorrect = selected === q.answer;

                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="flex gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-black text-blue-300">
                        {index + 1}
                      </span>

                      <div className="min-w-0 flex-1">
                        <p className="font-semibold leading-7 text-slate-200">
                          {q.question}
                        </p>

                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          {Object.entries(q.options || {}).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className={`rounded-xl border p-3 text-sm ${
                                  key === q.answer
                                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                                    : key === selected
                                      ? "border-red-500/40 bg-red-500/10 text-red-300"
                                      : "border-white/5 bg-white/[0.02] text-slate-400"
                                }`}
                              >
                                <b>{key}.</b> {value}
                              </div>
                            )
                          )}
                        </div>

                        <div className="mt-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                          <p className="text-xs font-black uppercase tracking-wider text-cyan-400">
                            Solution
                          </p>
                          <p className="mt-2 text-sm leading-7 text-slate-300">
                            {q.solution || "Solution उपलब्ध नहीं है।"}
                          </p>
                        </div>

                        <p className="mt-3 text-sm">
                          <span className="font-bold text-emerald-400">
                            सही उत्तर: {q.answer}
                          </span>
                          {" • "}
                          {selected ? (
                            <span
                              className={
                                isCorrect
                                  ? "text-emerald-400"
                                  : "text-red-400"
                              }
                            >
                              आपका उत्तर: {selected}
                            </span>
                          ) : (
                            <span className="text-slate-500">
                              आपने उत्तर नहीं दिया
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-3 py-4 text-white sm:px-5 sm:py-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              UPPCS • Hindi Medium
            </p>
            <h1 className="mt-1 text-lg font-black sm:text-xl">
              UPPCS Test 1 — भारतीय राजव्यवस्था
            </h1>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 font-black text-red-300">
            <Clock3 className="h-5 w-5" />
            {formatTime(timeLeft)}
          </div>
        </header>

        <div className="grid gap-5 lg:grid-cols-[1fr_310px]">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-bold text-cyan-400">
                  प्रश्न {current + 1} / {questions.length}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Attempted: {answeredCount}/{questions.length}
                </p>
              </div>

              <button
                onClick={toggleMark}
                className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-bold ${
                  marked[question.id]
                    ? "border-yellow-400/40 bg-yellow-400/10 text-yellow-300"
                    : "border-white/10 bg-white/5 text-slate-400"
                }`}
              >
                <Flag className="h-4 w-4" />
                {marked[question.id] ? "Marked" : "Mark"}
              </button>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-bold leading-8 text-white sm:text-xl">
                {question.question}
              </h2>

              <div className="mt-6 space-y-3">
                {Object.entries(question.options || {}).map(
                  ([key, value]) => {
                    const selected = answers[question.id] === key;

                    return (
                      <button
                        key={key}
                        onClick={() => selectAnswer(key)}
                        className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left transition ${
                          selected
                            ? "border-cyan-400 bg-cyan-400/10 text-white shadow-lg shadow-cyan-950/30"
                            : "border-white/10 bg-white/[0.02] text-slate-300 hover:border-cyan-500/40 hover:bg-white/[0.05]"
                        }`}
                      >
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-black ${
                            selected
                              ? "bg-cyan-400 text-slate-950"
                              : "bg-white/10 text-slate-300"
                          }`}
                        >
                          {key}
                        </span>

                        <span className="pt-1 text-sm font-semibold leading-6">
                          {value}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <button
                onClick={goPrevious}
                disabled={current === 0}
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-bold disabled:cursor-not-allowed disabled:opacity-30"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </button>

              {current === questions.length - 1 ? (
                <button
                  onClick={() => setSubmitted(true)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-cyan-500 px-4 py-3 font-black"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Submit Test
                </button>
              ) : (
                <button
                  onClick={goNext}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 font-black"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </section>

          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-black">Question Palette</h2>
              <span className="text-xs text-slate-500">
                {answeredCount}/{questions.length}
              </span>
            </div>

            <div className="grid grid-cols-6 gap-2 sm:grid-cols-8 lg:grid-cols-6">
              {questions.map((q, index) => {
                const active = current === index;
                const answered = Boolean(answers[q.id]);
                const isMarked = Boolean(marked[q.id]);

                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrent(index)}
                    className={`relative h-9 rounded-lg text-xs font-black ${
                      active
                        ? "bg-cyan-400 text-slate-950"
                        : answered
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-white/5 text-slate-400"
                    }`}
                  >
                    {index + 1}
                    {isMarked && (
                      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-yellow-400" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 border-t border-white/10 pt-4 text-xs text-slate-500">
              <p>🟢 Attempted</p>
              <p className="mt-2">⚪ Not Attempted</p>
              <p className="mt-2">🟡 Marked for Review</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function ResultBox({ title, value, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center">
      <Icon className="mx-auto h-6 w-6 text-cyan-400" />
      <p className="mt-2 text-xs font-bold text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-black">{value}</p>
    </div>
  );
}
