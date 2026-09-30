#!/data/data/com.termux/files/usr/bin/bash

set -e

echo "=============================================="
echo "       LOYAL ACADEMY - BATCH SETUP"
echo "=============================================="

cd ~/exam-sathi

echo "[1/6] Backup..."

BACKUP="backup_before_batches_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP"

[ -d app ] && cp -r app "$BACKUP/app" || true
[ -d data ] && cp -r data "$BACKUP/data" || true

echo "[2/6] Creating folders..."

mkdir -p app/batches
mkdir -p app/batches/[batchId]
mkdir -p app/batches/[batchId]/[sessionId]
mkdir -p data

echo "[3/6] Creating batch data..."

cat > data/batches.js <<'DATAEOF'
export const batches = [

  {
    id: "history-by-khan-sir",
    title: "History by Khan Sir",
    subtitle: "इतिहास की सम्पूर्ण तैयारी",
    teacher: "Khan Sir",
    badge: "HISTORY",
    status: "LIVE",

    description:
      "प्रतियोगी परीक्षाओं के लिए इतिहास की व्यवस्थित और परीक्षा-केंद्रित तैयारी।",

    subjects: [
      "प्राचीन इतिहास",
      "मध्यकालीन इतिहास",
      "आधुनिक इतिहास",
      "कला एवं संस्कृति",
    ],

    sessions: [

      {
        id: "history-lecture-01",
        title: "Lecture 01",
        subtitle: "History Class",
        description: "History by Khan Sir",
        type: "video",
        status: "AVAILABLE",
        youtubeUrl:
          "https://youtu.be/dEm1b7xoWcM?si=m2s5ZfX_IbGA8_Pa",
      },

      {
        id: "history-lecture-02",
        title: "Lecture 02",
        subtitle: "History Class",
        description: "History by Khan Sir",
        type: "video",
        status: "AVAILABLE",
        youtubeUrl:
          "https://youtu.be/PWZyAomujhc?si=4lzb2x9mh4806lrw",
      },

    ],
  },


  {
    id: "upsc-foundation",
    title: "UPSC Foundation Batch",
    subtitle: "UPSC की सम्पूर्ण तैयारी",
    teacher: "LOYAL Academy Faculty",
    badge: "UPSC",
    status: "COMING SOON",

    description:
      "UPSC aspirants के लिए subject-wise classes, notes, practice और test preparation।",

    subjects: [
      "Indian Polity",
      "History",
      "Geography",
      "Economy",
      "Environment",
      "Science & Technology",
      "Current Affairs",
    ],

    sessions: [],
  },


  {
    id: "uppsc-foundation",
    title: "UPPSC Foundation Batch",
    subtitle: "UPPCS परीक्षा-केंद्रित तैयारी",
    teacher: "LOYAL Academy Faculty",
    badge: "UPPSC",
    status: "LIVE",

    description:
      "UPPSC/UPPCS की तैयारी के लिए subject-wise learning और practice structure।",

    subjects: [
      "भारतीय इतिहास",
      "भारतीय राजव्यवस्था",
      "भूगोल",
      "अर्थव्यवस्था",
      "सामान्य विज्ञान",
      "उत्तर प्रदेश विशेष",
      "Current Affairs",
    ],

    sessions: [],
  },


  {
    id: "pw-foundation",
    title: "PW Foundation Batch",
    subtitle: "Competitive Exams Preparation",
    teacher: "LOYAL Academy",
    badge: "FOUNDATION",
    status: "COMING SOON",

    description:
      "Competitive examinations के लिए foundation-level classes और study resources।",

    subjects: [
      "History",
      "Polity",
      "Geography",
      "Economy",
      "Science",
      "Current Affairs",
    ],

    sessions: [],
  },


  {
    id: "current-affairs",
    title: "Current Affairs Batch",
    subtitle: "Daily Current Affairs",
    teacher: "LOYAL Academy Faculty",
    badge: "CURRENT AFFAIRS",
    status: "COMING SOON",

    description:
      "UPSC, UPPSC और अन्य competitive exams के लिए daily और monthly current affairs।",

    subjects: [
      "National",
      "International",
      "Economy",
      "Government Schemes",
      "Awards",
      "Sports",
    ],

    sessions: [],
  },

];
DATAEOF


echo "[4/6] Creating batches page..."

cat > app/batches/page.jsx <<'PAGEEOF'
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  PlayCircle,
  Users,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import Navbar from "@/components/common/Navbar";
import { batches } from "@/data/batches";

export default function BatchesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="relative overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold text-cyan-300">
              <GraduationCap className="h-4 w-4" />
              LOYAL ACADEMY
            </div>

            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
              Learn.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Practice. Succeed.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-slate-400">
              Competitive exams की तैयारी के लिए structured batches,
              video classes, study resources और practice एक ही जगह।
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {batches.map((batch) => (
              <BatchCard key={batch.id} batch={batch} />
            ))}

          </div>
        </div>
      </section>
    </main>
  );
}


