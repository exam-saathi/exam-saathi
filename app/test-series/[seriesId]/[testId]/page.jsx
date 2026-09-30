import { notFound } from "next/navigation";
import { testSeries } from "@/data/test-series";
import questionsData from "@/data/uppcs_test1.json";
import solutionData from "@/data/uppcs_test1_solution_data.json";
import UPPCSTestClient from "@/components/quiz/UPPCSTestClient";

export function generateStaticParams() {
  return testSeries.flatMap((series) =>
    (series.tests || []).map((test) => ({
      seriesId: series.id,
      testId: test.id,
    }))
  );
}

export default async function TestPage({ params }) {
  const { seriesId, testId } = await params;

  const series = testSeries.find((item) => item.id === seriesId);
  const test = series?.tests?.find((item) => item.id === testId);

  if (!series || !test) notFound();

  if (
    seriesId === "uppsc-prelims" &&
    testId === "uppsc-prelims-test-1"
  ) {
    const questions = Array.isArray(questionsData) ? questionsData : (questionsData.questions || []);
    const solutionMap = Object.fromEntries(
      solutionData.questions.map((item) => [
        String(item.id),
        item,
      ])
    );

    return (
      <UPPCSTestClient
        questions={questions}
        solutions={solutionMap}
        testTitle={test.title}
      />
    );
  }

  notFound();
}
