"use client";

import { useMemo, useState } from "react";

export default function UPPCSTestClient({
  questions = [],
  solutions = {},
  testTitle = "UPPCS Prelims Test 1",
}) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const normalizedQuestions = useMemo(() => {
    return questions
      .map((item, index) => {
        const q = item?.question
          ? item
          : item?.questions
            ? item.questions
            : null;

        if (!q || !q.question) return null;

        return {
          ...q,
          id: q.id ?? index + 1,
          options: q.options || {},
        };
      })
      .filter(Boolean);
  }, [questions]);

  const total = normalizedQuestions.length;
  const question = normalizedQuestions[current];

  if (!total) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-16 text-white">
        <div className="mx-auto max-w-2xl rounded-3xl border border-red-500/20 bg-white/[0.04] p-8 text-center">
          <h1 className="text-2xl font-black text-red-400">
            Test data उपलब्ध नहीं है
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            UPPCS Test 1 के questions data को check करें।
          </p>
        </div>
      </main>
    );
  }

  const selected = answers[question.id];

  const selectAnswer = (option) => {
    if (submitted) return;

    setAnswers((prev) => ({
      ...prev,
      [question.id]: option,
    }));
  };

  const finishTest = () => {
    setSubmitted(true);
    setCurrent(0);
  };

  const restartTest = () => {
    setAnswers({});
    setSubmitted(false);
    setCurrent(0);
  };

  if (submitted) {
    let correct = 0;

    normalizedQuestions.forEach((q) => {
      const solution = solutions[String(q.id)];
      const correctAnswer =
        solution?.solutionAnswer ||
        solution?.providedAnswer ||
        q.answer;

      if (answers[q.id] === correctAnswer) {
        correct++;
      }
    });

    const attempted = Object.keys(answers).length;
    const wrong = attempted - correct;
    const unanswered = total - attempted;

    return (
      <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:py-12">
        <section className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <div className="text-center">
              <p className="text-xs font-bold tracking-widest text-cyan-400">
                UPPCS PRELIMS • HINDI MEDIUM
              </p>

              <h1 className="mt-3 text-3xl font-black sm:text-4xl">
                {testTitle}
              </h1>

              <p className="mt-2 text-slate-400">
                Test Result & Solution Review
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl bg-emerald-500/10 p-4 text-center">
                <p className="text-xs text-slate-400">सही</p>
                <p className="mt-1 text-2xl font-black text-emerald-400">
                  {correct}
                </p>
              </div>

              <div className="rounded-2xl bg-red-500/10 p-4 text-center">
                <p className="text-xs text-slate-400">गलत</p>
                <p className="mt-1 text-2xl font-black text-red-400">
                  {wrong}
                </p>
              </div>

              <div className="rounded-2xl bg-yellow-500/10 p-4 text-center">
                <p className="text-xs text-slate-400">छोड़े</p>
                <p className="mt-1 text-2xl font-black text-yellow-400">
                  {unanswered}
                </p>
              </div>

              <div className="rounded-2xl bg-cyan-500/10 p-4 text-center">
                <p className="text-xs text-slate-400">कुल</p>
                <p className="mt-1 text-2xl font-black text-cyan-400">
                  {total}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {normalizedQuestions.map((q, index) => {
                const solution = solutions[String(q.id)] || {};
                const correctAnswer =
                  solution.solutionAnswer ||
                  solution.providedAnswer ||
                  q.answer;

                const userAnswer = answers[q.id];
                const isCorrect = userAnswer === correctAnswer;

                return (
                  <article
                    key={q.id}
                    className={`rounded-2xl border p-5 ${
                      isCorrect
                        ? "border-emerald-400/20 bg-emerald-400/[0.04]"
                        : "border-red-400/20 bg-red-400/[0.04]"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-black text-cyan-400">
                        प्रश्न {index + 1}
                      </span>

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          isCorrect
                            ? "bg-emerald-400/10 text-emerald-300"
                            : "bg-red-400/10 text-red-300"
                        }`}
                      >
                        {isCorrect ? "सही" : "गलत"}
                      </span>
                    </div>

                    <h2 className="mt-3 font-bold leading-7">
                      {q.question}
                    </h2>

                    <div className="mt-4 grid gap-2">
                      {Object.entries(q.options || {}).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className={`rounded-xl border p-3 text-sm ${
                              key === correctAnswer
                                ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                                : key === userAnswer
                                  ? "border-red-400/30 bg-red-400/10 text-red-200"
                                  : "border-white/10 bg-white/[0.02] text-slate-300"
                            }`}
                          >
                            <b>{key}.</b> {value}
                          </div>
                        )
                      )}
                    </div>

                    <div className="mt-4 rounded-xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4">
                      <p className="text-xs font-black text-cyan-300">
                        समाधान
                      </p>

                      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-300">
                        {solution.solution || "समाधान उपलब्ध नहीं है।"}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            <button
              onClick={restartTest}
              className="mt-8 w-full rounded-2xl bg-cyan-500 px-5 py-4 font-black text-slate-950 transition hover:bg-cyan-400"
            >
              Test दोबारा दें
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:py-12">
      <section className="mx-auto max-w-4xl">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-black text-cyan-400">
              UPPCS PRELIMS • HINDI MEDIUM
            </p>
            <h1 className="mt-1 text-xl font-black">{testTitle}</h1>
          </div>

          <div className="rounded-xl bg-white/[0.05] px-4 py-2 text-sm font-bold">
            {current + 1} / {total}
          </div>
        </div>

        <div className="mb-5 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500"
            style={{
              width: `${((current + 1) / total) * 100}%`,
            }}
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-8">
          <div className="text-xs font-black text-cyan-400">
            प्रश्न {current + 1}
          </div>

          <h2 className="mt-4 text-lg font-bold leading-8 sm:text-xl">
            {question.question}
          </h2>

          <div className="mt-6 grid gap-3">
            {Object.entries(question.options || {}).map(
              ([key, value]) => (
                <button
                  key={key}
                  onClick={() => selectAnswer(key)}
                  className={`w-full rounded-2xl border p-4 text-left transition ${
                    selected === key
                      ? "border-cyan-400 bg-cyan-400/10 text-cyan-200"
                      : "border-white/10 bg-white/[0.02] hover:border-cyan-400/40"
                  }`}
                >
                  <span className="mr-3 font-black text-cyan-400">
                    {key}.
                  </span>
                  {value}
                </button>
              )
            )}
          </div>

          <div className="mt-8 flex gap-3">
            <button
              disabled={current === 0}
              onClick={() => setCurrent((v) => v - 1)}
              className="rounded-2xl border border-white/10 px-5 py-3 font-bold disabled:opacity-30"
            >
              पिछला
            </button>

            {current === total - 1 ? (
              <button
                onClick={finishTest}
                className="flex-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-black"
              >
                Test Submit करें
              </button>
            ) : (
              <button
                onClick={() => setCurrent((v) => v + 1)}
                className="flex-1 rounded-2xl bg-cyan-500 px-5 py-3 font-black text-slate-950"
              >
                अगला प्रश्न →
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