function BatchCard({ batch }) {
  const live = batch.status === "LIVE";

  return (
    <Link
      href={`/batches/${batch.id}`}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-200 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.06]"
    >

      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10">
          <BookOpen className="h-6 w-6 text-cyan-300" />
        </div>

        <span
          className={`rounded-full px-3 py-1 text-[10px] font-black ${
            live
              ? "bg-emerald-400/10 text-emerald-300"
              : "bg-orange-400/10 text-orange-300"
          }`}
        >
          {batch.status}
        </span>

      </div>

      <div className="relative mt-6">

        <div className="text-[10px] font-black tracking-[0.2em] text-cyan-400">
          {batch.badge}
        </div>

        <h2 className="mt-2 text-xl font-black">
          {batch.title}
        </h2>

        <p className="mt-2 text-sm font-semibold text-slate-300">
          {batch.subtitle}
        </p>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
          {batch.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {batch.subjects.slice(0, 3).map((subject) => (
            <span
              key={subject}
              className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] text-slate-400"
            >
              {subject}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <PlayCircle className="h-4 w-4 text-cyan-400" />
            {batch.sessions.length} Sessions
          </div>

          <span className="flex items-center gap-1 text-sm font-bold text-cyan-300">
            Open
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </span>

        </div>

      </div>
    </Link>
  );
}
PAGEEOF


echo "[5/6] Creating batch detail page..."

cat > 'app/batches/[batchId]/page.jsx' <<'PAGEEOF'
import Link from "next/link";
import { ArrowLeft, PlayCircle, BookOpen, UserRound } from "lucide-react";

import Navbar from "@/components/common/Navbar";
import { batches } from "@/data/batches";

export function generateStaticParams() {
  return batches.map((batch) => ({
    batchId: batch.id,
  }));
}

export default async function BatchPage({ params }) {
  const { batchId } = await params;

  const batch = batches.find((item) => item.id === batchId);

  if (!batch) {
    return (
      <main className="min-h-screen bg-slate-950 p-8 text-white">
        Batch नहीं मिला।
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">

        <Link
          href="/batches"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All Batches
        </Link>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/30 via-slate-900 to-cyan-900/10 p-6 sm:p-10">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

            <div>
              <div className="text-xs font-black tracking-[0.2em] text-cyan-400">
                {batch.badge}
              </div>

              <h1 className="mt-3 text-3xl font-black sm:text-5xl">
                {batch.title}
              </h1>

              <p className="mt-3 text-lg text-slate-300">
                {batch.subtitle}
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
                {batch.description}
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
              <UserRound className="h-4 w-4 text-cyan-400" />
              {batch.teacher}
            </div>

          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {batch.subjects.map((subject) => (
              <span
                key={subject}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
              >
                {subject}
              </span>
            ))}
          </div>

        </div>


        <div className="mt-10">

          <div className="mb-5">
            <div className="text-xs font-black tracking-[0.2em] text-cyan-400">
              COURSE SESSIONS
            </div>

            <h2 className="mt-2 text-2xl font-black">
              Classes & Lectures
            </h2>
          </div>


          {batch.sessions.length === 0 ? (

            <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.03] p-10 text-center">
              <BookOpen className="mx-auto h-8 w-8 text-slate-600" />

              <h3 className="mt-4 font-bold">
                Sessions जल्द जोड़े जाएंगे
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                इस batch में नई classes और study sessions जल्द उपलब्ध होंगे।
              </p>
            </div>

          ) : (

            <div className="grid gap-4">

              {batch.sessions.map((session, index) => (

                <a
                  key={session.id}
                  href={session.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.06]"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                    <PlayCircle className="h-6 w-6 text-red-400" />
                  </div>

                  <div className="min-w-0 flex-1">

                    <div className="text-[10px] font-bold text-cyan-400">
                      LECTURE {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="mt-1 truncate font-bold">
                      {session.title}
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      {session.description}
                    </p>

                  </div>

                  <span className="hidden text-sm font-bold text-cyan-300 sm:block">
                    Watch
                  </span>

                </a>

              ))}

            </div>

          )}

        </div>

      </section>
    </main>
  );
}
PAGEEOF


echo "[6/6] Adding Batches link to homepage if possible..."

if [ -f app/page.jsx ]; then
  cp app/page.jsx "$BACKUP/homepage_before_batches.jsx"
fi

echo ""
echo "=============================================="
echo "       LOYAL ACADEMY BATCH SETUP DONE"
echo "=============================================="
echo ""
echo "Backup:"
echo "  $BACKUP"
echo ""
echo "Pages created:"
echo "  /batches"
echo "  /batches/history-by-khan-sir"
echo "  /batches/upsc-foundation"
echo "  /batches/uppsc-foundation"
echo "  /batches/pw-foundation"
echo "  /batches/current-affairs"
echo ""
echo "Next:"
echo "  npm run build"
echo ""
echo "If build succeeds:"
echo "  git add ."
echo '  git commit -m "Create professional Loyal Academy batches structure"'
echo "  git push"
echo "  vercel --prod --yes"
echo ""
