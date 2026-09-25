export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-bold text-blue-600">
            Exam Saathi
          </p>

          <h1 className="mt-2 text-3xl font-black text-slate-900">
            Admin Dashboard
          </h1>

          <p className="mt-3 text-slate-500">
            वेबसाइट के courses, quizzes और students को manage करें।
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <a
              href="/admin/courses"
              className="rounded-2xl bg-blue-50 p-5 font-bold text-blue-700"
            >
              📚 Courses
            </a>

            <a
              href="/admin/quizzes"
              className="rounded-2xl bg-orange-50 p-5 font-bold text-orange-700"
            >
              📝 Quizzes
            </a>

            <a
              href="/admin/students"
              className="rounded-2xl bg-emerald-50 p-5 font-bold text-emerald-700"
            >
              👨‍🎓 Students
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
