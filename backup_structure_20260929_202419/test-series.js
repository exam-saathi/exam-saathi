export const testSeries = [
  {
    id: "all-government-exams",
    title: "All Government Exams Test Series",
    subtitle: "SSC • UPSC • UPPSC • Banking • Railway • Police • Teaching",
    description: "सभी प्रमुख सरकारी परीक्षाओं की तैयारी के लिए टेस्ट सीरीज़।",
    tests: Array.from({ length: 20 }, (_, i) => ({
      id: `test-${i + 1}`,
      title: `Test ${i + 1}`,
      questions: 50,
      duration: 60,
      marks: 100,
      status: "available",
    })),
  },
];
