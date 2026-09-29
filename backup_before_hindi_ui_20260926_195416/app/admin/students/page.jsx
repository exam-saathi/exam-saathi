export default function AdminStudentsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-bold text-blue-600">
            Exam Saathi Admin
          </p>

          <h1 className="mt-2 text-3xl font-black text-slate-900">
            Student Management
          </h1>

          <p className="mt-3 text-slate-500">
            यहाँ registered students की जानकारी manage की जा सकती है।
          </p>

          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-center">
            <div className="text-4xl">👨‍🎓</div>

            <h2 className="mt-3 font-bold text-slate-800">
              Students
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Student management panel तैयार है।
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
