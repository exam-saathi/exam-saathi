import Link from "next/link";
import {
  BookOpen,
  Mail,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-10">

        <div className="grid gap-8 md:grid-cols-4">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <BookOpen size={20} />
              </div>

              <div className="text-xl font-extrabold text-white">
                Exam<span className="text-orange-500">Sathi</span>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              हिंदी माध्यम के विद्यार्थियों के लिए प्रतियोगी परीक्षाओं की
              तैयारी, अभ्यास टेस्ट, क्विज़, नोट्स और सीखने की सामग्री।
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">
              त्वरित लिंक
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link href="/quizzes" className="hover:text-white">
                क्विज़
              </Link>

              <Link href="/mock-tests" className="hover:text-white">
                मॉक टेस्ट
              </Link>

              <Link href="/courses" className="hover:text-white">
                कोर्स
              </Link>

              <Link href="/notes" className="hover:text-white">
                नोट्स
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">
              सहायता
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                href="/contact"
                className="flex items-center gap-2 hover:text-white"
              >
                <Mail size={16} />
                संपर्क करें
              </Link>

              <Link
                href="/privacy"
                className="flex items-center gap-2 hover:text-white"
              >
                <ShieldCheck size={16} />
                प्राइवेसी
              </Link>
            </div>
          </div>

        </div>

        {/* Developer Branding */}
        <div className="mt-8 border-t border-slate-800 pt-6 text-center">

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ExamSathi. सभी अधिकार सुरक्षित।
          </p>

          <p className="mt-2 text-sm font-bold tracking-wide">
            <span className="text-slate-500">
              Developer by{" "}
            </span>

            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              LOYAL ji
            </span>

            <span className="ml-1 text-orange-400">
              ✦
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}
