"use client";

import { useMemo, useState } from "react";

export default function UPPCSTestClient({ questions, solutions, testTitle }) {
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [history] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("uppcs_test_history") || "[]");
    } catch {
      return [];
    }
  });

  const q = questions[current];

  const result = useMemo(() => {
    if (!submitted) return null;

    let correct = 0;
    let wrong = 0;
    let attempted = 0;

    questions.forEach((item) => {
      const selected = answers[item.id];

      if (selected) {
        attempted++;
        if (selected === item.answer) correct++;
        else wrong++;
      }
    });

    const unanswered = questions.length - attempted;
    const score = correct - wrong * 0.33;
    const accuracy = attempted
      ? ((correct / attempted) * 100).toFixed(2)
      : "0.00";

    return {
      correct,
      wrong,
      unanswered,
      attempted,
      score: score.toFixed(2),
      accuracy,
    };
  }, [answers, questions, submitted]);

  function submitTest() {
    if (!confirm("क्या आप Test 1 submit करना चाहते हैं?")) return;

    const record = {
      testId: "uppsc-prelims-test-1",
      title: testTitle,
      date: new Date().toISOString(),
      answers,
    };

    const old =
      JSON.parse(localStorage.getItem("uppcs_test_history") || "[]");

    localStorage.setItem(
      "uppcs_test_history",
      JSON.stringify([...old, record])
    );

    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (submitted && result) {
    return (
      <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm font-bold text-orange-400">UPPSC PRELIMS</p>
            <h1 className="mt-2 text-3xl font-black">{testTitle}</h1>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat title="Score" value={result.score} />
              <Stat title="Correct" value={result.correct} />
              <Stat title="Wrong" value={result.wrong} />
              <Stat title="Accuracy" value={`${result.accuracy}%`} />
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black">Answer & Solution Review</h2>
            <p className="mt-2 text-sm text-slate-400">
              आपके दिए हुए answers और supplied solution data के आधार पर review।
            </p>

            <div className="mt-6 space-y-4">
              {questions.map((item, index) => {
                const selected = answers[item.id] || "—";
                const solution = solutions[item.id];
                const isCorrect = selected === item.answer;

                return (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-black text-orange-400">
                        प्रश्न {index + 1}
                      </span>

                      <span
                        className={
                          isCorrect
                            ? "rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-300"
                            : "rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold text-red-300"
                        }
                      >
                        {isCorrect ? "सही" : "गलत"}
                      </span>
                    </div>

                    <p className="mt-3 font-semibold leading-7">
                      {item.question}
                    </p>

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {Object.entries(item.options).map(([key, value]) => (
                        <div
                          key={key}
                          className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm"
                        >
                          <b className="text-cyan-300">{key}.</b>{" "}
                          {value}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <ReviewBox
                        title="आपका उत्तर"
                        value={selected}
                      />
                      <ReviewBox
                        title="सही उत्तर"
                        value={item.answer}
                      />
                    </div>

                    <div className="mt-4 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-4">
                      <p className="text-xs font-black text-cyan-300">
                        SOLUTION
                      </p>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-300">
                        {solution?.solution || "Solution उपलब्ध नहीं है।"}
                      </p>
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
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-5 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs font-black text-orange-400">
            UPPCS PRELIMS • HINDI MEDIUM
          </p>
          <h1 className="mt-2 text-2xl font-black">{testTitle}</h1>
          <p className="mt-2 text-sm text-slate-400">
            कुल 150 प्रश्न • समय 120 मिनट
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-black text-orange-400">
              प्रश्न {current + 1} / {questions.length}
            </span>
            <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
              Hindi
            </span>
          </div>

          <h2 className="mt-6 text-lg font-bold leading-8">
            {q.question}
          </h2>

          <div className="mt-6 grid gap-3">
            {Object.entries(q.options).map(([key, value]) => (
              <button
                key={key}
                onClick={() =>
                  setAnswers((old) => ({
                    ...old,
                    [q.id]: key,
                  }))
                }
                className={`rounded-2xl border p-4 text-left transition ${
                  answers[q.id] === key
                    ? "border-cyan-400 bg-cyan-400/10"
                    : "border-white/10 bg-white/[0.03] hover:border-cyan-400/40"
                }`}
              >
                <span className="mr-2 font-black text-cyan-300">
                  {key}.
                </span>
                {value}
              </button>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              disabled={current === 0}
              onClick={() => setCurrent((x) => x - 1)}
              className="rounded-xl border border-white/10 px-5 py-3 font-bold disabled:opacity-30"
            >
              ← Previous
            </button>

            {current < questions.length - 1 ? (
              <button
                onClick={() => setCurrent((x) => x + 1)}
                className="rounded-xl bg-orange-500 px-5 py-3 font-black"
              >
                Next →
              </button>
            ) : (
              <button
                onClick={submitTest}
                className="rounded-xl bg-emerald-500 px-5 py-3 font-black"
              >
                Submit Test
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <p className="text-xs text-slate-500">{title}</p>
      <p className="mt-1 text-2xl font-black">{value}</p>
    </div>
  );
}

function ReviewBox({ title, value }) {
  return (
    <div className="rounded-xl border border-white/10 p-3">
      <p className="text-xs text-slate-500">{title}</p>
      <p className="mt-1 text-lg font-black text-cyan-300">{value}</p>
    </div>
  );
}
