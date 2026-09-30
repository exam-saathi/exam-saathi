export const testSeries = [
  {
    id: "upsc-prelims",
    title: "UPSC Prelims",
    exam: "UPSC",
    category: "Tests",
    status: "LIVE",
    tests: [],
  },

  {
    id: "uppsc-prelims",
    title: "UPPSC / UPPCS Prelims",
    exam: "UPPSC",
    category: "Tests",
    status: "LIVE",
    tests: [
      {
        id: "uppsc-prelims-test-1",
        title: "UPPCS Prelims Test 1",
        questions: 150,
        duration: 120,
        medium: "Hindi",
        negativeMarking: 0.33,
        questionFile: "uppcs_test1.json",
        solutionFile: "uppcs_test1_solution_data.json",
        status: "LIVE",
      },
      {
        id: "uppsc-prelims-test-2",
        title: "UPPCS Prelims Test 2 — Polity",
        questions: 150,
        duration: 120,
        medium: "Hindi",
        negativeMarking: 0.33,
      },
    ],
  },

  {
    id: "up-all-exams",
    title: "UP All Exams",
    exam: "UP",
    category: "Tests",
    status: "LIVE",
    tests: [],
  },

  {
    id: "bihar-all-exams",
    title: "Bihar All Exams",
    exam: "Bihar",
    category: "Tests",
    status: "LIVE",
    tests: [],
  },
];
